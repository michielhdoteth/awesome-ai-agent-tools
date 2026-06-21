#!/usr/bin/env node
/**
 * Post Edit Check - PostToolUse Hook for Write|Edit
 * Runs linter check after file edits.
 *
 * Source: https://github.com/rohitg00/awesome-claude-code-toolkit
 * License: Apache-2.0
 *
 * Setup in .claude/settings.json:
 * {
 *   "hooks": {
 *     "PostToolUse": [
 *       {
 *         "matcher": "Write",
 *         "hooks": [{ "type": "command", "command": "node /path/to/post-edit-check.js" }]
 *       },
 *       {
 *         "matcher": "Edit",
 *         "hooks": [{ "type": "command", "command": "node /path/to/post-edit-check.js" }]
 *       }
 *     ]
 *   }
 * }
 */

const { execFileSync } = require("child_process");
const path = require("path");

const input = JSON.parse(process.argv[2] || "{}");
const filePath = input.file_path || input.filePath || "";
if (!filePath) process.exit(0);
if (!path.resolve(filePath).startsWith(path.resolve(process.cwd()))) process.exit(0);

const ext = path.extname(filePath).toLowerCase();

const lintCommands = {
  ".ts": { cmd: "npx", args: ["eslint", "--no-error-on-unmatched-pattern", filePath] },
  ".tsx": { cmd: "npx", args: ["eslint", "--no-error-on-unmatched-pattern", filePath] },
  ".js": { cmd: "npx", args: ["eslint", "--no-error-on-unmatched-pattern", filePath] },
  ".jsx": { cmd: "npx", args: ["eslint", "--no-error-on-unmatched-pattern", filePath] },
  ".py": { cmd: "ruff", args: ["check", filePath] },
  ".go": { cmd: "go", args: ["vet", "./..."] },
  ".rs": { cmd: "cargo", args: ["clippy", "--quiet"] },
};

const linter = lintCommands[ext];
if (!linter) process.exit(0);

try {
  execFileSync(linter.cmd, linter.args, {
    stdio: "pipe",
    timeout: 15000,
    cwd: path.dirname(filePath),
  });
  console.log(JSON.stringify({ lint: "pass", file: filePath }));
} catch (e) {
  const stderr = (e.stderr || "").toString().slice(0, 300);
  console.log(JSON.stringify({ lint: "fail", file: filePath, errors: stderr || "lint failed" }));
}
