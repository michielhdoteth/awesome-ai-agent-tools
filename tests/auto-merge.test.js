'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { evaluate } = require('../.github/scripts/auto-merge.js');

function pr(overrides = {}) {
  return {
    id: 'PR_node',
    isDraft: false,
    mergeable: 'MERGEABLE',
    mergeStateStatus: 'CLEAN',
    reviewDecision: 'APPROVED',
    autoMergeRequest: null,
    files: { nodes: [{ path: 'mcps/catalog.json' }] },
    commits: {
      nodes: [{
        commit: {
          statusCheckRollup: {
            contexts: {
              nodes: [{ __typename: 'CheckRun', name: 'catalog-validation', status: 'COMPLETED', conclusion: 'SUCCESS' }],
            },
          },
        },
      }],
    },
    ...overrides,
  };
}

test('eligible PR is queued', () => {
  const r = evaluate(pr());
  assert.strictEqual(r.eligible, true, r.reasons.join('; '));
  assert.deepStrictEqual(r.reasons, []);
});

test('draft is not eligible', () => {
  const r = evaluate(pr({ isDraft: true }));
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.includes('draft'));
});

test('merge conflict is not eligible', () => {
  const r = evaluate(pr({ mergeable: 'CONFLICTING', mergeStateStatus: 'DIRTY' }));
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('conflict')));
});

test('behind base is not eligible until synced', () => {
  const r = evaluate(pr({ mergeStateStatus: 'BEHIND' }));
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('behind')));
});

test('missing approval is not eligible', () => {
  const r = evaluate(pr({ reviewDecision: 'REVIEW_REQUIRED' }));
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('reviewDecision')));
});

test('changes requested is not eligible', () => {
  const r = evaluate(pr({ reviewDecision: 'CHANGES_REQUESTED' }));
  assert.strictEqual(r.eligible, false);
});

test('failed required check is not eligible', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes[0].conclusion = 'FAILURE';
  const r = evaluate(p);
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('check=FAILURE')));
});

test('missing required check is not eligible', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes = [];
  const r = evaluate(p);
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('check=MISSING')));
});

test('in-progress check is not eligible', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes[0].status = 'IN_PROGRESS';
  const r = evaluate(p);
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('check=PENDING')));
});

test('a StatusContext (commit status) success also satisfies the gate', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes = [
    { __typename: 'StatusContext', context: 'catalog-validation', state: 'SUCCESS' },
  ];
  const r = evaluate(p);
  assert.strictEqual(r.eligible, true, r.reasons.join('; '));
});

test('CI or executable file changes are unsafe and never auto-merge', () => {
  const p = pr({ files: { nodes: [{ path: '.github/workflows/pr-validation.yml' }, { path: 'mcps/catalog.json' }] } });
  const r = evaluate(p);
  assert.strictEqual(r.eligible, false);
  assert.ok(r.unsafe.some((f) => f.path.includes('.github/')));
});

test('unrelated file changes are unsafe', () => {
  const p = pr({ files: { nodes: [{ path: 'mcps/catalog.json' }, { path: 'random.txt' }] } });
  const r = evaluate(p);
  assert.strictEqual(r.eligible, false);
  assert.ok(r.unsafe.some((f) => f.path === 'random.txt'));
});

test('a PR with no catalog file is not eligible', () => {
  const p = pr({ files: { nodes: [{ path: 'contributing.md' }] } });
  const r = evaluate(p);
  assert.strictEqual(r.eligible, false);
  assert.ok(r.reasons.some((x) => x.includes('no catalog file')));
});

test('already enabled auto-merge is still eligible (no duplicate action)', () => {
  const r = evaluate(pr({ autoMergeRequest: { mergeMethod: 'SQUASH', enabledAt: '2026-01-01T00:00:00Z' } }));
  assert.strictEqual(r.eligible, true);
});
