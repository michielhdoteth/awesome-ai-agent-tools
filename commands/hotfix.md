---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Emergency production fix with minimal risk"
---

# /hotfix

Emergency production fix with safety guarantees.

## Usage

```
/hotfix "Bug description"
```

## Protocol

### Phase 1: Assess

1. Understand the production issue
2. Identify the minimal fix
3. Check if a workaround exists
4. Estimate impact and urgency

### Phase 2: Fix

<!-- checkpoint:MUST have failing test before fix -->

1. Create hotfix branch from main: `git checkout -b hotfix/issue-name`
2. Write a test that reproduces the issue
3. Implement the smallest possible fix
4. Verify the test passes
5. Run full test suite

### Phase 3: Deploy

1. Commit with clear message: `fix: [description]`
2. Push and create PR
3. Get expedited review
4. Merge to main
5. Tag release if needed: `git tag v1.2.4`
6. Deploy immediately

### Phase 4: Post-Mortem

1. Verify fix in production
2. Monitor for 30 minutes
3. Document root cause
4. Create follow-up issue for:
   - Proper fix (if hotfix was a workaround)
   - Prevention measures
   - Test coverage gap

## Rules

- ONE change only
- MUST have a test
- MUST be reviewable in < 5 minutes
- MUST NOT refactor unrelated code
- MUST document the incident
