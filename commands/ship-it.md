---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Full shipping workflow: review + commit + push + optional merge"
---

# /ship-it

Complete shipping workflow from code review to merge.

## Usage

```
/ship-it [--merge] [--target main]
```

## Protocol

### Phase 1: Quality Gates

<!-- checkpoint:MUST pass all gates before shipping -->

1. **Test Suite**: `npm test` or equivalent passes
2. **Lint**: `npm run lint` passes (or no lint configured)
3. **Type Check**: `npx tsc --noEmit` passes (for TypeScript projects)
4. **No Secrets**: scan staged files for leaked credentials
5. **Build**: `npm run build` succeeds (if applicable)

### Phase 2: Review

1. Run `/review` on all changed files
2. Address any CRITICAL or HIGH issues
3. Verify commit messages follow conventional format

### Phase 3: Commit & Push

1. Stage changes: `git add -A`
2. Generate conventional commit message
3. Commit: `git commit -m "<message>"`
4. Push: `git push origin HEAD`

### Phase 4: Merge (optional with --merge)

1. Create PR with description
2. Wait for CI checks to pass
3. Squash merge to target branch
4. Clean up feature branch

## Output

```markdown
## Ship Complete

**Branch:** feature/my-change -> main
**Commit:** abc1234 - feat: add new feature
**CI:** All checks passing
**PR:** #42 - https://github.com/org/repo/pull/42

**Changes shipped:**
- src/feature.ts (+50/-20)
- tests/feature.test.ts (+100/-0)
```
