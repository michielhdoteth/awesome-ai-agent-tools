---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Documentation update for recent code changes"
---

# /update-docs

Update documentation to reflect recent code changes.

## Usage

```
/update-docs [files | --recent]
```

## Protocol

### Phase 1: Identify Changes

1. Check recent commits: `git log --oneline -10`
2. Identify changed files: `git diff --name-only HEAD~5`
3. Filter for files needing doc updates:
   - API changes (endpoints, parameters, return types)
   - Configuration changes
   - New features or deprecations
   - README-affecting changes

### Phase 2: Update Documentation

For each change, update the relevant docs:

1. **README.md**: Update feature list, usage examples, configuration
2. **API docs**: Update endpoint descriptions, parameters, examples
3. **CHANGELOG.md**: Add entry for user-facing changes
4. **Code comments**: Update inline documentation for complex logic

### Phase 3: Verify

1. Check all code examples actually work
2. Verify links aren't broken
3. Ensure consistent terminology
4. Run docs build if applicable: `npm run docs:build`

## Documentation Checklist

- [ ] README reflects current features
- [ ] API docs match implementation
- [ ] Examples are runnable
- [ ] CHANGELOG updated
- [ ] No broken links
