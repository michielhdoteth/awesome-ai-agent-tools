#!/usr/bin/env node
'use strict';

/**
 * Validate every catalog in the repository.
 *
 * This is the local/CI full-repo check. It uses the same rule set as the
 * trusted PR validator (.github/scripts/pr-validate.js) so a contributor can
 * reproduce CI locally with:
 *
 *   node .github/scripts/validate-catalogs.js
 *
 * Exit code 1 when any catalog has errors; warnings never fail the build.
 */

const fs = require('fs');
const path = require('path');
const {
  CATALOGS,
  definitionForFolder,
  validateCatalogDocument,
} = require('./lib/catalogs');

const ROOT = path.resolve(__dirname, '../..');

let totalErrors = 0;
let totalWarnings = 0;

for (const catalog of CATALOGS) {
  const def = definitionForFolder(catalog.folder) || catalog;
  const filePath = path.join(ROOT, catalog.folder, 'catalog.json');
  const relPath = `${catalog.folder}/catalog.json`;

  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: ${relPath} not found`);
    totalErrors += 1;
    continue;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`FAIL: ${relPath} - invalid JSON: ${e.message}`);
    totalErrors += 1;
    continue;
  }

  const { errors, warnings, items, ids } = validateCatalogDocument({ data, def, relPath });

  for (const w of warnings) { console.warn(`WARN: ${w}`); totalWarnings += 1; }
  for (const e of errors) { console.error(`FAIL: ${e}`); totalErrors += 1; }

  if (errors.length === 0) {
    console.log(`PASS: ${relPath} (${items.length} entries, ${ids.size} unique IDs)`);
  }
}

console.log('\n--- Summary ---');
console.log(`Catalogs checked: ${CATALOGS.length}`);
console.log(`Errors: ${totalErrors}`);
console.log(`Warnings: ${totalWarnings}`);

if (totalErrors > 0) {
  console.error('\nCatalog validation failed. Fix the FAIL lines above.');
  process.exit(1);
}
console.log('All catalogs valid.');
