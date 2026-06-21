---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Deployment with preflight checks and rollback plan"
---

# /deploy

Safe deployment with preflight checks and rollback capability.

## Usage

```
/deploy [environment: staging | production] [--dry-run]
```

## Protocol

### Phase 1: Preflight

<!-- checkpoint:MUST pass all preflight checks -->

1. **Branch Check**: Verify on correct branch
   ```bash
   git branch --show-current
   ```
2. **Clean Working Tree**: No uncommitted changes
   ```bash
   git status --porcelain
   ```
3. **Tests Pass**: Full test suite green
   ```bash
   npm test
   ```
4. **Build Succeeds**: Production build completes
   ```bash
   npm run build
   ```
5. **No Secrets in Diff**: Scan for leaked credentials
6. **Changelog Updated**: User-facing changes documented

### Phase 2: Deploy

1. Tag the release: `git tag v1.2.3`
2. Push tag: `git push origin v1.2.3`
3. Deploy to target environment
4. Wait for deployment confirmation
5. Run smoke tests

### Phase 3: Verify

1. Check application health endpoint
2. Verify key user flows work
3. Monitor error rates for 10 minutes
4. Confirm no performance regression

### Phase 4: Rollback (if needed)

```bash
# Quick rollback
git revert HEAD
git push origin main

# Or tag-based rollback
git checkout v1.2.2
git push origin main --force
```

## Output

```markdown
## Deploy Report

**Environment:** staging/production
**Version:** v1.2.3
**Status:** SUCCESS/FAILED
**Duration:** [time]

### Preflight
- [x] Branch: main
- [x] Clean working tree
- [x] Tests pass
- [x] Build succeeds
- [x] No secrets
- [x] Changelog updated

### Post-Deploy
- [x] Health check: OK
- [x] Smoke tests: PASS
- [x] Error rate: normal
```
