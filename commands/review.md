---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(git diff:*)|Bash(git log:*)"
description: "Per-change code review with severity tiers and actionable feedback"
---

# /review

Perform a structured code review of the specified changes.

## Usage

```
/review [file|directory|PR-number]
```

## Protocol

### Phase 1: Context Gathering
1. Identify the scope of changes (files, diff size, modules affected)
2. Read the full diff: `git diff HEAD~1` or target file
3. Check for related tests
4. Review git log for commit message quality

### Phase 2: Analysis

For each changed file, evaluate:

<!-- checkpoint:MUST check all categories -->

1. **Correctness** - Does the code do what it claims?
2. **Security** - Any injection, auth bypass, data exposure?
3. **Performance** - N+1 queries, unnecessary allocations, missing indexes?
4. **Maintainability** - Clear naming, reasonable complexity, DRY?
5. **Testing** - Adequate coverage, meaningful assertions, edge cases?

### Phase 3: Report

Output format:

```markdown
## Review Summary

**Scope:** [N] files changed, [+X/-Y] lines
**Risk Level:** [LOW|MEDIUM|HIGH|CRITICAL]

### Issues Found

| # | Severity | File | Line | Category | Description |
|---|----------|------|------|----------|-------------|
| 1 | CRITICAL | src/auth.ts | 42 | Security | SQL injection via unsanitized input |

### Recommendations

1. [Actionable recommendation with code example]

### Verdict

[APPROVE | REQUEST_CHANGES | NEEDS_DISCUSSION]
```

### Severity Levels

- **CRITICAL**: Security vulnerability, data loss risk, production crash
- **HIGH**: Bug, performance regression, breaking API change
- **MEDIUM**: Code smell, missing tests, poor error handling
- **LOW**: Style issue, naming, minor optimization

## Anti-Rationalization Guard

These thoughts mean you are rationalizing past the gate:
- "It's probably fine because..."
- "This is unlikely to happen in practice"
- "The tests would catch this"
- "This is an edge case we can ignore"

If you catch yourself thinking any of these, STOP and investigate properly.
