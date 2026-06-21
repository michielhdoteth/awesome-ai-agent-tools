---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Generate or rewrite README from codebase analysis"
---

# /generate-readme

Generate a comprehensive README from codebase analysis.

## Usage

```
/generate-readme [--overwrite]
```

## Protocol

### Phase 1: Codebase Analysis

1. Scan project structure: `find . -type f -name "*.ts" -o -name "*.js" -o -name "*.py" | head -50`
2. Read package.json / pyproject.toml for metadata
3. Identify main entry points
4. Analyze exported functions/classes
5. Check for existing documentation

### Phase 2: Generate Content

Create README with these sections:

```markdown
# Project Name

[One-line description]

## Features

- [Feature 1]
- [Feature 2]

## Installation

[package manager] install [package-name]

## Usage

[Basic usage example]

## API Reference

[Key exports documented]

## Configuration

[Environment variables, config files]

## Contributing

[How to contribute]

## License

[License type]
```

### Phase 3: Quality Check

1. All code examples compile/run
2. Installation instructions work from clean state
3. Links are valid
4. Badges are accurate

## Anti-Patterns

- Don't generate placeholder content
- Don't include inaccurate examples
- Don't copy-paste from other READMEs without adapting
