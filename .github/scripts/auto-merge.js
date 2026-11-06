#!/usr/bin/env node
'use strict';

/**
 * Enable GitHub auto-merge (squash) for a PR that is safe to merge once its
 * required review + checks pass.
 *
 * This script never merges directly and never bypasses a rule. It only asks
 * GitHub to queue the merge. Conditions, all deterministic:
 *   - PR is not a draft
 *   - no merge conflict (mergeable == MERGEABLE)
 *   - reviewDecision == APPROVED
 *   - required check `catalog-validation` is SUCCESS
 *   - every changed file is a catalog/README/doc file (no CI or code changes)
 *   - at least one catalog file changed
 *
 * If the scope is unsafe, any previously enabled auto-merge is disabled.
 * Idempotent: repeated runs are no-ops.
 */

const { graphql } = require('./lib/github');
const { classifyPath } = require('./lib/catalogs');

const REQUIRED_CHECK = 'catalog-validation';

const QUERY = `
query($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) {
    pullRequest(number: $number) {
      id
      number
      isDraft
      mergeable
      mergeStateStatus
      reviewDecision
      autoMergeRequest { mergeMethod enabledAt }
      files(first: 100) { nodes { path } }
      commits(last: 1) {
        nodes {
          commit {
            statusCheckRollup {
              contexts(first: 50) {
                nodes {
                  __typename
                  ... on CheckRun { name conclusion status }
                  ... on StatusContext { context state }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

const ENABLE = `
mutation($input: EnablePullRequestAutoMergeInput!) {
  enablePullRequestAutoMerge(input: $input) {
    pullRequest { autoMergeRequest { mergeMethod enabledAt } }
  }
}`;

const DISABLE = `
mutation($input: DisablePullRequestAutoMergeInput!) {
  disablePullRequestAutoMerge(input: $input) {
    pullRequest { autoMergeRequest { mergeMethod enabledAt } }
  }
}`;

function checkState(pr) {
  const node = pr.commits && pr.commits.nodes && pr.commits.nodes[0];
  const rollup = node && node.commit && node.commit.statusCheckRollup;
  if (!rollup) return 'MISSING';
  const contexts = (rollup.contexts && rollup.contexts.nodes) || [];
  const match = contexts.find((c) =>
    (c.__typename === 'CheckRun' && c.name === REQUIRED_CHECK) ||
    (c.__typename === 'StatusContext' && c.context === REQUIRED_CHECK));
  if (!match) return 'MISSING';
  if (match.__typename === 'CheckRun') {
    if (match.status && match.status !== 'COMPLETED') return 'PENDING';
    return match.conclusion === 'SUCCESS' ? 'SUCCESS' : String(match.conclusion || 'FAILURE');
  }
  return match.state === 'SUCCESS' ? 'SUCCESS' : String(match.state || 'FAILURE');
}

function scope(pr) {
  const files = (pr.files && pr.files.nodes) || [];
  const kinds = files.map((f) => ({ path: f.path, kind: classifyPath(f.path) }));
  const unsafe = kinds.filter((f) => f.kind === 'suspicious' || f.kind === 'unrelated');
  const hasCatalog = kinds.some((f) => f.kind === 'catalog');
  return { files: kinds, unsafe, hasCatalog };
}

const OPEN_QUERY = `
query($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    pullRequests(first: 50, states: OPEN, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes { number }
    }
  }
}`;

async function main() {
  const owner = process.env.REPO_OWNER || (process.env.GITHUB_REPOSITORY || '').split('/')[0];
  const name = process.env.REPO_NAME || (process.env.GITHUB_REPOSITORY || '').split('/')[1];
  if (!owner || !name) throw new Error('REPO_OWNER/REPO_NAME are required');

  let numbers;
  if (process.env.PR_NUMBER) {
    numbers = [Number(process.env.PR_NUMBER)];
  } else {
    // Sweep mode: evaluate every open PR. Bounded to 200 to stay within limits.
    numbers = [];
    let cursor = null;
    for (;;) {
      const data = await graphql(OPEN_QUERY, { owner, name, cursor });
      const page = data.repository.pullRequests;
      numbers.push(...page.nodes.map((n) => n.number));
      if (!page.pageInfo.hasNextPage || numbers.length >= 200) break;
      cursor = page.pageInfo.endCursor;
    }
    console.log(`Sweep mode: ${numbers.length} open PR(s)`);
  }

  let failures = 0;
  for (const number of numbers) {
    try {
      await decide(owner, name, number);
    } catch (e) {
      failures += 1;
      console.error(`PR #${number}: decision failed: ${e.message}`);
    }
  }
  if (failures) console.error(`Sweep finished with ${failures} error(s).`);
}

/**
 * Pure decision: given a GraphQL pull request object, decide whether it may be
 * queued for auto-merge. Exported for regression tests.
 */
function evaluate(pr) {
  const check = checkState(pr);
  const { unsafe, hasCatalog } = scope(pr);
  const reasons = [];
  if (pr.isDraft) reasons.push('draft');
  if (pr.mergeable !== 'MERGEABLE') reasons.push(`mergeable=${pr.mergeable}`);
  if (pr.mergeStateStatus === 'DIRTY') reasons.push('conflict');
  if (pr.mergeStateStatus === 'BEHIND') reasons.push('branch behind base (will be synced)');
  if (pr.reviewDecision !== 'APPROVED') reasons.push(`reviewDecision=${pr.reviewDecision || 'NONE'}`);
  if (check !== 'SUCCESS') reasons.push(`check=${check}`);
  if (!hasCatalog) reasons.push('no catalog file changed');
  if (unsafe.length) reasons.push(`unsafe scope: ${unsafe.map((f) => f.path).join(', ')}`);
  return { check, unsafe, hasCatalog, reasons, eligible: reasons.length === 0 };
}

async function decide(owner, name, number) {
  const data = await graphql(QUERY, { owner, name, number });
  const pr = data.repository.pullRequest;
  if (!pr) { console.log(`PR #${number}: not found, skipping`); return; }

  const { unsafe, reasons } = evaluate(pr);
  const alreadyEnabled = Boolean(pr.autoMergeRequest);

  // Unsafe scope can never auto-merge, and must not leave a stale queue entry.
  if (unsafe.length && alreadyEnabled) {
    await graphql(DISABLE, { input: { pullRequestId: pr.id } });
    console.log(`PR #${number}: disabled auto-merge (unsafe scope: ${unsafe.map((f) => f.path).join(', ')})`);
    return;
  }

  if (reasons.length) {
    console.log(`PR #${number}: auto-merge not enabled -> ${reasons.join('; ')}`);
    return;
  }

  if (alreadyEnabled) {
    console.log(`PR #${number}: auto-merge already enabled (${pr.autoMergeRequest.mergeMethod}); no action`);
    return;
  }

  try {
    await graphql(ENABLE, { input: { pullRequestId: pr.id, mergeMethod: 'SQUASH' } });
    console.log(`PR #${number}: auto-merge enabled (squash)`);
  } catch (e) {
    // "clean status" means the PR needs no queueing; treat as no-op.
    if (/clean status|already/i.test(e.message)) {
      console.log(`PR #${number}: auto-merge not needed (${e.message.slice(0, 120)})`);
      return;
    }
    throw e;
  }
}

module.exports = { evaluate };

if (require.main === module) {
  main().catch((e) => {
    console.error(`Auto-merge decision failed: ${e.message}`);
    process.exit(1);
  });
}
