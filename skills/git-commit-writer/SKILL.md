# Skill: Git Commit Writer

## Overview

Analyzes staged git changes and writes conventional commit messages following the Conventional Commits specification. Detects scope from changed files, flags breaking changes, and suggests splitting multi-logical commits.

**Source:** Adapted from Agensi.io (65 installs, second most-installed skill)

## When to Use

- After completing a feature or fix
- Before pushing code
- When asked to "commit this" or "write a commit message"
- After resolving a merge conflict

## Commit Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | When to Use | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(auth): add OAuth2 login` |
| `fix` | Bug fix | `fix(api): handle null response` |
| `docs` | Documentation only | `docs: update README setup` |
| `style` | Formatting, no code change | `style: fix indentation` |
| `refactor` | Code restructuring | `refactor(db): extract query builder` |
| `perf` | Performance improvement | `perf(query): add database index` |
| `test` | Adding/updating tests | `test(auth): add login tests` |
| `chore` | Build, CI, dependencies | `chore: update npm packages` |
| `ci` | CI configuration | `ci: add GitHub Actions workflow` |
| `revert` | Reverting a commit | `revert: undo OAuth changes` |

### Scope

Detected automatically from changed files:

```
src/auth/login.ts     → feat(auth): ...
src/api/users.ts      → feat(api): ...
tests/auth.test.ts    → test(auth): ...
README.md             → docs: ...
package.json          → chore: ...
```

### Breaking Changes

When a commit includes breaking changes:

```
feat(api): change user endpoint response format

BREAKING CHANGE: /users/:id now returns { data: User } instead of User directly.
Clients must update to access .data property.
```

## Detection Rules

### Analyze Staged Changes

```bash
# See what's staged
git diff --cached --stat

# See the actual changes
git diff --cached

# Check for breaking changes
# - Modified function signatures
# - Changed API responses
# - Removed exports
# - Changed configuration format
```

### Auto-Detect Type

```markdown
1. If new file or new export → feat
2. If bug fix comment or fix for issue → fix
3. If only markdown/comments → docs
4. If only formatting/whitespace → style
5. If restructuring without behavior change → refactor
6. If only test files changed → test
7. If package.json or config changed → chore
```

### Auto-Detect Scope

```markdown
1. Most changes in single directory → directory name
2. Changes across multiple files → feature area
3. Single file changed → filename without extension
```

## Examples

### Simple Feature

```bash
git add src/auth/login.ts src/auth/types.ts
git commit -m "feat(auth): add OAuth2 login with Google provider"
```

### Bug Fix with Context

```bash
git add src/api/users.ts
git commit -m "fix(api): handle null response from user endpoint

The API was returning 500 when user not found.
Now returns 404 with proper error message.

Fixes #42"
```

### Refactor

```bash
git add src/db/ queries/
git commit -m "refactor(db): extract query builder into separate module

- Move SQL generation to src/db/builder.ts
- Add query caching
- Improve type safety"
```

### Breaking Change

```bash
git add src/api/routes.ts src/types/api.ts
git commit -m "feat(api)!: add versioned API endpoints

BREAKING CHANGE: All API endpoints now require /v1/ prefix.
Old endpoints redirect to /v1/ with deprecation warning."
```

## Anti-Patterns

1. **Vague messages**: "fix bug", "update code", "changes"
2. **Too many changes**: "feat: add everything" (split into multiple commits)
3. **Missing scope**: "fix: handle error" (fix what? where?)
4. **No body for complex changes**: Simple one-liner for breaking API change
5. **Committing secrets**: Always check for tokens, passwords, keys

## Quick Reference

```bash
# Stage and commit
git add -A
git commit -m "feat(scope): description"

# Amend last commit (before push)
git commit --amend -m "feat(scope): better description"

# Interactive staging (for complex commits)
git add -p  # stage specific hunks
```

## Integration

- Use with `verification-before-completion` skill to ensure tests pass before commit
- Use with `code-reviewer` skill to review before committing
- Pairs well with `changelog-generator` for release notes
