#!/usr/bin/env node
/**
 * Verify that every catalog entry's source link resolves to a live,
 * non-archived GitHub repository.
 *
 * Why this exists: entries are merged by contributors continuously, and a
 * merged link can rot later (repo deleted, renamed, archived). The readme
 * claims every entry resolves to a live repository, so that claim needs to
 * be checked on a schedule rather than trusted.
 *
 * Usage:
 *   node scripts/check-links.js            # check, exit 1 if broken
 *   node scripts/check-links.js --issue    # also open/update a tracking issue
 *
 * Env:
 *   GITHUB_TOKEN   required for API access (provided by Actions)
 *   GITHUB_REPOSITORY  owner/repo, set by Actions
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BATCH = 40;
const ISSUE_LABEL = 'broken-links';
const ISSUE_TITLE = 'Broken or archived catalog links';

const CATALOGS = [
  { folder: 'skills', key: 'skills' },
  { folder: 'mcps', key: 'servers' },
  { folder: 'loops', key: 'loops' },
  { folder: 'subagents', key: 'subagents' },
  { folder: 'hooks', key: 'hooks' },
  { folder: 'plugins', key: 'plugins' },
  { folder: 'prompts', key: 'prompts' },
  { folder: 'tools', key: 'tools' },
];

const GH_URL = /github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/;
const SLUG = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

/** Repo slug for an entry, or null when it has no GitHub source. */
function repoOf(e) {
  for (const f of ['source', 'sourceRepo', 'repo']) {
    const v = e[f];
    if (typeof v === 'string' && SLUG.test(v.trim())) return v.trim();
  }
  for (const f of ['github', 'githubUrl', 'url', 'sourceUrl', 'repository', 'websiteUrl']) {
    const v = e[f];
    if (typeof v === 'string') {
      const m = v.match(GH_URL);
      if (m) return `${m[1]}/${m[2]}`;
    }
  }
  return null;
}

function collect() {
  const entries = [];
  const nonGithub = [];
  for (const { folder, key } of CATALOGS) {
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, folder, 'catalog.json'), 'utf8'));
    for (const e of data[key] || []) {
      const repo = repoOf(e);
      const id = e.id || e.name || '';
      if (repo) entries.push({ folder, id, repo });
      else nonGithub.push({ folder, id });
    }
  }
  return { entries, nonGithub };
}

async function graphql(query, token) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'awesome-ai-agent-tools-link-check',
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GraphQL ${res.status}: ${text.slice(0, 300)}`);
  }
  const json = await res.json();
  // A missing repository comes back as a NOT_FOUND error alongside `data`
  // with that alias set to null. That is the signal we are looking for, not a
  // failure of the check itself, so keep the data and let the caller mark the
  // entry as a dead link. Only bail out when there is no usable data at all.
  if (!json.data) {
    throw new Error(`GraphQL returned no data: ${JSON.stringify(json.errors || {}).slice(0, 300)}`);
  }
  const fatal = (json.errors || []).filter((e) => e.type !== 'NOT_FOUND');
  if (fatal.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(fatal).slice(0, 300)}`);
  }
  return json.data;
}

async function checkRepos(repos, token) {
  const info = new Map();
  for (let i = 0; i < repos.length; i += BATCH) {
    const batch = repos.slice(i, i + BATCH);
    const parts = batch.map((full, j) => {
      const [owner, name] = full.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) ` +
        `{ nameWithOwner stargazerCount isArchived }`;
    });
    const data = await graphql(`query { ${parts.join(' ')} }`, token);
    batch.forEach((full, j) => info.set(full.toLowerCase(), data[`r${j}`]));
    process.stderr.write(`  checked ${Math.min(i + BATCH, repos.length)}/${repos.length}\n`);
  }
  return info;
}

async function api(pathname, token, init = {}) {
  const res = await fetch(`https://api.github.com${pathname}`, {
    ...init,
    headers: {
      Authorization: `bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'awesome-ai-agent-tools-link-check',
      ...(init.headers || {}),
    },
  });
  if (!res.ok) return null;
  return res.json();
}

function buildIssueBody(missing, archived, renamed, stats) {
  const lines = [
    'Automated link check found catalog entries whose source no longer resolves.',
    '',
    `Checked ${stats.checked} linked entries across ${stats.unique} unique repositories.`,
    '',
  ];
  if (missing.length) {
    lines.push(`### Dead links (${missing.length})`, '', 'Repository no longer exists. Remove the entry or update the link.', '');
    for (const r of missing) lines.push(`- \`${r.folder}/${r.id}\` -> ${r.repo}`);
    lines.push('');
  }
  if (archived.length) {
    lines.push(`### Archived repositories (${archived.length})`, '', 'Archived projects are excluded by the awesome guidelines.', '');
    for (const r of archived) lines.push(`- \`${r.folder}/${r.id}\` -> ${r.repo}`);
    lines.push('');
  }
  if (renamed.length) {
    lines.push(`### Renamed repositories (${renamed.length})`, '', 'These redirect, but the stored URL should be updated to the canonical name.', '');
    for (const r of renamed) lines.push(`- \`${r.folder}/${r.id}\` ${r.repo} -> ${r.canonical}`);
    lines.push('');
  }
  lines.push('---', '', '_Generated by `scripts/check-links.js`._');
  return lines.join('\n');
}

async function reportIssue(body, token) {
  const repoSlug = process.env.GITHUB_REPOSITORY;
  if (!repoSlug) {
    console.error('GITHUB_REPOSITORY not set; skipping issue reporting');
    return;
  }
  const existing = await api(
    `/repos/${repoSlug}/issues?state=open&labels=${encodeURIComponent(ISSUE_LABEL)}&per_page=10`,
    token,
  );
  if (Array.isArray(existing) && existing.length) {
    const num = existing[0].number;
    const updated = await api(`/repos/${repoSlug}/issues/${num}`, token, {
      method: 'PATCH',
      body: JSON.stringify({ body }),
    });
    console.log(updated ? `Updated tracking issue #${num}` : `Failed to update issue #${num}`);
    return;
  }
  // make sure the label exists (ignore failure)
  await api(`/repos/${repoSlug}/labels`, token, {
    method: 'POST',
    body: JSON.stringify({ name: ISSUE_LABEL, color: 'd73a4a', description: 'Catalog source link is dead or archived' }),
  });
  const created = await api(`/repos/${repoSlug}/issues`, token, {
    method: 'POST',
    body: JSON.stringify({ title: ISSUE_TITLE, body, labels: [ISSUE_LABEL] }),
  });
  console.log(created ? `Opened tracking issue #${created.number}` : 'Failed to open tracking issue');
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('GITHUB_TOKEN is required');
    process.exit(2);
  }

  const { entries, nonGithub } = collect();
  const repos = [...new Set(entries.map((e) => e.repo))];
  console.log(`Checking ${entries.length} linked entries across ${repos.length} unique repositories...`);

  const info = await checkRepos(repos, token);

  const missing = [];
  const archived = [];
  const renamed = [];
  for (const { folder, id, repo } of entries) {
    const node = info.get(repo.toLowerCase());
    if (!node) {
      missing.push({ folder, id, repo });
      continue;
    }
    if (node.isArchived) {
      archived.push({ folder, id, repo });
      continue;
    }
    if (node.nameWithOwner && node.nameWithOwner.toLowerCase() !== repo.toLowerCase()) {
      renamed.push({ folder, id, repo, canonical: node.nameWithOwner });
    }
  }

  const stats = { checked: entries.length, unique: repos.length, nonGithub: nonGithub.length };
  console.log('');
  console.log(`  checked      : ${stats.checked} linked entries`);
  console.log(`  unique repos : ${stats.unique}`);
  console.log(`  dead links   : ${missing.length}`);
  console.log(`  archived     : ${archived.length}`);
  console.log(`  renamed      : ${renamed.length}`);
  console.log(`  no GitHub src: ${stats.nonGithub} (not checked here)`);

  fs.mkdirSync(path.join(ROOT, 'reports'), { recursive: true });
  fs.writeFileSync(
    path.join(ROOT, 'reports', 'link-check.json'),
    JSON.stringify({ stats, missing, archived, renamed }, null, 2) + '\n',
    'utf8',
  );

  const broken = missing.length + archived.length;
  if (broken > 0) {
    console.log('');
    for (const r of missing) console.log(`  DEAD     ${r.folder}/${r.id} -> ${r.repo}`);
    for (const r of archived) console.log(`  ARCHIVED ${r.folder}/${r.id} -> ${r.repo}`);
  }
  for (const r of renamed) console.log(`  RENAMED  ${r.folder}/${r.id} ${r.repo} -> ${r.canonical}`);

  if (process.argv.includes('--issue') && (broken > 0 || renamed.length > 0)) {
    await reportIssue(buildIssueBody(missing, archived, renamed, stats), token);
  }

  if (broken > 0) {
    console.log(`\nFAIL: ${broken} link(s) no longer resolve.`);
    process.exit(1);
  }
  console.log('\nOK: every linked entry resolves to a live, non-archived repository.');
}

main().catch((err) => {
  console.error(`Link check failed to run: ${err.message}`);
  process.exit(2);
});
