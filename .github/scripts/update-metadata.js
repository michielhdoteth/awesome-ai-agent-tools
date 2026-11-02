#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const CATALOGS = ['skills', 'mcps', 'loops', 'subagents', 'hooks', 'plugins', 'prompts', 'tools', 'mods'];
const SLUG_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const GH_URL_RE = /github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)/;

function repoSlug(entry) {
  for (const field of ['source', 'sourceRepo', 'repo']) {
    const value = entry[field];
    if (typeof value === 'string' && SLUG_RE.test(value.trim())) return value.trim();
  }
  for (const field of ['github', 'githubUrl', 'url', 'sourceUrl', 'repository', 'websiteUrl']) {
    const value = entry[field];
    if (typeof value === 'string') {
      const match = value.match(GH_URL_RE);
      if (match) return match[1];
    }
  }
  return null;
}

async function fetchStars(owner, repo, token) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  });
  if (!response.ok) {
    if (response.status === 404 || response.status === 410) {
      console.warn(`Skipping unavailable repository ${owner}/${repo} (${response.status})`);
      return null;
    }
    throw new Error(`GitHub API returned ${response.status} for ${owner}/${repo}`);
  }
  const stars = (await response.json()).stargazers_count;
  if (!Number.isInteger(stars) || stars < 0) throw new Error(`Invalid star count returned for ${owner}/${repo}`);
  return stars;
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required');
  let requestCount = 0;
  for (const name of CATALOGS) {
    const filePath = path.join(ROOT, name, 'catalog.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const arrayKey = Object.keys(data).find((key) => Array.isArray(data[key]));
    if (!arrayKey) throw new Error(`${name}/catalog.json has no entry array`);
    let updated = 0;
    let skipped = 0;
    for (const entry of data[arrayKey]) {
      const slug = repoSlug(entry);
      if (!slug) { skipped++; continue; }
      const [owner, repo] = slug.split('/');
      const stars = await fetchStars(owner, repo, token);
      if (stars !== null && stars !== entry.stars) {
        entry.stars = stars;
        updated++;
      }
      requestCount++;
      if (requestCount % 10 === 0) await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    if (updated) fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
    console.log(`${name}: updated ${updated} star counts (${skipped} entries without a GitHub repository)`);
  }
}

main().catch((error) => {
  console.error(`Metadata refresh failed: ${error.message}`);
  process.exit(1);
});
