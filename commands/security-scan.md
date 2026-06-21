---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Security audit with parallel specialist analysis"
---

# /security-scan

Comprehensive security assessment of code changes.

## Usage

```
/security-scan [file|directory|scope]
```

## Protocol

### Scan Categories

Run these checks in parallel:

#### 1. Secret Detection
```bash
# Check for hardcoded secrets
grep -rn -E "(api_key|apikey|secret|password|token|private_key)" \
  --include="*.ts" --include="*.js" --include="*.py" --include="*.env*" \
  --include="*.yaml" --include="*.yml" --include="*.json" .
```

#### 2. Dependency Audit
```bash
# Check for known vulnerabilities
npm audit 2>/dev/null || yarn audit 2>/dev/null || true
pip-audit 2>/dev/null || true
```

#### 3. Input Validation
- Check all user inputs are validated
- Check for SQL injection vectors
- Check for XSS vulnerabilities
- Check for path traversal

#### 4. Authentication/Authorization
- Verify auth checks on protected routes
- Check session management
- Verify CORS configuration
- Check for broken access control

#### 5. Data Exposure
- Check for sensitive data in logs
- Verify PII handling
- Check API responses for data leaks
- Verify encryption at rest/transit

### Output Format

```markdown
## Security Scan Report

**Scope:** [files/directories scanned]
**Date:** [timestamp]
**Risk Level:** [CLEAN | LOW | MEDIUM | HIGH | CRITICAL]

### Findings

| # | Severity | Category | File | Line | Finding | Recommendation |
|---|----------|----------|------|------|---------|----------------|
| 1 | HIGH | SQL Injection | src/api.ts | 45 | Unsanitized user input in query | Use parameterized queries |

### Summary

- **Critical:** [N] findings
- **High:** [N] findings
- **Medium:** [N] findings
- **Low:** [N] findings
- **Passed:** [N] checks
```

## Common Vulnerabilities Checklist

- [ ] SQL Injection (OWASP A03:2021)
- [ ] Cross-Site Scripting (OWASP A03:2021)
- [ ] Broken Authentication (OWASP A07:2021)
- [ ] Sensitive Data Exposure (OWASP A02:2021)
- [ ] Security Misconfiguration (OWASP A05:2021)
- [ ] Vulnerable Dependencies (OWASP A06:2021)
