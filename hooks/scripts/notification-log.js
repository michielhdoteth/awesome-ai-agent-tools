#!/usr/bin/env node
/**
 * Notification Log - Notification Hook
 * Logs notifications for later review.
 *
 * Source: https://github.com/rohitg00/awesome-claude-code-toolkit
 * License: Apache-2.0
 *
 * Setup in .claude/settings.json:
 * {
 *   "hooks": {
 *     "Notification": [{
 *       "hooks": [{ "type": "command", "command": "node /path/to/notification-log.js" }]
 *     }]
 *   }
 * }
 */

const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(process.env.HOME || process.env.USERPROFILE, '.claude', 'hooks-logs');

function log(data) {
  try {
    if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
    const file = path.join(LOG_DIR, `${new Date().toISOString().slice(0, 10)}-notifications.jsonl`);
    fs.appendFileSync(file, JSON.stringify({ ts: new Date().toISOString(), ...data }) + '\n');
  } catch {}
}

async function main() {
  let input = '';
  for await (const chunk of process.stdin) input += chunk;

  try {
    const data = JSON.parse(input);
    log({
      hook_event_name: data.hook_event_name,
      notification_type: data.notification_type,
      message: data.message,
      session_id: data.session_id,
      cwd: data.cwd,
    });
    console.log('{}');
  } catch (e) {
    console.log('{}');
  }
}

main();
