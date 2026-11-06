#!/usr/bin/env node

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const API = 'https://api.github.com';
const BRANCH = 'automation/catalog-maintenance';
const VALIDATION_WORKFLOW_ID = 'catalog-validation.yml';
const TITLE = 'chore: refresh catalog metadata and generated docs';
const BODY = [
  '## Summary',
  'Refresh catalog star counts and regenerate catalog READMEs from their source data.',
  '',
  'This is one automatically updated maintenance PR. Catalog entries and generated docs receive the same required validation and independent human review as other changes.',
  '',
  '## Validation',
  '- [x] Catalog metadata refreshed from GitHub API',
  '- [x] README files regenerated from catalogs',
].join('\n');

async function request(path, token, init = {}) {
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
  const body = await response.text();
  let data;
  try { data = body ? JSON.parse(body) : null; } catch { data = body; }
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} ${path}: ${data?.message || body || response.statusText}`);
  }
  return data;
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function gitOutput(...args) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY;
  const base = process.env.GITHUB_BASE_REF || 'main';
  if (!token || !repo) throw new Error('GITHUB_TOKEN and GITHUB_REPOSITORY are required');
  if (process.env.GITHUB_ACTIONS !== 'true' || process.env.GITHUB_REF !== `refs/heads/${base}`) {
    throw new Error(`This script may only run in GitHub Actions on refs/heads/${base}`);
  }

  const status = git('status', '--porcelain', '--',
    'skills/catalog.json', 'mcps/catalog.json', 'loops/catalog.json',
    'subagents/catalog.json', 'hooks/catalog.json', 'plugins/catalog.json',
    'prompts/catalog.json', 'tools/catalog.json', 'mods/catalog.json',
    'readme.md', 'skills/README.md', 'mcps/README.md', 'loops/README.md',
    'subagents/README.md', 'hooks/README.md', 'plugins/README.md',
    'prompts/README.md', 'tools/README.md', 'mods/README.md');
  const paths = [
    'skills/catalog.json', 'mcps/catalog.json', 'loops/catalog.json',
    'subagents/catalog.json', 'hooks/catalog.json', 'plugins/catalog.json',
    'prompts/catalog.json', 'tools/catalog.json', 'mods/catalog.json',
    'readme.md', 'skills/README.md', 'mcps/README.md', 'loops/README.md',
    'subagents/README.md', 'hooks/README.md', 'plugins/README.md',
    'prompts/README.md', 'tools/README.md', 'mods/README.md',
  ];
  const patch = gitOutput('diff', '--binary', 'HEAD', '--', ...paths);
  if (!status || !patch) {
    console.log('Catalogs and generated documentation are current; no maintenance PR update needed.');
    return;
  }

  const owner = repo.split('/')[0];
  const branchRef = `heads/${BRANCH}`;
  const ref = await request(`/repos/${repo}/git/ref/${branchRef}`, token).catch((error) => {
    if (String(error.message).includes('GitHub API 404')) return null;
    throw error;
  });
  const currentBase = await request(`/repos/${repo}/git/ref/heads/${base}`, token);
  const baseSha = currentBase.object.sha;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'catalog-maintenance-'));
  const patchPath = path.join(tempDir, 'changes.patch');
  fs.writeFileSync(patchPath, patch);
  try {
    if (ref) git('fetch', 'origin', `refs/${branchRef}:refs/remotes/origin/${BRANCH}`);
    git('reset', '--hard', 'HEAD');
    git('checkout', '-B', BRANCH, baseSha);
    git('apply', '--binary', patchPath);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  git('add', '--', ...paths);
  const staged = git('diff', '--cached', '--name-only');
  if (!staged) {
    const pulls = await request(`/repos/${repo}/pulls?state=open&head=${encodeURIComponent(`${owner}:${BRANCH}`)}&base=${encodeURIComponent(base)}`, token);
    if (pulls.length) {
      await request(`/repos/${repo}/pulls/${pulls[0].number}`, token, {
        method: 'PATCH',
        body: JSON.stringify({ state: 'closed', body: `${BODY}\n\nThe generated result now matches the base branch, so this maintenance PR is closed.` }),
      });
    }
    console.log('No generated metadata or documentation changes remain.');
    return;
  }
  git('config', 'user.name', 'github-actions[bot]');
  git('config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com');
  git('commit', '-m', TITLE);
  git('push', '--force-with-lease', 'origin', `HEAD:refs/heads/${BRANCH}`);

  const pulls = await request(`/repos/${repo}/pulls?state=open&head=${encodeURIComponent(`${owner}:${BRANCH}`)}&base=${encodeURIComponent(base)}`, token);
  let pull = pulls[0];
  if (pull) {
    pull = await request(`/repos/${repo}/pulls/${pull.number}`, token, {
      method: 'PATCH',
      body: JSON.stringify({ title: TITLE, body: BODY, base }),
    });
  } else {
    pull = await request(`/repos/${repo}/pulls`, token, {
      method: 'POST',
      body: JSON.stringify({ title: TITLE, head: BRANCH, base, body: BODY, maintainer_can_modify: true }),
    });
  }
  await request(`/repos/${repo}/actions/workflows/${VALIDATION_WORKFLOW_ID}/dispatches`, token, {
    method: 'POST',
    body: JSON.stringify({ ref: BRANCH }),
  });
  console.log(`Created or updated maintenance PR #${pull.number}: ${pull.html_url}`);
}

main().catch((error) => {
  console.error(`Maintenance PR preparation failed: ${error.message}`);
  process.exit(1);
});
