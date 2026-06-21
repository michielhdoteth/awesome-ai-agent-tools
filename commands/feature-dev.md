---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Full feature development workflow from spec to PR"
---

# /feature-dev

End-to-end feature development workflow.

## Usage

```
/feature-dev "Feature description"
```

## Protocol

### Phase 1: Plan

1. Understand the requirement
2. Identify affected modules
3. Create implementation plan:
   ```markdown
   ## Feature: [name]

   ### Files to Create/Modify
   - src/feature.ts (new)
   - src/api/routes.ts (modify)
   - tests/feature.test.ts (new)

   ### Implementation Steps
   1. Create data model
   2. Implement API endpoint
   3. Add validation
   4. Write tests
   5. Update docs

   ### Acceptance Criteria
   - [ ] Criterion 1
   - [ ] Criterion 2
   ```

<!-- checkpoint:MUST have plan approved before coding -->

### Phase 2: Implement

1. Create feature branch: `git checkout -b feat/feature-name`
2. Implement step by step
3. Write tests alongside implementation
4. Run tests after each step

### Phase 3: Verify

1. All tests pass
2. Lint passes
3. Type check passes
4. Documentation updated
5. No regressions in existing tests

### Phase 4: Ship

1. Commit with conventional message
2. Push branch
3. Create PR with description
4. Link to original requirement

## Output

```markdown
## Feature Complete

**Feature:** [name]
**Branch:** feat/feature-name
**Files changed:** [list]
**Tests added:** [count]
**PR:** [link]
```
