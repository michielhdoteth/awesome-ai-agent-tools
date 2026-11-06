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

const { request, paginate, graphql, repoSlug, sleep } = require('./lib/github');

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

const AUTO_LABEL = { name: 'needs-author-action', color: 'fbca04', description: 'Maintainers cannot update this branch; the author must rebase' };
const AUTO_MARKER = '<!-- needs-author-rebase -->';

async function ensureLabel(label) {
  const { status } = await request(`/repos/${BASE}/labels/${encodeURIComponent(label.name)}`, { allowStatus: [404] });
  if (status === 404) await request(`/repos/${BASE}/labels`, { method: 'POST', body: label, allowStatus: [422] });
}

/** Label a PR that cannot be synced and leave one actionable comment. */
async function markNeedsAuthor(prNumber) {
  await ensureLabel(AUTO_LABEL);
  await request(`/repos/${BASE}/issues/${prNumber}/labels`, { method: 'POST', body: { labels: [AUTO_LABEL.name] }, allowStatus: [422] });
  const comments = await paginate(`/repos/${BASE}/issues/${prNumber}/comments`, { maxPages: 3, perPage: 100 });
  if (comments.some((c) => (c.body || '').includes(AUTO_MARKER))) return;
  const body = [
    AUTO_MARKER,
    'This branch conflicts with `main` and maintainers cannot update it automatically.',
    '',
    'Please do one of the following, then push:',
    '1. `git fetch upstream && git merge upstream/main` on your branch, resolve the conflict by keeping both catalog entries, and push.',
    '2. Enable **Allow edits by maintainers** on the PR; the next triage run will heal and validate it for you.',
    '',
    'The trusted `catalog-validation` check re-runs automatically after the push or after a maintainer heal.',
  ].join('\n');
  await request(`/repos/${BASE}/issues/${prNumber}/comments`, { method: 'POST', body: { body } });
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
  let stuck = 0;
  for (const pr of possible) {
    const { data: full } = await request(`/repos/${BASE}/pulls/${pr.number}`);
    if (full.mergeable_state === 'behind') candidates.push({ ...pr, full });
    // Conflicting PRs that maintainers cannot edit can never be healed; label
    // and comment so the author knows what to do (idempotent).
    if (full.mergeable_state === 'dirty' && !full.maintainer_can_modify) {
      await markNeedsAuthor(pr.number);
      stuck += 1;
    }
  }

  console.log(`Open PRs: ${prs.length}; behind base: ${candidates.length}; needs author: ${stuck}`);

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
        await markNeedsAuthor(pr.number);
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
