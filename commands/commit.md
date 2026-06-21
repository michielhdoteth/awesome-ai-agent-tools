---
allowed-tools: "Bash(git:*)|Read(*)|Grep(*)"
description: "Preflight checks, commit with conventional format, and push"
---

# /commit

Stage, validate, and commit changes with proper formatting.

## Usage

```
/commit [optional message override]
```

## Protocol

### Phase 1: Preflight

1. Check working tree is not empty: `git status --porcelain`
2. Verify no merge conflicts exist
3. Check for secrets in staged files:
   ```bash
   git diff --cached --name-only | xargs grep -l -E "(api_key|secret|password|token)" 2>/dev/null || true
   ```
4. Run linter if configured: `npm run lint 2>/dev/null || true`

<!-- checkpoint:MUST verify no secrets are staged -->

### Phase 2: Message Generation

Analyze staged changes and generate a conventional commit message:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:** feat, fix, refactor, docs, test, chore, perf, ci, build, style

**Rules:**
- Subject line max 72 characters
- Use imperative mood ("add" not "added")
- Reference issue numbers in footer: "Closes #123"
- Separate subject from body with blank line

### Phase 3: Commit & Push

1. Stage all changes: `git add -A`
2. Commit with generated message: `git commit -m "<message>"`
3. Show commit summary: `git log --oneline -1`
4. Push if requested: `git push`

## Examples

```bash
# Auto-generate commit message
/commit

# Override message
/commit "fix: resolve race condition in worker pool"
```
