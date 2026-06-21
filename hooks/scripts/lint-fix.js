#!/usr/bin/env node
/**
 * Lint Fix - PostToolUse Hook for Write|Edit
 * Auto-fixes lint issues after writing/editing files.
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
 *         "hooks": [{ "type": "command", "command": "node /path/to/lint-fix.js" }]
 *       },
 *       {
 *         "matcher": "Edit",
 *         "hooks": [{ "type": "command", "command": "node /path/to/lint-fix.js" }]
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

const fixCommands = {
  ".ts": { cmd: "npx", args: ["eslint", "--fix", "--no-error-on-unmatched-pattern", filePath] },
  ".tsx": { cmd: "npx", args: ["eslint", "--fix", "--no-error-on-unmatched-pattern", filePath] },
  ".js": { cmd: "npx", args: ["eslint", "--fix", "--no-error-on-unmatched-pattern", filePath] },
  ".jsx": { cmd: "npx", args: ["eslint", "--fix", "--no-error-on-unmatched-pattern", filePath] },
  ".py": { cmd: "ruff", args: ["check", "--fix", filePath] },
  ".go": { cmd: "gofmt", args: ["-w", filePath] },
  ".rs": { cmd: "rustfmt", args: [filePath] },
  ".css": { cmd: "npx", args: ["prettier", "--write", filePath] },
  ".scss": { cmd: "npx", args: ["prettier", "--write", filePath] },
  ".json": { cmd: "npx", args: ["prettier", "--write", filePath] },
  ".md": { cmd: "npx", args: ["prettier", "--write", filePath] },
};

const fixer = fixCommands[ext];
if (!fixer) process.exit(0);

try {
  execFileSync(fixer.cmd, fixer.args, {
    stdio: "pipe",
    timeout: 15000,
    cwd: path.dirname(filePath),
  });
  console.log(JSON.stringify({ lintFix: "applied", file: filePath }));
} catch (e) {
  const stderr = (e.stderr || "").toString().slice(0, 300);
  console.log(JSON.stringify({ lintFix: "skipped", file: filePath, reason: stderr || "tool not available" }));
}
