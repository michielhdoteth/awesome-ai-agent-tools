#!/usr/bin/env node
/**
 * Block Dev Server - PreToolUse Hook for Bash
 * Blocks dev server commands outside tmux to prevent orphaned processes.
 *
 * Source: https://github.com/rohitg00/awesome-claude-code-toolkit
 * License: Apache-2.0
 *
 * Setup in .claude/settings.json:
 * {
 *   "hooks": {
 *     "PreToolUse": [{
 *       "matcher": "Bash",
 *       "hooks": [{ "type": "command", "command": "node /path/to/block-dev-server.js" }]
 *     }]
 *   }
 * }
 */

const input = JSON.parse(process.argv[2] || "{}");
const command = (input.command || "").trim();

const devServerPatterns = [
  /\bnpm\s+run\s+dev\b/,
  /\byarn\s+dev\b/,
  /\bpnpm\s+dev\b/,
  /\bbun\s+dev\b/,
  /\bnpm\s+start\b/,
  /\byarn\s+start\b/,
  /\bpnpm\s+start\b/,
  /\bnpx\s+next\s+dev\b/,
  /\bnpx\s+vite\b/,
  /\bwebpack\s+serve\b/,
];

const isDevServer = devServerPatterns.some(p => p.test(command));

if (!isDevServer) {
  console.log(JSON.stringify({ allowed: true }));
  process.exit(0);
}

// Check if running inside tmux
const isInTmux = process.env.TMUX !== undefined;

if (!isInTmux) {
  console.log(JSON.stringify({
    decision: "block",
    reason: "Dev server command detected outside tmux. Run inside tmux to prevent orphaned processes.\nWrap with: tmux new-session -d -s dev 'npm run dev'"
  }));
} else {
  console.log(JSON.stringify({ allowed: true }));
}
