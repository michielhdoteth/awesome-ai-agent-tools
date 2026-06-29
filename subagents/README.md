# Subagents Catalog

Reference directory linking to subagent definitions, agent harnesses, and platform-specific subagent formats.

This catalog is a **discovery index** — it catalogs specialized agent configurations that get delegated to within larger agent systems. It is not an implementation; it points to where things live.

## What's in the catalog

- **Subagent Collection** — 8 GitHub repos containing 100+ subagent definitions each (code-reviewer, debugger, test-writer, planner, etc.)
- **Agent Harness** — 4 tools that manage subagent delegation, parallel execution, and result aggregation
- **Official SDK** — 4 SDKs with native subagent delegation support (Anthropic, OpenAI, Google, Microsoft)
- **Platform Format** — 4 platform-specific subagent definition formats (Claude Code, Codex, Gemini CLI, OpenCode)
- **Curated Directory** — 3 awesome lists indexing subagent resources across the ecosystem

## How to use

```bash
# List all categories and counts
cat catalog.json | jq '.categories'

# Find subagent collections with most stars
cat catalog.json | jq '[.subagents[] | select(.category == "Subagent Collection")] | sort_by(-.stars) | .[].name'

# Get all GitHub URLs for a category
cat catalog.json | jq -r '.subagents[] | select(.category == "Agent Harness") | .githubUrl'

# Search by name or description
cat catalog.json | jq '.subagents[] | select(.name | test("review"; "i"))'

# List all platform formats
cat catalog.json | jq '.subagents[] | select(.category == "Platform Format") | {id, name, tags}'
```

## Data format

Each entry contains:

| Field | Description |
|-------|-------------|
| `id` | Kebab-case identifier |
| `name` | Display name |
| `category` | One of the 5 categories |
| `stars` | GitHub stars (if available) |
| `description` | 1-2 sentence summary |
| `githubUrl` | Repository URL (if available) |
| `websiteUrl` | Project website (if available) |
| `license` | License type |
| `language` | Primary language (if applicable) |
| `tags` | Searchable keyword tags |

## What are subagents?

Subagents are **specialized agent configurations** that get delegated to within larger agent systems. They are not standalone applications — they are persona definitions, prompts, or configurations that a parent agent loads and delegates tasks to.

Examples: code-reviewer subagent, debugger subagent, test-writer subagent, planner subagent, deployer subagent, documentation subagent.

## Platform formats

| Platform | Format | Location |
|----------|--------|----------|
| Claude Code | Markdown + YAML frontmatter | `.claude/agents/` |
| Codex CLI | TOML files | `.codex/agents/` |
| Gemini CLI | Markdown + YAML frontmatter | `.gemini/agents/` |
| OpenCode | Markdown + YAML frontmatter | `.opencode/agents/` |

## Related catalogs

- [skills/catalog.json](../skills/catalog.json) — Reusable AI agent skills
- [mcps/catalog.json](../mcps/catalog.json) — Model Context Protocol servers
- [loops/catalog.json](../loops/catalog.json) — Repeatable agent workflows
