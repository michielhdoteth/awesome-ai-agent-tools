# Skills Directory

A curated directory of AI agent skills following the [SKILL.md open standard](https://agentskills.io). This is a **reference-only directory** -- we link to external skills and repositories, not build or host them.

## What Is This?

A phone book for AI agent skills. Every entry links to an external source with install commands. Find what you need, install it directly from the original author.

## Sources (6 major repositories)

| Repository | Skills | Stars | Install |
|------------|--------|-------|---------|
| [obra/superpowers](https://github.com/obra/superpowers) | 6 | 235K | `npx skills add obra/superpowers` |
| [anthropics/skills](https://github.com/anthropics/skills) | 7 | 153K | `npx skills add anthropics/skills` |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 15 | 139K | `npx skills add mattpocock/skills` |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 8 | 28K | `npx skills add vercel-labs/agent-skills` |
| [Other repos](#other-repos) | 21 | varies | See catalog.json |

## Categories (57 skills total)

| Category | Count | Top Skills |
|----------|-------|------------|
| Development | 18 | CodeGraph (54K stars), Headroom (12K stars), Vercel React Best Practices |
| Productivity | 11 | Find Skills (2.1M installs), AGENTS.md Standard (25K stars), Context Engineering |
| Content | 8 | Stop Sloppy AI Writing (11.8K stars), Content Research Writer, Writing Guidelines |
| Design | 5 | Web Design Guidelines (406K installs), shadcn/ui, Emil Design Engineering |
| DevOps | 6 | GitHub Actions Docs, Vercel Deploy, Microsoft Foundry |
| Testing | 3 | Web App Testing, Agent Browser, TDD |
| Marketing | 3 | SEO Audit, Copywriting, Marketing Psychology |
| Data | 3 | Azure AI, Supabase PostgreSQL, Just Scrape |

## Notable Skills

| Skill | Stars/Installs | Description | Link |
|-------|----------------|-------------|------|
| **Find Skills** | 2.1M installs | Discover and install new skills for your agent | [vercel-labs/skills](https://github.com/vercel-labs/skills) |
| **CodeGraph** | 54K stars | Local-first code indexing with semantic search | [anthropics/codegraph](https://github.com/anthropics/codegraph) |
| **AGENTS.md Standard** | 25K stars | Linux Foundation standard for AI agent instructions | [AGENTS.md/LinuxFoundation](https://github.com/AGENTS.md/LinuxFoundation) |
| **Stop Sloppy AI Writing** | 11.8K stars | Anti-AI-slop writing skill | [obra/stop-slop](https://github.com/obra/stop-slop) |
| **Headroom** | 12K stars | Code complexity analyzer | [anthropics/headroom](https://github.com/anthropics/headroom) |

## How to Use

```bash
# Install a specific skill
npx skills add obra/superpowers --skill brainstorming

# Install all skills from a repository
npx skills add mattpocock/skills

# Install from another source
npx skills add vercel-labs/agent-skills
npx skills add anthropics/skills
npx skills add nowork-studio/NotFair
```

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata, install commands, and links
