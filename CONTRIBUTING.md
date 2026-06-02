# Contributing to Claude Code Bible

Thanks for contributing! This guide covers how to add resources, fix issues, and submit PRs.

## Quick Start

1. Fork the repo
2. Create a branch: `git checkout -b feat/add-new-mcp`
3. Make your changes
4. Run the review checklist below
5. Submit a PR

## What We Accept

### High Value (Fast Review)

- **MCP Servers** - New server configs with star counts, use cases, and setup examples
- **Skills** - Production-ready SKILL.md files with clear workflows
- **Hooks** - Working automation scripts with documentation
- **Workflow patterns** - Tested patterns with real examples

### Medium Value (Standard Review)

- **Tool updates** - Version bumps, new features for indexed tools
- **Documentation fixes** - Typos, unclear instructions, missing info
- **New integrations** - How Claude Code works with other services

### Low Value (May Decline)

- Duplicate content already covered
- Tools with <100 stars unless exceptional quality
- Opinionated recommendations without evidence
- Marketing content without technical substance

## PR Review Checklist

Every PR is automatically reviewed by Claude Code. To pass:

```
[ ] Accuracy - Technical claims are correct, versions are current
[ ] Structure - Follows existing format (headers, tables, code blocks)
[ ] SEO/AEO/GEO - Clear answers, self-contained passages, FAQ sections
[ ] Links - All URLs are valid and accessible
[ ] Formatting - Consistent markdown, language tags on code blocks
[ ] Spelling - Clean, professional writing
[ ] Deduplication - No overlap with existing content
```

## Content Format

### MCP Servers

```markdown
## Server Name

**Stars:** Xk | **Category:** Database | **Auth:** API Key

Brief description of what it does and why you'd use it.

### Setup

\`\`\`json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/server-name"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
\`\`\`

### Use Cases

- Use case 1 with example
- Use case 2 with example
```

### Skills

```markdown
# Skill: Skill Name

## Overview

What this skill does in 2-3 sentences.

## When to Use

- Scenario 1
- Scenario 2

## Workflow

### Step 1: Description
What to do and how.

### Step 2: Description
What to do and how.

## Anti-Patterns

1. **Bad pattern** - Why it's wrong and what to do instead
```

### Hooks

```markdown
## Hook Name

**Type:** PreToolUse/PostToolUse/SessionStart | **Matcher:** Tool name

What it does and why.

\`\`\`json
{ ... }
\`\`\`
```

## Style Guide

- **Headers**: Use `##` for sections, `###` for subsections
- **Code blocks**: Always include language tag (` ```json `, ` ```bash `, etc.)
- **Tables**: Use for structured data (stars, categories, comparisons)
- **Links**: Use relative paths for internal, full URLs for external
- **Dates**: Include `Last updated: YYYY-MM-DD` on modified files
- **No emojis** in technical content (leads to Unicode errors)

## Adding MCP Servers

1. Check it's not already listed in `mcps/README.md`
2. Verify the star count on GitHub
3. Include working config example
4. Add to appropriate category in the table
5. Note any auth requirements

## Adding Skills

1. Create directory: `skills/your-skill-name/`
2. Add `SKILL.md` following the format above
3. Update `skills/README.md` table
4. Include at least one usage example

## Adding Hooks

1. Add to `hooks/README.md` with working config
2. Include environment variables used
3. Note any platform-specific requirements
4. Test the hook before submitting

## Questions?

Open an issue with the `question` label.
