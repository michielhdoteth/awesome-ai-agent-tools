'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { classify, buildDigest, checkOf } = require('../.github/scripts/lib/digest.js');

function pr(overrides = {}) {
  return {
    number: 1,
    title: 'Add a thing',
    isDraft: false,
    mergeable: 'MERGEABLE',
    mergeStateStatus: 'CLEAN',
    reviewDecision: 'REVIEW_REQUIRED',
    author: { login: 'contributor' },
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

test('checkOf reads CheckRun success', () => {
  assert.strictEqual(checkOf(pr()), 'SUCCESS');
});

test('checkOf reads StatusContext', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes = [
    { __typename: 'StatusContext', context: 'catalog-validation', state: 'SUCCESS' },
  ];
  assert.strictEqual(checkOf(p), 'SUCCESS');
});

test('green but unapproved is awaiting approval', () => {
  assert.strictEqual(classify(pr()), 'awaiting-approval');
});

test('approved and green is ready', () => {
  assert.strictEqual(classify(pr({ reviewDecision: 'APPROVED' })), 'ready');
});

test('conflict needs author', () => {
  assert.strictEqual(classify(pr({ mergeable: 'CONFLICTING', mergeStateStatus: 'DIRTY' })), 'needs-author');
});

test('failed check needs author', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes[0].conclusion = 'FAILURE';
  assert.strictEqual(classify(p), 'needs-author');
});

test('changes requested needs author', () => {
  assert.strictEqual(classify(pr({ reviewDecision: 'CHANGES_REQUESTED' })), 'needs-author');
});

test('pending check is in progress', () => {
  const p = pr();
  p.commits.nodes[0].commit.statusCheckRollup.contexts.nodes[0].status = 'IN_PROGRESS';
  assert.strictEqual(classify(p), 'in-progress');
});

test('behind base is in progress', () => {
  assert.strictEqual(classify(pr({ mergeStateStatus: 'BEHIND' })), 'in-progress');
});

test('draft is its own bucket', () => {
  assert.strictEqual(classify(pr({ isDraft: true })), 'draft');
});

test('digest renders sections, counts and links', () => {
  const md = buildDigest({
    pulls: [
      pr({ number: 10, title: 'Awaiting PR' }),
      pr({ number: 11, title: 'Broken PR', mergeable: 'CONFLICTING', mergeStateStatus: 'DIRTY' }),
      pr({ number: 12, title: 'Ready PR', reviewDecision: 'APPROVED' }),
    ],
    failures: [{ workflow: 'PR Maintenance', url: 'https://example/run', createdAt: '2026-11-01T00:00:00Z' }],
    maintenancePr: { number: 50, url: 'https://example/pr/50' },
    brokenLinks: { number: 60, url: 'https://example/issues/60', state: 'open' },
    mergedRecent: 7,
    now: new Date('2026-11-06T08:00:00Z'),
    base: 'https://github.com/o/r',
  });
  assert.ok(md.includes('<!-- weekly-digest -->'));
  assert.ok(md.includes('Open PRs: **3**'));
  assert.ok(md.includes('merged in the last 7 days: **7**'));
  assert.ok(md.includes('[#10 Awaiting PR](https://github.com/o/r/pull/10)'));
  assert.ok(md.includes('[#11 Broken PR]'));
  assert.ok(md.includes('[#12 Ready PR]'));
  assert.ok(md.includes('**PR Maintenance** failed'));
  assert.ok(md.includes('[#50](https://example/pr/50)'));
  assert.ok(md.includes('[#60](https://example/issues/60)'));
});

test('digest handles empty queues', () => {
  const md = buildDigest({ pulls: [], failures: [], maintenancePr: null, brokenLinks: null, mergedRecent: 0, base: 'https://github.com/o/r' });
  assert.ok(md.includes('_None._'));
  assert.ok(md.includes('No failures in PR Maintenance'));
  assert.ok(md.includes('no open tracking issue'));
});
