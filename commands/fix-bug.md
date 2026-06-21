---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Systematic bug fix protocol with regression test"
---

# /fix-bug

Structured bug fix workflow with root cause analysis.

## Usage

```
/fix-bug [issue number | error message | bug description]
```

## Protocol

### Phase 1: Understand

1. Gather all information about the bug
2. Reproduce the issue and record exact steps
3. Check if the bug has been reported before (issues, changelog)
4. Identify affected version(s)

### Phase 2: Root Cause

1. Read the relevant code path
2. Trace the execution flow
3. Identify the exact line/logic causing the failure
4. Document why the bug exists

### Phase 3: Fix

1. Write a failing test that captures the bug:
   ```typescript
   test('should handle [bug scenario]', () => {
     // This test should fail before the fix
     expect(result).toBe(expected);
   });
   ```
2. Implement the minimal fix
3. Verify the test passes
4. Run the full test suite to check for regressions

<!-- checkpoint:MUST have a failing test before applying fix -->

### Phase 4: Prevent

1. Check for similar patterns elsewhere: `grep -r "same pattern" src/`
2. Add defensive checks if appropriate
3. Update documentation if the bug was a misunderstanding

## Output

```markdown
## Bug Fix Report

**Issue:** [description]
**Root Cause:** [identified cause]
**Fix:** [what was changed]
**Test:** [test name that captures the fix]
**Regression Check:** [pass/fail]
**Similar Issues:** [found/none]
```
