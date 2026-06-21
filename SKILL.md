---
name: awesome-ai-agent-tools
description: >
  Install and manage AI agent skills, MCP servers, and agent workflows from the
  Awesome AI Agent Tools collection. 69 skills, 66 MCP servers, 73 agent loops.
  Works with Claude Code, Cursor, Codex, OpenCode, Gemini CLI, Copilot, and 30+ agents.
  Use when the user wants to install skills, set up MCP servers, or browse agent workflows.
---

# Awesome AI Agent Tools

The most comprehensive open-source library for AI agent skills, MCP servers, and agent workflows.

## Quick Start

### Install Skills

```bash
# Install all skills
npx skills add michielhdoteth/awesome-ai-agent-tools

# Install a specific skill
npx skills add michielhdoteth/awesome-ai-agent-tools --skill test-driven-development

# Search for skills
npx skills find "debugging"
```

### Install MCP Servers

```bash
# Install an MCP server
npx add-mcp <url-or-package>

# Examples
npx add-mcp @upstash/context7-mcp
npx add-mcp @anthropic-ai/mcp-server-playwright
npx add-mcp https://mcp.neon.tech/mcp

# Search for servers
npx add-mcp find
```

### Browse the Collection

| Resource | Count | Catalog |
|----------|------:|---------|
| Skills | 69 | [skills/catalog.json](skills/catalog.json) |
| MCP Servers | 66 | [mcps/catalog.json](mcps/catalog.json) |
| Agent Loops | 73 | [loops/catalog.json](loops/catalog.json) |

## What's Inside

### Skills (69 across 9 categories)
Development (28), Productivity (14), Design (8), Content (7), Testing (5), DevOps (5), Marketing (3), Data (3), Security (2)

### MCP Servers (66 across 16 categories)
Official Reference (6), Developer Tools (8), Browser/Web (7), Databases (8), Cloud (5), DevOps (5), Orchestration (3)

### Agent Loops (73 across 7 categories)
Engineering (41), Evaluation (14), Operations (9), Content (3), Design (6)

## Cross-Platform

Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, Aider, Windsurf, and 30+ more agents.

## Links

- [GitHub](https://github.com/michielhdoteth/awesome-ai-agent-tools)
- [Contributing Guide](CONTRIBUTING.md)
- [SKILL.md Standard](https://agentskills.io)
- [MCP Documentation](https://modelcontextprotocol.io)
