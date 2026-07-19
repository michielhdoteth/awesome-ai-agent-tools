# Awesome AI Agent Tools

<p align="center">
  <img src="assets/banner.png" alt="Awesome AI Agent Tools" width="100%">
</p>

> **The definitive directory of AI agent components.** 610 installable skills, MCP servers, agent workflows, subagents, hooks, plugins, prompts, and tools -- curated from 100+ repositories. Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, Windsurf, Aider, and 30+ tools.

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

<p align="center"><sub>Last updated: July 19, 2026</sub></p>

---

## Contents

- [What is this?](#what-is-this)
- [Quick Start](#quick-start)
- [Start Here](#start-here)
- [Browse by Category](#browse-by-category)
- [Skills (88 curated)](#skills-88-curated)
- [MCP Servers (129 servers)](#mcp-servers-129-servers)
- [Agent Loops (115 workflows)](#agent-loops-115-workflows)
- [Subagents (32 agents)](#subagents-32-agents)
- [Hooks (25 hooks)](#hooks-25-hooks)
- [Plugins (53 plugins)](#plugins-53-plugins)
- [Prompts (102 prompts)](#prompts-102-prompts)
- [Tools (66 CLI tools)](#tools-66-cli-tools)
- [Cross-Platform Compatibility](#cross-platform-compatibility)
- [Contribute with Your Agent](#contribute-with-your-agent)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)

---

## Start Here

**New to AI agent tools?** Pick your path:

| I want to... | Start with | Then explore |
|--------------|------------|--------------|
| **Give my agent new skills** | [Skills](skills/) -- 88 installable SKILL.md files | [MCP Servers](mcps/) -- connect to external services |
| **Build multi-agent systems** | [Subagents](subagents/) -- 32 specialized agents | [Agent Loops](loops/) -- 115 repeatable workflows |
| **Automate my workflow** | [Hooks](hooks/) -- 25 production-ready hooks | [Plugins](plugins/) -- 53 platform extensions |
| **Get better prompts** | [Prompts](prompts/) -- 102 curated collections | [Tools](tools/) -- 66 CLI utilities |
| **Understand the ecosystem** | [What is this?](#what-is-this) below | [Browse by Category](#browse-by-category) |

**Quickest path:** Install the top 3 most-installed skills in under a minute:

```bash
npx skills add obra/superpowers --skill executing-plans
npx skills add anthropics/skills --skill frontend-design
npx skills add mattpocock/skills --skill grill-me
```

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
    <tr><td>Installable skill files</td><td align="center">88 SKILL.md files</td><td align="center">Links only</td></tr>
    <tr><td>MCP server configs</td><td align="center">129 servers + install cmds</td><td align="center">Links only</td></tr>
    <tr><td>Agent workflows</td><td align="center">115 loops with prompts</td><td align="center">Links only</td></tr>
    <tr><td>Subagents</td><td align="center">32 agents + model routing</td><td align="center">No</td></tr>
    <tr><td>Hooks</td><td align="center">25 production-ready hooks</td><td align="center">No</td></tr>
    <tr><td>Plugins</td><td align="center">53 plugins across 9 platforms</td><td align="center">No</td></tr>
    <tr><td>Prompts</td><td align="center">102 curated prompts + 310K marketplace</td><td align="center">Links only</td></tr>
    <tr><td>CLI Tools</td><td align="center">66 tools with install cmds</td><td align="center">No</td></tr>
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

Give your AI agent the [contribution skill](CONTRIBUTE.md) and it will fork, edit, and submit a PR automatically.

---

## Browse by Category

| Library | Count | What You Get | Browse |
|---------|-------|--------------|--------|
| **Skills** | 88 | Installable SKILL.md files for specific tasks | [skills/](skills/) |
| **MCP Servers** | 129 | Server configs with install commands | [mcps/](mcps/) |
| **Agent Loops** | 115 | Workflows with prompts and verification | [loops/](loops/) |
| **Subagents** | 32 | Specialized agents with model routing | [subagents/](subagents/) |
| **Hooks** | 25 | Production-ready Claude Code hooks | [hooks/](hooks/) |
| **Plugins** | 53 | Extensions for Claude Code, OpenCode, Cursor, etc. | [plugins/](plugins/) |
| **Prompts** | 102 | Curated prompt collections and marketplaces | [prompts/](prompts/) |
| **Tools** | 66 | CLI tools that enhance agent capabilities | [tools/](tools/) |

**Total: 610 components across 8 categories.**

---

## Skills (88 curated)

88 installable SKILL.md files that teach AI agents new capabilities. Categories include Development (31), Productivity (17), Content (10), Design (9), DevOps (8), Marketing (5), Testing (3), Data (3), Security (2). Install via `npx skills add` from sources including obra/superpowers (239K stars), addyosmani/agent-skills (77.2K), and 30+ more repositories.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Development</b></td><td align="right">31</td><td>Executing Plans, Receiving Code Review, Requesting Code Review</td></tr>
    <tr><td><b>Productivity</b></td><td align="right">17</td><td>Writing Skills, Skill Creator, Grill Me</td></tr>
    <tr><td><b>Content</b></td><td align="right">10</td><td>PowerPoint (pptx), PDF Documents, Word Documents (docx)</td></tr>
    <tr><td><b>Design</b></td><td align="right">9</td><td>Frontend Design, Web Design Guidelines, React View Transitions</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">8</td><td>Finishing a Development Branch, Using Git Worktrees, Vercel Optimize</td></tr>
    <tr><td><b>Marketing</b></td><td align="right">5</td><td>SEO Audit, Copywriting, Marketing Psychology</td></tr>
    <tr><td><b>Testing</b></td><td align="right">3</td><td>Web App Testing, TDD (mattpocock), Agent Browser</td></tr>
    <tr><td><b>Data</b></td><td align="right">3</td><td>Azure AI, Supabase PostgreSQL Best Practices, Just Scrape</td></tr>
    <tr><td><b>Security</b></td><td align="right">2</td><td>Trail of Bits Skills, Ghost Security Skills</td></tr>
  </tbody>
</table>

Browse all: [skills/](skills/) | [catalog.json](skills/catalog.json)

---

## MCP Servers (129 servers)

129 Model Context Protocol servers that connect AI agents to tools, databases, APIs, and services. Categories include Developer Tools (15), Databases (13), AI & Machine Learning (12), Search (11), Communication (10), DevOps (9), Agent Orchestration (8), Security (7), Official Reference (6), Cloud Platforms (6), Monitoring (6), Browser Automation (5), Research & Data (5), Design (4), Finance (4), Marketing (3), Maps (2), Blockchain (2), Data Engineering (1). Install via `npx @anthropic-ai/mcp install` or individual server commands.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Servers</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Developer Tools</b></td><td align="right">15</td><td>MarkItDown (122.0K), Context7 (54.0K), CodeGraph MCP (54.0K)</td></tr>
    <tr><td><b>Databases</b></td><td align="right">13</td><td>PostgreSQL MCP (87.5K), SQLite MCP (87.5K), MindsDB MCP (39.0K)</td></tr>
    <tr><td><b>AI & Machine Learning</b></td><td align="right">12</td><td>EverArt MCP (87.5K), UI-TARS Desktop (30.0K), MiniMax MCP (16.8K)</td></tr>
    <tr><td><b>Search</b></td><td align="right">11</td><td>Jina AI MCP (4.7K), Last30Days MCP (4.5K), Brave Search MCP (3.0K)</td></tr>
    <tr><td><b>Communication</b></td><td align="right">10</td><td>Google Workspace MCP (87.5K), Notion MCP (5.0K), Slack MCP (3.0K)</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">9</td><td>Docker MCP (4.0K), Kubernetes MCP (1.7K), Terraform MCP (1.3K)</td></tr>
    <tr><td><b>Agent Orchestration</b></td><td align="right">8</td><td>n8n MCP (187.0K), Ruflo (33.0K), n8n MCP Server (22.0K)</td></tr>
    <tr><td><b>Security</b></td><td align="right">7</td><td>CVE MCP Server (952), Pentest AI (598), MCPGuard OWASP Scanner (150)</td></tr>
    <tr><td><b>Official Reference</b></td><td align="right">6</td><td>Filesystem MCP (87.5K), Memory MCP (87.5K), Git MCP (87.5K)</td></tr>
    <tr><td><b>Cloud Platforms</b></td><td align="right">6</td><td>EdgeOne Pages MCP (10.4K), AWS MCP Servers (8.0K), Cloudflare MCP (5.0K)</td></tr>
    <tr><td><b>Monitoring</b></td><td align="right">6</td><td>Sentry MCP (87.5K), Netdata MCP (78.0K), Sentry MCP v2 (5.2K)</td></tr>
    <tr><td><b>Browser Automation</b></td><td align="right">5</td><td>Browser Use MCP (100.4K), Puppeteer MCP (87.5K), Chrome DevTools MCP (40.0K)</td></tr>
    <tr><td><b>Research & Data</b></td><td align="right">5</td><td>TrendRadar (54.0K), TrendRadar MCP (54.0K), Scrapling (38.5K)</td></tr>
    <tr><td><b>Design</b></td><td align="right">4</td><td>Framelink Figma MCP (15.1K), Figma MCP (3.0K), Canva MCP (500)</td></tr>
    <tr><td><b>Finance</b></td><td align="right">4</td><td>Stripe MCP (2.0K), Shopify MCP Server (200), FLOX MCP (37)</td></tr>
    <tr><td><b>Marketing</b></td><td align="right">3</td><td>NotFair (2.9K), Salesforce Marketing Cloud MCP (1.2K), Xquik MCP Server (130)</td></tr>
    <tr><td><b>Maps</b></td><td align="right">2</td><td>Google Maps MCP (87.5K), Amap Maps MCP (2.0K)</td></tr>
    <tr><td><b>Blockchain</b></td><td align="right">2</td><td>Hedera Hosted MCP Server, AgentServices MCP</td></tr>
    <tr><td><b>Data Engineering</b></td><td align="right">1</td><td>dbt MCP Server (Official) (584)</td></tr>
  </tbody>
</table>

Browse all: [mcps/](mcps/) | [catalog.json](mcps/catalog.json)

---

## Agent Loops (115 workflows)

115 repeatable agent workflow patterns with built-in verification and feedback loops. Categories include engineering (58), multi-agent (17), evaluation (14), meta (11), operations (6), design (6), content (3). Each loop includes the exact prompt, verification criteria, and source attribution.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Loops</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>engineering</b></td><td align="right">58</td><td>overnight-docs-sweep, architecture-satisfaction-loop, sub-50ms-page-load-loop</td></tr>
    <tr><td><b>multi-agent</b></td><td align="right">17</td><td>beacon-loop, core-agentic-workflow, claude-code-dynamic-workflows</td></tr>
    <tr><td><b>evaluation</b></td><td align="right">14</td><td>quality-streak-loop, full-product-evaluation-loop, self-improving-champion-loop</td></tr>
    <tr><td><b>meta</b></td><td align="right">11</td><td>validate-patterns, loop-audit, loop-init</td></tr>
    <tr><td><b>operations</b></td><td align="right">6</td><td>stale-safe-batch-release-loop, production-data-cleanup-loop, post-release-baseline-loop</td></tr>
    <tr><td><b>design</b></td><td align="right">6</td><td>boeing-747-benchmark, war-loops-frontend-designer, infinite-clickbait-loop</td></tr>
    <tr><td><b>content</b></td><td align="right">3</td><td>seo-geo-visibility-loop, product-update-podcast-loop, anti-slop-loop</td></tr>
  </tbody>
</table>

Browse all: [loops/](loops/) | [catalog.json](loops/catalog.json)

---

## Subagents (32 agents)

32 subagent definitions, frameworks, and platform formats for multi-agent orchestration. Categories include Subagent Collection (16), Agent Harness (5), Official SDK (4), Platform Format (4), Curated Directory (3). Covers Microsoft Agent Framework (54K stars), OpenAI Agents SDK (18K), Google ADK (16.8K), and Claude Agent SDK.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Agents</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Subagent Collection</b></td><td align="right">16</td><td>awesome-claude-code-subagents (22.5K), awesome-codex-subagents (5.3K), cc-sdd (3.5K)</td></tr>
    <tr><td><b>Agent Harness</b></td><td align="right">5</td><td>oh-my-openagent (64.8K), oh-my-opencode (25.0K), oh-my-codex (19.0K)</td></tr>
    <tr><td><b>Official SDK</b></td><td align="right">4</td><td>Microsoft Agent Framework (54.0K), OpenAI Agents SDK (18.0K), Google ADK (16.8K)</td></tr>
    <tr><td><b>Platform Format</b></td><td align="right">4</td><td>Claude Code Subagent Format, Codex CLI Subagent Format, Gemini CLI Subagent Format</td></tr>
    <tr><td><b>Curated Directory</b></td><td align="right">3</td><td>awesome-claude-code (47.3K), Platform Subagent Formats Overview (47.3K), Curated Subagent Repositories (22.5K)</td></tr>
  </tbody>
</table>

Browse all: [subagents/](subagents/) | [catalog.json](subagents/catalog.json)

---

## Hooks (25 hooks)

25 production-ready Claude Code hooks organized by function. Categories include Security (5), Automation (4), Session Management (4), Quality (3), Safety (3), Utility (3), Notifications (2), Platform Feature (1). Hooks run automatically on file edits, commits, and sessions to enforce security, quality, and workflow standards.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Hooks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Security</b></td><td align="right">5</td><td>Block Dangerous Commands (425), Protect Secrets (425), Secret Scanner (425)</td></tr>
    <tr><td><b>Automation</b></td><td align="right">4</td><td>Auto Test (2.1K), Lint Fix (2.1K), Type Check (2.1K)</td></tr>
    <tr><td><b>Session Management</b></td><td align="right">4</td><td>Session Start (2.1K), Session End (2.1K), Context Loader (2.1K)</td></tr>
    <tr><td><b>Quality</b></td><td align="right">3</td><td>Post Edit Check (2.1K), Suggest Compact (2.1K), Commit Guard (425)</td></tr>
    <tr><td><b>Safety</b></td><td align="right">3</td><td>Pre Push Check (425), Block Dev Server (425), Smart Approve (425)</td></tr>
    <tr><td><b>Utility</b></td><td align="right">3</td><td>Stop Check (2.1K), Event Logger (425), awesome-claude-code-hooks (200)</td></tr>
    <tr><td><b>Notifications</b></td><td align="right">2</td><td>Notify Permission (425), Notification Log (425)</td></tr>
    <tr><td><b>Platform Feature</b></td><td align="right">1</td><td>GitHub Copilot Agent Hooks</td></tr>
  </tbody>
</table>

Browse all: [hooks/](hooks/) | [catalog.json](hooks/catalog.json)

---

## Plugins (53 plugins)

53 extensions, rules, and plugins across 9 AI coding platforms. Categories include Claude Code (9), OpenCode (9), Cursor (6), VS Code AI (6), Cross-Tool (6), Copilot (5), Windsurf (4), Aider (4), JetBrains (4). Includes official marketplaces and community collections.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Plugins</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Claude Code</b></td><td align="right">9</td><td>Superpowers Plugin (43.0K), Official Claude Code Marketplace (32.0K)</td></tr>
    <tr><td><b>OpenCode</b></td><td align="right">9</td><td>OpenSpec Plugin (128)</td></tr>
    <tr><td><b>Cursor</b></td><td align="right">6</td><td>Awesome CursorRules (20.0K)</td></tr>
    <tr><td><b>VS Code AI</b></td><td align="right">6</td><td>Kilo Code, Cline, Roo Code</td></tr>
    <tr><td><b>Cross-Tool</b></td><td align="right">6</td><td>CC Safety Net (1.4K), wshobson/agents (169)</td></tr>
    <tr><td><b>Copilot</b></td><td align="right">5</td><td>Awesome Copilot, Copilot Custom Instructions, GitHub Copilot Extensions GA</td></tr>
    <tr><td><b>Windsurf</b></td><td align="right">4</td><td>Windsurf VS Code Extension, Windsurf Visual Studio, Windsurf Neovim</td></tr>
    <tr><td><b>Aider</b></td><td align="right">4</td><td>Aider Composer, Aider Chat, Aider Fish</td></tr>
    <tr><td><b>JetBrains</b></td><td align="right">4</td><td>JetBrains AI Assistant, Agent Client Protocol, Skills Manager</td></tr>
  </tbody>
</table>

Browse all: [plugins/](plugins/) | [catalog.json](plugins/catalog.json)

---

## Prompts (102 prompts)

102 curated prompt collections and libraries for AI coding agents. Categories include Coding (11), Code Review (9), Architecture (8), Testing (8), General Purpose (8), Image Generation (8), Debugging (6), DevOps (6), Security (6), Documentation (6), Reasoning (5), Agent Workflows (5), Data (4), Design (4), Productivity (4), Content (3), Marketplace (1). Sources include f/prompts.chat (164K stars), danielmiessler/Fabric (43K), and anthropic/prompt-library.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Sources</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>Coding</b></td><td align="right">11</td><td>Full Stack Developer, Refactoring Expert, Performance Engineer</td></tr>
    <tr><td><b>Code Review</b></td><td align="right">9</td><td>Senior Code Reviewer, Git Commit Reviewer, Code Style Enforcer</td></tr>
    <tr><td><b>Architecture</b></td><td align="right">8</td><td>Software Architect, API Designer, Migration Planner</td></tr>
    <tr><td><b>Testing</b></td><td align="right">8</td><td>Test Engineer, Test Writer, Code Evaluation Rubric</td></tr>
    <tr><td><b>General Purpose</b></td><td align="right">8</td><td>Code Explainer, Prompt Engineer, Few-Shot Learner</td></tr>
    <tr><td><b>Image Generation</b></td><td align="right">8</td><td>Image Generation Prompt Crafter, Photorealistic Image Generation, Technical Diagram Generation</td></tr>
    <tr><td><b>Debugging</b></td><td align="right">6</td><td>Bug Hunter, Debugging Partner, Error Message Explainer</td></tr>
    <tr><td><b>DevOps</b></td><td align="right">6</td><td>DevOps Engineer, Incident Responder, Docker Optimizer</td></tr>
    <tr><td><b>Security</b></td><td align="right">6</td><td>Security Auditor, Security Code Review, Dependency Analyzer</td></tr>
    <tr><td><b>Documentation</b></td><td align="right">6</td><td>Technical Writer, API Documentation Generator, Code to Diagram</td></tr>
    <tr><td><b>Reasoning</b></td><td align="right">5</td><td>Chain of Thought Reasoner, Self-Critique Prompt, Tree of Thought Reasoner</td></tr>
    <tr><td><b>Agent Workflows</b></td><td align="right">5</td><td>ReAct Agent Prompt, Prompt Chaining Template, Tool Use / Function Calling</td></tr>
    <tr><td><b>Data</b></td><td align="right">4</td><td>Database Expert, Data Analyst, SQL Query Optimizer</td></tr>
    <tr><td><b>Design</b></td><td align="right">4</td><td>UI/UX Designer, Accessibility Auditor, Color Palette Generator</td></tr>
    <tr><td><b>Productivity</b></td><td align="right">4</td><td>Product Manager, Git Commit Message Writer, Technical Meeting Notes</td></tr>
    <tr><td><b>Content</b></td><td align="right">3</td><td>Technical Blog Writer, Changelog Writer, Content Repurposer</td></tr>
    <tr><td><b>Marketplace</b></td><td align="right">1</td><td>PromptHub</td></tr>
  </tbody>
</table>

**Marketplaces:** PromptBase (310K+ prompts), AIPRM (4K+), FlowGPT, PromptHero, skills.sh (885K installs)

Browse all: [prompts/](prompts/) | [catalog.json](prompts/catalog.json)

---

## Tools (66 CLI tools)

66 essential CLI tools that enhance AI coding agent capabilities. Categories include AI Coding CLIs (10), Code Analysis (9), Git Utilities (6), Cloud & DevOps (6), Formatting & Linting (6), Package Managers (5), Docker & Containers (5), Database CLIs (5), API Testing (5), Monitoring (4), Terminal Enhancement (3), Agent Memory (2). Top tools include ripgrep (65K stars), fzf (68K), ollama (120K), and gemini-cli (98K).

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Tools</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><b>AI Coding CLIs</b></td><td align="right">10</td><td>Ollama (120.0K), Gemini CLI (98.0K), Claude Code (80.0K)</td></tr>
    <tr><td><b>Code Analysis</b></td><td align="right">9</td><td>fzf (68.0K), ripgrep (65.5K), bat (51.0K)</td></tr>
    <tr><td><b>Git Utilities</b></td><td align="right">6</td><td>lazygit (55.0K), GitHub CLI (gh) (38.0K), delta (25.0K)</td></tr>
    <tr><td><b>Cloud & DevOps</b></td><td align="right">6</td><td>Ansible (64.0K), Terraform (44.0K), K9s (28.0K)</td></tr>
    <tr><td><b>Formatting & Linting</b></td><td align="right">6</td><td>Prettier (51.0K), ShellCheck (37.0K), Ruff (35.0K)</td></tr>
    <tr><td><b>Package Managers</b></td><td align="right">5</td><td>Bun (77.0K), uv (50.0K), pnpm (30.0K)</td></tr>
    <tr><td><b>Docker & Containers</b></td><td align="right">5</td><td>dive (49.0K), lazydocker (40.0K), Docker Compose (35.0K)</td></tr>
    <tr><td><b>Database CLIs</b></td><td align="right">5</td><td>pgcli (12.8K), mycli (11.7K), usql (9.0K)</td></tr>
    <tr><td><b>API Testing</b></td><td align="right">5</td><td>Hoppscotch (67.0K), HTTPie (35.0K), curl (35.0K)</td></tr>
    <tr><td><b>Monitoring</b></td><td align="right">4</td><td>Netdata (72.0K), Glances (27.0K), btop (25.0K)</td></tr>
    <tr><td><b>Terminal Enhancement</b></td><td align="right">3</td><td>Starship (48.0K), tmux (35.0K), Atuin (23.0K)</td></tr>
    <tr><td><b>Agent Memory</b></td><td align="right">2</td><td>Skills MCP Server (4), Tree Ring Memory (2)</td></tr>
  </tbody>
</table>

Browse all: [tools/](tools/) | [catalog.json](tools/catalog.json)

---

## Cross-Platform Compatibility

Awesome AI Agent Tools works with every major AI coding assistant:

| Platform | Skills | MCPs | Loops | Subagents | Plugins | Prompts | Tools | How to Install |
|----------|:------:|:----:|:-----:|:---------:|:-------:|:-------:|:-----:|----------------|
| **Claude Code** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.claude/skills/` |
| **OpenCode** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.opencode/skills/` |
| **Codex** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.agents/skills/` |
| **KiloCode** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.kilo/skills/` |
| **Cursor** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.cursor/skills/` |
| **Gemini CLI** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.gemini/skills/` |
| **Copilot** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.github/skills/` |
| **Aider** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.aider/skills/` |
| **Windsurf** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to `.windsurf/skills/` |

All skills follow the [SKILL.md open standard](https://agentskills.io) adopted by ~40 clients.

---

## Contribute with Your Agent

**Your AI agent can contribute to this directory automatically.** Give it the [contribution skill](CONTRIBUTE.md) and it will:

1. Fork the repo
2. Add the entry to the correct catalog
3. Validate JSON
4. Submit a PR

```bash
# In Claude Code or OpenCode, just say:
"Use the contribute skill to add [item] to the [category] catalog"

# Or install the skill manually:
cp CONTRIBUTE.md .claude/skills/contribute/SKILL.md
```

See [CONTRIBUTE.md](CONTRIBUTE.md) for the full automation prompt.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Quick ways to contribute:

- Add a skill, MCP server, loop, subagent, hook, or plugin to the catalogs
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

<a href="https://www.star-history.com/?repos=michielhdoteth%2Fawesome-ai-agent-tools&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=michielhdoteth/awesome-ai-agent-tools&type=date&theme=dark&legend=top-left&sealed_token=-rr9zd3TjPRUPgzgjXTfN0iwMe6Ch67UCSBSYfsSU06aAmPQQOZb8v07CzIQRFKsFPkknfmO18KGoOQMqfCqIFXevL4bi0CfhbYzJHs3iMQjdTnxV7RvTj_ogXs28lM0d8SeM1zb_z4gW_MoOLXifziyJ6DLw8G1RHgatck66tXr-VqDh1f1_UxoAo3j" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=michielhdoteth/awesome-ai-agent-tools&type=date&legend=top-left&sealed_token=-rr9zd3TjPRUPgzgjXTfN0iwMe6Ch67UCSBSYfsSU06aAmPQQOZb8v07CzIQRFKsFPkknfmO18KGoOQMqfCqIFXevL4bi0CfhbYzJHs3iMQjdTnxV7RvTj_ogXs28lM0d8SeM1zb_z4gW_MoOLXifziyJ6DLw8G1RHgatck66tXr-VqDh1f1_UxoAo3j" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=michielhdoteth/awesome-ai-agent-tools&type=date&legend=top-left&sealed_token=-rr9zd3TjPRUPgzgjXTfN0iwMe6Ch67UCSBSYfsSU06aAmPQQOZb8v07CzIQRFKsFPkknfmO18KGoOQMqfCqIFXevL4bi0CfhbYzJHs3iMQjdTnxV7RvTj_ogXs28lM0d8SeM1zb_z4gW_MoOLXifziyJ6DLw8G1RHgatck66tXr-VqDh1f1_UxoAo3j" />
 </picture>
</a>

---

## FAQ

**Q: What's the difference between Skills, MCPs, Loops, and Plugins?**

| Component | What it is | When to use it |
|-----------|------------|----------------|
| **Skill** | A SKILL.md file that teaches your agent a new workflow | You want your agent to know how to do something specific (e.g., TDD, code review) |
| **MCP Server** | A server that connects your agent to external services | You want your agent to access files, databases, APIs, or websites |
| **Agent Loop** | A repeatable workflow with built-in verification | You want a structured process with feedback (e.g., plan-execute-verify) |
| **Subagent** | A specialized AI agent that handles specific tasks | You want multi-agent orchestration with role-based routing |
| **Hook** | A Claude Code hook that runs automatically | You want safety checks, auto-formatting, or session management |
| **Plugin** | An extension for a specific AI coding platform | You want platform-specific features (Cursor rules, Copilot extensions) |
| **Prompt** | A curated prompt template or library | You want ready-made prompts for specific tasks |
| **Tool** | A CLI utility that enhances agent capabilities | You want your agent to use better search, linting, or monitoring tools |

**Q: How do I install these?**

Most components can be installed with a single command. See the [Quick Start](#quick-start) section or browse individual catalog READMEs for install commands.

**Q: Which AI tools are compatible?**

All 610 components work with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, Windsurf, Aider, KiloCode, and 30+ other AI coding assistants. Skills follow the [SKILL.md open standard](https://agentskills.io).

**Q: Can my AI agent contribute?**

Yes! Give your agent the [contribution skill](CONTRIBUTE.md) and it will fork, edit, and submit a PR automatically. No manual editing required.

**Q: How often is this updated?**

The catalogs are updated with each community PR. All entries are validated by GitHub Actions to ensure quality.

**Q: Where can I find more resources?**

- [awesome-claude-code](https://github.com/nicobailon/awesome-claude-code) -- 49.9K stars, Claude Code ecosystem
- [awesome-claude-code-subagents](https://github.com/nicobailon/awesome-claude-code-subagents) -- 23.3K stars, subagent ecosystem
- [skills.sh](https://skills.sh) -- 850K+ installs, the Skill Discovery Engine

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related rights to this work. The catalog data (JSON files) are released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Source code (site, scripts) is released under [MIT](LICENSE).

---

**Keywords:** AI agent skills, agent skills library, SKILL.md, MCP servers, model context protocol, agent workflows, AI coding assistant, Claude Code skills, OpenCode skills, Codex skills, Cursor skills, agent orchestration, AI development tools, skill marketplace, agent infrastructure, multi-agent, AI code review, TDD workflow, prompt engineering, agent loops, AI agent tools, coding agent, agent skills standard, portable skills, cross-platform AI, awesome list, open source AI, developer tools, subagents, hooks, plugins, agent plugins, prompt collections, CLI tools, developer utilities, AI agent components, agent tooling, MCP marketplace, AI coding tools 2026, awesome-list, open-source-ai, skill-marketplace, cross-platform-ai, agent-orchestration
