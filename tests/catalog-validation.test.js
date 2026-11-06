'use strict';

/**
 * Regression tests for the catalog validation rules.
 * Run with: node --test tests/
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

const {
  CATALOGS,
  definitionForFolder,
  validateCatalogDocument,
  findDuplicateEntries,
  classifyPath,
  sourceOf,
} = require('../.github/scripts/lib/catalogs');

const ROOT = path.resolve(__dirname, '..');
const skillsDef = definitionForFolder('skills');
const modsDef = definitionForFolder('mods');

function doc(entries, extra = {}) {
  return {
    totalSkills: entries.length,
    categories: [...new Set(entries.map((e) => e.category).filter(Boolean))].map((n) => ({ name: n, count: 1 })),
    skills: entries,
    ...extra,
  };
}

function entry(overrides = {}) {
  return {
    id: 'example-skill',
    name: 'Example Skill',
    description: 'Does a thing.',
    category: 'Development',
    source: 'owner/repo',
    ...overrides,
  };
}

test('a well-formed entry validates', () => {
  const res = validateCatalogDocument({ data: doc([entry()]), def: skillsDef, relPath: 'skills/catalog.json' });
  assert.deepStrictEqual(res.errors, []);
});

test('duplicate ids are an error', () => {
  const res = validateCatalogDocument({
    data: doc([entry(), entry({ name: 'Second', source: 'other/repo' })]),
    def: skillsDef,
    relPath: 'skills/catalog.json',
  });
  assert.ok(res.errors.some((e) => /duplicate id/i.test(e)), res.errors.join('\n'));
});

test('multiple entries from one repository are allowed', () => {
  const res = validateCatalogDocument({
    data: doc([entry({ id: 'a', name: 'A' }), entry({ id: 'b', name: 'B' })]),
    def: skillsDef,
    relPath: 'skills/catalog.json',
  });
  assert.deepStrictEqual(res.errors, []);
});

test('missing name/title is an error', () => {
  const res = validateCatalogDocument({
    data: doc([entry({ name: undefined, title: undefined })]),
    def: skillsDef,
    relPath: 'skills/catalog.json',
  });
  assert.ok(res.errors.some((e) => /"name" or "title"/i.test(e)), res.errors.join('\n'));
});

test('missing description is an error', () => {
  const res = validateCatalogDocument({
    data: doc([entry({ description: '' })]),
    def: skillsDef,
    relPath: 'skills/catalog.json',
  });
  assert.ok(res.errors.some((e) => /description/.test(e)), res.errors.join('\n'));
});

test('missing category is an error', () => {
  const res = validateCatalogDocument({
    data: doc([entry({ category: undefined })]),
    def: skillsDef,
    relPath: 'skills/catalog.json',
  });
  assert.ok(res.errors.some((e) => /category/.test(e)), res.errors.join('\n'));
});

test('a category not declared in the catalog is an error', () => {
  const data = {
    totalSkills: 1,
    categories: [{ name: 'Development', count: 1 }],
    skills: [entry({ category: 'Made Up' })],
  };
  const res = validateCatalogDocument({ data, def: skillsDef, relPath: 'skills/catalog.json' });
  assert.ok(res.errors.some((e) => /not declared/.test(e)), res.errors.join('\n'));
});

test('private / loopback source hosts are rejected', () => {
  for (const url of ['http://127.0.0.1/x', 'http://169.254.169.254/latest', 'http://localhost/x']) {
    const res = validateCatalogDocument({
      data: doc([entry({ source: undefined, url })]),
      def: skillsDef,
      relPath: 'skills/catalog.json',
    });
    assert.ok(res.errors.some((e) => /private|loopback|metadata/i.test(e)), `${url}: ${res.errors.join('; ')}`);
  }
});

test('mods require source, install command, compatibility and license', () => {
  const res = validateCatalogDocument({
    data: {
      totalMods: 1,
      categories: [{ name: 'Development', count: 1 }],
      mods: [{ id: 'm', name: 'M', description: 'd', category: 'Development' }],
    },
    def: modsDef,
    relPath: 'mods/catalog.json',
  });
  const joined = res.errors.join('\n');
  assert.match(joined, /source/);
  assert.match(joined, /installCommand/);
  assert.match(joined, /compatibility/);
  assert.match(joined, /license/);
});

test('count mismatches warn but do not fail', () => {
  const data = doc([entry()]);
  data.totalSkills = 99;
  data.categories = [{ name: 'Development', count: 42 }];
  const res = validateCatalogDocument({ data, def: skillsDef, relPath: 'skills/catalog.json' });
  assert.deepStrictEqual(res.errors, []);
  assert.ok(res.warnings.some((w) => /totalSkills/.test(w)));
  assert.ok(res.warnings.some((w) => /category "Development"/.test(w)));
});

test('findDuplicateEntries catches the same entry resubmitted', () => {
  const base = [entry({ id: 'datacircle', name: 'Datacircle', source: 'waynehamadi/datacircle' })];
  const added = [{ id: 'datacircle-2', name: 'Datacircle', source: 'waynehamadi/datacircle' }];
  const dupes = findDuplicateEntries(base, added);
  assert.strictEqual(dupes.length, 1);
  assert.match(dupes[0].reason, /already exists/);
});

test('findDuplicateEntries allows a new entry from an existing repository', () => {
  const base = [entry({ id: 'a', name: 'Skill A', source: 'owner/repo' })];
  const added = [entry({ id: 'b', name: 'Skill B', source: 'owner/repo' })];
  assert.deepStrictEqual(findDuplicateEntries(base, added), []);
});

test('findDuplicateEntries catches a reused id', () => {
  const base = [entry({ id: 'same-id', name: 'One', source: 'a/b' })];
  const added = [entry({ id: 'same-id', name: 'Two', source: 'c/d' })];
  const dupes = findDuplicateEntries(base, added);
  assert.ok(dupes.some((d) => /already exists/.test(d.reason)));
});

test('sourceOf normalises github URLs and slugs to one key', () => {
  assert.strictEqual(sourceOf({ source: 'owner/repo' }).key, 'owner/repo');
  assert.strictEqual(sourceOf({ github: 'https://github.com/Owner/Repo' }).key, 'owner/repo');
});

test('classifyPath separates catalog, readme, docs and dangerous paths', () => {
  assert.strictEqual(classifyPath('skills/catalog.json'), 'catalog');
  assert.strictEqual(classifyPath('skills/README.md'), 'readme');
  assert.strictEqual(classifyPath('readme.md'), 'readme');
  assert.strictEqual(classifyPath('contributing.md'), 'doc');
  assert.strictEqual(classifyPath('.github/workflows/evil.yml'), 'suspicious');
  assert.strictEqual(classifyPath('hooks/scripts/evil.js'), 'suspicious');
  assert.strictEqual(classifyPath('random.txt'), 'unrelated');
});

test('every catalog currently in the repository validates', () => {
  for (const def of CATALOGS) {
    const file = path.join(ROOT, def.folder, 'catalog.json');
    assert.ok(fs.existsSync(file), `${def.folder}/catalog.json missing`);
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const res = validateCatalogDocument({ data, def, relPath: `${def.folder}/catalog.json` });
    assert.deepStrictEqual(res.errors, [], `${def.folder}: ${res.errors.join('\n')}`);
  }
});
