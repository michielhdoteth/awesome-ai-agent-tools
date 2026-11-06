'use strict';

/**
 * Minimal GitHub REST/GraphQL client used by the PR automation scripts.
 *
 * Kept dependency-free (global fetch, Node >= 20). Every call goes through
 * `request()` so rate-limit / error handling stays consistent.
 */

const API = 'https://api.github.com';
const VERSION = '2022-11-28';

function token() {
  const t = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!t) throw new Error('GITHUB_TOKEN is required');
  return t;
}

function repoSlug() {
  const r = process.env.GITHUB_REPOSITORY;
  if (!r || !/^[^/]+\/[^/]+$/.test(r)) throw new Error('GITHUB_REPOSITORY must be owner/repo');
  return r;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Perform a REST request. Returns parsed JSON (or null for 204).
 * Throws on non-2xx unless `allowStatus` contains the status.
 */
async function request(path, { method = 'GET', body, allowStatus = [] } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token()}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': VERSION,
      'Content-Type': 'application/json',
      'User-Agent': 'awesome-ai-agent-tools-pr-automation',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await res.text();
  let data = null;
  if (text) {
    try { data = JSON.parse(text); } catch { data = text; }
  }

  if (!res.ok && !allowStatus.includes(res.status)) {
    const message = data && data.message ? data.message : (typeof data === 'string' ? data : res.statusText);
    const err = new Error(`GitHub API ${res.status} ${method} ${path}: ${message}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return { status: res.status, data };
}

/** Paginate a list endpoint, hard-capped to avoid runaway loops. */
async function paginate(path, { maxPages = 10, perPage = 100 } = {}) {
  const out = [];
  let page = 1;
  for (;;) {
    const sep = path.includes('?') ? '&' : '?';
    const { data } = await request(`${path}${sep}per_page=${perPage}&page=${page}`);
    if (!Array.isArray(data) || data.length === 0) break;
    out.push(...data);
    if (data.length < perPage || page >= maxPages) break;
    page += 1;
  }
  return out;
}

async function graphql(query, variables = {}) {
  const res = await fetch(`${API}/graphql`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token()}`,
      'Content-Type': 'application/json',
      'User-Agent': 'awesome-ai-agent-tools-pr-automation',
    },
    body: JSON.stringify({ query, variables }),
  });
  const text = await res.text();
  const data = JSON.parse(text || '{}');
  if (!res.ok || data.errors) {
    throw new Error(`GitHub GraphQL failed: ${JSON.stringify(data.errors || data).slice(0, 400)}`);
  }
  return data.data;
}

/** Fetch a text file via the Contents API at a specific ref. */
async function getContent(repo, path, ref, { maxBytes = 2 * 1024 * 1024 } = {}) {
  const { status, data } = await request(
    `/repos/${repo}/contents/${encodeURI(path)}?ref=${encodeURIComponent(ref)}`,
    { allowStatus: [404] },
  );
  if (status === 404) return { missing: true, text: null };
  if (!data || typeof data !== 'object') throw new Error(`Unexpected contents response for ${repo}/${path}`);
  if (Array.isArray(data)) throw new Error(`${repo}/${path} is a directory, expected a file`);
  if (data.type !== 'file') return { missing: true, text: null };
  if (typeof data.size === 'number' && data.size > maxBytes) {
    return { tooLarge: true, size: data.size, text: null };
  }
  const text = Buffer.from(data.content || '', data.encoding === 'base64' ? 'base64' : 'utf8').toString('utf8');
  return { text, sha: data.sha, size: data.size };
}

module.exports = { API, request, paginate, graphql, getContent, repoSlug, token, sleep };
