---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "4-phase systematic root-cause diagnosis with hypothesis testing"
---

# /debug

Systematic debugging protocol for isolating and fixing bugs.

## Usage

```
/debug [error message | failing test | issue description]
```

## Protocol

### Phase 1: Reproduce

1. Identify the exact failure: error message, stack trace, or failing test
2. Determine reproduction steps
3. Check if the issue is deterministic or intermittent
4. Record the reproduction command/output

### Phase 2: Hypothesize

Based on the error, form hypotheses:

<!-- checkpoint:MUST list at least 3 hypotheses before investigating -->

1. **Hypothesis A**: [most likely cause]
2. **Hypothesis B**: [second most likely]
3. **Hypothesis C**: [least likely but possible]

### Phase 3: Isolate

For each hypothesis, test systematically:

1. Add logging/console.log at key points
2. Check git blame for recent changes: `git log --oneline -10 -- <file>`
3. Search for related patterns: `grep -r "pattern" src/`
4. Create minimal reproduction case
5. Binary search through code: comment out sections to narrow scope

### Phase 4: Fix & Verify

1. Implement the smallest possible fix
2. Write a regression test that fails without the fix
3. Verify the fix: run the original reproduction steps
4. Check for similar issues elsewhere: `grep -r "same pattern" src/`

## Output Format

```markdown
## Debug Report

**Issue:** [description]
**Reproduction:** [exact steps]
**Root Cause:** [identified cause]
**Hypothesis:** [which one was correct]

### Evidence

1. [evidence that confirms root cause]
2. [evidence that rules out other hypotheses]

### Fix

[description of fix]
**Regression test:** [test name/description]
**Verification:** [proof the fix works]
```

## Anti-Patterns

- Don't change multiple things at once
- Don't guess without evidence
- Don't skip the reproduction step
- Don't assume it's "probably fine" after fixing
