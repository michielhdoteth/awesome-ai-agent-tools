#!/usr/bin/env node
'use strict';

/**
 * Trusted pull-request validator.
 *
 * Runs from the default branch (pull_request_target) and reads the pull
 * request's data through the GitHub REST API. It NEVER checks out, builds, or
 * executes code from the pull request. JSON is parsed as data only.
 *
 * Outputs:
 *   $RUNNER_TEMP/catalog-validation.json   machine-readable verdict
 *   $GITHUB_OUTPUT                         valid / human_review / counts / summary
 *   $GITHUB_STEP_SUMMARY                   human-readable markdown
 *
 * Exit code 1 when the PR has blocking errors.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  CATALOGS,
  definitionForFolder,
  validateCatalogDocument,
  findDuplicateEntries,
  classifyPath,
  sourceOf,
} = require('./lib/catalogs');
const { request, paginate, repoSlug, getContent } = require('./lib/github');

const BASE = repoSlug();
const PR = process.env.PR_NUMBER || (process.env.GITHUB_EVENT_PATH && readEventPr());
const WORKSPACE = process.env.GITHUB_WORKSPACE || process.cwd();
const MAX_FILES = 300;
const MAX_CATALOG_BYTES = 2 * 1024 * 1024;
const MAX_READMES = 12;

function readEventPr() {
  try {
    const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
    return event.pull_request && String(event.pull_request.number);
  } catch (_) {
    return undefined;
  }
}

function out(key, value) {
  const file = process.env.GITHUB_OUTPUT;
  if (!file) return;
  const v = String(value).replace(/\n/g, ' ');
  fs.appendFileSync(file, `${key}=${v}\n`);
}

function writeSummary(markdown) {
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown);
}

function parseCatalog(text, relPath) {
  try {
    return { data: JSON.parse(text) };
  } catch (e) {
    return { error: `${relPath}: invalid JSON (${e.message})` };
  }
}

/**
 * Regenerate READMEs from the PR's catalog data using the repository's own
 * (trusted) generator, then compare with what the PR actually committed.
 * Restores the workspace afterwards.
 */
function checkReadmeConsistency({ headTexts, changedReadmes, knownCatalogFiles }) {
  const errors = [];
  const warnings = [];
  const generator = path.join(WORKSPACE, '.github', 'scripts', 'generate-readme.js');
  if (!fs.existsSync(generator)) {
    return { errors, warnings, skipped: true };
  }

  const touched = new Set([
    ...knownCatalogFiles,
    'readme.md',
    ...CATALOGS.map((c) => `${c.folder}/README.md`),
  ]);

  const backups = new Map();
  for (const rel of touched) {
    const abs = path.join(WORKSPACE, rel);
    backups.set(rel, fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null);
  }

  try {
    for (const [rel, text] of Object.entries(headTexts)) {
      fs.mkdirSync(path.dirname(path.join(WORKSPACE, rel)), { recursive: true });
      fs.writeFileSync(path.join(WORKSPACE, rel), text, 'utf8');
    }
    execFileSync(process.execPath, [generator], { cwd: WORKSPACE, stdio: 'pipe' });

    for (const rel of changedReadmes) {
      const generatedPath = path.join(WORKSPACE, rel);
      if (!fs.existsSync(generatedPath)) continue;
      const generated = fs.readFileSync(generatedPath, 'utf8');
      const committed = headTexts[rel];
      if (committed !== undefined && committed.trim() !== generated.trim()) {
        errors.push(
          `${rel}: does not match the output of \`.github/scripts/generate-readme.js\`. ` +
          'Do not hand-edit generated READMEs; regenerate them with `node .github/scripts/generate-readme.js` and commit the result.',
        );
      }
    }

    // Informational: catalog changed but generated README not updated in the PR.
    // Maintenance regenerates this on merge, so it must not block.
    for (const def of CATALOGS) {
      const rel = `${def.folder}/README.md`;
      if (changedReadmes.includes(rel) || !knownCatalogFiles.includes(`${def.folder}/catalog.json`)) continue;
      const generatedPath = path.join(WORKSPACE, rel);
      if (!fs.existsSync(generatedPath)) continue;
      const generated = fs.readFileSync(generatedPath, 'utf8');
      const before = backups.get(rel);
      if (before !== null && before !== generated) {
        warnings.push(`${rel} is out of date; the post-merge maintenance job will regenerate it.`);
      }
    }
  } catch (e) {
    warnings.push(`README consistency check skipped: ${e.message}`);
  } finally {
    for (const [rel, original] of backups) {
      const abs = path.join(WORKSPACE, rel);
      if (original === null) {
        if (fs.existsSync(abs)) fs.rmSync(abs, { force: true });
      } else {
        fs.writeFileSync(abs, original, 'utf8');
      }
    }
  }
  return { errors, warnings };
}

async function main() {
  if (!PR) throw new Error('PR_NUMBER is required');
  const number = String(PR);

  const { data: pr } = await request(`/repos/${BASE}/pulls/${number}`);
  const headRepo = pr.head && pr.head.repo ? pr.head.repo.full_name : '';
  const headSha = pr.head && pr.head.sha;
  const baseSha = pr.base && pr.base.sha;

  const errors = [];
  const warnings = [];
  const notes = [];

  const mergeableState = pr.mergeable_state || 'unknown';
  // "behind" and "unknown" mean the head tree is not based on the latest main;
  // entry removals in that state are an artefact of staleness, not intent.
  const branchUpToDate = ['clean', 'unstable', 'blocking', 'has_hooks'].includes(mergeableState);
  if (mergeableState === 'behind') {
    notes.push('Branch is behind `main`; the maintenance job will update it and re-run validation.');
  }

  if (!headRepo) {
    errors.push('The source fork was deleted; the PR cannot be validated or merged. Reopen it from a live fork.');
  }
  if (!headSha || !baseSha) errors.push('Could not resolve the PR base/head commit SHAs.');

  const files = await paginate(`/repos/${BASE}/pulls/${number}/files`, { maxPages: 4, perPage: 100 });
  if (files.length > MAX_FILES) {
    errors.push(`PR changes ${files.length} files (limit ${MAX_FILES}). Split it into focused catalog PRs.`);
  }

  const classified = files.map((f) => ({ path: f.filename, status: f.status, kind: classifyPath(f.filename) }));
  const catalogs = classified.filter((f) => f.kind === 'catalog');
  const readmes = classified.filter((f) => f.kind === 'readme');
  const suspicious = classified.filter((f) => f.kind === 'suspicious');
  const unrelated = classified.filter((f) => f.kind === 'unrelated');

  let humanReview = false;
  let humanReviewReasons = [];

  if (suspicious.length) {
    humanReview = true;
    humanReviewReasons.push(`touches CI/tooling or executable files: ${suspicious.map((f) => f.path).join(', ')}`);
  }
  if (unrelated.length) {
    humanReview = true;
    humanReviewReasons.push(`contains unrelated files: ${unrelated.map((f) => f.path).join(', ')}`);
  }
  if (!catalogs.length && !readmes.length) {
    // A community catalog contribution must change a catalog. Maintainer/
    // infrastructure PRs (same-repo branches or owner/member/collaborator
    // authors) are allowed through, but are permanently excluded from
    // auto-merge by the unsafe-scope rule and still need a human decision.
    const maintainerPr = headRepo === BASE || ['OWNER', 'MEMBER', 'COLLABORATOR'].includes(pr.author_association || '');
    if (maintainerPr) {
      humanReview = true;
      humanReviewReasons.push('infrastructure-only PR with no catalog changes');
      notes.push('No catalog or README files changed. This is an infrastructure PR and requires a maintainer decision; it cannot auto-merge.');
    } else {
      errors.push('No catalog or generated README files were changed. Catalog contributions must edit a `*/catalog.json` file.');
    }
  }

  const headTexts = {};
  const baseTexts = {};
  const knownCatalogFiles = [];
  const added = [];
  const removed = [];

  for (const file of catalogs) {
    const folder = file.path.split('/')[0];
    const def = definitionForFolder(folder);
    if (!def || !headSha || !baseSha || !headRepo) continue;
    knownCatalogFiles.push(file.path);

    if (file.status === 'removed') {
      errors.push(`${file.path}: the catalog file was deleted.`);
      continue;
    }

    const headResult = await getContent(headRepo, file.path, headSha, { maxBytes: MAX_CATALOG_BYTES }).catch((e) => {
      errors.push(`${file.path}: could not read from the PR head (${e.message}).`);
      return { text: null };
    });
    const baseResult = await getContent(BASE, file.path, baseSha, { maxBytes: MAX_CATALOG_BYTES }).catch(() => ({ text: null }));

    if (headResult.tooLarge) {
      errors.push(`${file.path}: file is ${Math.round(headResult.size / 1024)} KiB (limit ${MAX_CATALOG_BYTES / 1024} KiB).`);
      continue;
    }
    if (!headResult.text) {
      errors.push(`${file.path}: could not read the PR version of this file.`);
      continue;
    }
    headTexts[file.path] = headResult.text;
    if (baseResult.text) baseTexts[file.path] = baseResult.text;

    const headParsed = parseCatalog(headResult.text, file.path);
    if (headParsed.error) { errors.push(headParsed.error); continue; }
    const baseParsed = baseResult.text ? parseCatalog(baseResult.text, file.path) : { data: null };

    const verdict = validateCatalogDocument({ data: headParsed.data, def, relPath: file.path });
    errors.push(...verdict.errors);
    warnings.push(...verdict.warnings);

    const headItems = Array.isArray(headParsed.data[def.key]) ? headParsed.data[def.key] : [];
    const baseItems = baseParsed.data && Array.isArray(baseParsed.data[def.key]) ? baseParsed.data[def.key] : [];
    const baseIds = new Set(baseItems.map((i) => i && i.id).filter(Boolean));
    const headIds = new Set(headItems.map((i) => i && i.id).filter(Boolean));

    const newItems = headItems.filter((i) => i && i.id && !baseIds.has(i.id));
    const goneItems = baseItems.filter((i) => i && i.id && !headIds.has(i.id));

    added.push(...newItems.map((i) => {
      const src = sourceOf(i || {});
      return { file: file.path, id: i.id, name: i.name || i.title || '', source: src.slug || '' };
    }));
    removed.push(...goneItems.map((i) => ({ file: file.path, id: i.id, name: i.name || i.title || '' })));

    for (const d of findDuplicateEntries(baseItems, newItems)) {
      errors.push(`${file.path}: duplicate submission - ${d.reason}`);
    }

    if (goneItems.length) {
      // A branch that has not been rebased on the latest main legitimately
      // "lacks" entries merged after its merge base. The maintenance job syncs
      // stale branches, so only treat removals as intentional once the branch
      // is known to be up to date.
      if (branchUpToDate) {
        humanReview = true;
        humanReviewReasons.push(`${file.path} removes ${goneItems.length} existing entr${goneItems.length === 1 ? 'y' : 'ies'} (${goneItems.map((i) => i.id).slice(0, 5).join(', ')})`);
      } else {
        notes.push(`${file.path}: ${goneItems.length} entr${goneItems.length === 1 ? 'y' : 'ies'} absent vs main because the branch is behind; the maintenance job will update it before review.`);
      }
    }
    if (!newItems.length && !goneItems.length) {
      warnings.push(`${file.path}: no entry additions or removals detected (formatting-only change?).`);
    }
  }

  for (const file of readmes) {
    if (!headSha || !headRepo) break;
    if (file.status === 'removed') {
      warnings.push(`${file.path}: generated README was deleted; the maintenance job will recreate it.`);
      continue;
    }
    const headResult = await getContent(headRepo, file.path, headSha, { maxBytes: MAX_CATALOG_BYTES }).catch(() => ({ text: null }));
    if (headResult.text) headTexts[file.path] = headResult.text;
  }

  if (readmes.length > MAX_READMES) {
    errors.push(`PR changes ${readmes.length} README files (limit ${MAX_READMES}).`);
  }

  // Deterministic source legitimacy for newly added GitHub entries.
  // A merged entry must resolve to a live, non-archived repository.
  const slugs = [...new Set(added.map((a) => a.source).filter(Boolean))].slice(0, 15);
  for (const slug of slugs) {
    const { status, data } = await request(`/repos/${slug}`, { allowStatus: [403, 404, 429, 451] });
    if (status === 404 || status === 451) {
      errors.push(`source repository "${slug}" does not exist on GitHub (or is unavailable). Use a live repository URL.`);
      continue;
    }
    if (status === 403 || status === 429) {
      warnings.push(`could not verify "${slug}" (GitHub API rate limit); re-run once the limit resets.`);
      continue;
    }
    if (data && data.archived) {
      errors.push(`source repository "${slug}" is archived; awesome lists exclude archived projects.`);
    }
    if (data && data.disabled) {
      errors.push(`source repository "${slug}" is disabled.`);
    }
  }

  for (const file of suspicious) {
    warnings.push(`${file.path}: changes automation or executable content and requires a maintainer review.`);
  }

  if (Object.keys(headTexts).length && knownCatalogFiles.length) {
    const readmeCheck = checkReadmeConsistency({
      headTexts,
      changedReadmes: readmes.map((f) => f.path),
      knownCatalogFiles,
    });
    errors.push(...readmeCheck.errors);
    warnings.push(...readmeCheck.warnings);
  }

  if (pr.mergeable === false || mergeableState === 'dirty') {
    errors.push('The PR has merge conflicts with the base branch. Rebase or merge `main` into your branch, resolve conflicts, and push.');
  }
  if (pr.draft) notes.push('PR is a draft; auto-merge will not be enabled until it is marked ready for review.');

  // Deduplicate identical messages so the sticky comment stays readable.
  const uniq = (arr) => [...new Set(arr)];
  const finalErrors = uniq(errors);
  const finalWarnings = uniq(warnings);
  const valid = finalErrors.length === 0;

  const report = {
    repository: BASE,
    pr: Number(number),
    title: pr.title,
    author: pr.user ? pr.user.login : '',
    headRepo,
    headSha,
    baseSha,
    draft: Boolean(pr.draft),
    mergeable: pr.mergeable,
    valid,
    humanReview,
    humanReviewReasons: uniq(humanReviewReasons),
    errors: finalErrors,
    warnings: finalWarnings,
    notes,
    files: classified,
    added,
    removed,
  };

  const outFile = path.join(process.env.RUNNER_TEMP || os.tmpdir(), `catalog-validation-${number}.json`);
  fs.writeFileSync(outFile, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  out('valid', valid);
  out('human_review', humanReview);
  out('errors_count', finalErrors.length);
  out('warnings_count', finalWarnings.length);
  out('report_path', outFile);
  out('summary', valid
    ? `Validation passed${humanReview ? ' (maintainer review required)' : ''} for PR #${number}.`
    : `Validation failed for PR #${number}: ${finalErrors.length} error(s).`);

  const lines = [];
  lines.push(`## Catalog validation: ${valid ? 'PASSED' : 'FAILED'}`);
  lines.push('');
  lines.push(`PR #${number} by @${report.author} | files: ${files.length} | added: ${added.length} | removed: ${removed.length}`);
  lines.push('');
  if (finalErrors.length) {
    lines.push(`### Errors (${finalErrors.length})`);
    for (const e of finalErrors) lines.push(`- ${e}`);
    lines.push('');
  }
  if (finalWarnings.length) {
    lines.push(`### Warnings (${finalWarnings.length})`);
    for (const w of finalWarnings) lines.push(`- ${w}`);
    lines.push('');
  }
  if (humanReview) {
    lines.push('### Maintainer review required');
    for (const r of uniq(humanReviewReasons)) lines.push(`- ${r}`);
    lines.push('');
  }
  if (added.length) {
    lines.push('### Added entries');
    for (const a of added) lines.push(`- \`${a.file}\`: ${a.name ? `**${a.name}** ` : ''}(\`${a.id}\`)`);
    lines.push('');
  }
  if (notes.length) {
    lines.push('### Notes');
    for (const n of uniq(notes)) lines.push(`- ${n}`);
    lines.push('');
  }
  writeSummary(lines.join('\n'));

  console.log(lines.join('\n'));

  if (!valid) process.exit(1);
}

main().catch((e) => {
  console.error(`PR validation failed to run: ${e.message}`);
  out('valid', false);
  out('summary', `Validator crashed: ${e.message}`);
  process.exit(2);
});
