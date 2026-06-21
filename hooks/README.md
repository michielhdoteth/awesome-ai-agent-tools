# Claude Code Hooks Collection

A comprehensive collection of 25+ production-ready hooks for Claude Code, sourced from top GitHub repositories.

## Sources

- **karanb192/claude-code-hooks** (425 stars) - Security, automation, notifications
- **rohitg00/awesome-claude-code-toolkit** (2,100+ stars) - 20 hook scripts
- **aitmpl.com/hooks** - 56+ configurations
- **hesreallyhim/awesome-claude-code** (47,000+ stars) - Curated list

## Quick Start

### 1. Copy scripts to your hooks directory

```bash
# Create hooks directory
mkdir -p ~/.claude/hooks

# Copy all scripts
cp hooks/scripts/* ~/.claude/hooks/
```

### 2. Add configuration to .claude/settings.json

Copy the contents of `hooks/settings.json` to your `.claude/settings.json` file.

### 3. Set environment variables (optional)

```bash
# For Slack notifications
export CCH_SLA_WEBHOOK="https://hooks.slack.com/services/..."

# For safety level (critical|high|strict)
export SAFETY_LEVEL="high"
```

### 4. Restart Claude Code

The hooks are now active.

---

## Hook Categories

### Security Hooks

| Hook | Type | Description |
|------|------|-------------|
| block-dangerous-commands | PreToolUse | Blocks rm -rf, fork bombs, curl\|sh |
| protect-secrets | PreToolUse | Prevents reading/modifying sensitive files |
| secret-scanner | PreToolUse | Scans for leaked secrets before file writes |
| branch-guard | PreToolUse | Blocks changes on main/master |

### Automation Hooks

| Hook | Type | Description |
|------|------|-------------|
| auto-stage | PostToolUse | Git stages files after modifications |
| auto-test | PostToolUse | Runs related tests after edits |
| lint-fix | PostToolUse | Auto-fixes lint issues |
| type-check | PostToolUse | TypeScript type checking |

### Quality Hooks

| Hook | Type | Description |
|------|------|-------------|
| commit-guard | PreToolUse | Validates conventional commit messages |
| post-edit-check | PostToolUse | Linter checks after edits |
| bundle-check | PostToolUse | Bundle size monitoring |

### Notification Hooks

| Hook | Type | Description |
|------|------|-------------|
| notify-permission | Notification | Slack alerts when Claude needs input |
| notification-log | Notification | Logs notifications for review |

### Session Management Hooks

| Hook | Type | Description |
|------|------|-------------|
| session-start | SessionStart | Detects package manager, loads context |
| session-end | SessionEnd | Saves session state |
| context-loader | SessionStart | Loads project context |
| pre-compact | PreCompact | Saves context before compaction |
| suggest-compact | PostToolUse | Tracks edit count, suggests compaction |

### Safety Hooks

| Hook | Type | Description |
|------|------|-------------|
| pre-push-check | PreToolUse | Warns before git push |
| block-dev-server | PreToolUse | Blocks dev server outside tmux |
| smart-approve | PreToolUse | Decomposes compound commands |

### Utility Hooks

| Hook | Type | Description |
|------|------|-------------|
| event-logger | All events | Logs all hook events for debugging |
| stop-check | Stop | Reminds to run tests on session end |
| learning-log | SessionEnd | Saves learnings to daily log |

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

## Safety Levels

| Level | What's Blocked | Use Case |
|-------|---------------|----------|
| critical | Catastrophic only (rm -rf ~, fork bombs) | Maximum flexibility |
| high | + risky (force push, secrets exposure) | Recommended |
| strict | + cautionary (any force push, sudo rm) | Maximum safety |

---

## Configuration Reference

### Block Dangerous Commands

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "node ~/.claude/hooks/block-dangerous-commands.js"
      }]
    }]
  }
}
```

### Protect Secrets

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Read|Edit|Write|Bash",
      "hooks": [{
        "type": "command",
        "command": "node ~/.claude/hooks/protect-secrets.js"
      }]
    }]
  }
}
```

### Auto Stage

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "node ~/.claude/hooks/auto-stage.js"
      }]
    }]
  }
}
```

### Slack Notifications

```json
{
  "hooks": {
    "Notification": [{
      "matcher": "permission_prompt|idle_prompt",
      "hooks": [{
        "type": "command",
        "command": "node ~/.claude/hooks/notify-permission.js"
      }]
    }]
  }
}
```

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| SAFETY_LEVEL | Security level (critical\|high\|strict) | high |
| CCH_SLA_WEBHOOK | Slack webhook URL | (none) |
| SMART_APPROVE_VERBOSE | Enable verbose logging | false |

---

## Testing Hooks

### Test block-dangerous-commands

```bash
echo '{"tool_name":"Bash","tool_input":{"command":"rm -rf ~"}}' | node ~/.claude/hooks/block-dangerous-commands.js
```

### Test protect-secrets

```bash
echo '{"tool_name":"Read","tool_input":{"file_path":"~/.env"}}' | node ~/.claude/hooks/protect-secrets.js
```

### Test auto-stage

```bash
echo '{"tool_name":"Edit","tool_input":{"file_path":"/path/to/file.js"}}' | node ~/.claude/hooks/auto-stage.js
```

### View hook logs

```bash
cat ~/.claude/hooks-logs/$(date +%Y-%m-%d).jsonl | jq
```

---

## Contributing

To add a new hook:

1. Create the script in `hooks/scripts/`
2. Add the hook configuration to `hooks/settings.json`
3. Update this README with documentation
4. Test the hook with the testing commands above

---

## License

MIT - See individual hook source files for specific licenses.

---

## References

- [Official Claude Code Hooks Documentation](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [karanb192/claude-code-hooks](https://github.com/karanb192/claude-code-hooks)
- [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit)
- [aitmpl.com/hooks](https://www.aitmpl.com/hooks/)
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
