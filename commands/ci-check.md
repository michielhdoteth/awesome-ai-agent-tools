---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Local CI pipeline runner"
---

# /ci-check

Run the full CI pipeline locally before pushing.

## Usage

```
/ci-check [--fix]
```

## Protocol

### Phase 1: Environment Check

1. Verify required tools are installed
2. Check Node.js/Python/Go version matches `.tool-versions` or similar
3. Install dependencies if needed: `npm ci` or equivalent

### Phase 2: Quality Gates

Run each gate in sequence:

<!-- checkpoint:MUST pass all gates -->

```bash
# 1. Lint
npm run lint

# 2. Type check
npx tsc --noEmit

# 3. Unit tests
npm run test:unit

# 4. Integration tests
npm run test:integration

# 5. Build
npm run build
```

### Phase 3: Report

```markdown
## CI Check Report

**Status:** PASS/FAIL
**Duration:** [time]

| Gate | Status | Duration |
|------|--------|----------|
| Lint | PASS | 2.3s |
| Type Check | PASS | 4.1s |
| Unit Tests | PASS | 12.5s |
| Integration Tests | FAIL | 8.2s |
| Build | SKIP | - |

### Failures

[Details of failing tests/lint errors]
```

### Phase 4: Fix (with --fix flag)

1. Auto-fix lint issues: `npm run lint -- --fix`
2. Auto-fix formatting: `npx prettier --write .`
3. Report remaining issues that need manual fix
