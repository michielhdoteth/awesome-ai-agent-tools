---
name: awesome-ai-agent-tools
description: >
  Install and manage AI agent skills, MCP servers, and agent workflows from the
  Awesome AI Agent Tools collection. Use this when the user wants to install skills,
  set up MCP servers, browse agent workflows, or explore the AI agent tool ecosystem.
  Supports Claude Code, Cursor, Codex, OpenCode, Gemini CLI, Copilot, and 30+ agents.
---

# Awesome AI Agent Tools

> The most comprehensive open-source library for AI agent skills, MCP servers, and agent workflows.

## What This Skill Does

This skill teaches you how to install and use resources from the [Awesome AI Agent Tools](https://github.com/michielhdoteth/awesome-ai-agent-tools) collection. It covers three types of resources:

1. **Skills** (69 files) - Reusable SKILL.md instruction sets for specific tasks
2. **MCP Servers** (66 configs) - Model Context Protocol servers for tool integration
3. **Agent Loops** (73 workflows) - Repeatable patterns with prompts and verification

## When to Use

- When the user wants to install AI agent skills
- When the user wants to set up MCP servers
- When the user wants to browse or use agent workflows
- When the user asks about AI agent tools, skills, or MCPs
- When the user wants to explore the AI development ecosystem

## Installation Methods

### Method 1: Install via skills.sh CLI (Recommended)

The fastest way to install skills from this collection:

```bash
# Install all skills from this repo
npx skills add michielhdoteth/awesome-ai-agent-tools

# Install a specific skill
npx skills add michielhdoteth/awesome-ai-agent-tools --skill test-driven-development

# Search for skills by keyword
npx skills find "debugging"

# List installed skills
npx skills list

# Update all installed skills
npx skills update
```

### Method 2: Install via add-mcp CLI

For MCP servers, use the Neon add-mcp tool:

```bash
# Install a specific MCP server
npx add-mcp <url-or-package>

# Examples:
npx add-mcp https://mcp.neon.tech/mcp
npx add-mcp @upstash/context7-mcp
npx add-mcp @anthropic-ai/mcp-server-playwright

# Search for available servers
npx add-mcp find

# List supported agents
npx add-mcp list-agents

# Install for a specific agent
npx add-mcp -a cursor <url-or-package>

# Install globally
npx add-mcp -g <url-or-package>

# Skip prompts
npx add-mcp -y <url-or-package>
```

### Method 3: Clone and Copy

```bash
# Clone the full collection
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
cd awesome-ai-agent-tools

# Copy skills to your project
cp -r skills/test-driven-development/.claude/skills/ your-project/.claude/skills/
cp -r skills/test-driven-development/.opencode/skills/ your-project/.opencode/skills/
cp -r skills/test-driven-development/.agents/skills/ your-project/.agents/skills/
```

## Browsing Resources

### Skills by Category

| Category | Count | Top Skills |
|----------|------:|------------|
| Development | 28 | test-driven-development, systematic-debugging, code-reviewer |
| Productivity | 14 | brainstorming, writing-plans, verification-before-completion |
| Design | 8 | figma-design-to-code, multimedia-generation, playwright-automation |
| Content | 7 | cold-email, copywriting, humanizer |
| Testing | 5 | webapp-testing, agent-browser |
| DevOps | 5 | devops-infrastructure, using-git-worktrees |
| Marketing | 3 | seo-audit, content-strategy |
| Data | 3 | data-analysis, supabase-postgres-best-practices |
| Security | 2 | mcp-security, security-guidance |

### MCP Servers by Category

| Category | Count | Top Servers |
|----------|------:|-------------|
| Official Reference | 6 | Filesystem, Fetch, Memory, Sequential Thinking, Git, Brave Search |
| Developer Tools | 8 | Context7 (53K stars), MarkItDown (119K stars), GitHub MCP |
| Browser/Web | 7 | Playwright (31K stars), Firecrawl (29.7K stars) |
| Databases | 8 | PostgreSQL, Neon, Supabase, MindsDB, Redis |
| Cloud Platforms | 5 | AWS, Cloudflare, DigitalOcean, Vercel |
| DevOps | 5 | Docker, Kubernetes, Terraform, Pulumi |
| Agent Orchestration | 3 | n8n (185K stars), Ruflo, Claude-Flow |

### Agent Loops by Category

| Category | Count | Top Loops |
|----------|------:|-----------|
| Engineering | 41 | overnight-docs-sweep, alpha-loop, kitchenloop, autoloop |
| Evaluation | 14 | core-agentic-workflow, quality-streak-loop |
| Operations | 9 | agent-teams, dynamic-workflows, developer-os-memory |
| Content | 3 | content-refresh-loop, seo-geo-visibility-loop |
| Design | 6 | ui-ux-score-loop, accessibility-repair-loop |

## Cross-Platform Compatibility

This collection works with every major AI coding assistant:

| Platform | Skills Path | MCP Support |
|----------|-------------|:-----------:|
| Claude Code | `.claude/skills/` | Yes |
| OpenCode | `.opencode/skills/` | Yes |
| Codex | `.agents/skills/` | Yes |
| Cursor | `.cursor/skills/` | Yes |
| Gemini CLI | `.gemini/skills/` | Yes |
| Copilot | `.github/skills/` | Yes |
| Aider | `.aider/skills/` | Yes |
| Windsurf | `.windsurf/skills/` | Yes |

All skills follow the [SKILL.md open standard](https://agentskills.io) adopted by ~40 clients.

## Quick Install Commands

### Popular Skills

```bash
# TDD workflow
npx skills add michielhdoteth/awesome-ai-agent-tools --skill test-driven-development

# Systematic debugging
npx skills add michielhdoteth/awesome-ai-agent-tools --skill systematic-debugging

# Code review
npx skills add michielhdoteth/awesome-ai-agent-tools --skill code-reviewer

# Brainstorming
npx skills add michielhdoteth/awesome-ai-agent-tools --skill brainstorming

# Writing plans
npx skills add michielhdoteth/awesome-ai-agent-tools --skill writing-plans
```

### Popular MCP Servers

```bash
# Context7 - Version-pinned library docs
npx add-mcp @upstash/context7-mcp

# Playwright - Browser automation
npx add-mcp @anthropic-ai/mcp-server-playwright

# Neon - Serverless Postgres
npx add-mcp https://mcp.neon.tech/mcp

# GitHub - Issues, PRs, code search
npx add-mcp @anthropic-ai/mcp-server-github
```

## Catalog Files

For programmatic discovery, use the JSON catalogs:

- `skills/catalog.json` - 69 skills with metadata
- `mcps/catalog.json` - 66 MCP servers with install commands
- `loops/catalog.json` - 73 agent workflows with prompts

## Contributing

To add resources to this collection, see [CONTRIBUTING.md](https://github.com/michielhdoteth/awesome-ai-agent-tools/blob/main/CONTRIBUTING.md).

## Rules

- Always verify a skill/MCP before recommending it
- Prefer official or well-maintained sources
- Check cross-platform compatibility
- Follow the SKILL.md standard for new skills
- Attribute all sources properly

## Output Format

When installing resources, confirm:
1. What was installed (name, type)
2. Where it was installed (path)
3. How to use it (next steps)
4. Any configuration needed

## References

- [GitHub Repository](https://github.com/michielhdoteth/awesome-ai-agent-tools)
- [Skills.sh CLI](https://skills.sh) - Official skill package manager
- [add-mcp CLI](https://github.com/neon-mcp/add-mcp) - MCP server installer
- [SKILL.md Standard](https://agentskills.io) - Open skill format
- [MCP Documentation](https://modelcontextprotocol.io) - Model Context Protocol
