#!/usr/bin/env node
// Offline regression for issue #102. Canonical destinations were verified by
// unchanged GitHub repository IDs; this does not test remote availability.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const skills = JSON.parse(fs.readFileSync(path.join(root, 'skills/catalog.json'), 'utf8')).skills;
const servers = JSON.parse(fs.readFileSync(path.join(root, 'mcps/catalog.json'), 'utf8')).servers;
function one(items, id) {
  const matches = items.filter(item => item.id === id);
  assert.equal(matches.length, 1, `Expected one existing ${id} entry, not a replacement or duplicate`);
  return matches[0];
}
test('Angles catalog and install command target the same renamed repository', () => {
  const entry = one(skills, 'angles-video-skill');
  assert.equal(entry.source, 'anglesvideo/angles-video-skills');
  assert.equal(entry.install, `npx skills add ${entry.source}`);
});
test('FLOX retains its catalog identity while linking to the transferred repository', () => {
  const entry = one(servers, 'flox');
  assert.equal(entry.github, 'https://github.com/lrvx/lrvx');
  assert.equal(entry.install, 'Available via Glama.ai');
});
test('MCP Context Server moves repository owner without renaming its package', () => {
  const entry = one(servers, 'mcp-context-server');
  assert.equal(entry.github, 'https://github.com/GetActionSpace/mcp-context-server');
  assert.equal(entry.install, 'pip install mcp-context-server');
});
