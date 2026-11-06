#!/usr/bin/env node
'use strict';

/**
 * Build and upsert the single weekly maintainer digest issue.
 *
 * Idempotent: locates the open issue by an HTML marker and edits it. Never
 * creates duplicates. Designed to run on a weekly schedule so the owner can
 * check the repository once a week.
 */

const fs = require('fs');
const { request, paginate, graphql, repoSlug } = require('./lib/github');
const { buildDigest } = require('./lib/digest');

const BASE = repoSlug();
const BASE_URL = `https://github.com/${BASE}`;
const TITLE = 'Weekly maintainer digest';
const MARKER = '<!-- weekly-digest -->';
const LABEL = { name: 'maintainer-digest', color: '5319e7', description: 'Automated weekly maintainer digest' };
const CRITICAL_WORKFLOWS = ['PR Maintenance', 'Catalog Maintenance', 'Check Links'];
const WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

const PR_QUERY = `
query($owner: String!, $name: String!, $cursor: String) {
  repository(owner: $owner, name: $name) {
    pullRequests(first: 50, states: OPEN, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        number title isDraft mergeable mergeStateStatus reviewDecision updatedAt
        author { login }
        commits(last: 1) {
          nodes { commit { statusCheckRollup { contexts(first: 30) { nodes {
            __typename
            ... on CheckRun { name conclusion status }
            ... on StatusContext { context state }
          } } } } }
        }
      }
    }
  }
}`;

async function fetchOpenPrs(owner, name) {
  const all = [];
  let cursor = null;
  for (;;) {
    const data = await graphql(PR_QUERY, { owner, name, cursor });
    const page = data.repository.pullRequests;
    all.push(...page.nodes);
    if (!page.pageInfo.hasNextPage || all.length > 300) break;
    cursor = page.pageInfo.endCursor;
  }
  return all;
}

async function fetchCriticalFailures() {
  const since = new Date(Date.now() - WINDOW_MS).toISOString();
  const runs = await paginate(`/repos/${BASE}/actions/runs`, { maxPages: 2, perPage: 100 });
  return runs
    .filter((r) => CRITICAL_WORKFLOWS.includes(r.name) && r.conclusion === 'failure' && r.created_at >= since)
    .map((r) => ({ workflow: r.name, url: r.html_url, createdAt: r.created_at }))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

async function fetchMaintenancePr() {
  const pulls = await paginate(`/repos/${BASE}/pulls?state=open&base=main`, { maxPages: 2 });
  const pr = pulls.find((p) => p.head && p.head.ref === 'automation/catalog-maintenance');
  return pr ? { number: pr.number, url: pr.html_url } : null;
}

async function fetchBrokenLinks() {
  const issues = await paginate(`/repos/${BASE}/issues?state=open&labels=broken-links`, { maxPages: 1 });
  const issue = issues.find((i) => Array.isArray(i.labels));
  if (!issue) return null;
  return { number: issue.number, url: issue.html_url, state: issue.state };
}

async function fetchMergedCount() {
  const since = new Date(Date.now() - WINDOW_MS).toISOString().slice(0, 10);
  const { data } = await request(`/search/issues?q=${encodeURIComponent(`repo:${BASE} is:pr is:merged merged:>=${since}`)}&per_page=1`);
  return data.total_count || 0;
}

async function ensureLabel() {
  const { status } = await request(`/repos/${BASE}/labels/${encodeURIComponent(LABEL.name)}`, { allowStatus: [404] });
  if (status === 404) await request(`/repos/${BASE}/labels`, { method: 'POST', body: LABEL, allowStatus: [422] });
}

async function upsertIssue(body) {
  const issues = await paginate(`/repos/${BASE}/issues?state=open&labels=${encodeURIComponent(LABEL.name)}`, { maxPages: 2 });
  const existing = issues.find((i) => (i.body || '').includes(MARKER) || i.title === TITLE);
  if (existing) {
    await request(`/repos/${BASE}/issues/${existing.number}`, { method: 'PATCH', body: { body, state: 'open' } });
    console.log(`Updated digest issue #${existing.number}`);
    return existing.number;
  }
  await ensureLabel();
  const { data } = await request(`/repos/${BASE}/issues`, { method: 'POST', body: { title: TITLE, body, labels: [LABEL.name] } });
  console.log(`Created digest issue #${data.number}`);
  return data.number;
}

async function main() {
  const [owner, name] = BASE.split('/');
  const [pulls, failures, maintenancePr, brokenLinks, mergedRecent] = await Promise.all([
    fetchOpenPrs(owner, name),
    fetchCriticalFailures(),
    fetchMaintenancePr(),
    fetchBrokenLinks(),
    fetchMergedCount(),
  ]);

  const body = buildDigest({ pulls, failures, maintenancePr, brokenLinks, mergedRecent, now: new Date(), base: BASE_URL });
  const number = await upsertIssue(body);

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `Weekly digest updated: ${BASE_URL}/issues/${number}\n`);
  }
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `issue_number=${number}\n`);
}

main().catch((e) => { console.error(`Weekly digest failed: ${e.message}`); process.exit(1); });
