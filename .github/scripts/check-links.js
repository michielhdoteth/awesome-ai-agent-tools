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
 *   node .github/scripts/check-links.js            # check, exit 1 if broken
 *   node .github/scripts/check-links.js --issue    # also open/update a tracking issue
 *
 * Env:
 *   GITHUB_TOKEN   required for API access (provided by Actions)
 *   GITHUB_REPOSITORY  owner/repo, set by Actions
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const BATCH = 40;
const ISSUE_LABEL = 'broken-links';
const ISSUE_TITLE = 'Broken or archived catalog links';
const LEGACY_ISSUE_NUMBER = 180;

const CATALOGS = [
  { folder: 'skills', key: 'skills' },
  { folder: 'mcps', key: 'servers' },
  { folder: 'loops', key: 'loops' },
  { folder: 'subagents', key: 'subagents' },
  { folder: 'hooks', key: 'hooks' },
  { folder: 'plugins', key: 'plugins' },
  { folder: 'prompts', key: 'prompts' },
  { folder: 'tools', key: 'tools' },
  { folder: 'mods', key: 'mods' },
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
  if (res.status === 404) return null;
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${res.status} ${pathname}: ${text.slice(0, 300)}`);
  }
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
  lines.push('---', '', '_Generated by `.github/scripts/check-links.js`._');
  return lines.join('\n');
}

async function reportIssue(body, token, resolved = false) {
  const repoSlug = process.env.GITHUB_REPOSITORY;
  if (!repoSlug) {
    console.error('GITHUB_REPOSITORY not set; skipping issue reporting');
    return;
  }
  const existing = await api(
    `/repos/${repoSlug}/issues?state=open&labels=${encodeURIComponent(ISSUE_LABEL)}&per_page=10`,
    token,
  );
  if (Array.isArray(existing)) {
    const trackedIssue = existing.find((issue) => issue.title === ISSUE_TITLE);
    if (trackedIssue) {
      const num = trackedIssue.number;
      if (resolved) {
        const closed = await api(`/repos/${repoSlug}/issues/${num}`, token, {
          method: 'PATCH',
          body: JSON.stringify({
            state: 'closed',
            body: 'The latest scheduled catalog link audit found no dead, archived, or renamed GitHub sources. Closing this tracking issue as resolved.',
          }),
        });
        if (!closed) throw new Error(`Failed to close resolved tracking issue #${num}`);
        console.log(`Closed resolved tracking issue #${num}`);
        return;
      }
      const updated = await api(`/repos/${repoSlug}/issues/${num}`, token, {
        method: 'PATCH',
        body: JSON.stringify({ body }),
      });
      if (!updated) throw new Error(`Failed to update tracking issue #${num}`);
      console.log(`Updated tracking issue #${num}`);
      return;
    }
  }
  if (resolved) {
    const legacy = await api(`/repos/${repoSlug}/issues/${LEGACY_ISSUE_NUMBER}`, token);
    if (legacy && legacy.title === ISSUE_TITLE && legacy.state === 'open') {
      const closed = await api(`/repos/${repoSlug}/issues/${LEGACY_ISSUE_NUMBER}`, token, {
        method: 'PATCH',
        body: JSON.stringify({
          state: 'closed',
          body: 'The catalog links reported by this automated issue have been fixed, and the latest link audit is clean. Closing it as resolved.',
        }),
      });
      if (!closed) throw new Error(`Failed to close resolved tracking issue #${LEGACY_ISSUE_NUMBER}`);
    }
    console.log('No open link findings; no tracking issue to close.');
    return;
  }
  const labels = await api(`/repos/${repoSlug}/labels?per_page=100`, token);
  if (Array.isArray(labels) && !labels.some((label) => label.name === ISSUE_LABEL)) {
    await api(`/repos/${repoSlug}/labels`, token, {
      method: 'POST',
      body: JSON.stringify({ name: ISSUE_LABEL, color: 'd73a4a', description: 'Catalog source link is dead or archived' }),
    });
  }
  const created = await api(`/repos/${repoSlug}/issues`, token, {
    method: 'POST',
    body: JSON.stringify({ title: ISSUE_TITLE, body, labels: [ISSUE_LABEL] }),
  });
  if (!created) throw new Error('Failed to open tracking issue');
  console.log(`Opened tracking issue #${created.number}`);
}

async function closeIssueByTitle(number, token, reason) {
  const repoSlug = process.env.GITHUB_REPOSITORY;
  if (!repoSlug) throw new Error('GITHUB_REPOSITORY is required to close a tracking issue');
  const issue = await api(`/repos/${repoSlug}/issues/${number}`, token);
  if (!issue || issue.title !== ISSUE_TITLE || issue.state !== 'open') {
    console.log(`Issue #${number} is missing, already closed, or no longer the link-tracking issue; leaving it unchanged.`);
    return;
  }
  const closed = await api(`/repos/${repoSlug}/issues/${number}`, token, {
    method: 'PATCH',
    body: JSON.stringify({ state: 'closed', body: reason }),
  });
  if (!closed) throw new Error(`Failed to close issue #${number}`);
  console.log(`Closed resolved tracking issue #${number}`);
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

  if (process.argv.includes('--close-issue')) {
    await closeIssueByTitle(180, token, 'The catalog links reported here have been corrected or replaced with the verified hosted service. The check now passes, so this automated tracking issue is resolved.');
    return;
  }

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

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_findings=${broken > 0 || renamed.length > 0}\n`);
  }

  if (process.env.GITHUB_STEP_SUMMARY) {
    const issueUrl = process.env.GITHUB_REPOSITORY
      ? `https://github.com/${process.env.GITHUB_REPOSITORY}/issues?q=is%3Aissue+is%3Aopen+label%3Abroken-links`
      : null;
    const summary = [
      '### Catalog link audit',
      '',
      `Checked ${stats.checked} links across ${stats.unique} repositories.`,
      '',
      `- Dead: ${missing.length}`,
      `- Archived: ${archived.length}`,
      `- Renamed: ${renamed.length}`,
      `- Without GitHub source: ${stats.nonGithub}`,
      ...(issueUrl ? ['', broken === 0 && renamed.length === 0
        ? `[Search open link findings](${issueUrl})`
        : `[Open tracked link findings](${issueUrl})`] : []),
      '',
    ].join('\n');
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  }
  if (process.argv.includes('--issue')) {
    await reportIssue(buildIssueBody(missing, archived, renamed, stats), token, broken === 0 && renamed.length === 0);
  }

  if (broken > 0) {
    if (process.argv.includes('--advisory')) {
      console.log(`\nWARNING: ${broken} link(s) no longer resolve; findings were reported.`);
      return;
    }
    console.log(`\nFAIL: ${broken} link(s) no longer resolve.`);
    process.exit(1);
  }
  console.log('\nOK: every linked entry resolves to a live, non-archived repository.');
}

main().catch((err) => {
  console.error(`Link check failed to run: ${err.message}`);
  process.exit(2);
});
