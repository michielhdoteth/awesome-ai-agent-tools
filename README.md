# Awesome AI Agent Tools

> **The most comprehensive open-source library for AI agent skills, MCP servers, and agent workflows.** 69 production-ready skill files, 66 verified MCP server configurations, 73 repeatable agent workflows. Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, and every major AI coding assistant.

<p align="center">
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/stargazers"><img src="https://img.shields.io/github/stars/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Stars&color=gold" alt="GitHub Stars"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/forks"><img src="https://img.shields.io/github/forks/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Forks&color=blue" alt="GitHub Forks"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools"><img src="https://img.shields.io/github/last-commit/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="Last Commit"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/blob/main/LICENSE"><img src="https://img.shields.io/github/license/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="License"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/graphs/contributors"><img src="https://img.shields.io/github/contributors/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="Contributors"></a>
</p>

<p align="center">
  <a href="https://agentskills.io"><img src="https://img.shields.io/badge/Standard-SKILL.md-blue?style=flat-square" alt="SKILL.md Standard"></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-2026-f97316?style=flat-square" alt="MCP 2026"></a>
  <a href="https://github.com/topics/ai-agent-skills"><img src="https://img.shields.io/badge/AI_Agent_Skills-22c55e?style=flat-square" alt="AI Agent Skills"></a>
  <a href="https://github.com/topics/awesome"><img src="https://img.shields.io/badge/Awesome-List-pink?style=flat-square" alt="Awesome List"></a>
</p>

---

## What is Awesome AI Agent Tools?

**Awesome AI Agent Tools** is an open-source knowledge base that teaches developers how to build with AI agents across any platform. It covers the entire AI agent ecosystem: skills (SKILL.md standard), MCP servers, agent workflows (loops), prompt engineering, and integrations with 50+ external tools.

This is not just a curated list of links. It contains **actual installable components** — skill files you can copy into your project, MCP server configs with install commands, and agent workflows with exact prompts and verification criteria.

**Who this is for:** Developers using Claude Code, OpenCode, Codex, Cursor, GitHub Copilot, Gemini CLI, Kiro, Aider, Windsurf, or any AI coding assistant. Works with Claude, GPT-4, Gemini, and open-source LLMs.

### What Makes This Different

| Feature | Awesome AI Agent Tools | Other Awesome Lists |
|---------|:----------------------:|:-------------------:|
| **Installable skill files** | 69 | Links only |
| **MCP server configs** | 66 | Links only |
| **Agent workflows with prompts** | 73 | Links only |
| **Catalogs with metadata** | Yes | No |
| **CI validation** | Yes | No |
| **Contributing templates** | Yes | No |
| **Cross-platform compatibility** | 8+ platforms | Varies |

---

## Quick Start

### 1. Clone and Explore

```bash
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
cd awesome-ai-agent-tools
```

### 2. Copy Skills to Your Project

```bash
# Claude Code
cp -r skills/test-driven-development/.claude/skills/ your-project/.claude/skills/

# OpenCode
cp -r skills/test-driven-development/.opencode/skills/ your-project/.opencode/skills/

# Codex
cp -r skills/test-driven-development/.agents/skills/ your-project/.agents/skills/
```

### 3. Install an MCP Server

```bash
# Context7 - Version-pinned library documentation
npx @upstash/context7-mcp@latest

# Playwright - Browser automation
npx @anthropic-ai/mcp-server-playwright
```

### 4. Use an Agent Workflow

Copy any loop file to your project, use the prompt text as your agent instruction, and follow the verification criteria.

---

## Browse by Category

| Library | Count | What You Get | Browse |
|---------|------:|--------------|--------|
| **Skills** | 69 | Installable SKILL.md files for specific tasks | [skills/](skills/) - [catalog.json](skills/catalog.json) |
| **MCP Servers** | 66 | Server configs with install commands | [mcps/](mcps/) - [catalog.json](mcps/catalog.json) |
| **Agent Loops** | 73 | Workflows with prompts and verification | [loops/](loops/) - [catalog.json](loops/catalog.json) |

---

## Skills (69 files across 9 categories)

| Category | Count | Top Skills |
|----------|------:|------------|
| **Development** | 28 | test-driven-development, systematic-debugging, code-reviewer |
| **Productivity** | 14 | brainstorming, writing-plans, verification-before-completion |
| **Design** | 8 | figma-design-to-code, multimedia-generation, playwright-automation |
| **Content** | 7 | cold-email, copywriting, humanizer |
| **Testing** | 5 | webapp-testing, agent-browser |
| **DevOps** | 5 | devops-infrastructure, using-git-worktrees |
| **Marketing** | 3 | seo-audit, content-strategy |
| **Data** | 3 | data-analysis, supabase-postgres-best-practices |
| **Security** | 2 | mcp-security, security-guidance |

---

## MCP Servers (66 servers across 16 categories)

| Category | Count | Top Servers |
|----------|------:|-------------|
| **Official Reference** | 6 | Filesystem, Fetch, Memory, Sequential Thinking, Git, Brave Search |
| **Developer Tools** | 8 | Context7 (53K stars), MarkItDown (119K stars), GitHub MCP |
| **Browser/Web** | 7 | Playwright (31K stars), Firecrawl (29.7K stars), Chrome DevTools |
| **Databases** | 8 | PostgreSQL, Neon, Supabase, MindsDB, Redis, SQLite |
| **Cloud Platforms** | 5 | AWS, Cloudflare, DigitalOcean, Vercel |
| **DevOps** | 5 | Docker, Kubernetes, Terraform, Pulumi |
| **Agent Orchestration** | 3 | n8n (185K stars), Ruflo, Claude-Flow |

---

## Agent Loops (73 workflows across 7 categories)

| Category | Count | Top Loops |
|----------|------:|-----------|
| **Engineering** | 41 | overnight-docs-sweep, alpha-loop, kitchenloop, autoloop |
| **Evaluation** | 14 | core-agentic-workflow, quality-streak-loop, multi-llm-convergence-loop |
| **Operations** | 9 | agent-teams, dynamic-workflows, developer-os-memory |
| **Content** | 3 | content-refresh-loop, seo-geo-visibility-loop |
| **Design** | 6 | ui-ux-score-loop, accessibility-repair-loop |

---

## Cross-Platform Compatibility

Awesome AI Agent Tools works with every major AI coding assistant:

| Platform | Skills | MCPs | Loops | How to Install |
|----------|:------:|:----:|:-----:|----------------|
| **Claude Code** | Yes | Yes | Yes | Copy to `.claude/skills/` |
| **OpenCode** | Yes | Yes | Yes | Copy to `.opencode/skills/` |
| **Codex** | Yes | Yes | Yes | Copy to `.agents/skills/` |
| **Cursor** | Yes | Yes | Yes | Copy to `.cursor/skills/` |
| **Gemini CLI** | Yes | Yes | Yes | Copy to `.gemini/skills/` |
| **Copilot** | Yes | Yes | Yes | Copy to `.github/skills/` |
| **Aider** | Yes | Yes | Yes | Copy to `.aider/skills/` |
| **Windsurf** | Yes | Yes | Yes | Copy to `.windsurf/skills/` |

All skills follow the [SKILL.md open standard](https://agentskills.io) adopted by ~40 clients.

---

## Notable Skills from the Community

| Collection | Stars | Installs | Description | URL |
|------------|------:|---------:|-------------|-----|
| **Superpowers** (obra) | 234K | 787K | Full agentic development methodology | [github.com/obra/superpowers](https://github.com/obra/superpowers) |
| **UI-UX Pro Max** (nextlevelbuilder) | 79K | - | Design system and frontend patterns | [github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| **Awesome Claude Skills** (Composio) | 60K | - | Skills directory organized by use case | [github.com/ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| **Claude-Mem** (thedotmack) | 76K | - | Persistent memory system | [github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) |
| **Vercel skills.sh** | - | 810K+ | 670K+ skills listed | [skills.sh](https://skills.sh) |
| **OpenAI Skills** (openai) | 22K | - | Official Codex skills catalog | [github.com/openai/skills](https://github.com/openai/skills) |

---

## Frequently Asked Questions

### What is Awesome AI Agent Tools?

Awesome AI Agent Tools is an open-source library of AI agent skills, MCP servers, and agent workflows. It works across Claude Code, OpenCode, Codex, Cursor, and every major AI coding assistant. No vendor lock-in. Unlike other awesome lists that only contain links, this repo has actual installable components.

### What are Skills?

Skills are reusable instruction files (SKILL.md format) that teach AI agents how to perform specific tasks. They work across 40+ AI coding tools via the open SKILL.md standard. Copy a skill file to your project and your AI assistant automatically knows how to use it.

### What are MCP servers?

MCP (Model Context Protocol) servers connect AI agents to external tools and data sources. They let agents access GitHub, databases, web search, and 50+ other services. MCP is now under the Linux Foundation and adopted by every major AI vendor (OpenAI, Google, Microsoft, Anthropic).

### What are agent workflows (loops)?

Agent workflows, or loops, are repeatable AI agent patterns with built-in feedback mechanisms. Unlike one-shot prompts, loops let agents learn from results and iterate until the task is complete. Each loop includes exact prompt text, verification criteria, and source attribution.

### How do I install skills?

Copy the skill directory to your agent's skills folder (`.claude/skills/`, `.opencode/skills/`, `.agents/skills/`, etc.). The skill auto-triggers when your task matches its description. No configuration needed.

### Can I contribute?

Yes! See [CONTRIBUTING.md](CONTRIBUTING.md) for templates and guidelines. We accept skills, MCP servers, and loops from any source with proper attribution. All PRs are automatically validated by GitHub Actions.

### How is this different from other awesome lists?

Most awesome lists are just collections of links. Awesome AI Agent Tools contains actual installable components: 69 skill files you can copy into your project, 66 MCP server configs with install commands, and 73 agent workflows with exact prompts and verification criteria. It also has catalogs with metadata for programmatic discovery and CI validation to ensure quality.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Quick ways to contribute:

- Add a skill file with proper attribution
- Add an MCP server configuration
- Add an agent workflow (loop)
- Fix a broken link
- Improve documentation

All PRs are automatically validated by GitHub Actions.

### Contributors

<a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=michielhdoteth/awesome-ai-agent-tools" />
</a>

---

## Star History

<a href="https://star-history.com/#michielhdoteth/awesome-ai-agent-tools&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=michielhdoteth/awesome-ai-agent-tools&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=michielhdoteth/awesome-ai-agent-tools&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=michielhdoteth/awesome-ai-agent-tools&type=Date" />
 </picture>
</a>

---

## Related Projects

| Project | Description |
|---------|-------------|
| [obra/superpowers](https://github.com/obra/superpowers) | Full agentic development methodology (234K stars) |
| [openai/skills](https://github.com/openai/skills) | Official Codex skills catalog |
| [anthropics/skills](https://github.com/anthropics/skills) | Official Anthropic skills |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Cross-platform skills collection |
| [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) | Agent workflow patterns |
| [agentskills.io](https://agentskills.io) | The SKILL.md open standard |
| [modelcontextprotocol.io](https://modelcontextprotocol.io) | Official MCP documentation |
| [skills.sh](https://skills.sh) | Vercel skills marketplace |
| [Glama.ai](https://glama.ai) | MCP server registry (34K+ servers) |
| [Smithery.ai](https://smithery.ai) | MCP server registry (4.7K+ servers) |

---

## License

MIT License - use these resources in your own projects.

---

**Keywords:** AI agent skills, agent skills library, SKILL.md, MCP servers, model context protocol, agent workflows, AI coding assistant, Claude Code skills, OpenCode skills, Codex skills, Cursor skills, agent orchestration, AI development tools, skill marketplace, agent infrastructure, vibe coding, multi-agent, AI code review, TDD workflow, prompt engineering, agent loops, AI agent tools, coding agent, agent skills standard, portable skills, cross-platform AI, awesome list, open source AI, developer tools
