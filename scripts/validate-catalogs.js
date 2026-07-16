#!/usr/bin/env node

/**
 * validate-catalogs.js
 * 
 * Validates all catalog.json files for:
 * - Valid JSON
 * - Required fields per entry
 * - No duplicate IDs
 * - Category consistency
 * - Star count sanity
 * 
 * Run: node scripts/validate-catalogs.js
 * Exit code 0 = pass, 1 = fail (for CI)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`  ERROR: ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`  WARN: ${msg}`);
  warnings++;
}

function ok(msg) {
  console.log(`  OK: ${msg}`);
}

// Schema: required fields per catalog type
// Note: different catalogs use different field names (name vs title, githubUrl vs github)
const SCHEMAS = {
  skills: {
    arrayKey: 'skills',
    required: ['id', 'name', 'category', 'description'],
    optional: ['githubUrl', 'installCommand', 'stars', 'verified', 'tags', 'source']
  },
  mcps: {
    arrayKey: 'servers',
    required: ['id', 'name', 'category', 'description'],
    optional: ['github', 'install', 'stars', 'verified', 'tags', 'license']
  },
  loops: {
    arrayKey: 'loops',
    required: ['id', 'title', 'category', 'description'],
    optional: ['githubUrl', 'source', 'sourceRepo', 'stars', 'verified', 'tags', 'prompt', 'verification']
  },
  subagents: {
    arrayKey: 'subagents',
    required: ['id', 'name', 'category', 'description'],
    optional: ['githubUrl', 'stars', 'verified', 'tags']
  },
  hooks: {
    arrayKey: 'hooks',
    required: ['id', 'name', 'category', 'description'],
    optional: ['githubUrl', 'stars', 'verified', 'tags']
  },
  plugins: {
    arrayKey: 'plugins',
    required: ['id', 'name', 'category', 'description'],
    optional: ['githubUrl', 'stars', 'verified', 'tags']
  },
  prompts: {
    arrayKey: 'prompts',
    required: ['id', 'name', 'category', 'description'],
    optional: ['githubUrl', 'stars', 'verified', 'tags']
  },
  tools: {
    arrayKey: 'tools',
    required: ['id', 'name', 'category', 'description'],
    optional: ['githubUrl', 'installCommand', 'stars', 'verified', 'tags']
  }
};

for (const [catalogName, schema] of Object.entries(SCHEMAS)) {
  console.log(`\nValidating ${catalogName}/catalog.json...`);
  
  const filePath = path.join(ROOT, catalogName, 'catalog.json');
  
  // Check file exists
  if (!fs.existsSync(filePath)) {
    error(`${catalogName}/catalog.json not found`);
    continue;
  }
  
  // Parse JSON
  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    error(`${catalogName}/catalog.json is not valid JSON: ${e.message}`);
    continue;
  }
  
  // Find array
  const entries = raw[schema.arrayKey];
  if (!entries) {
    error(`Missing array key "${schema.arrayKey}" in ${catalogName}/catalog.json`);
    continue;
  }
  
  if (!Array.isArray(entries)) {
    error(`"${schema.arrayKey}" is not an array in ${catalogName}/catalog.json`);
    continue;
  }
  
  ok(`Found ${entries.length} entries`);
  
  // Validate each entry
  const ids = new Set();
  const categories = {};
  
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const prefix = `[${i}] ${entry.id || 'NO_ID'}`;
    
    // Check required fields
    for (const field of schema.required) {
      if (!entry[field]) {
        error(`${prefix}: missing required field "${field}"`);
      }
    }
    
    // Check for duplicate IDs
    if (entry.id) {
      if (ids.has(entry.id)) {
        error(`${prefix}: duplicate ID "${entry.id}"`);
      }
      ids.add(entry.id);
    }
    
    // Check ID format (lowercase, hyphens only)
    if (entry.id && !/^[a-z0-9][a-z0-9-]*$/.test(entry.id)) {
      warn(`${prefix}: ID "${entry.id}" should be lowercase with hyphens only`);
    }
    
    // Track categories
    if (entry.category) {
      if (!categories[entry.category]) categories[entry.category] = 0;
      categories[entry.category]++;
    }
    
    // Check stars type
    if (entry.stars !== undefined && typeof entry.stars === 'object' && entry.stars !== null) {
      // Some catalogs store stars as {count: N, ...} - that's OK
    } else if (entry.stars !== undefined && typeof entry.stars !== 'number') {
      warn(`${prefix}: stars should be a number or object, got "${typeof entry.stars}"`);
    }
    
    // Check tags is array
    if (entry.tags && !Array.isArray(entry.tags)) {
      warn(`${prefix}: tags should be an array`);
    }
  }
  
  // Log categories
  const cats = Object.entries(categories).sort((a, b) => b[1] - a[1]);
  ok(`Categories: ${cats.map(([k, v]) => `${k}(${v})`).join(', ')}`);
  
  // Check declared category counts vs actual
  if (raw.categories) {
    for (const declared of raw.categories) {
      const actual = categories[declared.name] || 0;
      if (declared.count !== actual) {
        warn(`Declared category "${declared.name}" count ${declared.count} doesn't match actual ${actual}`);
      }
    }
  }
}

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Validation complete: ${errors} errors, ${warnings} warnings`);

if (errors > 0) {
  console.log('FAILED');
  process.exit(1);
} else {
  console.log('PASSED');
  process.exit(0);
}
