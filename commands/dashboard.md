---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Generate project status dashboard"
---

# /dashboard

Generate a project status dashboard from current state.

## Usage

```
/dashboard
```

## Protocol

### Phase 1: Gather Metrics

1. **Git Stats**:
   ```bash
   git log --oneline -20                    # Recent commits
   git shortlog -sn                         # Contributors
   git branch -a | wc -l                    # Branch count
   git log --since="1 week ago" --oneline | wc -l  # Commits this week
   ```

2. **Code Stats**:
   ```bash
   find . -name "*.ts" -o -name "*.js" | wc -l    # File count
   find . -name "*.ts" -o -name "*.js" | xargs wc -l | tail -1  # Lines of code
   ```

3. **Test Stats**:
   ```bash
   npm test -- --coverage 2>/dev/null || true
   ```

4. **Dependency Stats**:
   ```bash
   npm ls --depth=0 2>/dev/null | wc -l
   ```

### Phase 2: Generate Dashboard

```markdown
# Project Dashboard

**Generated:** [timestamp]
**Branch:** [current branch]

## Overview

| Metric | Value | Trend |
|--------|-------|-------|
| Lines of Code | [N] | [+X% this week] |
| Files | [N] | |
| Dependencies | [N] | |
| Test Coverage | [X]% | |
| Open Issues | [N] | |

## Recent Activity

[Last 10 commits with authors and dates]

## Branches

| Branch | Last Commit | Status |
|--------|-------------|--------|
| main | [date] | Active |
| feat/feature | [date] | In Progress |

## Health Indicators

- [ ] All tests passing
- [ ] No security vulnerabilities
- [ ] Documentation up to date
- [ ] Dependencies current
- [ ] No stale branches > 30 days
```
