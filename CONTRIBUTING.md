# Contributing to Awesome AI Agent Tools

Thanks for contributing! Awesome AI Agent Tools is the most comprehensive open-source library for AI agent skills, MCP servers, and agent workflows. This guide covers how to add resources, fix issues, and submit PRs.

> **First-time contributor?** Look for issues labeled `good-first-issue` or `help-wanted` in the [Issues](https://github.com/michielhdoteth/awesome-ai-agent-tools/issues) tab.

---

## Table of Contents

- [Quick Start](#quick-start)
- [What We Accept](#what-we-accept)
- [Adding a Skill](#adding-a-skill)
- [Adding an MCP Server](#adding-an-mcp-server)
- [Adding a Loop](#adding-a-loop)
- [Updating Catalog Files](#updating-catalog-files)
- [PR Guidelines](#pr-guidelines)
- [Code of Conduct](#code-of-conduct)
- [Getting Featured](#getting-featured)

---

## Quick Start

1. **Fork** the repo on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/awesome-ai-agent-tools.git
   cd awesome-ai-agent-tools
   ```
3. **Create a branch** for your contribution:
   ```bash
   git checkout -b feat/add-my-skill
   ```
4. **Make your changes** (see templates below)
5. **Validate** your changes locally:
   ```bash
   # If you touched catalog.json files
   python -m json.tool mcps/catalog.json > /dev/null && echo "Valid JSON"
   ```
6. **Commit** with a descriptive message:
   ```bash
   git commit -m "Add skill: my-skill-name - brief description"
   ```
7. **Push** and open a PR

---

## What We Accept

### Skills
Reusable instruction files (SKILL.md format) that teach AI agents how to perform specific tasks. Must follow the [SKILL.md open standard](https://agentskills.io).

### MCP Servers
Model Context Protocol server configurations with setup instructions, use cases, and security considerations.

### Agent Loops
Repeatable AI agent workflows with feedback mechanisms. Must include:
- Prompt text (exact instructions for the agent)
- Verification criteria
- Source attribution

### All Contributions Must:
- Be real, working resources (no fabricated content)
- Include proper attribution and source URLs
- Follow the existing file format
- Work across multiple AI coding assistants (not vendor-locked)

---

## Adding a Skill

### File Structure

```
skills/your-skill-name/
  SKILL.md              # Required: skill instructions
  references/           # Optional: additional docs
  scripts/              # Optional: helper scripts
```

### SKILL.md Template

```markdown
---
name: your-skill-name
description: >
  Brief description of what this skill does and when to use it.
  This helps agents decide when to load the skill.
---

# Your Skill Name

## Purpose

What this skill does (one paragraph).

## When to Use

Trigger conditions for this skill:
- When the user asks to...
- When working on...

## Workflow

### Step 1: [First Step]
[Instructions]

### Step 2: [Second Step]
[Instructions]

## Rules

- [Constraint 1]
- [Constraint 2]

## Output Format

[What the result should look like]

## References

- [Link to original source]
- [Link to documentation]
```

### Adding to Catalog

Add an entry to `skills/catalog.json`:

```json
{
  "id": "your-skill-name",
  "name": "Your Skill Name",
  "description": "Brief description",
  "category": "development",
  "author": "your-name",
  "source": "https://github.com/your-repo",
  "tags": ["tag1", "tag2"],
  "local": true,
  "localPath": "skills/your-skill-name/SKILL.md"
}
```

---

## Adding an MCP Server

### Entry Format

Add to `mcps/catalog.json`:

```json
{
  "id": "server-name",
  "name": "Server Name",
  "category": "databases",
  "github": "https://github.com/org/repo",
  "stars": 1000,
  "description": "What this server does",
  "install": "npx -y @org/server-name",
  "license": "MIT",
  "verified": true,
  "tags": ["database", "postgresql"]
}
```

### Requirements

- Must be a real, working MCP server
- Must include a GitHub link
- Must include an install command
- Security note: flag if server has known vulnerabilities

---

## Adding a Loop

### File Structure

```
loops/category/your-loop-name.md
```

### Loop Template

```markdown
---
title: Your Loop Name
category: engineering
author: Original Author
published: 2026-01-01
source: https://github.com/repo/loop
---

# Your Loop Name

## Use When

[When to use this loop]

## Prompt

[Exact prompt text for the agent]

## Verification

[What proves the loop succeeded]

## Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Why

[Why this loop is useful]

## Keywords

[keyword1, keyword2, keyword3]

## Related Loops

- [other-loop](../category/other-loop.md)
```

### Adding to Catalog

Add to `loops/catalog.json`:

```json
{
  "id": "your-loop-name",
  "title": "Your Loop Name",
  "category": "engineering",
  "author": "Original Author",
  "source": "https://github.com/repo/loop",
  "description": "What this loop does",
  "prompt": "Exact prompt text...",
  "verification": "Success criteria",
  "tags": ["tag1", "tag2"],
  "related": ["other-loop"]
}
```

---

## Updating Catalog Files

### Validation

Before submitting, validate your JSON:

```bash
python -m json.tool mcps/catalog.json > /dev/null && echo "mcps valid"
python -m json.tool skills/catalog.json > /dev/null && echo "skills valid"
python -m json.tool loops/catalog.json > /dev/null && echo "loops valid"
```

### Required Fields

**mcps/catalog.json:**
- `id` (string, unique)
- `name` (string)
- `description` (string)
- `category` (string)
- `github` (URL)
- `install` (string)

**skills/catalog.json:**
- `id` (string, unique)
- `name` (string)
- `description` (string)
- `category` (string)
- `author` (string)

**loops/catalog.json:**
- `id` (string, unique)
- `title` (string)
- `category` (string)
- `author` (string)
- `source` (URL)
- `prompt` (string)

---

## PR Guidelines

### Title Format

```
Add [type]: [name] - brief description
```

Examples:
- `Add skill: data-analysis - CSV/Excel analysis with MCP`
- `Add MCP: supabase-mcp - Backend management via natural language`
- `Add loop: quality-streak-loop - Iterative quality improvement`

### PR Description

```markdown
## What
- Added [skill/MCP/loop]: [name]

## Why
- [Reason for adding]

## Source
- [Link to original source]
- [Attribution]

## Verification
- [How you verified it works]
```

### Review Checklist

- [ ] Real, working resource (not fabricated)
- [ ] Proper attribution and source URL
- [ ] Follows file format conventions
- [ ] Catalog entry added with required fields
- [ ] No duplicate IDs in catalog
- [ ] Works across multiple AI coding assistants
- [ ] No vendor lock-in

---

## Code of Conduct

- Be respectful and inclusive
- Focus on quality over quantity
- Attribute all sources properly
- No self-promotion unless relevant
- No fabricated or fake content

---

## Getting Featured

Outstanding contributions may be featured in:
- The README.md community section
- The catalog.json highlighted entries
- Social media shoutouts

Criteria:
- High-quality, well-documented resource
- Broad cross-platform compatibility
- Active maintenance and updates
- Community adoption (stars, installs)

---

## Questions?

Open an issue with the `question` label. We're happy to help!

---

**Thank you for making Awesome AI Agent Tools better for everyone!**
