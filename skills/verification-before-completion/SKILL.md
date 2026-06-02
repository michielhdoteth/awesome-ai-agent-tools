# Skill: Verification Before Completion

## Overview

Requires concrete verification evidence before marking any task as complete. Prevents agents from declaring "done" without proof that the work actually works. Addresses the "it works on my machine" problem.

**Source:** Adapted from obra/superpowers (216k stars)

## When to Use

- Before marking any task as complete
- Before committing code
- Before responding "done" to a user
- Before merging a PR
- Any time you think you've finished something

## The Rule

**Never say "done" without evidence.** Every completion claim must include at least one form of verification.

## Evidence Types (in order of reliability)

### 1. Test Results (Strongest)

```bash
# Run the relevant tests
pytest tests/ -v
# Output shows: ALL PASSED

# Or for specific feature:
npm test -- --grep "feature name"
# Output shows: 3 passing
```

### 2. Build Success

```bash
# Verify the build completes
npm run build
# Output shows: Build successful

# Or type checking:
npx tsc --noEmit
# Output shows: No errors
```

### 3. Manual Verification

```bash
# Run the application and test manually
npm run dev
# Open browser, navigate to feature
# Verify it works as expected
# Document what you tested
```

### 4. Code Review

```bash
# Show the diff and explain what changed
git diff --stat
git diff
# Explain: "I changed X to fix Y. Here's why it works..."
```

### 5. Linting/Formatting

```bash
# Verify code quality
npm run lint
# Output shows: 0 errors, 0 warnings

npm run format
# Output shows: All files formatted
```

## Completion Checklist

Before saying "done", answer ALL of these:

```
[ ] Did I run the tests? What was the output?
[ ] Did I verify the build succeeds?
[ ] Did I test the actual behavior (not just code review)?
[ ] Did I check for regressions (existing tests still pass)?
[ ] Did I verify edge cases work?
[ ] Did I commit with a clear message?
```

## What "Done" Looks Like

**BAD (no evidence):**
> "I've implemented the feature. It should work."

**GOOD (with evidence):**
> "I've implemented the feature.
> - Tests: `pytest tests/test_feature.py` - 5/5 passing
> - Build: `npm run build` - successful
> - Manual: Tested on /settings page, form submits correctly
> - Edge cases: Empty input shows validation error
> - Committed as: `feat: add user settings form`"

## Anti-Patterns

1. **"It should work"**: No verification = not done
2. **Testing the wrong thing**: Tests pass but the feature doesn't actually work
3. **Ignoring failures**: "Tests failed but it's probably unrelated"
4. **Partial verification**: "The code looks right" (but did you run it?)
5. **Verification theater**: Running tests without checking if they're the RIGHT tests

## Integration with Other Skills

- **TDD**: Write tests first, then verify they pass
- **Debugging**: Fix the bug, then verify the fix works
- **Code Review**: Show evidence, not just code

## Quick Reference

```
DONE = CODE + TESTS + BUILD + VERIFICATION + COMMIT
DONE != "I wrote the code"
DONE != "It looks right"
DONE != "Tests probably pass"
```

## When Verification Fails

```
1. Fix the failing verification
2. Re-run ALL verifications (not just the failed one)
3. Only then mark as done
4. If you can't fix it, explain what's blocking you
```
