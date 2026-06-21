# Awesome AI Agent Tools

<p align="center">
  <img src="assets/banner.png" alt="Awesome AI Agent Tools" width="100%">
</p>

> **282 installable components for AI coding assistants.** Skills, MCP servers, agent workflows, subagents, hooks, and slash commands — ready to copy into your project. Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, and 30+ tools.

<p align="center">
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/stargazers"><img src="https://img.shields.io/github/stars/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Stars&color=gold" alt="GitHub Stars"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/forks"><img src="https://img.shields.io/github/forks/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Forks&color=blue" alt="GitHub Forks"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools"><img src="https://img.shields.io/github/last-commit/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="Last Commit"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/blob/main/LICENSE"><img src="https://img.shields.io/github/license/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="License"></a>
  <a href="https://github.com/michielhdoteth/awesome-ai-agent-tools/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome"></a>
</p>

<p align="center">
  <a href="https://agentskills.io"><img src="https://img.shields.io/badge/Standard-SKILL.md-blue?style=flat-square" alt="SKILL.md Standard"></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-2026-f97316?style=flat-square" alt="MCP 2026"></a>
  <a href="https://github.com/topics/awesome"><img src="https://img.shields.io/badge/Awesome-List-pink?style=flat-square" alt="Awesome List"></a>
  <a href="https://github.com/topics/ai-agent-skills"><img src="https://img.shields.io/badge/AI_Agent_Skills-22c55e?style=flat-square" alt="AI Agent Skills"></a>
</p>

---

**TL;DR — Try it now:**

```bash
# Install the skill collection via skills.sh
npx skills add michielhdoteth/awesome-ai-agent-tools

# Or clone and explore
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
```

---

## What is this?

Awesome AI Agent Tools is an open-source library of **installable AI agent components**. Not a list of links — actual skill files, MCP server configs, agent workflows, and automation scripts you can drop into any project.

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
    <tr><td>Installable skill files</td><td align="center">73 SKILL.md files</td><td align="center">Links only</td></tr>
    <tr><td>MCP server configs</td><td align="center">68 servers + install cmds</td><td align="center">Links only</td></tr>
    <tr><td>Agent workflows</td><td align="center">81 loops with prompts</td><td align="center">Links only</td></tr>
    <tr><td>Subagents</td><td align="center">20 agents + model routing</td><td align="center">No</td></tr>
    <tr><td>Hooks & commands</td><td align="center">40 scripts + slash cmds</td><td align="center">No</td></tr>
    <tr><td>Catalogs with metadata</td><td align="center">JSON catalogs for discovery</td><td align="center">No</td></tr>
    <tr><td>Cross-platform</td><td align="center">30+ AI tools</td><td align="center">Varies</td></tr>
  </tbody>
</table>

---

## Quick Start

### Option 1: Install via skills.sh (recommended)

```bash
npx skills add michielhdoteth/awesome-ai-agent-tools
```

### Option 2: Clone and copy

```bash
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
cd awesome-ai-agent-tools

# Copy a skill to your project
cp -r skills/test-driven-development/ your-project/.claude/skills/
```

### Option 3: Install an MCP server

```bash
# Context7 — version-pinned library docs
npx @upstash/context7-mcp@latest

# Playwright — browser automation
npx @anthropic-ai/mcp-server-playwright
```

---

## Featured Skills

Start here before browsing all 73 skills:

| Skill | What it does | Source |
|-------|-------------|--------|
| **test-driven-development** | TDD workflow with RED-GREEN-REFACTOR enforcement | Local |
| **systematic-debugging** | Structured root-cause analysis with isolation methods | Local |
| **code-reviewer** | Multi-pass review: security, performance, style | Local |
| **brainstorming** | Design exploration before implementation | Local |
| **verification-before-completion** | Prevents premature "done" claims with evidence gates | Local |

Browse all: [skills/](skills/) - [catalog.json](skills/catalog.json)

---

## Browse by Category

<table width="100%">
  <thead>
    <tr>
      <th align="left">Library</th>
      <th align="right">Count</th>
      <th align="left">What You Get</th>
      <th align="left">Browse</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Skills</b></td><td align="right">73</td><td>Installable SKILL.md files for specific tasks</td><td><a href="skills/">skills/</a></td></tr>
    <tr><td><b>MCP Servers</b></td><td align="right">68</td><td>Server configs with install commands</td><td><a href="mcps/">mcps/</a></td></tr>
    <tr><td><b>Agent Loops</b></td><td align="right">81</td><td>Workflows with prompts and verification</td><td><a href="loops/">loops/</a></td></tr>
    <tr><td><b>Subagents</b></td><td align="right">20</td><td>Specialized agents with model routing</td><td><a href="subagents/">subagents/</a></td></tr>
    <tr><td><b>Hooks</b></td><td align="right">20</td><td>Automation scripts for Claude Code events</td><td><a href="hooks/">hooks/</a></td></tr>
    <tr><td><b>Commands</b></td><td align="right">20</td><td>Slash commands for common workflows</td><td><a href="commands/">commands/</a></td></tr>
  </tbody>
</table>

**Total: 282 components across 8 categories.**

---

## Skills (73 curated)

19 local skill files you can copy + 54 external references with install commands from obra/superpowers, anthropics/skills, mattpocock/skills, vercel-labs, and more.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Development</b></td><td align="right">28</td><td>test-driven-development, systematic-debugging, code-reviewer</td></tr>
    <tr><td><b>Productivity</b></td><td align="right">14</td><td>brainstorming, writing-plans, verification-before-completion</td></tr>
    <tr><td><b>Design</b></td><td align="right">8</td><td>figma-design-to-code, multimedia-generation, playwright-automation</td></tr>
    <tr><td><b>Content</b></td><td align="right">7</td><td>cold-email, copywriting, humanizer</td></tr>
    <tr><td><b>Testing</b></td><td align="right">5</td><td>webapp-testing, agent-browser</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">5</td><td>devops-infrastructure, using-git-worktrees</td></tr>
    <tr><td><b>Marketing</b></td><td align="right">3</td><td>seo-audit, content-strategy</td></tr>
    <tr><td><b>Data</b></td><td align="right">3</td><td>data-analysis, supabase-postgres-best-practices</td></tr>
    <tr><td><b>Security</b></td><td align="right">2</td><td>mcp-security, security-guidance</td></tr>
  </tbody>
</table>

---

## MCP Servers (68 servers)

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Servers</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Official Reference</b></td><td align="right">6</td><td>Filesystem, Fetch, Memory, Sequential Thinking, Git, Brave Search</td></tr>
    <tr><td><b>Developer Tools</b></td><td align="right">8</td><td>Context7 (53K stars), MarkItDown (119K stars), GitHub MCP</td></tr>
    <tr><td><b>Browser/Web</b></td><td align="right">7</td><td>Playwright (31K stars), Firecrawl (29.7K stars), Chrome DevTools</td></tr>
    <tr><td><b>Databases</b></td><td align="right">8</td><td>PostgreSQL, Neon, Supabase, MindsDB, Redis, SQLite</td></tr>
    <tr><td><b>Cloud Platforms</b></td><td align="right">5</td><td>AWS, Cloudflare, DigitalOcean, Vercel</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">5</td><td>Docker, Kubernetes, Terraform, Pulumi</td></tr>
    <tr><td><b>Communication</b></td><td align="right">4</td><td>Slack, Notion, Linear, Google Workspace</td></tr>
    <tr><td><b>Marketing</b></td><td align="right">1</td><td>NotFair (~2.9K stars) — SEO, Google Ads, Meta Ads</td></tr>
  </tbody>
</table>

---

## Agent Loops (81 workflows)

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Loops</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Engineering</b></td><td align="right">38</td><td>overnight-docs-sweep, alpha-loop, kitchenloop, ralph-autonomous-loop, symphony-linear-loop</td></tr>
    <tr><td><b>Evaluation</b></td><td align="right">14</td><td>core-agentic-workflow, quality-streak-loop, multi-llm-convergence-loop</td></tr>
    <tr><td><b>Operations</b></td><td align="right">8</td><td>agent-teams, dynamic-workflows, developer-os-memory</td></tr>
    <tr><td><b>Content</b></td><td align="right">2</td><td>seo-geo-visibility-loop, product-update-podcast-loop</td></tr>
    <tr><td><b>Design</b></td><td align="right">6</td><td>ui-ux-score-loop, accessibility-repair-loop</td></tr>
    <tr><td><b>Meta</b></td><td align="right">4</td><td>autoloop, validate-patterns, loop-audit</td></tr>
    <tr><td><b>Multi-Agent</b></td><td align="right">6</td><td>beacon-loop, agent-teams, dynamic-workflows</td></tr>
  </tbody>
</table>

---

## Subagents (20 specialized agents)

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="left">Agents</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Development</b></td><td>code-reviewer, test-runner, debugger, refactorer, performance-optimizer, frontend-developer, backend-developer, test-writer, api-designer, migration-specialist</td></tr>
    <tr><td><b>Security</b></td><td>security-auditor</td></tr>
    <tr><td><b>Data</b></td><td>data-analyst, database-expert</td></tr>
    <tr><td><b>DevOps</b></td><td>dependency-updater, devops-engineer</td></tr>
    <tr><td><b>Content</b></td><td>doc-writer</td></tr>
    <tr><td><b>Productivity</b></td><td>planner</td></tr>
    <tr><td><b>Orchestration</b></td><td>workflow-orchestrator</td></tr>
    <tr><td><b>Research</b></td><td>research-analyst</td></tr>
    <tr><td><b>Design</b></td><td>accessibility-expert</td></tr>
  </tbody>
</table>

Each subagent includes model routing (haiku/sonnet/opus) and tool permissions. Browse: [subagents/](subagents/) - [catalog.json](subagents/catalog.json)

---

## Hooks (20 production-ready scripts)

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">What They Do</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Security</b></td><td align="right">3</td><td>Block dangerous commands, protect secrets, scan for leaked credentials</td></tr>
    <tr><td><b>Automation</b></td><td align="right">4</td><td>Auto-stage files, auto-run tests, auto-fix lint, TypeScript checking</td></tr>
    <tr><td><b>Quality</b></td><td align="right">3</td><td>Commit message validation, post-edit lint checks</td></tr>
    <tr><td><b>Notifications</b></td><td align="right">2</td><td>Slack alerts, notification logging</td></tr>
    <tr><td><b>Session</b></td><td align="right">5</td><td>Context loading, session state, compaction suggestions</td></tr>
    <tr><td><b>Safety</b></td><td align="right">3</td><td>Pre-push checks, dev server blocking, smart command approval</td></tr>
  </tbody>
</table>

Browse: [hooks/](hooks/) - [settings.json](hooks/settings.json) - [scripts/](hooks/scripts/)

---

## Commands (20 slash commands)

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="left">Commands</th>
      <th align="left">What They Do</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Development</b></td><td>/review, /commit, /debug, /refactor, /ship-it, /fix-bug, /feature-dev, /hotfix</td><td>Full development workflow from review to deploy</td></tr>
    <tr><td><b>Quality</b></td><td>/security-scan, /ci-check, /dependency-audit</td><td>Security audits, CI pipeline, dependency checks</td></tr>
    <tr><td><b>Documentation</b></td><td>/update-docs, /generate-readme, /changelog, /api-docs</td><td>Docs generation and maintenance</td></tr>
    <tr><td><b>Analysis</b></td><td>/profile, /trace, /dashboard, /brainstorm</td><td>Performance, execution tracing, project status, design exploration</td></tr>
  </tbody>
</table>

Browse: [commands/](commands/)

---

## Cross-Platform Compatibility

Awesome AI Agent Tools works with every major AI coding assistant:

<table width="100%">
  <thead>
    <tr>
      <th align="left">Platform</th>
      <th align="center">Skills</th>
      <th align="center">MCPs</th>
      <th align="center">Loops</th>
      <th align="center">Subagents</th>
      <th align="left">How to Install</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Claude Code</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.claude/skills/</code></td></tr>
    <tr><td><b>OpenCode</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.opencode/skills/</code></td></tr>
    <tr><td><b>Codex</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.agents/skills/</code></td></tr>
    <tr><td><b>KiloCode</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.kilo/skills/</code></td></tr>
    <tr><td><b>Cursor</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.cursor/skills/</code></td></tr>
    <tr><td><b>Gemini CLI</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.gemini/skills/</code></td></tr>
    <tr><td><b>Copilot</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.github/skills/</code></td></tr>
    <tr><td><b>Aider</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.aider/skills/</code></td></tr>
    <tr><td><b>Windsurf</b></td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td align="center">Yes</td><td>Copy to <code>.windsurf/skills/</code></td></tr>
  </tbody>
</table>

All skills follow the [SKILL.md open standard](https://agentskills.io) adopted by ~40 clients.

---

## Notable Skills from the Community

<table width="100%">
  <thead>
    <tr>
      <th align="left">Collection</th>
      <th align="right">Stars</th>
      <th align="right">Installs</th>
      <th align="left">Description</th>
      <th align="left">URL</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Superpowers</b> (obra)</td><td align="right">234K</td><td align="right">787K</td><td>Full agentic development methodology</td><td><a href="https://github.com/obra/superpowers">github.com/obra/superpowers</a></td></tr>
    <tr><td><b>UI-UX Pro Max</b> (nextlevelbuilder)</td><td align="right">79K</td><td align="right">-</td><td>Design system and frontend patterns</td><td><a href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill">github.com/nextlevelbuilder/ui-ux-pro-max-skill</a></td></tr>
    <tr><td><b>Awesome Claude Skills</b> (Composio)</td><td align="right">60K</td><td align="right">-</td><td>Skills directory organized by use case</td><td><a href="https://github.com/ComposioHQ/awesome-claude-skills">github.com/ComposioHQ/awesome-claude-skills</a></td></tr>
    <tr><td><b>Claude-Mem</b> (thedotmack)</td><td align="right">76K</td><td align="right">-</td><td>Persistent memory system</td><td><a href="https://github.com/thedotmack/claude-mem">github.com/thedotmack/claude-mem</a></td></tr>
    <tr><td><b>Vercel skills.sh</b></td><td align="right">-</td><td align="right">810K+</td><td>670K+ skills listed</td><td><a href="https://skills.sh">skills.sh</a></td></tr>
    <tr><td><b>NotFair</b> (nowork-studio)</td><td align="right">2.9K</td><td align="right">-</td><td>SEO, Google Ads, Meta Ads skills</td><td><a href="https://github.com/nowork-studio/NotFair">github.com/nowork-studio/NotFair</a></td></tr>
  </tbody>
</table>

---

## Frequently Asked Questions

### What is Awesome AI Agent Tools?

An open-source library of 282 installable AI agent components — skills, MCP servers, agent workflows, subagents, hooks, and slash commands. Works across Claude Code, OpenCode, Codex, Cursor, and every major AI coding assistant. No vendor lock-in.

### What are Skills?

Reusable instruction files (SKILL.md format) that teach AI agents how to perform specific tasks. They work across 40+ AI coding tools via the open SKILL.md standard. Copy a skill file to your project and your AI assistant automatically knows how to use it.

### What are MCP servers?

MCP (Model Context Protocol) servers connect AI agents to external tools and data sources. They let agents access GitHub, databases, web search, and 50+ other services. MCP is now under the Linux Foundation and adopted by every major AI vendor.

### What are agent workflows (loops)?

Repeatable AI agent patterns with built-in feedback mechanisms. Unlike one-shot prompts, loops let agents learn from results and iterate until the task is complete. Each loop includes exact prompt text, verification criteria, and source attribution.

### How do I install skills?

Copy the skill directory to your agent's skills folder (`.claude/skills/`, `.opencode/skills/`, `.agents/skills/`, etc.), or use `npx skills add michielhdoteth/awesome-ai-agent-tools` to install via the skills.sh package manager.

### Can I contribute?

Yes! See [CONTRIBUTING.md](CONTRIBUTING.md) for templates and guidelines. We accept skills, MCP servers, and loops from any source with proper attribution. All PRs are automatically validated by GitHub Actions.

### How is this different from other awesome lists?

Most awesome lists are just collections of links. This repo has actual installable components: 73 skill files, 68 MCP server configs, 81 agent workflows with prompts, 20 subagents, 20 hooks, and 20 slash commands. It also has catalogs with metadata for programmatic discovery and CI validation.

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

<table width="100%">
  <thead>
    <tr>
      <th align="left">Project</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><a href="https://github.com/obra/superpowers">obra/superpowers</a></td><td>Full agentic development methodology (234K stars)</td></tr>
    <tr><td><a href="https://github.com/openai/skills">openai/skills</a></td><td>Official Codex skills catalog</td></tr>
    <tr><td><a href="https://github.com/anthropics/skills">anthropics/skills</a></td><td>Official Anthropic skills</td></tr>
    <tr><td><a href="https://github.com/mattpocock/skills">mattpocock/skills</a></td><td>Cross-platform skills collection</td></tr>
    <tr><td><a href="https://github.com/Forward-Future/loop-library">Forward-Future/loop-library</a></td><td>Agent workflow patterns</td></tr>
    <tr><td><a href="https://agentskills.io">agentskills.io</a></td><td>The SKILL.md open standard</td></tr>
    <tr><td><a href="https://modelcontextprotocol.io">modelcontextprotocol.io</a></td><td>Official MCP documentation</td></tr>
    <tr><td><a href="https://skills.sh">skills.sh</a></td><td>Vercel skills marketplace</td></tr>
    <tr><td><a href="https://glama.ai">Glama.ai</a></td><td>MCP server registry (34K+ servers)</td></tr>
    <tr><td><a href="https://smithery.ai">Smithery.ai</a></td><td>MCP server registry (4.7K+ servers)</td></tr>
  </tbody>
</table>

---

## License

MIT License - use these resources in your own projects.

---

**Keywords:** AI agent skills, agent skills library, SKILL.md, MCP servers, model context protocol, agent workflows, AI coding assistant, Claude Code skills, OpenCode skills, Codex skills, Cursor skills, agent orchestration, AI development tools, skill marketplace, agent infrastructure, vibe coding, multi-agent, AI code review, TDD workflow, prompt engineering, agent loops, AI agent tools, coding agent, agent skills standard, portable skills, cross-platform AI, awesome list, open source AI, developer tools
