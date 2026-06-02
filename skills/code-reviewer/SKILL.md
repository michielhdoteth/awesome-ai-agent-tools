# Skill: Code Reviewer

## Overview

Structured code review skill that checks for security vulnerabilities, logic errors, performance issues, and style violations. Returns findings organized by severity with actionable recommendations.

**Source:** Adapted from Agensi.io (most-installed skill, 116 installs) and community repos

## When to Use

- Before committing code
- When reviewing a PR
- After completing a feature
- When asked to "review this" or "check my code"

## Review Checklist

### Security (Critical Priority)

```markdown
Check for:
- SQL injection (raw queries with user input)
- XSS vulnerabilities (unsanitized HTML output)
- Authentication bypass (missing auth checks)
- Authorization issues (missing permission checks)
- Sensitive data exposure (passwords, tokens in code)
- Path traversal (user-controlled file paths)
- Command injection (user input in shell commands)
- Insecure deserialization
```

### Logic Errors (Critical Priority)

```markdown
Check for:
- Off-by-one errors (loop boundaries)
- Null/undefined handling
- Race conditions
- Resource leaks (unclosed connections, file handles)
- Error swallowing (empty catch blocks)
- Incorrect state management
- Missing edge case handling
```

### Performance (Warning Priority)

```markdown
Check for:
- N+1 queries (database in loops)
- Unnecessary re-renders (React)
- Memory leaks (growing arrays, event listeners)
- Missing indexes (database queries)
- Large bundle imports
- Blocking operations on main thread
```

### Code Quality (Warning Priority)

```markdown
Check for:
- Naming clarity (is the purpose obvious?)
- Function length (>50 lines = refactor)
- DRY violations (duplicated logic)
- Dead code (unreachable or unused)
- Magic numbers (hardcoded values)
- Missing error messages
```

### Testing (Suggestion Priority)

```markdown
Check for:
- Test coverage for new code
- Edge cases covered
- Error scenarios tested
- Integration tests for new features
- Regression test for bug fixes
```

## Output Format

```markdown
## Code Review: [PR/Commit Description]

### Critical Issues (must fix)
1. **[Security]** `path/to/file.ts:42` - SQL injection vulnerability
   - Issue: User input passed directly to query
   - Fix: Use parameterized queries
   ```typescript
   // Bad
   db.query(`SELECT * FROM users WHERE id = ${userId}`)
   // Good
   db.query('SELECT * FROM users WHERE id = ?', [userId])
   ```

### Warnings (should fix)
2. **[Performance]** `path/to/file.ts:78` - N+1 query detected
   - Issue: Database query inside loop
   - Fix: Use batch query or JOIN

### Suggestions (nice to have)
3. **[Quality]** `path/to/file.ts:120` - Function too long
   - Issue: 85 lines, hard to test
   - Suggest: Extract helper functions

### Positive Notes
- Good use of TypeScript types
- Clean separation of concerns
- Comprehensive error messages
```

## Severity Levels

| Level | Meaning | Action |
|-------|---------|--------|
| CRITICAL | Security vulnerability or data loss risk | Must fix before merge |
| WARNING | Bug or significant quality issue | Should fix before merge |
| SUGESTION | Improvement opportunity | Optional, nice to have |
| NOTE | Observation or question | For discussion |

## Review Rules

1. **Be specific** - Point to exact lines and explain the issue
2. **Provide fixes** - Don't just say "this is wrong", show the fix
3. **Prioritize** - Security > Bugs > Performance > Style
4. **Be constructive** - Critique code, not people
5. **Check the diff** - Focus on what changed, not existing code
6. **Verify claims** - Don't just trust the code, think about edge cases

## Model Selection

- **Sonnet**: Standard code reviews for most changes
- **Opus**: Complex security audits, architectural reviews
- **Haiku**: Quick syntax/style checks, formatting verification
