'use strict';

/**
 * Shared, dependency-free catalog schema + validation helpers.
 *
 * This module is the single source of truth for what a valid catalog entry
 * looks like. It is imported by:
 *   - validate-catalogs.js   (local / CI full-repo validation)
 *   - pr-validate.js         (trusted pull_request_target validator)
 * Both callers must produce identical verdicts for the same input.
 */

const SLUG_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const GH_URL_RE = /github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/i;
const ID_RE = /^[a-z0-9][a-z0-9._-]*$/;
const MAX_TEXT = 400;

// Blocking source hosts that must never be accepted as an entry's source.
const BLOCKED_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^0\.0\.0\.0$/,
  /^\[?::1\]?$/,
  /\.local$/i,
  /^metadata\./i,
];

const CATALOGS = [
  { folder: 'skills',    key: 'skills',    totalKey: 'totalSkills' },
  { folder: 'mcps',      key: 'servers',   totalKey: 'totalServers' },
  { folder: 'loops',     key: 'loops',     totalKey: 'totalLoops' },
  { folder: 'subagents', key: 'subagents', totalKey: 'totalSubagents' },
  { folder: 'hooks',     key: 'hooks',     totalKey: 'totalHooks', metadataWrapper: 'metadata' },
  { folder: 'plugins',   key: 'plugins',   totalKey: 'totalPlugins' },
  { folder: 'prompts',   key: 'prompts',   totalKey: 'totalPrompts' },
  { folder: 'tools',     key: 'tools',     totalKey: 'totalTools' },
  { folder: 'mods',      key: 'mods',      totalKey: 'totalMods' },
];

const REQUIRED_FIELDS = ['id', 'description'];
const NAME_FIELDS = ['name', 'title'];

const ALLOWED_CATALOG_PATH = /^(skills|mcps|loops|subagents|hooks|plugins|prompts|tools|mods)\/catalog\.json$/;
const ALLOWED_README_PATH = /^(readme\.md|(skills|mcps|loops|subagents|hooks|plugins|prompts|tools|mods)\/README\.md)$/;
const ALLOWED_DOC_PATH = /^(contributing\.md|AGENTS\.md|SKILL\.md)$/;

/** Catalog definition for a folder, or undefined. */
function definitionForFolder(folder) {
  return CATALOGS.find((c) => c.folder === folder);
}

/** Root object that carries totals/categories (hooks nests them under metadata). */
function metadataRoot(data, def) {
  return (def && def.metadataWrapper && data[def.metadataWrapper]) || data;
}

function isBlockedHost(hostname) {
  return BLOCKED_HOST_PATTERNS.some((re) => re.test(hostname));
}

/**
 * Normalise the source of a catalog entry.
 * Returns { slug, url, key } where `key` is the dedupe key (github slug
 * lowercased, or the normalised URL host+path).
 */
function sourceOf(entry) {
  for (const field of ['source', 'sourceRepo', 'repo']) {
    const value = entry[field];
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (SLUG_RE.test(trimmed)) return { slug: trimmed, url: `https://github.com/${trimmed}`, key: trimmed.toLowerCase() };
      const m = trimmed.match(GH_URL_RE);
      if (m) {
        const slug = `${m[1]}/${m[2]}`;
        return { slug, url: `https://github.com/${slug}`, key: slug.toLowerCase() };
      }
    }
  }
  for (const field of ['github', 'githubUrl', 'url', 'sourceUrl', 'repository', 'websiteUrl']) {
    const value = entry[field];
    if (typeof value === 'string') {
      const m = value.match(GH_URL_RE);
      if (m) {
        const slug = `${m[1]}/${m[2]}`;
        return { slug, url: `https://github.com/${slug}`, key: slug.toLowerCase() };
      }
    }
  }
  // Non-GitHub URL (hosted service / registry). Only http(s) counts.
  for (const field of ['url', 'websiteUrl', 'github', 'githubUrl', 'sourceUrl', 'repository', 'source']) {
    const value = entry[field];
    if (typeof value === 'string' && /^https?:\/\//i.test(value.trim())) {
      try {
        const u = new URL(value.trim());
        return { slug: '', url: u.toString(), key: `${u.hostname}${u.pathname}`.toLowerCase() };
      } catch (_) { /* fall through */ }
    }
  }
  return { slug: '', url: '', key: '' };
}

/** Validate a single entry's scalar fields. Returns {errors, warnings}. */
function validateEntry(entry, index, def, seen) {
  const errors = [];
  const warnings = [];
  const label = (entry && entry.id) ? `"${entry.id}"` : `entry #${index + 1} (no id)`;

  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    errors.push(`${label}: must be a JSON object`);
    return { errors, warnings };
  }

  for (const field of REQUIRED_FIELDS) {
    if (typeof entry[field] !== 'string' || !entry[field].trim()) {
      errors.push(`${label}: missing required text field "${field}"`);
    }
  }
  if (!NAME_FIELDS.some((f) => typeof entry[f] === 'string' && entry[f].trim())) {
    errors.push(`${label}: must have a non-empty "name" or "title"`);
  }

  if (typeof entry.id === 'string') {
    if (!ID_RE.test(entry.id)) {
      warnings.push(`${label}: id "${entry.id}" is not lowercase kebab-case`);
    }
    if (seen.ids.has(entry.id)) {
      errors.push(`${label}: duplicate id "${entry.id}"`);
    }
    seen.ids.add(entry.id);
  }

  if (typeof entry.description === 'string' && entry.description.length > MAX_TEXT) {
    warnings.push(`${label}: description is ${entry.description.length} chars (max ${MAX_TEXT} recommended)`);
  }

  // Source legitimacy.
  const src = sourceOf(entry);
  if (src.url) {
    let url;
    try {
      url = new URL(src.url);
    } catch (_) {
      errors.push(`${label}: source is not a valid URL`);
    }
    if (url) {
      if (!/^https?:$/.test(url.protocol)) {
        errors.push(`${label}: source must be http(s), got "${url.protocol}"`);
      }
      if (isBlockedHost(url.hostname)) {
        errors.push(`${label}: source host "${url.hostname}" is private/loopback/metadata and cannot be published`);
      }
      if (url.hostname.toLowerCase() === 'github.com' && !src.slug) {
        errors.push(`${label}: github.com source must point at an owner/repo, got "${src.url}"`);
      }
    }
  }
  // A single repository commonly hosts many entries (e.g. one repo with 13
  // skills), so a repeated source is expected. Only flag it as informational;
  // a *true* duplicate (same id, or same source + same name) is caught by
  // `findDuplicateEntries` below and by the PR validator against the base file.
  if (src.key) {
    seen.sources.set(src.key, (seen.sources.get(src.key) || []).concat(entry.id || label));
  }

  // Category validity.
  if (typeof entry.category !== 'string' || !entry.category.trim()) {
    errors.push(`${label}: missing required "category"`);
  }

  // Mods are executable: require attribution + install + compatibility + license.
  if (def && def.folder === 'mods') {
    if (!src.slug) {
      errors.push(`${label}: mods require source as an owner/repo slug`);
    }
    if (typeof entry.installCommand !== 'string' || !entry.installCommand.trim()) {
      errors.push(`${label}: mods require installCommand`);
    }
    if (typeof entry.compatibility !== 'string' || !entry.compatibility.trim()) {
      errors.push(`${label}: mods require compatibility details`);
    }
    if (typeof entry.license !== 'string' || !entry.license.trim()) {
      errors.push(`${label}: mods require license (use "Unknown" pending verification)`);
    }
  }

  return { errors, warnings };
}

/**
 * Validate a parsed catalog document.
 * @param {object} opts
 * @param {any}    opts.data  Parsed JSON
 * @param {object} opts.def   Catalog definition
 * @param {string} opts.relPath Path for messages
 * @returns {{errors:string[],warnings:string[],items:any[],ids:Set<string>,sources:Map<string,string>}}
 */
function validateCatalogDocument({ data, def, relPath }) {
  const errors = [];
  const warnings = [];

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return { errors: [`${relPath}: top-level JSON must be an object`], warnings, items: [], ids: new Set(), sources: new Map() };
  }

  const items = data[def.key];
  if (!Array.isArray(items)) {
    return { errors: [`${relPath}: missing or non-array key "${def.key}"`], warnings, items: [], ids: new Set(), sources: new Map() };
  }

  const seen = { ids: new Set(), sources: new Map() };
  const declaredCategories = new Set();
  const root = metadataRoot(data, def);
  if (Array.isArray(root.categories)) {
    for (const c of root.categories) {
      if (c && typeof c.name === 'string') declaredCategories.add(c.name);
    }
  }

  items.forEach((entry, i) => {
    const res = validateEntry(entry, i, def, seen);
    errors.push(...res.errors);
    warnings.push(...res.warnings);

    if (entry && typeof entry.category === 'string' && declaredCategories.size > 0 && !declaredCategories.has(entry.category)) {
      errors.push(`"${entry.id || `entry #${i + 1}`}": category "${entry.category}" is not declared in the catalog's categories list`);
    }
  });

  // Totals / per-category counts are cosmetic (maintenance regenerates them),
  // so they warn rather than block.
  if (typeof root[def.totalKey] === 'number' && root[def.totalKey] !== items.length) {
    warnings.push(`${relPath}: ${def.totalKey} says ${root[def.totalKey]} but array has ${items.length}`);
  }
  if (Array.isArray(root.categories)) {
    const actual = new Map();
    for (const entry of items) {
      if (entry && entry.category) actual.set(entry.category, (actual.get(entry.category) || 0) + 1);
    }
    for (const c of root.categories) {
      if (!c || typeof c.name !== 'string') continue;
      const n = actual.get(c.name) || 0;
      if (c.count !== n) warnings.push(`${relPath}: category "${c.name}" count says ${c.count} but has ${n}`);
    }
  }

  return { errors, warnings, items, ids: seen.ids, sources: seen.sources };
}

/** Display name for an entry. */
function nameOf(entry) {
  return String((entry && (entry.title || entry.name || entry.id)) || '').trim();
}

function normaliseName(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

/**
 * Find additions that are true duplicates of an existing entry.
 * A duplicate is: same id, or same source repository AND same normalised name.
 * (Multiple entries from one repository are expected and allowed.)
 *
 * @param {any[]} baseItems entries already on the base branch
 * @param {any[]} addedItems entries introduced by the PR
 * @returns {Array<{id:string,name:string,reason:string}>}
 */
function findDuplicateEntries(baseItems, addedItems) {
  const byId = new Map();
  const bySourceName = new Map();
  for (const item of baseItems) {
    if (item && item.id) byId.set(item.id, item);
    const src = sourceOf(item || {});
    if (src.key) {
      const k = `${src.key}::${normaliseName(nameOf(item))}`;
      bySourceName.set(k, item);
    }
  }

  const dupes = [];
  for (const item of addedItems) {
    if (!item) continue;
    if (item.id && byId.has(item.id)) {
      dupes.push({ id: item.id, name: nameOf(item), reason: `id "${item.id}" already exists on the base branch` });
      continue;
    }
    const src = sourceOf(item);
    if (src.key) {
      const k = `${src.key}::${normaliseName(nameOf(item))}`;
      if (bySourceName.has(k)) {
        dupes.push({
          id: item.id || '',
          name: nameOf(item),
          reason: `an entry named "${nameOf(item)}" from "${src.slug || src.url}" already exists (id "${bySourceName.get(k).id}")`,
        });
      }
    }
  }
  return dupes;
}

/** Classify a changed file path for a catalog contribution PR. */
function classifyPath(path) {
  if (ALLOWED_CATALOG_PATH.test(path)) return 'catalog';
  if (ALLOWED_README_PATH.test(path)) return 'readme';
  if (ALLOWED_DOC_PATH.test(path)) return 'doc';
  if (path.startsWith('.github/')) return 'suspicious';
  if (/\.(js|cjs|mjs|ts|py|sh|ps1|bat|cmd|exe|dll|so|dylib|jar)$/i.test(path)) return 'suspicious';
  return 'unrelated';
}

module.exports = {
  CATALOGS,
  REQUIRED_FIELDS,
  NAME_FIELDS,
  SLUG_RE,
  GH_URL_RE,
  ID_RE,
  definitionForFolder,
  metadataRoot,
  sourceOf,
  isBlockedHost,
  validateEntry,
  validateCatalogDocument,
  findDuplicateEntries,
  nameOf,
  normaliseName,
  classifyPath,
  ALLOWED_CATALOG_PATH,
  ALLOWED_README_PATH,
  ALLOWED_DOC_PATH,
};
