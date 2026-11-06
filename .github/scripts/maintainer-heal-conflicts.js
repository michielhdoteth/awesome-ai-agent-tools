#!/usr/bin/env node
'use strict';

/**
 * Maintainer tool: heal conflicting catalog-only pull requests.
 *
 * Merges `main` into each listed PR branch using a JSON-aware union (entries
 * are keyed by `id`, so both the contributor's entry and entries merged after
 * their fork point are kept), then pushes the merge commit back to the fork.
 *
 * This is intentionally NOT run by GitHub Actions: pushing to another user's
 * fork needs the maintainer's own credentials, and the repository's
 * GITHUB_TOKEN cannot write to forks. Run it locally when the queue has
 * conflicts:
 *
 *   GITHUB_TOKEN=$(gh auth token) PRS="199 190 187" node .github/scripts/maintainer-heal-conflicts.js
 *
 * It only acts on PRs where `maintainer_can_modify` is true and every changed
 * file is a `*​/catalog.json`. It never rewrites non-catalog files and never
 * touches a PR it cannot safely resolve.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { request, repoSlug } = require('./lib/github');
const { classifyPath, definitionForFolder } = require('./lib/catalogs');

const BASE_REPO = repoSlug();
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('GITHUB_TOKEN required'); process.exit(1); }

const sh = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const shStatus = (cmd, args, cwd) => {
  try { return { ok: true, out: sh(cmd, args, cwd) }; }
  catch (e) { return { ok: false, out: `${e.stdout || ''}${e.stderr || ''}` }; }
};

function recompute(doc, def) {
  const items = doc[def.key];
  if (!Array.isArray(items)) return doc;
  const blocks = [doc, doc.metadata].filter((b) => b && typeof b === 'object');
  for (const b of blocks) {
    for (const f of Object.keys(b)) {
      if (/^total/i.test(f) && typeof b[f] === 'number') b[f] = items.length;
    }
  }
  for (const b of blocks) {
    if (!Array.isArray(b.categories)) continue;
    const actual = new Map();
    for (const it of items) if (it && it.category) actual.set(it.category, (actual.get(it.category) || 0) + 1);
    const names = new Set(b.categories.map((c) => c && c.name).filter(Boolean));
    b.categories = b.categories.map((c) => ({ ...c, count: actual.get(c.name) || 0 })).filter((c) => c.count > 0);
    for (const [name, n] of actual) if (!names.has(name)) b.categories.push({ name, count: n });
  }
  return doc;
}

function unionCatalogs(baseText, branchText, relPath) {
  const def = definitionForFolder(relPath.split('/')[0]);
  if (!def) throw new Error(`unknown catalog ${relPath}`);
  const baseDoc = JSON.parse(baseText);
  const branchDoc = JSON.parse(branchText);
  const baseItems = Array.isArray(baseDoc[def.key]) ? baseDoc[def.key] : [];
  const branchItems = Array.isArray(branchDoc[def.key]) ? branchDoc[def.key] : [];
  const branchById = new Map(branchItems.filter((i) => i && i.id).map((i) => [i.id, i]));

  const out = [];
  const seen = new Set();
  for (const item of baseItems) {
    if (item && item.id && branchById.has(item.id)) out.push(branchById.get(item.id));
    else out.push(item);
    if (item && item.id) seen.add(item.id);
  }
  for (const item of branchItems) {
    if (item && item.id && seen.has(item.id)) continue;
    out.push(item);
    if (item && item.id) seen.add(item.id);
  }

  branchDoc[def.key] = out;
  return `${JSON.stringify(recompute(branchDoc, def), null, 2)}\n`;
}

async function main() {
  const prs = (process.env.PRS || '').split(/\s+/).filter(Boolean).map(Number);
  if (!prs.length) { console.error('Set PRS to one or more PR numbers'); process.exit(1); }

  for (const n of prs) {
    const { data: pr } = await request(`/repos/${BASE_REPO}/pulls/${n}`);
    if (!pr.maintainer_can_modify) { console.log(`#${n} SKIP: maintainer cannot modify`); continue; }
    const headRepo = pr.head.repo.full_name;
    const branch = pr.head.ref;
    const files = [];
    for (let page = 1; page <= 3; page += 1) {
      const { data } = await request(`/repos/${BASE_REPO}/pulls/${n}/files?per_page=100&page=${page}`);
      files.push(...data);
      if (data.length < 100) break;
    }
    const unsafe = files.filter((f) => classifyPath(f.filename) !== 'catalog');
    if (unsafe.length) { console.log(`#${n} SKIP: non-catalog files: ${unsafe.map((f) => f.filename).join(', ')}`); continue; }

    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `heal-${n}-`));
    console.log(`#${n} working in ${tmp}`);
    try {
      sh('git', ['clone', '--quiet', '--filter=blob:none', '--no-checkout', `https://github.com/${BASE_REPO}.git`, tmp]);
      sh('git', ['remote', 'add', 'fork', `https://github.com/${headRepo}.git`], tmp);
      sh('git', ['fetch', '--quiet', 'origin', 'main'], tmp);
      sh('git', ['fetch', '--quiet', 'fork', branch], tmp);
      sh('git', ['checkout', '--quiet', '-B', 'heal', 'FETCH_HEAD'], tmp);

      const merge = shStatus('git', ['merge', '--no-commit', '--no-ff', 'origin/main'], tmp);
      const conflicted = shStatus('git', ['diff', '--name-only', '--diff-filter=U'], tmp).out.trim().split('\n').filter(Boolean);
      if (!merge.ok && !conflicted.length) { console.log(`#${n} merge failed: ${merge.out.slice(0, 200)}`); continue; }

      for (const rel of conflicted) {
        if (classifyPath(rel) !== 'catalog') { console.log(`#${n} SKIP: conflict in ${rel}`); throw new Error('non-catalog conflict'); }
        const baseText = sh('git', ['show', `origin/main:${rel}`], tmp);
        const branchText = sh('git', ['show', `FETCH_HEAD:${rel}`], tmp);
        fs.writeFileSync(path.join(tmp, rel), unionCatalogs(baseText, branchText, rel), 'utf8');
        sh('git', ['add', rel], tmp);
        console.log(`#${n} resolved ${rel}`);
      }

      const remaining = shStatus('git', ['diff', '--name-only', '--diff-filter=U'], tmp).out.trim();
      if (remaining) { console.log(`#${n} SKIP: unresolved conflicts remain: ${remaining}`); continue; }

      shStatus('git', ['commit', '-m', `Merge main into ${branch} (resolve catalog conflict)`], tmp);
      if (process.env.DRY) { console.log(`#${n} DRY: merge commit created, not pushed`); continue; }
      const push = shStatus('git', ['push', `https://x-access-token:${TOKEN}@github.com/${headRepo}.git`, `HEAD:${branch}`], tmp);
      if (!push.ok) {
        console.log(`#${n} PUSH FAILED: ${push.out.replace(/x-access-token:[^@]+@/g, 'x-access-token:***@').slice(0, 300)}`);
        continue;
      }
      console.log(`#${n} HEALED and pushed to ${headRepo}:${branch}`);
    } catch (e) {
      console.log(`#${n} ERROR: ${String(e.message).slice(0, 200)}`);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  }
}

main().catch((e) => { console.error('heal failed', e.message); process.exit(1); });
