# Subagents Catalog

Reference directory linking to external subagent repositories, frameworks, and platforms.

This catalog is a **discovery index** — it catalogs tools, frameworks, and collections from the broader AI agent ecosystem. It is not an implementation; it points to where things live.

## What's in the catalog

- **Official SDK** — Anthropic, OpenAI, Google, Microsoft agent development kits
- **Framework** — CrewAI, LangGraph, AutoGen, and 7 other multi-agent frameworks
- **Coding Agent** — 12 autonomous coding tools (OpenCode, Claude Code, Aider, etc.)
- **Subagent Collection** — 8 curated lists of agent configurations
- **Orchestration** — LangSmith, Langfuse, AgentOps, and other observability platforms
- **Agent-as-a-Service** — Replit Agent, Devin, GitHub Copilot Agent, Factory AI
- **Protocol** — MCP and A2A interoperability standards
- **Workflow Platform** — n8n, Dify, Flowise
- **Memory System** — mem0 and Cognee for persistent agent memory

## How to use

```bash
# List all categories and counts
cat catalog.json | jq '.categories'

# Find coding agents with most stars
cat catalog.json | jq '[.subagents[] | select(.category == "Coding Agent")] | sort_by(-.stars) | .[].name'

# Get all GitHub URLs for a category
cat catalog.json | jq -r '.subagents[] | select(.category == "Framework") | .githubUrl'

# Search by name or description
cat catalog.json | jq '.subagents[] | select(.name | test("lang"; "i"))'
```

## Data format

Each entry contains:

| Field | Description |
|-------|-------------|
| `id` | Kebab-case identifier |
| `name` | Display name |
| `category` | One of the 9 categories |
| `stars` | GitHub stars (if available) |
| `description` | 1-2 sentence summary |
| `githubUrl` | Repository URL (if available) |
| `websiteUrl` | Project website (if available) |
| `installCommand` | Install command (if available) |
| `license` | License type |
| `language` | Primary language |

## Related catalogs

- [skills/catalog.json](../skills/catalog.json) — Reusable AI agent skills
- [mcps/catalog.json](../mcps/catalog.json) — Model Context Protocol servers
- [loops/catalog.json](../loops/catalog.json) — Repeatable agent workflows
