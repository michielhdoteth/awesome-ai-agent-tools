# Skill: Systematic Debugging

## Overview

4-phase root cause debugging process. Prevents the "spray and pray" approach where agents randomly change code hoping to fix the issue. Forces disciplined investigation before attempting fixes.

**Source:** Adapted from obra/superpowers (216k stars)

## When to Use

- Any bug or unexpected behavior
- Test failures
- Runtime errors
- Performance issues
- "It works on my machine" problems

## The 4 Phases

### Phase 1: Reproduce

Before fixing anything, you MUST reproduce the issue.

```bash
# Run the exact command that triggers the bug
# Capture the full error message and stack trace
# Note: environment, inputs, and conditions

# Example reproduction steps:
# 1. npm run dev
# 2. Navigate to /settings
# 3. Click "Save" without filling in name
# 4. Expected: validation error
# 5. Actual: 500 Internal Server Error
```

**Rules:**
- If you can't reproduce it, you can't verify your fix
- Write a test that reproduces the bug (ties into TDD skill)
- Document exact steps, inputs, and environment

### Phase 2: Isolate

Narrow down WHERE the bug is.

```bash
# Binary search approach:
# 1. Check the error message - what function/file is mentioned?
# 2. Add logging/print statements around that area
# 3. Run again, see where execution diverges from expected
# 4. Repeat with narrower scope

# Tools for isolation:
# - Stack trace analysis
# - Git bisect (for regression bugs)
# - Binary search through code paths
# - Logging/tracing
```

**Rules:**
- Don't read the entire codebase - focus on the error location
- Use `git bisect` for "it used to work" bugs
- Add temporary debug output, don't guess

### Phase 3: Identify Root Cause

Find the ACTUAL cause, not just the symptom.

```bash
# Ask "why?" 5 times:
# 1. Why did it crash? → NullPointerException on line 42
# 2. Why is it null? → The API returned empty
# 3. Why did the API return empty? → The query returned no results
# 4. Why did the query return no results? → The filter is wrong
# 5. Why is the filter wrong? → It uses the wrong field name
# ROOT CAUSE: Wrong field name in database query filter
```

**Rules:**
- The root cause is rarely the line that crashed
- Check assumptions: "I assumed X was true, but is it?"
- Look at the data flow, not just the error point

### Phase 4: Fix and Verify

Implement the minimal fix and verify it works.

```bash
# 1. Fix the root cause (not the symptom)
# 2. Run the reproduction test → should pass now
# 3. Run the full test suite → nothing else broke
# 4. Verify in the actual environment
# 5. Commit with clear message about root cause
```

**Rules:**
- Minimal fix - don't refactor while fixing bugs
- Verify the fix works in the ACTUAL environment
- Add a regression test to prevent this specific bug from returning

## Debugging Techniques

### Git Bisect (for regressions)

```bash
# Find which commit introduced the bug
git bisect start
git bisect bad          # current commit is broken
git bisect good v1.0.0  # this version was working
# Git will checkout commits for you to test
# Mark each as good/bad until it finds the culprit
git bisect reset        # return to normal
```

### Rubber Duck Debugging

Explain the problem out loud (or to a rubber duck). The act of articulating often reveals the issue.

### Binary Search Through Code

```bash
# If the bug could be anywhere in a large file:
# 1. Add a print halfway through
# 2. Run - is the bug before or after?
# 3. Split the remaining half
# 4. Repeat until you find the exact line
```

### Log Analysis

```bash
# Add structured logging
console.log('DEBUG: variable_name =', JSON.stringify(variable))
# or
logger.debug(f"Processing item: {item.id}, type: {type(item)}")
```

## Anti-Patterns

1. **Random changes**: "Let me try changing this" without understanding why
2. **Over-engineering the fix**: Fixing the bug AND refactoring AND adding features
3. **Ignoring the test**: Not writing a regression test means it'll happen again
4. **Fixing the symptom**: Adding null checks when the real issue is upstream
5. **Not reproducing first**: "I think this should fix it" without verification

## Quick Reference

```
REPRODUCE → Can you trigger it reliably? Write a test.
ISOLATE   → Where exactly does it fail? Narrow the scope.
IDENTIFY  → Why does it fail? Root cause, not symptom.
FIX       → Minimal change to fix root cause. Verify. Test. Commit.
```

## When to Ask for Help

- After 30 minutes of Phase 2 with no progress
- When you can't reproduce the issue at all
- When the fix requires architectural changes
- When you're unsure about the root cause
