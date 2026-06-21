---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Targeted code simplification with safety verification"
---

# /refactor

Safe refactoring with behavior preservation guarantees.

## Usage

```
/refactor [target: file | function | pattern]
```

## Protocol

### Phase 1: Assess

1. Read the target code
2. Understand its current behavior
3. Identify refactoring opportunities:
   - Extract function/class
   - Rename for clarity
   - Simplify conditionals
   - Remove duplication
   - Improve naming
4. Estimate risk level (LOW/MEDIUM/HIGH)

### Phase 2: Safety Net

<!-- checkpoint:MUST have tests before refactoring -->

1. Verify existing tests pass
2. Add tests for the specific behavior being refactored (if missing)
3. Capture current test coverage baseline

### Phase 3: Refactor

1. Make ONE small change at a time
2. Run tests after each change
3. If tests fail, revert and try a smaller step
4. Commit after each successful change

### Phase 4: Verify

1. All tests pass
2. Coverage hasn't decreased
3. Code is measurably improved (fewer lines, better naming, reduced complexity)
4. No new warnings or errors

## Refactoring Checklist

- [ ] Existing behavior preserved
- [ ] Tests pass at every step
- [ ] Code is simpler/clearer than before
- [ ] No new dependencies introduced
- [ ] Public API unchanged (or documented)
