'use strict';

/**
 * Pure classification + rendering for the weekly maintainer digest.
 * The CLI (.github/scripts/weekly-digest.js) supplies live data; these
 * functions stay deterministic so they can be unit tested.
 */

const CHECK = 'catalog-validation';

function checkOf(pr) {
  const node = pr.commits && pr.commits.nodes && pr.commits.nodes[0];
  const rollup = node && node.commit && node.commit.statusCheckRollup;
  if (!rollup) return 'MISSING';
  const contexts = (rollup.contexts && rollup.contexts.nodes) || [];
  const hit = contexts.find((c) =>
    (c.__typename === 'CheckRun' && c.name === CHECK) ||
    (c.__typename === 'StatusContext' && c.context === CHECK));
  if (!hit) return 'MISSING';
  if (hit.__typename === 'CheckRun') {
    if (hit.status && hit.status !== 'COMPLETED') return 'PENDING';
    return String(hit.conclusion || 'MISSING').toUpperCase();
  }
  return String(hit.state || 'MISSING').toUpperCase();
}

/**
 * Bucket an open PR:
 *   draft            - draft
 *   needs-author     - conflict, failed check, changes requested
 *   awaiting-approval- green, waiting for a human approval
 *   ready            - approved and green (auto-merge in flight)
 *   in-progress      - check pending/missing or branch behind
 */
function classify(pr) {
  if (pr.isDraft) return 'draft';
  if (pr.mergeable === 'CONFLICTING' || pr.mergeStateStatus === 'DIRTY') return 'needs-author';
  const check = checkOf(pr);
  if (['FAILURE', 'ACTION_REQUIRED', 'TIMED_OUT', 'CANCELLED', 'ERROR'].includes(check)) return 'needs-author';
  if (pr.reviewDecision === 'CHANGES_REQUESTED') return 'needs-author';
  if (pr.mergeStateStatus === 'BEHIND') return 'in-progress';
  if (check !== 'SUCCESS') return 'in-progress';
  if (pr.reviewDecision === 'APPROVED') return 'ready';
  return 'awaiting-approval';
}

const SECTION_ORDER = ['awaiting-approval', 'needs-author', 'in-progress', 'ready', 'draft'];

const SECTION_TITLES = {
  'awaiting-approval': 'Waiting on you: approve these (green and conflict-free)',
  'needs-author': 'Needs author action (conflict, failed check, or changes requested)',
  'in-progress': 'In progress (validation or branch sync running)',
  ready: 'Auto-merge in flight (approved and green)',
  draft: 'Draft PRs',
};

function prLine(pr, base) {
  const n = pr.number;
  const who = pr.author && pr.author.login ? `@${pr.author.login}` : '';
  return `- [#${n} ${pr.title}](${base}/pull/${n}) ${who}`;
}

/**
 * @param {object} input
 * @param {Array}  input.pulls   GraphQL PR nodes
 * @param {Array}  input.failures  [{workflow,url,createdAt}]
 * @param {object} input.maintenancePr  {number,url} | null
 * @param {object} input.brokenLinks    {number,url,state} | null
 * @param {number} input.mergedRecent
 * @param {Date}   input.now
 * @param {string} input.base   repository URL
 * @returns {string} markdown
 */
function buildDigest({ pulls, failures = [], maintenancePr = null, brokenLinks = null, mergedRecent = 0, now = new Date(), base }) {
  const buckets = { 'awaiting-approval': [], 'needs-author': [], 'in-progress': [], ready: [], draft: [] };
  for (const pr of pulls) buckets[classify(pr)].push(pr);
  for (const key of SECTION_ORDER) buckets[key].sort((a, b) => a.number - b.number);

  const counts = Object.fromEntries(SECTION_ORDER.map((k) => [k, buckets[k].length]));
  const lines = [];
  lines.push('<!-- weekly-digest -->');
  lines.push(`# Weekly maintainer digest`);
  lines.push('');
  lines.push(`_Generated ${now.toISOString().replace('T', ' ').replace('.000Z', ' UTC')}._`);
  lines.push('');
  lines.push(`Open PRs: **${pulls.length}** | merged in the last 7 days: **${mergedRecent}** | automation failures: **${failures.length}**`);
  lines.push('');

  const awaiting = buckets['awaiting-approval'];
  lines.push(`## ${SECTION_TITLES['awaiting-approval']} (${awaiting.length})`);
  if (!awaiting.length) lines.push('_None._');
  else for (const pr of awaiting) lines.push(prLine(pr, base));
  lines.push('');

  const needs = buckets['needs-author'];
  lines.push(`## ${SECTION_TITLES['needs-author']} (${needs.length})`);
  if (!needs.length) lines.push('_None._');
  else for (const pr of needs) lines.push(prLine(pr, base));
  lines.push('');

  lines.push(`## ${SECTION_TITLES['in-progress']} (${buckets['in-progress'].length})`);
  if (!buckets['in-progress'].length) lines.push('_None._');
  else for (const pr of buckets['in-progress']) lines.push(prLine(pr, base));
  lines.push('');

  lines.push(`## ${SECTION_TITLES.ready} (${buckets.ready.length})`);
  if (!buckets.ready.length) lines.push('_None._');
  else for (const pr of buckets.ready) lines.push(prLine(pr, base));
  lines.push('');

  if (buckets.draft.length) {
    lines.push(`## ${SECTION_TITLES.draft} (${buckets.draft.length})`);
    for (const pr of buckets.draft) lines.push(prLine(pr, base));
    lines.push('');
  }

  lines.push(`## Automation health`);
  if (!failures.length) {
    lines.push('- No failures in PR Maintenance, Catalog Maintenance, or Check Links in the last 7 days.');
  } else {
    for (const f of failures) {
      lines.push(`- **${f.workflow}** failed at ${f.createdAt}: [run](${f.url})`);
    }
  }
  lines.push('');

  lines.push('## Other queues');
  lines.push(maintenancePr
    ? `- Maintenance PR: [#${maintenancePr.number}](${maintenancePr.url})`
    : '- Maintenance PR: none open (catalogs and docs are current).');
  if (brokenLinks) {
    lines.push(`- Broken/archived links: [#${brokenLinks.number}](${brokenLinks.url}) (${brokenLinks.state})`);
  } else {
    lines.push('- Broken/archived links: no open tracking issue.');
  }
  lines.push('');

  lines.push('## What to do on this visit');
  lines.push('1. Approve the PRs in the first section; auto-merge finishes them.');
  lines.push('2. If a PR is in "needs author", the contributor has a comment with the exact fix.');
  lines.push('3. If automation failures are listed, open the run link; the alert issue has details.');
  lines.push('4. If conflicts remain and you want them healed now:');
  lines.push('   `GITHUB_TOKEN=$(gh auth token) PRS="<numbers>" node .github/scripts/maintainer-heal-conflicts.js`');
  lines.push('');
  lines.push('_This issue is updated automatically each week; do not edit it._');
  return lines.join('\n');
}

module.exports = { CHECK, checkOf, classify, buildDigest };
