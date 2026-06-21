#!/usr/bin/env node
/**
 * Pre Push Check - PreToolUse Hook for Bash
 * Warns before git push to verify branch and remote.
 *
 * Source: https://github.com/rohitg00/awesome-claude-code-toolkit
 * License: Apache-2.0
 *
 * Setup in .claude/settings.json:
 * {
 *   "hooks": {
 *     "PreToolUse": [{
 *       "matcher": "Bash",
 *       "hooks": [{ "type": "command", "command": "node /path/to/pre-push-check.js" }]
 *     }]
 *   }
 * }
 */

const input = JSON.parse(process.argv[2] || "{}");
const command = (input.command || "").trim();

if (!command.startsWith("git push")) {
  console.log(JSON.stringify({ allowed: true }));
  process.exit(0);
}

const warnings = [];

if (command.includes("--force") || command.includes("-f")) {
  warnings.push("Force push detected. This rewrites remote history and may affect collaborators.");
}

if (command.includes("main") || command.includes("master")) {
  if (command.includes("--force") || command.includes("-f")) {
    warnings.push("Force pushing to main/master is dangerous. Consider creating a PR instead.");
  }
}

if (!command.includes("origin") && !command.includes("-u")) {
  warnings.push("No remote specified. Pushing to default remote.");
}

if (warnings.length > 0) {
  console.log(JSON.stringify({ warnings, command }));
} else {
  console.log(JSON.stringify({ allowed: true }));
}
