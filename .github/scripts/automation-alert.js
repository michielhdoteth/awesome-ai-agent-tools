#!/usr/bin/env node
'use strict';

/**
 * Maintain one issue per critical workflow.
 *
 * On failure: create or update "Automation failure: <workflow>" with the run
 * link. On the next success: close it. Idempotent via a per-workflow marker.
 *
 * Only scheduled/push/dispatch runs are considered; a validation failure on a
 * contributor's PR is normal and is already reported on that PR.
 */

const { request, paginate, repoSlug } = require('./lib/github');

const BASE = repoSlug();
const WORKFLOW = process.env.WORKFLOW_NAME || 'unknown workflow';
const CONCLUSION = process.env.CONCLUSION || '';
const RUN_URL = process.env.RUN_URL || '';
const RUN_AT = process.env.RUN_AT || new Date().toISOString();
const MARKER = `<!-- automation-failure:${WORKFLOW} -->`;
const TITLE = `Automation failure: ${WORKFLOW}`;
const LABEL = { name: 'automation', color: 'b60205', description: 'Automated workflow health alert' };

const FAILURE = ['failure', 'timed_out', 'startup_failure'];

async function ensureLabel() {
  const { status } = await request(`/repos/${BASE}/labels/${encodeURIComponent(LABEL.name)}`, { allowStatus: [404] });
  if (status === 404) await request(`/repos/${BASE}/labels`, { method: 'POST', body: LABEL, allowStatus: [422] });
}

async function findIssue() {
  // GitHub's issue search can lag briefly after creation; retry so a recovery
  // run immediately after a failure still finds and closes the alert.
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const issues = await paginate(`/repos/${BASE}/issues?state=open&labels=${encodeURIComponent(LABEL.name)}`, { maxPages: 2 });
    const hit = issues.find((i) => (i.body || '').includes(MARKER) || i.title === TITLE);
    if (hit) return hit;
    await new Promise((r) => setTimeout(r, 3000));
  }
  return null;
}

async function main() {
  const existing = await findIssue();

  if (FAILURE.includes(CONCLUSION)) {
    const body = [
      MARKER,
      `**${WORKFLOW}** failed.`,
      '',
      `- Latest failure: ${RUN_AT}`,
      `- Run: ${RUN_URL}`,
      '',
      '_This issue closes automatically after a successful scheduled or push run._',
    ].join('\n');
    if (existing) {
      await request(`/repos/${BASE}/issues/${existing.number}`, { method: 'PATCH', body: { body } });
      console.log(`Updated automation failure issue #${existing.number} for ${WORKFLOW}`);
    } else {
      await ensureLabel();
      const { data } = await request(`/repos/${BASE}/issues`, {
        method: 'POST',
        body: { title: TITLE, body, labels: [LABEL.name] },
      });
      console.log(`Created automation failure issue #${data.number} for ${WORKFLOW}`);
    }
    return;
  }

  if (existing && CONCLUSION === 'success') {
    await request(`/repos/${BASE}/issues/${existing.number}/comments`, {
      method: 'POST',
      body: { body: `Recovered: **${WORKFLOW}** succeeded at ${RUN_AT} (${RUN_URL}). Closing.` },
    });
    await request(`/repos/${BASE}/issues/${existing.number}`, { method: 'PATCH', body: { state: 'closed' } });
    console.log(`Closed automation failure issue #${existing.number} for ${WORKFLOW}`);
    return;
  }

  console.log(`No action for ${WORKFLOW} (${CONCLUSION})`);
}

main().catch((e) => { console.error(`Automation alert failed: ${e.message}`); process.exit(1); });
