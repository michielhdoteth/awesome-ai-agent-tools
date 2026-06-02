# Skill: Test-Driven Development

## Overview

Enforces strict RED-GREEN-REFACTOR cycle. The agent must write a failing test first, watch it fail, write minimal code, watch it pass, then commit. This is the most important skill for preventing AI coding agents from writing untested code.

**Source:** Adapted from obra/superpowers (216k stars)

## When to Use

- Writing any new function, method, or class
- Fixing a bug (write a test that reproduces it first)
- Modifying existing behavior
- Any time you're about to write implementation code

## The Cycle

### RED: Write a Failing Test

```bash
# 1. Write the test FIRST - before any implementation
# 2. Run it to confirm it fails
pytest tests/test_feature.py::test_new_behavior -v
# Expected: FAIL with ImportError or AssertionError
```

**Rules:**
- Test must fail for the RIGHT reason (not a syntax error)
- If it passes, your test is wrong - fix the test
- If it errors, check your imports and test setup

### GREEN: Write Minimal Code to Pass

```bash
# 3. Write the MINIMUM code to make the test pass
# 4. Run the test again
pytest tests/test_feature.py::test_new_behavior -v
# Expected: PASS
```

**Rules:**
- No extra features, no optimization, no edge cases yet
- If multiple tests exist, make them ALL pass
- Commit once all tests pass

### REFACTOR: Improve Without Breaking

```bash
# 5. Clean up the code - extract methods, rename variables, remove duplication
# 6. Run ALL tests to verify nothing broke
pytest tests/ -v
# Expected: ALL PASS
# 7. Commit the refactor
```

**Rules:**
- No behavior changes during refactor
- All tests must still pass
- This is where you add docstrings, clean up naming, etc.

## Anti-Patterns (Never Do This)

1. **Implementation-first**: Writing code then adding tests = you're testing your implementation, not your requirements
2. **Test-after**: "I'll add tests later" = you won't, and bugs will ship
3. **Mega-tests**: One test per behavior, not one test per file
4. **Mocking everything**: Mock external services, not your own code
5. **Testing implementation details**: Test what it does, not how it does it

## Quick Reference

```
RED    → Write failing test → Run → Confirm FAIL
GREEN  → Minimal code       → Run → Confirm PASS
REFACTOR → Clean up         → Run → Confirm ALL PASS
COMMIT → Stage and commit with descriptive message
```

## Example Workflow

```bash
# RED
cat > tests/test_calculator.py << 'EOF'
def test_add():
    from calculator import add
    assert add(2, 3) == 5

def test_divide():
    from calculator import divide
    assert divide(10, 2) == 5.0

def test_divide_by_zero():
    from calculator import divide
    import pytest
    with pytest.raises(ValueError):
        divide(10, 0)
EOF

pytest tests/test_calculator.py -v
# FAIL: ImportError (calculator doesn't exist yet)

# GREEN
cat > calculator.py << 'EOF'
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
EOF

pytest tests/test_calculator.py -v
# ALL PASS

# REFACTOR (nothing to refactor yet - it's clean)

# COMMIT
git add calculator.py tests/test_calculator.py
git commit -m "feat: add calculator with add and divide operations"
```

## Model Selection

- **Sonnet**: Good for TDD on straightforward features
- **Opus**: Use for complex domain logic requiring careful test design
- **Haiku**: Fast RED-GREEN cycles on simple utilities

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Test passes immediately | Your test isn't testing anything - check assertions |
| Test fails for wrong reason | Fix imports/setup, not the implementation |
| Refactor breaks tests | You changed behavior - revert and refactor more carefully |
| Too many assertions | One assertion per test, test one behavior |
| Flaky tests | Remove time/random dependencies, use fixtures |
