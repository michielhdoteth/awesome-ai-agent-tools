# Research: Claude Code Hooks Collection

## Executive Summary

Compiled 25+ production-ready Claude Code hooks from top GitHub repositories:
- **karanb192/claude-code-hooks** (425 stars) - Security, automation, notifications
- **rohitg00/awesome-claude-code-toolkit** (2,100+ stars) - 20 hook scripts
- **aitmpl.com/hooks** - 56+ configurations
- **hesreallyhim/awesome-claude-code** (47,000+ stars) - Curated list

All hooks include exact JSON configurations and complete script code.

---

## Sources

### 1. karanb192/claude-code-hooks
- **Repository**: https://github.com/karanb192/claude-code-hooks
- **Stars**: 425
- **Scripts**: block-dangerous-commands.js, protect-secrets.js, auto-stage.js, notify-permission.js, event-logger.py
- **Safety Levels**: critical, high, strict (configurable per hook)

### 2. rohitg00/awesome-claude-code-toolkit
- **Repository**: https://github.com/rohitg00/awesome-claude-code-toolkit
- **Stars**: 2,100+
- **Scripts**: 20 hooks in hooks/scripts/ directory
- **Config**: hooks/hooks.json with all hook definitions

### 3. aitmpl.com/hooks
- **Website**: https://www.aitmpl.com/hooks/
- **Count**: 56+ hook configurations
- **Categories**: Security, automation, quality, notifications

### 4. hesreallyhim/awesome-claude-code
- **Repository**: https://github.com/hesreallyhim/awesome-claude-code
- **Stars**: 47,000+
- **Focus**: Curated list with links to hook implementations

---

## Hook Categories

### Security Hooks
1. block-dangerous-commands - Blocks rm -rf, fork bombs, curl|sh
2. protect-secrets - Prevents reading/modifying sensitive files
3. secret-scanner - Scans for leaked secrets before file writes
4. branch-guard - Blocks changes on main/master

### Automation Hooks
5. auto-stage - Git stages files after modifications
6. auto-test - Runs related tests after edits
7. lint-fix - Auto-fixes lint issues
8. type-check - TypeScript type checking

### Quality Hooks
9. commit-guard - Validates conventional commit messages
10. post-edit-check - Linter checks after edits
11. bundle-check - Bundle size monitoring

### Notification Hooks
12. notify-permission - Slack alerts when Claude needs input
13. notification-log - Logs notifications for review

### Session Management Hooks
14. session-start - Detects package manager, loads context
15. session-end - Saves session state
16. context-loader - Loads project context
17. pre-compact - Saves context before compaction
18. suggest-compact - Tracks edit count, suggests compaction

### Safety Hooks
19. pre-push-check - Warns before git push
20. block-dev-server - Blocks dev server outside tmux
21. block-md-creation - Blocks .md creation outside docs
22. smart-approve - Decomposes compound commands
23. prompt-check - Detects vague prompts

### Utility Hooks
24. event-logger - Logs all hook events for debugging
25. stop-check - Reminds to run tests on session end
26. learning-log - Saves learnings to daily log

---

## Hook Event Types

| Event | When It Fires | Input Data |
|-------|---------------|------------|
| PreToolUse | Before tool execution | tool_name, tool_input, session_id, cwd |
| PostToolUse | After tool execution | tool_name, tool_input, tool_output, session_id |
| Notification | Claude needs attention | notification_type, message, session_id |
| Stop | Session ending | session_id, cwd |
| SessionStart | Session beginning | session_id, cwd |
| SessionEnd | Session closing | session_id, cwd |
| PreCompact | Before context compaction | session_id, cwd |
| UserPromptSubmit | After user submits prompt | prompt, session_id |

---

## Installation Guide

### 1. Copy scripts to hooks/ directory
```bash
# From this repository
cp hooks/scripts/*.js hooks/scripts/*.py ~/.claude/hooks/
```

### 2. Add to .claude/settings.json
```json
{
  "hooks": {
    "PreToolUse": [...],
    "PostToolUse": [...],
    "Notification": [...]
  }
}
```

### 3. Set environment variables
```bash
export CCH_SLA_WEBHOOK="https://hooks.slack.com/services/..."
export SAFETY_LEVEL="high"
```

### 4. Test hooks
```bash
node ~/.claude/hooks/event-logger.py
```

---

## Safety Levels

| Level | What's Blocked | Use Case |
|-------|---------------|----------|
| critical | Catastrophic only (rm -rf ~, fork bombs) | Maximum flexibility |
| high | + risky (force push, secrets exposure) | Recommended |
| strict | + cautionary (any force push, sudo rm) | Maximum safety |

---

## References

- Official docs: https://docs.anthropic.com/en/docs/claude-code/hooks
- karanb192/claude-code-hooks: https://github.com/karanb192/claude-code-hooks
- rohitg00/awesome-claude-code-toolkit: https://github.com/rohitg00/awesome-claude-code-toolkit
- aitmpl.com/hooks: https://www.aitmpl.com/hooks/
- hesreallyhim/awesome-claude-code: https://github.com/hesreallyhim/awesome-claude-code
