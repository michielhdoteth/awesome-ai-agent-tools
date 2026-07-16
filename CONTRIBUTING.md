# Contributing to Awesome AI Agent Tools

Thank you for contributing! This directory grows stronger with every entry. You can contribute manually or let your AI agent do it automatically.

## Quick Start (Agent-Automated)

The fastest way to contribute: give your AI agent the [contribution skill](CONTRIBUTE.md).

```bash
# Claude Code
"Use the contribute skill to add [item name] to the [category] catalog"

# OpenCode
"Load the contribute skill and add [item] to the catalog"
```

Your agent will fork the repo, add the entry, validate JSON, and submit a PR. GitHub Actions will automatically validate your PR and regenerate the README.

## How Automation Works

This repo uses automated README generation so counts are never stale:

1. **You edit** `*/catalog.json` (add/update/remove entries)
2. **PR validation** runs `scripts/validate-catalogs.js` to catch errors
3. **On merge to main** GitHub Actions runs `scripts/generate-readme.js`
4. **README.md is regenerated** with accurate counts from the catalogs
5. **Weekly** star counts are updated from the GitHub API

**You never need to edit README.md manually.** Just update the catalog.json files.

## Manual Contributions

### What We Accept

| Type | Where | Format |
|------|-------|--------|
| **Skills** | `skills/catalog.json` | External SKILL.md repos with install commands |
| **MCP Servers** | `mcps/catalog.json` | MCP servers with GitHub links and install commands |
| **Agent Loops** | `loops/catalog.json` | Workflow patterns with source attribution |
| **Subagents** | `subagents/catalog.json` | Agent frameworks, SDKs, collections |
| **Hooks** | `hooks/catalog.json` | Claude Code hooks for automation, security, quality |
| **Plugins** | `plugins/catalog.json` | Extensions for AI coding agents |
| **Prompts** | `prompts/catalog.json` | Curated prompt collections and libraries |
| **Tools** | `tools/catalog.json` | CLI utilities that enhance agent capabilities |

### Entry Format

Each catalog entry must include:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Human Readable Name",
  "category": "Category Name",
  "description": "One-line description of what this does",
  "githubUrl": "https://github.com/owner/repo",
  "installCommand": "npx skills add owner/repo",
  "stars": 12345,
  "tags": ["tag1", "tag2"],
  "source": "github",
  "sourceType": "official",
  "lastUpdated": "2026-06-28"
}
```

### Required Fields

- `id` -- Unique kebab-case identifier (no duplicates)
- `name` -- Human-readable name
- `category` -- Must match an existing category in the catalog
- `description` -- Clear, concise one-liner
- `githubUrl` -- Link to the source repository
- `source` -- Where you found it: `github`, `reddit`, `blog`, `official-docs`
- `sourceType` -- `official` (company repo), `community` (individual), `registry` (marketplace)

### Adding a New Category

1. Add the category to the `categories` array in the catalog
2. Set initial count to 1
3. Add your entry under that category
4. Update `totalSkills` / `totalServers` / `totalLoops` in metadata

### Quality Standards

- **No duplicates** -- Search existing entries before adding
- **Working links** -- GitHub URL must be valid
- **Accurate stars** -- Use current GitHub star count
- **Honest description** -- No marketing fluff, just what it does
- **Proper attribution** -- Source and sourceType required

### Validation

All PRs are automatically validated by GitHub Actions:

1. **JSON syntax** -- All catalog.json files must be valid JSON
2. **Schema validation** -- Required fields (id, name, category, description) must be present
3. **Duplicate detection** -- No duplicate IDs within a catalog
4. **ID format** -- Must be lowercase kebab-case (e.g., `my-skill-name`)
5. **Star counts** -- Must be numbers (not strings)

You can also validate locally:

```bash
node scripts/validate-catalogs.js
```

## PR Checklist

- [ ] Entry follows the format above
- [ ] No duplicate IDs
- [ ] GitHub URL is valid and accessible
- [ ] Star count is reasonably accurate
- [ ] Description is clear and honest
- [ ] Category exists in the catalog
- [ ] JSON is valid
- [ ] `node scripts/validate-catalogs.js` passes locally

## What NOT to Edit

- **README.md** -- Auto-generated from catalog.json files
- **AGENTS.md** -- Only maintainers update this

## Code of Conduct

- Be respectful and constructive
- Focus on quality over quantity
- Attribute all sources properly
- No self-promotion without genuine value

## Questions?

Open an issue or start a discussion. We're happy to help you contribute.
