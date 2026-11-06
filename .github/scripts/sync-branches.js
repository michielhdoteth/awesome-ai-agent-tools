#!/usr/bin/env node
'use strict';

/**
 * Bring stale PR branches up to date, then let validation re-run.
 *
 * Branch protection requires branches to be up to date ("strict"). Without
 * this job every merge leaves the remaining PRs "behind", which looks like a
 * failure to contributors and blocks auto-merge. This job only calls GitHub's
 * update-branch API - it never touches PR code locally.
 *
 * Idempotent and bounded: at most MAX_UPDATES per run, no retry loop.
 */

const { request, graphql, repoSlug, sleep } = require('./lib/github');

const BASE = repoSlug();
const MAX_UPDATES = Number(process.env.MAX_UPDATES || 25);

const QUERY = `
query($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    pullRequests(first: 50, states: OPEN, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        number
        isDraft
        mergeStateStatus
        maintainerCanModify
        headRefName
        baseRefName
        headRepository { nameWithOwner }
      }
    }
  }
}`;

async function allOpenPrs(owner, name) {
  const out = [];
  let cursor = null;
  for (;;) {
    const data = await graphql(QUERY, { owner, name, cursor });
    const page = data.repository.pullRequests;
    out.push(...page.nodes);
    if (!page.pageInfo.hasNextPage || out.length > 500) break;
    cursor = page.pageInfo.endCursor;
  }
  return out;
}

async function sleepMs(ms) { return new Promise((r) => setTimeout(r, ms)); }

/**
 * A branch update does not reliably create a pull_request_target run, so the
 * required check can stay "missing" forever. If no catalog-validation check
 * appears for the new head, force one with a close/reopen (the `reopened`
 * event always triggers the trusted gate).
 */
async function ensureGateRun(prNumber, headSha) {
  for (let i = 0; i < 3; i += 1) {
    const { data } = await request(`/repos/${BASE}/commits/${headSha}/check-runs?per_page=100`);
    const hit = (data.check_runs || []).some((c) => c.name === 'catalog-validation');
    if (hit) return true;
    await sleepMs(10000);
  }
  await request(`/repos/${BASE}/pulls/${prNumber}`, { method: 'PATCH', body: { state: 'closed' }, allowStatus: [422] });
  await sleepMs(2000);
  await request(`/repos/${BASE}/pulls/${prNumber}`, { method: 'PATCH', body: { state: 'open' }, allowStatus: [422] });
  console.log(`PR #${prNumber}: no gate run after sync; reopened to trigger catalog-validation`);
  return false;
}

async function main() {
  const [owner, name] = BASE.split('/');
  const prs = await allOpenPrs(owner, name);

  // GraphQL `mergeStateStatus` reports BLOCKED before BEHIND when a review is
  // also required, so it cannot be used to detect staleness. Use the REST
  // `mergeable_state` field, which reports "behind" for an out-of-date branch.
  const possible = prs.filter((p) =>
    !p.isDraft &&
    p.baseRefName === 'main' &&
    p.headRepository);

  const candidates = [];
  for (const pr of possible) {
    const { data: full } = await request(`/repos/${BASE}/pulls/${pr.number}`);
    if (full.mergeable_state === 'behind') candidates.push({ ...pr, full });
  }

  console.log(`Open PRs: ${prs.length}; behind base: ${candidates.length}`);

  let updated = 0;
  let skipped = 0;
  for (const pr of candidates) {
    if (updated >= MAX_UPDATES) {
      console.log(`Reached MAX_UPDATES=${MAX_UPDATES}; remaining PRs handled next run.`);
      break;
    }
    const headSha = pr.full.head && pr.full.head.sha;
    if (!headSha) { skipped += 1; continue; }

    try {
      await request(`/repos/${BASE}/pulls/${pr.number}/update-branch`, {
        method: 'PUT',
        body: { expected_head_sha: headSha },
      });
      console.log(`PR #${pr.number}: updated branch from base`);
      updated += 1;
      const { data: after } = await request(`/repos/${BASE}/pulls/${pr.number}`);
      const newSha = after.head && after.head.sha;
      if (newSha) await ensureGateRun(pr.number, newSha);
    } catch (e) {
      if (e.status === 422 || e.status === 409) {
        console.log(`PR #${pr.number}: cannot update automatically (${e.message.slice(0, 160)}); needs the author to rebase`);
        skipped += 1;
      } else {
        throw e;
      }
    }
    await sleep(500);
  }

  console.log(`Done. updated=${updated} skipped=${skipped}`);
}

main().catch((e) => {
  console.error(`Branch sync failed: ${e.message}`);
  process.exit(1);
});
