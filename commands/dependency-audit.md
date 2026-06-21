---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Dependency vulnerability check and license compliance"
---

# /dependency-audit

Audit dependencies for vulnerabilities and license issues.

## Usage

```
/dependency-audit [--fix]
```

## Protocol

### Phase 1: Vulnerability Scan

```bash
# Node.js
npm audit 2>/dev/null || true

# Python
pip-audit 2>/dev/null || safety check 2>/dev/null || true

# Go
govulncheck ./... 2>/dev/null || true
```

### Phase 2: License Check

```bash
# Node.js
npx license-checker --summary 2>/dev/null || true

# Python
pip-licenses --summary 2>/dev/null || true
```

### Phase 3: Outdated Check

```bash
# Check for outdated dependencies
npm outdated 2>/dev/null || true
pip list --outdated 2>/dev/null || true
```

### Phase 4: Report

```markdown
## Dependency Audit Report

**Date:** [timestamp]
**Total Dependencies:** [count]

### Vulnerabilities

| Package | Severity | Vulnerability | Fix Available |
|---------|----------|---------------|---------------|
| lodash | HIGH | Prototype Pollution | 4.17.21 |

### License Issues

| Package | License | Risk |
|---------|---------|------|
| gpl-module | GPL-3.0 | Copyleft - may require source disclosure |

### Outdated

| Package | Current | Latest | Breaking |
|---------|---------|--------|----------|
| express | 4.18.0 | 4.19.0 | No |
```

### Fix Mode (--fix)

1. Auto-update non-breaking: `npm update`
2. Apply security fixes: `npm audit fix`
3. Report breaking changes that need manual update
