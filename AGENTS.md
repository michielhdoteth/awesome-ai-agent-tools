# AGENTS.md

This file provides context for AI coding agents working with this repository.

## What Is This Repo?

Awesome AI Agent Tools is an open-source library of installable AI agent components: skills, MCP servers, agent workflows, subagents, hooks, plugins, prompts, and tools curated from 100+ repositories.

## Repository Structure

| Directory | What It Contains |
|-----------|------------------|
| skills/ | SKILL.md files: reusable instruction sets that teach AI agents new capabilities |
| mcps/ | Model Context Protocol server configs with install commands |
| loops/ | Agent workflow patterns with verification criteria |
| subagents/ | Specialized agent definitions with model routing |
| hooks/ | Claude Code hooks for security, automation, and quality |
| plugins/ | Extensions for Claude Code, OpenCode, Cursor, and 6 more platforms |
| prompts/ | Curated prompt collections and marketplace links |
| tools/ | CLI utilities that enhance agent capabilities |

Exact per-category counts live in each `catalog.json` and in the generated `readme.md`. Do not hardcode counts in hand-written docs: they go stale. The generator reads the catalogs and emits the counts.

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

See [contributing.md](contributing.md) for full details. It is also the agent contribution skill: give it to your AI agent and it handles everything.

## Standards

- Skills follow the [SKILL.md open standard](https://agentskills.io)
- MCP servers follow the [Model Context Protocol](https://modelcontextprotocol.io)
- All entries are validated by GitHub Actions on PR

## Key Files

- `readme.md` - Main overview and catalog
- `SKILL.md` - Agent skill for installing from this collection
- `contributing.md` - Human and agent contribution guide
- `skills/catalog.json` - Machine-readable skills catalog
- `mcps/catalog.json` - Machine-readable MCP catalog
- `loops/catalog.json` - Machine-readable loops catalog
