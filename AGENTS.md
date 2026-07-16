# AGENTS.md

This file provides context for AI coding agents working with this repository.

## What Is This Repo?

Awesome AI Agent Tools is the most comprehensive open-source library of AI agent components. It contains 600 installable skills, MCP servers, agent workflows, subagents, hooks, plugins, prompts, and tools curated from 100+ repositories.

## Repository Structure

| Directory | Count | What It Contains |
|-----------|-------|------------------|
| skills/ | 88 | SKILL.md files -- reusable instruction sets that teach AI agents new capabilities |
| mcps/ | 119 | Model Context Protocol server configs with install commands |
| loops/ | 115 | Agent workflow patterns with verification criteria |
| subagents/ | 32 | Specialized agent definitions with model routing |
| hooks/ | 25 | Claude Code hooks for security, automation, and quality |
| plugins/ | 53 | Extensions for Claude Code, OpenCode, Cursor, and 6 more platforms |
| prompts/ | 102 | Curated prompt collections and marketplace links |
| tools/ | 66 | CLI utilities that enhance agent capabilities |

## Catalog Format

Each directory contains a `catalog.json` file with structured metadata:

```json
{
  "skills": [
    {
      "id": "skill-name",
      "name": "Display Name",
      "category": "Development",
      "description": "What this skill does",
      "githubUrl": "https://github.com/owner/repo",
      "installCommand": "npx skills add owner/repo --skill skill-name"
    }
  ]
}
```

## How to Contribute

1. Fork the repo
2. Add your entry to the correct catalog.json
3. Ensure JSON is valid: `cat skills/catalog.json | python3 -m json.tool`
4. Submit a PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details. Or give your AI agent the [contribution skill](CONTRIBUTE.md) and it will do it automatically.

## Standards

- Skills follow the [SKILL.md open standard](https://agentskills.io)
- MCP servers follow the [Model Context Protocol](https://modelcontextprotocol.io)
- All entries are validated by GitHub Actions on PR

## Key Files

- `README.md` -- Main overview and catalog
- `llms.txt` -- Optimized for AI agent consumption
- `CONTRIBUTING.md` -- Human contribution guide
- `CONTRIBUTE.md` -- Agent contribution skill
- `skills/catalog.json` -- Machine-readable skills catalog
- `mcps/catalog.json` -- Machine-readable MCP catalog
- `loops/catalog.json` -- Machine-readable loops catalog
