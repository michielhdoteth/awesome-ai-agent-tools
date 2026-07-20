# Hooks Catalog

Production-ready Claude Code hooks for security, automation, and quality

**25** entries across **8** categories.

## Categories

- **Security** (5)
- **Automation** (4)
- **Session Management** (4)
- **Quality** (3)
- **Safety** (3)
- **Utility** (3)
- **Notifications** (2)
- **Platform Feature** (1)

## All 25 hooks

| Name                                     | Category           | Description                                                                                                                                              | Source | Badges |
| ---------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| Block Dangerous Commands                 | Security           | Blocks rm -rf, fork bombs, curl|sh, and other destructive shell commands                                                                                 |        |        |
| Protect Secrets                          | Security           | Prevents reading, modifying, or exfiltrating sensitive files like .env, .ssh, credentials                                                                |        |        |
| Secret Scanner                           | Security           | Scans for leaked secrets (API keys, tokens, passwords) before writing or editing files                                                                   |        |        |
| Branch Guard                             | Security           | Blocks direct changes on main/master branch to prevent accidental pushes                                                                                 |        |        |
| Auto Stage                               | Automation         | Automatically git stages files after Claude modifies them                                                                                                |        |        |
| Auto Test                                | Automation         | Runs related tests automatically after editing source files                                                                                              |        |        |
| Lint Fix                                 | Automation         | Auto-fixes lint issues after writing or editing files                                                                                                    |        |        |
| Type Check                               | Automation         | Run TypeScript type checking after writing or editing .ts/.tsx files                                                                                     |        |        |
| Post Edit Check                          | Quality            | Run linter check after file edits to catch issues early                                                                                                  |        |        |
| Suggest Compact                          | Quality            | Track edit count and suggest context compaction at intervals                                                                                             |        |        |
| Commit Guard                             | Quality            | Validates conventional commit message format before git commit                                                                                           |        |        |
| Notify Permission                        | Notifications      | Sends Slack alerts when Claude needs input or is idle                                                                                                    |        |        |
| Notification Log                         | Notifications      | Logs all notifications for later review and debugging                                                                                                    |        |        |
| Session Start                            | Session Management | Detects package manager and loads previous session context on startup                                                                                    |        |        |
| Session End                              | Session Management | Save current context state for next session on shutdown                                                                                                  |        |        |
| Context Loader                           | Session Management | Load project context including git state, config files, and pending todos                                                                                |        |        |
| Pre Compact                              | Session Management | Save important context before compaction to prevent information loss                                                                                     |        |        |
| Pre Push Check                           | Safety             | Warns before git push to verify branch and remote are correct                                                                                            |        |        |
| Block Dev Server                         | Safety             | Blocks dev server commands outside tmux to prevent orphaned processes                                                                                    |        |        |
| Smart Approve                            | Safety             | Decomposes compound bash commands and checks each sub-command against allow/deny patterns                                                                |        |        |
| Event Logger                             | Utility            | Logs all hook events for debugging and audit trail                                                                                                       |        |        |
| Stop Check                               | Utility            | Reminds to run tests if code was modified when session ends                                                                                              |        |        |
| Lasso Security Prompt Injection Defenses | Security           | Enterprise-grade prompt injection detection and prevention hooks for Claude Code. Detects and blocks indirect prompt injection attacks via tool outputs. |        |        |
| awesome-claude-code-hooks                | Utility            | Curated directory of Claude Code hooks organized by category. Meta-resource for discovering hooks in the ecosystem.                                      |        |        |
| GitHub Copilot Agent Hooks               | Platform Feature   | Native Stop hook event in GitHub Copilot Extensions API for pre/post-completion hooks. First-class hook support in GitHub's AI coding tool.              |        |        |

---

Machine-readable data: [catalog.json](catalog.json)