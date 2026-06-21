---
allowed-tools: "Bash(git:*)|Read(*)|Grep(*)"
description: "Generate changelog from git history"
---

# /changelog

Generate changelog entries from git history.

## Usage

```
/changelog [--since v1.0.0] [--until HEAD]
```

## Protocol

### Phase 1: Gather Commits

```bash
# Get commits since last tag
git log $(git describe --tags --abbrev=0 2>/dev/null || echo "HEAD~20")..HEAD --oneline --no-merges

# Or since specific version
git log v1.0.0..HEAD --oneline --no-merges
```

### Phase 2: Categorize

Group commits by type:

- **Added**: `feat:` commits
- **Changed**: `refactor:`, `perf:` commits
- **Fixed**: `fix:` commits
- **Removed**: Removed features
- **Security**: `security:` commits
- **Documentation**: `docs:` commits

### Phase 3: Generate

```markdown
# Changelog

## [Unreleased]

### Added
- New feature X (abc1234)

### Fixed
- Bug in Y module (def5678)

### Changed
- Improved performance of Z (ghi9012)
```

### Phase 4: Validate

1. Every user-facing change is included
2. Breaking changes are highlighted
3. Links to commits work
