# Contributing to Claude Code Bible

Thanks for contributing! Claude Code Bible is the most comprehensive open-source resource for AI agent skills, MCP servers, and agent workflows. This guide covers how to add resources, fix issues, and submit PRs.

> **First-time contributor?** Look for issues labeled `good-first-issue` or `help-wanted` in the [Issues](https://github.com/michielhdoteth/claude-bible/issues) tab.

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
   git clone https://github.com/YOUR_USERNAME/claude-bible.git
   cd claude-bible
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

### High Value (Fast Review)

- **Skills** - Production-ready SKILL.md files with clear workflows, anti-patterns, and usage examples
- **MCP Servers** - New server configs with star counts, use cases, and working setup examples
- **Loops** - Repeatable agent workflows with verification criteria and feedback mechanisms
- **Hooks** - Working automation scripts with documentation

### Medium Value (Standard Review)

- **Tool updates** - Version bumps, new features for indexed tools
- **Documentation fixes** - Typos, unclear instructions, missing info
- **New integrations** - How Claude Code works with other services

### Low Value (May Decline)

- Duplicate content already covered
- Tools with <100 stars unless exceptional quality
- Opinionated recommendations without evidence
- Marketing content without technical substance

---

## Adding a Skill

Skills are structured instruction sets that teach AI assistants how to perform specific tasks. They follow the [SKILL.md standard](https://agentskills.io).

### Step 1: Create the directory

```
skills/
  your-skill-name/
    SKILL.md
```

### Step 2: Write SKILL.md using this template

```markdown
# Skill: Your Skill Name

One-line description of what this skill does.

## Overview

2-3 sentences explaining the skill's purpose, approach, and expected outcome.

## When to Use

- Scenario 1: Description
- Scenario 2: Description
- Scenario 3: Description

## Workflow

### Step 1: Step Name
What to do and how.

### Step 2: Step Name
What to do and how.

### Step 3: Step Name
What to do and how.

## Anti-Patterns

1. **Bad pattern** - Why it's wrong and what to do instead
2. **Bad pattern** - Why it's wrong and what to do instead

## Verification

How to verify the skill worked correctly.
```

### Step 3: Update the README

Add your skill to the appropriate table in `skills/README.md`.

### Skill Categories

| Category | Description |
|----------|-------------|
| `development` | TDD, debugging, code review, git workflows |
| `planning` | Requirements, architecture, task breakdown |
| `writing` | Documentation, emails, marketing copy |
| `security` | Auditing, hardening, vulnerability analysis |
| `design` | UI/UX, prototyping, design systems |
| `data` | Analysis, visualization, ETL pipelines |
| `devops` | CI/CD, infrastructure, deployment |
| `multimedia` | Image, video, audio generation |

---

## Adding an MCP Server

MCP (Model Context Protocol) servers connect AI assistants to external tools and data sources.

### Step 1: Verify it's not already listed

Check `mcps/README.md` for duplicates.

### Step 2: Verify the server exists

- Must have a working GitHub repo
- Prefer servers with 100+ stars (exceptions for exceptional quality)
- Must be actively maintained (commit in last 6 months)

### Step 3: Add to mcps/README.md

Use this format:

```markdown
### Server Name

**Stars:** Xk | **Category:** Category | **Auth:** API Key / None

Brief description of what it does and why you'd use it.

#### Setup

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

#### Use Cases

- Use case 1 with example
- Use case 2 with example
```

### Step 4: Update the catalog

Add to `mcps/catalog.json` inside the `servers` array:

```json
{
  "id": "server-name",
  "name": "Server Name",
  "category": "Databases",
  "github": "https://github.com/org/repo",
  "stars": 1234,
  "description": "One-line description",
  "install": "npx -y @package/server-name",
  "license": "MIT",
  "verified": false,
  "tags": ["tag1", "tag2"]
}
```

### MCP Categories

| Category | Description |
|----------|-------------|
| `general-purpose` | Broad contextual capabilities |
| `development` | Code, debugging, testing tools |
| `database` | SQL, NoSQL, data access |
| `search` | Web search, documentation lookup |
| `project-management` | Issues, boards, tracking |
| `communication` | Chat, email, notifications |
| `cloud` | AWS, GCP, Azure integrations |
| `security` | Auth, secrets, vulnerability scanning |

---

## Adding a Loop

Loops are repeatable agent workflows with built-in feedback mechanisms. Unlike one-shot prompts, loops let agents learn from results and iterate.

### Step 1: Understand the loop structure

A good loop answers four questions:
1. What is the agent trying to accomplish?
2. How will it know whether the latest attempt worked?
3. What should it do with what it learned?
4. When should it finish or ask for help?

### Step 2: Create the loop file

Place it in the appropriate category directory:

```
loops/
  engineering/
    015-my-new-loop.md
  content/
    015-my-new-loop.md
  evaluation/
    015-my-new-loop.md
```

### Step 3: Use this template

```markdown
# Loop Name

One-line description of what this loop accomplishes.

## Category

engineering | content | evaluation | operations | design

## Goal

What the agent is trying to accomplish.

## Verification

How the agent knows whether the latest attempt worked.

## Workflow

### Step 1: Description
What to do and how.

### Step 2: Description
What to do and how.

### Step 3: Description
What to do and how.

## Exit Criteria

- When to stop iterating
- When to escalate to a human
- When to move to the next loop

## Anti-Patterns

1. **Bad pattern** - Why it's wrong
```

### Step 4: Update the README

Add your loop to the appropriate table in `loops/README.md`.

### Loop Categories

| Category | Description |
|----------|-------------|
| `engineering` | Code quality, testing, performance, cleanup |
| `content` | Writing, documentation, marketing |
| `evaluation` | Analysis, benchmarking, assessment |
| `operations` | Deployment, monitoring, incident response |
| `design` | UI/UX, prototyping, iteration |

---

## Updating Catalog Files

Catalog files use JSON format. The MCP catalog (`mcps/catalog.json`) uses this structure:

```json
{
  "name": "MCP Server Catalog",
  "version": "2026.06",
  "servers": [
    {
      "id": "unique-kebab-case-id",
      "name": "Human Readable Name",
      "category": "Databases",
      "github": "https://github.com/org/repo",
      "stars": 1234,
      "description": "One-line description",
      "install": "npx -y @package/name",
      "license": "MIT",
      "verified": false,
      "tags": ["relevant", "tags"]
    }
  ]
}
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique kebab-case identifier |
| `name` | string | Human-readable name |
| `description` | string | One-line description |
| `github` | string | URL to GitHub repository |
| `install` | string | Install command |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `category` | string | Must match a valid category |
| `stars` | number | GitHub star count |
| `license` | string | License type |
| `verified` | boolean | Whether tested by maintainers |
| `tags` | array | Relevant search tags |

### Validation

The CI pipeline validates all catalog files on PR. See [validate-catalog.yml](.github/workflows/validate-catalog.yml) for details.

---

## PR Guidelines

### PR Title Format

```
type: brief description

Types: feat, fix, docs, style, refactor, test, chore

Examples:
feat: add tdd-loop skill
fix: correct broken link in mcps README
docs: update contributing guide with loop template
```

### PR Description

Use this template:

```markdown
## What

Brief description of the change.

## Why

Why this change is needed.

## How

How you implemented it.

## Checklist

- [ ] Follows existing format and style
- [ ] All links are valid
- [ ] Catalog files updated (if applicable)
- [ ] README updated (if applicable)
- [ ] No duplicate content
- [ ] Technical claims are accurate
```

### PR Review Checklist

Every PR is automatically reviewed. To pass:

```
[ ] Accuracy - Technical claims are correct, versions are current
[ ] Structure - Follows existing format (headers, tables, code blocks)
[ ] SEO/AEO/GEO - Clear answers, self-contained passages, FAQ sections
[ ] Links - All URLs are valid and accessible
[ ] Formatting - Consistent markdown, language tags on code blocks
[ ] Spelling - Clean, professional writing
[ ] Deduplication - No overlap with existing content
[ ] Catalog - JSON files are valid and have required fields
```

### Review Timeline

- **Simple fixes** (typos, broken links): Merged within 24 hours
- **New content** (skills, MCPs, loops): Reviewed within 3-5 days
- **Major changes** (structure, workflows): Reviewed within 1 week

---

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Respect different viewpoints and experiences
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment, trolling, or personal attacks
- Publishing others' private information without permission
- Any conduct that would be inappropriate in a professional setting

### Enforcement

Project maintainers have the right to remove, edit, or reject comments, commits, code, issues, and other contributions that don't align with this Code of Conduct.

---

## Getting Featured

### Shoutouts

Contributors who submit high-quality content get featured in:

- **README.md** - Top contributors listed in the Contributors section
- **Release notes** - Mentioned in major release announcements
- **Social media** - Featured on project social channels

### What Gets Featured

- **First-time contributors** - Your first merged PR gets a shoutout
- **Quality content** - Skills/MCPs/Loops that solve real problems
- **Community help** - Answering issues, reviewing PRs, helping newcomers
- **Documentation** - Improving guides, fixing gaps, adding examples

### Star History

If you find Claude Code Bible useful, please star the repo! Stars help others discover the project and motivate continued development.

---

## Questions?

- Open an issue with the `question` label
- Start a discussion in the [Discussions](https://github.com/michielhdoteth/claude-bible/discussions) tab
- Reach out on social media

---

## Contributors

<a href="https://github.com/michielhdoteth/claude-bible/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=michielhdoteth/claude-bible" />
</a>

---

Thank you for contributing to Claude Code Bible!
