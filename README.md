# Awesome AI Agent Tools

<p align="center">
  <img src="assets/banner.png" alt="Awesome AI Agent Tools" width="100%">
</p>

> **The definitive directory of AI agent components.** 367 installable skills, MCP servers, agent workflows, subagents, and plugins -- curated from 100+ repositories. Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, Windsurf, Aider, and 30+ tools.

<p align="center">
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/stargazers"><img src="https://img.shields.io/github/stars/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Stars&color=gold" alt="GitHub Stars"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/forks"><img src="https://img.shields.io/github/forks/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Forks&color=blue" alt="GitHub Forks"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools"><img src="https://img.shields.io/github/last-commit/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="Last Commit"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/blob/main/LICENSE"><img src="https://img.shields.io/github/license/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="License"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome"></a>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
</p>

<p align="center">
  <a href="https://agentskills.io"><img src="https://img.shields.io/badge/Standard-SKILL.md-blue?style=flat-square" alt="SKILL.md Standard"></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-2026-f97316?style=flat-square" alt="MCP 2026"></a>
  <a href="https://github.com/topics/awesome"><img src="https://img.shields.io/badge/Awesome-List-pink?style=flat-square" alt="Awesome List"></a>
</p>

---

## Contents

- [What is this?](#what-is-this)
- [Quick Start](#quick-start)
- [Browse by Category](#browse-by-category)
- [Skills (72 curated)](#skills-72-curated)
- [MCP Servers (98 servers)](#mcp-servers-97-servers)
- [Agent Loops (103 workflows)](#agent-loops-103-workflows)
- [Subagents (50 agents)](#subagents-50-agents)
- [Plugins (45 plugins)](#plugins-45-plugins)
- [Cross-Platform Compatibility](#cross-platform-compatibility)
- [Contribute with Your Agent](#contribute-with-your-agent)
- [Contributing](#contributing)
- [Related Projects](#related-projects)
- [License](#license)

---

## What is this?

Awesome AI Agent Tools is the **definitive directory** of AI agent components. Not a list of links -- actual installable skill files, MCP server configs, agent workflows, subagents, and plugins you can drop into any project.

### Who it's for

Developers using Claude Code, OpenCode, Codex, Cursor, GitHub Copilot, Gemini CLI, KiloCode, Aider, Windsurf, or any AI coding assistant. Works with Claude, GPT-4, Gemini, and open-source LLMs.

### What makes this different

<table width="100%">
  <thead>
    <tr>
      <th align="left">Feature</th>
      <th align="center">This repo</th>
      <th align="center">Typical awesome lists</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Installable skill files</td><td align="center">72 SKILL.md files</td><td align="center">Links only</td></tr>
    <tr><td>MCP server configs</td><td align="center">97 servers + install cmds</td><td align="center">Links only</td></tr>
    <tr><td>Agent workflows</td><td align="center">103 loops with prompts</td><td align="center">Links only</td></tr>
    <tr><td>Subagents</td><td align="center">50 agents + model routing</td><td align="center">No</td></tr>
    <tr><td>Plugins</td><td align="center">45 plugins across 9 platforms</td><td align="center">No</td></tr>
    <tr><td>Catalogs with metadata</td><td align="center">JSON catalogs for discovery</td><td align="center">No</td></tr>
    <tr><td>Cross-platform</td><td align="center">30+ AI tools</td><td align="center">Varies</td></tr>
    <tr><td>Agent-contributable</td><td align="center">Automated fork+PR skill</td><td align="center">No</td></tr>
  </tbody>
</table>

---

## Quick Start

### Option 1: Install via skills.sh (recommended)

```bash
npx skills add michielhdoteth/awesome-ai-agent-tools
```

### Option 2: Clone and explore

```bash
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
cd awesome-ai-agent-tools

# Browse the catalogs
cat skills/catalog.json | jq '.skills | length'
cat mcps/catalog.json | jq '.servers | length'
cat loops/catalog.json | jq '.loops | length'
```

### Option 3: Use the browse site

Visit the interactive site to search, filter, and explore all components: **https://awesome-ai-agent-tools.vercel.app**

### Option 4: Let your agent contribute

Give your AI agent the [contribution skill](contribute/SKILL.md) and it will fork, edit, and submit a PR automatically.

---

## Browse by Category

| Library | Count | What You Get | Browse |
|---------|-------|--------------|--------|
| **Skills** | 72 | Installable SKILL.md files for specific tasks | [skills/](skills/) |
| **MCP Servers** | 98 | Server configs with install commands | [mcps/](mcps/) |
| **Agent Loops** | 103 | Workflows with prompts and verification | [loops/](loops/) |
| **Subagents** | 50 | Specialized agents with model routing | [subagents/](subagents/) |
| **Plugins** | 45 | Extensions for Claude Code, OpenCode, Cursor, etc. | [plugins/](plugins/) |

**Total: 367 components across 5 categories.**

---

## Skills (72 curated)

External references with install commands from obra/superpowers, anthropics/skills, addyosmani, vercel-labs, trailofbits, and 30+ more sources.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Development</b></td><td align="right">24</td><td>addyosmani/agent-skills (67K), obra/superpowers (239K), trailofbits/skills (6K)</td></tr>
    <tr><td><b>Productivity</b></td><td align="right">16</td><td>kepano/obsidian-skills (35K), agents-md-standard (25K), context-engineering (15K)</td></tr>
    <tr><td><b>Content</b></td><td align="right">8</td><td>stop-slop (11.8K), content-research-writer (8.5K), humanizer</td></tr>
    <tr><td><b>Design</b></td><td align="right">6</td><td>nexu-io/open-design (66K), ui-ux-pro-max (79K)</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">7</td><td>iuliandita/skills (Kubernetes, Terraform, Docker)</td></tr>
    <tr><td><b>Testing</b></td><td align="right">3</td><td>webapp-testing, agent-browser</td></tr>
    <tr><td><b>Marketing</b></td><td align="right">3</td><td>seo-audit, content-strategy</td></tr>
    <tr><td><b>Data</b></td><td align="right">3</td><td>data-analysis, supabase-postgres-best-practices</td></tr>
    <tr><td><b>Security</b></td><td align="right">2</td><td>trailofbits/skills, ghostsecurity/skills</td></tr>
  </tbody>
</table>

Browse all: [skills/](skills/) | [catalog.json](skills/catalog.json)

---

## MCP Servers (97 servers)

Curated Model Context Protocol servers with install commands from GitHub, npm, and official registries.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Servers</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Databases</b></td><td align="right">13</td><td>MongoDB (1K), Redis (512), Elasticsearch (670), Neon, Supabase</td></tr>
    <tr><td><b>Developer Tools</b></td><td align="right">11</td><td>Context7 (54K), MarkItDown (119K), GitHub MCP (30.6K), Playwright (34K)</td></tr>
    <tr><td><b>Communication</b></td><td align="right">8</td><td>Slack, Notion, Linear, Google Workspace (3K), Obsidian</td></tr>
    <tr><td><b>Search</b></td><td align="right">8</td><td>Brave Search, Tavily (1.5K), Perplexity (1.2K), Serper</td></tr>
    <tr><td><b>AI & Machine Learning</b></td><td align="right">6</td><td>Arize Phoenix (10K), Langfuse (166), OpenRouter</td></tr>
    <tr><td><b>Agent Orchestration</b></td><td align="right">5</td><td>n8n (22K), Zapier (2K), Composio</td></tr>
    <tr><td><b>Monitoring</b></td><td align="right">6</td><td>Grafana (800), Datadog (41), Sentry</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">6</td><td>Docker, Kubernetes, Terraform (1K), Cloudflare</td></tr>
    <tr><td><b>Design</b></td><td align="right">3</td><td>Figma Context (15K)</td></tr>
    <tr><td><b>Finance</b></td><td align="right">4</td><td>Stripe, PayPal, Square</td></tr>
    <tr><td><b>Research & Data</b></td><td align="right">5</td><td>MindsDB (39K), Snowflake, dbt</td></tr>
  </tbody>
</table>

Browse all: [mcps/](mcps/) | [catalog.json](mcps/catalog.json)

---

## Agent Loops (103 workflows)

Repeatable AI agent patterns with built-in feedback mechanisms, sourced from official documentation, research papers, and community repos.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Loops</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Engineering</b></td><td align="right">53</td><td>forge-master (TDD), harnesskit (OpenAI), plan-execute-verify, github-agentic-workflows</td></tr>
    <tr><td><b>Evaluation</b></td><td align="right">14</td><td>evaluator-optimizer, per-turn-classification, 4-d-trajectory-score, llm-as-judge</td></tr>
    <tr><td><b>Multi-Agent</b></td><td align="right">12</td><td>google-adk-loop, openai-agents-sdk, orchestrator-worker, swarm, hierarchical</td></tr>
    <tr><td><b>Meta</b></td><td align="right">9</td><td>context-engineering-loop, tiered-memory-loop, loop-engineering-discipline</td></tr>
    <tr><td><b>Operations</b></td><td align="right">6</td><td>millrace-governed-loop, claude-code-dynamic-workflows, triage-and-escalate</td></tr>
    <tr><td><b>Design</b></td><td align="right">6</td><td>ui-ux-score-loop, accessibility-repair-loop</td></tr>
    <tr><td><b>Content</b></td><td align="right">3</td><td>anti-slop-loop, research-until-done, signals-loop</td></tr>
  </tbody>
</table>

Browse all: [loops/](loops/) | [catalog.json](loops/catalog.json)

---

## Subagents (50 agents)

Multi-agent frameworks, coding agents, orchestration platforms, and subagent collections from the ecosystem.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Agents</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Coding Agents</b></td><td align="right">12</td><td>OpenCode (172K), Claude Code (131K), Gemini CLI (105K), Codex (90K), OpenHands (76K)</td></tr>
    <tr><td><b>Frameworks</b></td><td align="right">8</td><td>LangGraph (25K), CrewAI (54K), MetaGPT (62K), AutoGPT (150K)</td></tr>
    <tr><td><b>Official SDKs</b></td><td align="right">5</td><td>Claude Agent SDK, OpenAI Agents SDK, Google ADK, Microsoft Agent Framework</td></tr>
    <tr><td><b>Subagent Collections</b></td><td align="right">6</td><td>awesome-claude-code-subagents (22K), awesome-codex-subagents (5.2K)</td></tr>
    <tr><td><b>Orchestration</b></td><td align="right">5</td><td>Claude Code, OpenCode, Aider, Windsurf</td></tr>
    <tr><td><b>Protocols</b></td><td align="right">4</td><td>MCP, A2A, AGENTS.md Standard</td></tr>
    <tr><td><b>Commercial</b></td><td align="right">5</td><td>Devin, Factory AI, GitHub Copilot Agent, Replit Agent</td></tr>
    <tr><td><b>Research</b></td><td align="right">3</td><td>Hermes Agent (95K), AgentDoG, OpenClaw</td></tr>
  </tbody>
</table>

Browse all: [subagents/](subagents/) | [catalog.json](subagents/catalog.json)

---

## Plugins (45 plugins)

Extensions, rules, and plugins for every major AI coding agent.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Plugins</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Claude Code</b></td><td align="right">8</td><td>Official marketplace (200+ plugins, 31K stars), Superpowers (42K)</td></tr>
    <tr><td><b>OpenCode</b></td><td align="right">8</td><td>npm-based plugins, browser automation, git integration</td></tr>
    <tr><td><b>Cursor</b></td><td align="right">6</td><td>awesome-cursorrules (20K), cursor.directory (83.7K devs)</td></tr>
    <tr><td><b>Copilot</b></td><td align="right">5</td><td>awesome-copilot (48+ plugins), custom instructions</td></tr>
    <tr><td><b>VS Code AI</b></td><td align="right">5</td><td>Kilo Code, Cline, Roo Code, Continue, Cody</td></tr>
    <tr><td><b>Windsurf</b></td><td align="right">4</td><td>VS Code plugin (3.8M installs), Neovim, Eclipse</td></tr>
    <tr><td><b>Aider</b></td><td align="right">4</td><td>VS Code extensions, NeoVim plugin, YAML config</td></tr>
    <tr><td><b>JetBrains</b></td><td align="right">3</td><td>AI Assistant, ACP, Skills Manager</td></tr>
    <tr><td><b>Cross-Tool</b></td><td align="right">2</td><td>Claude Plugin Hub (14K+ indexed), load-rules CLI</td></tr>
  </tbody>
</table>

Browse all: [plugins/](plugins/) | [catalog.json](plugins/catalog.json)

---

## Cross-Platform Compatibility

Awesome AI Agent Tools works with every major AI coding assistant:

| Platform | Skills | MCPs | Loops | Subagents | Plugins | How to Install |
|----------|:------:|:----:|:-----:|:---------:|:-------:|----------------|
| **Claude Code** | Yes | Yes | Yes | Yes | Yes | Copy to `.claude/skills/` |
| **OpenCode** | Yes | Yes | Yes | Yes | Yes | Copy to `.opencode/skills/` |
| **Codex** | Yes | Yes | Yes | Yes | Yes | Copy to `.agents/skills/` |
| **KiloCode** | Yes | Yes | Yes | Yes | Yes | Copy to `.kilo/skills/` |
| **Cursor** | Yes | Yes | Yes | Yes | Yes | Copy to `.cursor/skills/` |
| **Gemini CLI** | Yes | Yes | Yes | Yes | Yes | Copy to `.gemini/skills/` |
| **Copilot** | Yes | Yes | Yes | Yes | Yes | Copy to `.github/skills/` |
| **Aider** | Yes | Yes | Yes | Yes | Yes | Copy to `.aider/skills/` |
| **Windsurf** | Yes | Yes | Yes | Yes | Yes | Copy to `.windsurf/skills/` |

All skills follow the [SKILL.md open standard](https://agentskills.io) adopted by ~40 clients.

---

## Contribute with Your Agent

**Your AI agent can contribute to this directory automatically.** Give it the [contribution skill](contribute/SKILL.md) and it will:

1. Fork the repo
2. Add the entry to the correct catalog
3. Validate JSON
4. Submit a PR

```bash
# In Claude Code or OpenCode, just say:
"Use the contribute skill to add [item] to the [category] catalog"

# Or install the skill manually:
cp -r contribute/ .claude/skills/contribute/
```

See [contribute/SKILL.md](contribute/SKILL.md) for the full automation prompt.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Quick ways to contribute:

- Add a skill, MCP server, loop, subagent, or plugin to the catalogs
- Fix a broken link or outdated information
- Improve documentation
- Star the repo to help others find it

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

| Project | Stars | Description |
|---------|-------|-------------|
| [obra/superpowers](https://github.com/obra/superpowers) | 239K | Full agentic development methodology |
| [anthropics/skills](https://github.com/anthropics/skills) | 156K | Official Anthropic skills |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 67K | Google engineering culture skills |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 66K | 1000+ curated skills |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 66K | 259+ design skills |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 27K | 1497+ official skills |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 28K | Next.js and React skills |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 29.5K | 147 scientific research skills |
| [awesome-claude-code-subagents](https://github.com/anthropics/awesome-claude-code-subagents) | 22.2K | 100+ Claude Code subagents |
| [awesome-codex-subagents](https://github.com/openai/awesome-codex-subagents) | 5.2K | 130+ Codex subagents |
| [skills.sh](https://skills.sh) | - | Vercel skills marketplace (670K+) |
| [Glama.ai](https://glama.ai) | - | MCP server registry (34K+ servers) |
| [Smithery.ai](https://smithery.ai) | - | MCP server registry (4.7K+ servers) |

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related rights to this work. The catalog data (JSON files) are released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Source code (site, scripts) is released under [MIT](LICENSE).

---

**Keywords:** AI agent skills, agent skills library, SKILL.md, MCP servers, model context protocol, agent workflows, AI coding assistant, Claude Code skills, OpenCode skills, Codex skills, Cursor skills, agent orchestration, AI development tools, skill marketplace, agent infrastructure, multi-agent, AI code review, TDD workflow, prompt engineering, agent loops, AI agent tools, coding agent, agent skills standard, portable skills, cross-platform AI, awesome list, open source AI, developer tools, subagents, plugins, agent plugins
