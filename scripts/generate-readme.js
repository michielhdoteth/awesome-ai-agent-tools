#!/usr/bin/env node

/**
 * generate-readme.js
 * 
 * Reads all catalog.json files and generates README.md with accurate counts.
 * Run: node scripts/generate-readme.js
 * 
 * This ensures counts are NEVER stale -- they come directly from the data.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPO_URL = 'https://github.com/michielhdoteth/awesome-ai-agent-tools';
const SITE_URL = 'https://awesome-ai-agent-tools.vercel.app';
const TODAY = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// --- Load catalogs ---

const CATALOG_KEYS = {
  skills: 'skills',
  mcps: 'servers',
  loops: 'loops',
  subagents: 'subagents',
  hooks: 'hooks',
  plugins: 'plugins',
  prompts: 'prompts',
  tools: 'tools'
};

function loadCatalog(name) {
  const p = path.join(ROOT, name, 'catalog.json');
  if (!fs.existsSync(p)) {
    console.error(`WARNING: ${p} not found`);
    return { entries: [], categories: {} };
  }
  const raw = JSON.parse(fs.readFileSync(p, 'utf8'));
  const arrKey = CATALOG_KEYS[name];
  const entries = raw[arrKey] || [];
  
  // Count by category from actual entries
  const categories = {};
  entries.forEach(e => {
    const cat = e.category || 'Uncategorized';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(e);
  });
  
  return { entries, categories, raw };
}

const skills = loadCatalog('skills');
const mcps = loadCatalog('mcps');
const loops = loadCatalog('loops');
const subagents = loadCatalog('subagents');
const hooks = loadCatalog('hooks');
const plugins = loadCatalog('plugins');
const prompts = loadCatalog('prompts');
const tools = loadCatalog('tools');

const TOTAL = skills.entries.length + mcps.entries.length + loops.entries.length + 
              subagents.entries.length + hooks.entries.length + plugins.entries.length + 
              prompts.entries.length + tools.entries.length;

// --- Helpers ---

function sortCategories(cats) {
  return Object.entries(cats).sort((a, b) => b[1].length - a[1].length);
}

function categoryTable(cats, topExamples = true) {
  const sorted = sortCategories(cats);
  let rows = sorted.map(([name, entries]) => {
    // Pick top entries by stars if available
    let topStr = '';
    if (topExamples) {
      const withStars = entries
        .filter(e => e.stars || e.githubStars)
        .sort((a, b) => (b.stars || b.githubStars || 0) - (a.stars || a.githubStars || 0));
      if (withStars.length > 0) {
        topStr = withStars.slice(0, 3).map(e => {
          const stars = e.stars || e.githubStars || 0;
          const starStr = stars >= 1000 ? ` (${(stars/1000).toFixed(1)}K)` : stars > 0 ? ` (${stars})` : '';
          return `${e.name || e.id}${starStr}`;
        }).join(', ');
      } else {
        topStr = entries.slice(0, 3).map(e => e.name || e.id).join(', ');
      }
    }
    return `    <tr><td><b>${name}</b></td><td align="right">${entries.length}</td><td>${topStr}</td></tr>`;
  });
  return `  <tbody>\n${rows.join('\n')}\n  </tbody>`;
}

function categoryDescription(cats) {
  const sorted = sortCategories(cats);
  return sorted.map(([name, entries]) => `${name} (${entries.length})`).join(', ');
}

function categoryBullets(cats) {
  const sorted = sortCategories(cats);
  return sorted.map(([name, entries]) => `- **${name}** (${entries.length})`).join('\n');
}

// --- Generate README ---

const readme = `# Awesome AI Agent Tools

<p align="center">
  <img src="assets/banner.png" alt="Awesome AI Agent Tools" width="100%">
</p>

> **The definitive directory of AI agent components.** ${TOTAL} installable skills, MCP servers, agent workflows, subagents, hooks, plugins, prompts, and tools -- curated from 100+ repositories. Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, Windsurf, Aider, and 30+ tools.

<p align="center">
  <a href="${REPO_URL}/stargazers"><img src="https://img.shields.io/github/stars/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Stars&color=gold" alt="GitHub Stars"></a>
  <a href="${REPO_URL}/forks"><img src="https://img.shields.io/github/forks/michielhdoteth/awesome-ai-agent-tools?style=flat-square&label=Forks&color=blue" alt="GitHub Forks"></a>
  <a href="${REPO_URL}"><img src="https://img.shields.io/github/last-commit/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="Last Commit"></a>
  <a href="${REPO_URL}/blob/main/LICENSE"><img src="https://img.shields.io/github/license/michielhdoteth/awesome-ai-agent-tools?style=flat-square" alt="License"></a>
  <a href="${REPO_URL}/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome"></a>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
</p>

<p align="center">
  <a href="https://agentskills.io"><img src="https://img.shields.io/badge/Standard-SKILL.md-blue?style=flat-square" alt="SKILL.md Standard"></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-2026-f97316?style=flat-square" alt="MCP 2026"></a>
  <a href="https://github.com/topics/awesome"><img src="https://img.shields.io/badge/Awesome-List-pink?style=flat-square" alt="Awesome List"></a>
</p>

<p align="center"><sub>Last updated: ${TODAY}</sub></p>

---

## Contents

- [What is this?](#what-is-this)
- [Quick Start](#quick-start)
- [Start Here](#start-here)
- [Browse by Category](#browse-by-category)
- [Skills (${skills.entries.length} curated)](#skills-${skills.entries.length}-curated)
- [MCP Servers (${mcps.entries.length} servers)](#mcp-servers-${mcps.entries.length}-servers)
- [Agent Loops (${loops.entries.length} workflows)](#agent-loops-${loops.entries.length}-workflows)
- [Subagents (${subagents.entries.length} agents)](#subagents-${subagents.entries.length}-agents)
- [Hooks (${hooks.entries.length} hooks)](#hooks-${hooks.entries.length}-hooks)
- [Plugins (${plugins.entries.length} plugins)](#plugins-${plugins.entries.length}-plugins)
- [Prompts (${prompts.entries.length} prompts)](#prompts-${prompts.entries.length}-prompts)
- [Tools (${tools.entries.length} CLI tools)](#tools-${tools.entries.length}-cli-tools)
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
| **Give my agent new skills** | [Skills](skills/) -- ${skills.entries.length} installable SKILL.md files | [MCP Servers](mcps/) -- connect to external services |
| **Build multi-agent systems** | [Subagents](subagents/) -- ${subagents.entries.length} specialized agents | [Agent Loops](loops/) -- ${loops.entries.length} repeatable workflows |
| **Automate my workflow** | [Hooks](hooks/) -- ${hooks.entries.length} production-ready hooks | [Plugins](plugins/) -- ${plugins.entries.length} platform extensions |
| **Get better prompts** | [Prompts](prompts/) -- ${prompts.entries.length} curated collections | [Tools](tools/) -- ${tools.entries.length} CLI utilities |
| **Understand the ecosystem** | [What is this?](#what-is-this) below | [Browse by Category](#browse-by-category) |

**Quickest path:** Install the top 3 most-installed skills in under a minute:

\`\`\`bash
npx skills add obra/superpowers --skill executing-plans
npx skills add anthropics/skills --skill frontend-design
npx skills add mattpocock/skills --skill grill-me
\`\`\`

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
    <tr><td>Installable skill files</td><td align="center">${skills.entries.length} SKILL.md files</td><td align="center">Links only</td></tr>
    <tr><td>MCP server configs</td><td align="center">${mcps.entries.length} servers + install cmds</td><td align="center">Links only</td></tr>
    <tr><td>Agent workflows</td><td align="center">${loops.entries.length} loops with prompts</td><td align="center">Links only</td></tr>
    <tr><td>Subagents</td><td align="center">${subagents.entries.length} agents + model routing</td><td align="center">No</td></tr>
    <tr><td>Hooks</td><td align="center">${hooks.entries.length} production-ready hooks</td><td align="center">No</td></tr>
    <tr><td>Plugins</td><td align="center">${plugins.entries.length} plugins across 9 platforms</td><td align="center">No</td></tr>
    <tr><td>Prompts</td><td align="center">${prompts.entries.length} curated prompts + 310K marketplace</td><td align="center">Links only</td></tr>
    <tr><td>CLI Tools</td><td align="center">${tools.entries.length} tools with install cmds</td><td align="center">No</td></tr>
    <tr><td>Catalogs with metadata</td><td align="center">JSON catalogs for discovery</td><td align="center">No</td></tr>
    <tr><td>Cross-platform</td><td align="center">30+ AI tools</td><td align="center">Varies</td></tr>
    <tr><td>Agent-contributable</td><td align="center">Automated fork+PR skill</td><td align="center">No</td></tr>
  </tbody>
</table>

---

## Quick Start

### Option 1: Install via skills.sh (recommended)

\`\`\`bash
npx skills add michielhdoteth/awesome-ai-agent-tools
\`\`\`

### Option 2: Clone and explore

\`\`\`bash
git clone ${REPO_URL}.git
cd awesome-ai-agent-tools

# Browse the catalogs
cat skills/catalog.json | jq '.skills | length'
cat mcps/catalog.json | jq '.servers | length'
cat loops/catalog.json | jq '.loops | length'
\`\`\`

### Option 3: Use the browse site

Visit the interactive site to search, filter, and explore all components: **${SITE_URL}**

### Option 4: Let your agent contribute

Give your AI agent the [contribution skill](CONTRIBUTE.md) and it will fork, edit, and submit a PR automatically.

---

## Browse by Category

| Library | Count | What You Get | Browse |
|---------|-------|--------------|--------|
| **Skills** | ${skills.entries.length} | Installable SKILL.md files for specific tasks | [skills/](skills/) |
| **MCP Servers** | ${mcps.entries.length} | Server configs with install commands | [mcps/](mcps/) |
| **Agent Loops** | ${loops.entries.length} | Workflows with prompts and verification | [loops/](loops/) |
| **Subagents** | ${subagents.entries.length} | Specialized agents with model routing | [subagents/](subagents/) |
| **Hooks** | ${hooks.entries.length} | Production-ready Claude Code hooks | [hooks/](hooks/) |
| **Plugins** | ${plugins.entries.length} | Extensions for Claude Code, OpenCode, Cursor, etc. | [plugins/](plugins/) |
| **Prompts** | ${prompts.entries.length} | Curated prompt collections and marketplaces | [prompts/](prompts/) |
| **Tools** | ${tools.entries.length} | CLI tools that enhance agent capabilities | [tools/](tools/) |

**Total: ${TOTAL} components across 8 categories.**

---

## Skills (${skills.entries.length} curated)

${skills.entries.length} installable SKILL.md files that teach AI agents new capabilities. Categories include ${categoryDescription(skills.categories)}. Install via \`npx skills add\` from sources including obra/superpowers (239K stars), addyosmani/agent-skills (77.2K), and 30+ more repositories.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Skills</th>
    </tr>
  </thead>
${categoryTable(skills.categories)}
</table>

Browse all: [skills/](skills/) | [catalog.json](skills/catalog.json)

---

## MCP Servers (${mcps.entries.length} servers)

${mcps.entries.length} Model Context Protocol servers that connect AI agents to tools, databases, APIs, and services. Categories include ${categoryDescription(mcps.categories)}. Install via \`npx @anthropic-ai/mcp install\` or individual server commands.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Servers</th>
    </tr>
  </thead>
${categoryTable(mcps.categories)}
</table>

Browse all: [mcps/](mcps/) | [catalog.json](mcps/catalog.json)

---

## Agent Loops (${loops.entries.length} workflows)

${loops.entries.length} repeatable agent workflow patterns with built-in verification and feedback loops. Categories include ${categoryDescription(loops.categories)}. Each loop includes the exact prompt, verification criteria, and source attribution.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Loops</th>
    </tr>
  </thead>
${categoryTable(loops.categories)}
</table>

Browse all: [loops/](loops/) | [catalog.json](loops/catalog.json)

---

## Subagents (${subagents.entries.length} agents)

${subagents.entries.length} subagent definitions, frameworks, and platform formats for multi-agent orchestration. Categories include ${categoryDescription(subagents.categories)}. Covers Microsoft Agent Framework (54K stars), OpenAI Agents SDK (18K), Google ADK (16.8K), and Claude Agent SDK.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Agents</th>
    </tr>
  </thead>
${categoryTable(subagents.categories)}
</table>

Browse all: [subagents/](subagents/) | [catalog.json](subagents/catalog.json)

---

## Hooks (${hooks.entries.length} hooks)

${hooks.entries.length} production-ready Claude Code hooks organized by function. Categories include ${categoryDescription(hooks.categories)}. Hooks run automatically on file edits, commits, and sessions to enforce security, quality, and workflow standards.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Hooks</th>
    </tr>
  </thead>
${categoryTable(hooks.categories)}
</table>

Browse all: [hooks/](hooks/) | [catalog.json](hooks/catalog.json)

---

## Plugins (${plugins.entries.length} plugins)

${plugins.entries.length} extensions, rules, and plugins across 9 AI coding platforms. Categories include ${categoryDescription(plugins.categories)}. Includes official marketplaces and community collections.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Plugins</th>
    </tr>
  </thead>
${categoryTable(plugins.categories)}
</table>

Browse all: [plugins/](plugins/) | [catalog.json](plugins/catalog.json)

---

## Prompts (${prompts.entries.length} prompts)

${prompts.entries.length} curated prompt collections and libraries for AI coding agents. Categories include ${categoryDescription(prompts.categories)}. Sources include f/prompts.chat (164K stars), danielmiessler/Fabric (43K), and anthropic/prompt-library.

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Sources</th>
    </tr>
  </thead>
${categoryTable(prompts.categories)}
</table>

**Marketplaces:** PromptBase (310K+ prompts), AIPRM (4K+), FlowGPT, PromptHero, skills.sh (885K installs)

Browse all: [prompts/](prompts/) | [catalog.json](prompts/catalog.json)

---

## Tools (${tools.entries.length} CLI tools)

${tools.entries.length} essential CLI tools that enhance AI coding agent capabilities. Categories include ${categoryDescription(tools.categories)}. Top tools include ripgrep (65K stars), fzf (68K), ollama (120K), and gemini-cli (98K).

<table width="100%">
  <thead>
    <tr>
      <th align="left">Category</th>
      <th align="right">Count</th>
      <th align="left">Top Tools</th>
    </tr>
  </thead>
${categoryTable(tools.categories)}
</table>

Browse all: [tools/](tools/) | [catalog.json](tools/catalog.json)

---

## Cross-Platform Compatibility

Awesome AI Agent Tools works with every major AI coding assistant:

| Platform | Skills | MCPs | Loops | Subagents | Plugins | Prompts | Tools | How to Install |
|----------|:------:|:----:|:-----:|:---------:|:-------:|:-------:|:-----:|----------------|
| **Claude Code** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.claude/skills/\` |
| **OpenCode** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.opencode/skills/\` |
| **Codex** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.agents/skills/\` |
| **KiloCode** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.kilo/skills/\` |
| **Cursor** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.cursor/skills/\` |
| **Gemini CLI** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.gemini/skills/\` |
| **Copilot** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.github/skills/\` |
| **Aider** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.aider/skills/\` |
| **Windsurf** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Copy to \`.windsurf/skills/\` |

All skills follow the [SKILL.md open standard](https://agentskills.io) adopted by ~40 clients.

---

## Contribute with Your Agent

**Your AI agent can contribute to this directory automatically.** Give it the [contribution skill](CONTRIBUTE.md) and it will:

1. Fork the repo
2. Add the entry to the correct catalog
3. Validate JSON
4. Submit a PR

\`\`\`bash
# In Claude Code or OpenCode, just say:
"Use the contribute skill to add [item] to the [category] catalog"

# Or install the skill manually:
cp CONTRIBUTE.md .claude/skills/contribute/SKILL.md
\`\`\`

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

<a href="${REPO_URL}/graphs/contributors">
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

All ${TOTAL} components work with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, Windsurf, Aider, KiloCode, and 30+ other AI coding assistants. Skills follow the [SKILL.md open standard](https://agentskills.io).

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
`;

// Write README.md
fs.writeFileSync(path.join(ROOT, 'README.md'), readme);

console.log(`README.md generated successfully!`);
console.log(`  Skills: ${skills.entries.length}`);
console.log(`  MCPs: ${mcps.entries.length}`);
console.log(`  Loops: ${loops.entries.length}`);
console.log(`  Subagents: ${subagents.entries.length}`);
console.log(`  Hooks: ${hooks.entries.length}`);
console.log(`  Plugins: ${plugins.entries.length}`);
console.log(`  Prompts: ${prompts.entries.length}`);
console.log(`  Tools: ${tools.entries.length}`);
console.log(`  TOTAL: ${TOTAL}`);
