#!/usr/bin/env node
/**
 * Suggest Compact - PostToolUse Hook for Bash
 * Tracks edit count and suggests compaction at intervals.
 *
 * Source: https://github.com/rohitg00/awesome-claude-code-toolkit
 * License: Apache-2.0
 *
 * Setup in .claude/settings.json:
 * {
 *   "hooks": {
 *     "PostToolUse": [{
 *       "matcher": "Bash",
 *       "hooks": [{ "type": "command", "command": "node /path/to/suggest-compact.js" }]
 *     }]
 *   }
 * }
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const contextFile = path.join(os.homedir(), ".claude", "session-context.json");
const cwd = process.cwd();

let context = {};
if (fs.existsSync(contextFile)) {
  try {
    context = JSON.parse(fs.readFileSync(contextFile, "utf8"));
  } catch (e) {}
}

const sessionData = context[cwd] || {};
sessionData.editCount = (sessionData.editCount || 0) + 1;
context[cwd] = sessionData;

fs.mkdirSync(path.dirname(contextFile), { recursive: true });
fs.writeFileSync(contextFile, JSON.stringify(context, null, 2));

const editCount = sessionData.editCount;

// Suggest compaction every 10 edits
if (editCount > 0 && editCount % 10 === 0) {
  console.log(JSON.stringify({
    suggestion: `Consider running /compact to free up context space. (${editCount} edits this session)`
  }));
} else {
  console.log(JSON.stringify({ editCount }));
}
