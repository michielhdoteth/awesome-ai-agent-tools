#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const CATALOGS = [
  { file: 'skills/catalog.json', key: 'skills', totalKey: 'totalSkills' },
  { file: 'mcps/catalog.json', key: 'servers', totalKey: 'totalServers' },
  { file: 'loops/catalog.json', key: 'loops', totalKey: 'totalLoops' },
  { file: 'subagents/catalog.json', key: 'subagents', totalKey: 'totalSubagents' },
  { file: 'hooks/catalog.json', key: 'hooks', totalKey: 'totalHooks', metadataWrapper: 'metadata' },
  { file: 'plugins/catalog.json', key: 'plugins', totalKey: 'totalPlugins' },
  { file: 'prompts/catalog.json', key: 'prompts', totalKey: 'totalPrompts' },
  { file: 'tools/catalog.json', key: 'tools', totalKey: 'totalTools' },
  { file: 'mods/catalog.json', key: 'mods', totalKey: 'totalMods' },
];

const REQUIRED_FIELDS = ['id', 'description'];
const NAME_FIELDS = ['name', 'title']; // loops uses 'title' instead of 'name'
let totalErrors = 0;
let totalWarnings = 0;

for (const catalog of CATALOGS) {
  const filePath = path.join(ROOT, catalog.file);
  const relPath = path.relative(ROOT, filePath);

  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: ${relPath} not found`);
    totalErrors++;
    continue;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`FAIL: ${relPath} - invalid JSON: ${e.message}`);
    totalErrors++;
    continue;
  }

  // Support both flat and metadata-wrapped formats
  const root = catalog.metadataWrapper ? data[catalog.metadataWrapper] || data : data;
  const items = data[catalog.key];

  if (!items || !Array.isArray(items)) {
    console.error(`FAIL: ${relPath} - missing or non-array key "${catalog.key}"`);
    totalErrors++;
    continue;
  }

  if (catalog.key === 'mods') {
    for (const [index, item] of items.entries()) {
      const context = `  - ${item.id || `(entry ${index + 1})`}`;
      if (!item.source || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(item.source)) {
        console.error(`FAIL: ${relPath} ${context}: source must be an owner/repo slug`);
        totalErrors++;
      }
      if (!item.installCommand) {
        console.error(`FAIL: ${relPath} ${context}: installCommand is required for executable mods`);
        totalErrors++;
      }
      if (!item.compatibility) {
        console.error(`FAIL: ${relPath} ${context}: compatibility details are required`);
        totalErrors++;
      }
      if (!item.license) {
        console.error(`FAIL: ${relPath} ${context}: state the license or use "Unknown" pending verification`);
        totalErrors++;
      }
    }
  }

  // Check total count matches
  const claimedTotal = root[catalog.totalKey];
  if (claimedTotal !== undefined && claimedTotal !== items.length) {
    console.warn(`WARN: ${relPath} - ${catalog.totalKey} says ${claimedTotal} but array has ${items.length}`);
    totalWarnings++;
  }

  // Check category counts
  if (root.categories && Array.isArray(root.categories)) {
    const actualCats = {};
    for (const item of items) {
      if (item.category) {
        actualCats[item.category] = (actualCats[item.category] || 0) + 1;
      }
    }
    for (const cat of root.categories) {
      const actual = actualCats[cat.name] || 0;
      if (cat.count !== actual) {
        console.warn(`WARN: ${relPath} - category "${cat.name}" count says ${cat.count} but has ${actual}`);
        totalWarnings++;
      }
    }
  }

  // Check required fields and duplicate IDs
  const ids = new Set();
  const duplicates = [];
  const missingFields = [];

  for (const item of items) {
    for (const field of REQUIRED_FIELDS) {
      if (!item[field]) {
        missingFields.push(`  - ${item.id || '(no id)'}: missing "${field}"`);
      }
    }
    // Check that at least one name field exists
    if (!NAME_FIELDS.some(f => item[f])) {
      missingFields.push(`  - ${item.id || '(no id)'}: missing "name" or "title"`);
    }
    if (item.id) {
      if (ids.has(item.id)) {
        duplicates.push(item.id);
      }
      ids.add(item.id);
    }
  }

  if (missingFields.length > 0) {
    console.error(`FAIL: ${relPath} - missing required fields:\n${missingFields.join('\n')}`);
    totalErrors++;
  }

  if (duplicates.length > 0) {
    console.error(`FAIL: ${relPath} - duplicate IDs: ${duplicates.join(', ')}`);
    totalErrors++;
  }

  if (missingFields.length === 0 && duplicates.length === 0) {
    console.log(`PASS: ${relPath} (${items.length} entries, ${ids.size} unique IDs)`);
  }
}

console.log(`\n--- Summary ---`);
console.log(`Catalogs checked: ${CATALOGS.length}`);
console.log(`Errors: ${totalErrors}`);
console.log(`Warnings: ${totalWarnings}`);

if (totalErrors > 0) {
  process.exit(1);
}
