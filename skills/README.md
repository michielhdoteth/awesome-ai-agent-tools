# Skills Library

Reusable skill files for Claude Code, OpenCode, Cursor, and AI-assisted development workflows. Each skill provides a specialized set of instructions for a specific task domain. Skills are the building blocks of consistent, high-quality AI interactions.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![SKILL.md Standard](https://img.shields.io/badge/Standard-SKILL.md-blue.svg)](https://agentskills.io)
[![Skills Count](https://img.shields.io/badge/Skills-69-green.svg)](#skills-from-this-repository)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** June 2026

## What Are Skills?

Skills are structured instruction sets that tell an AI assistant how to handle a specific type of task. Unlike ad-hoc prompting, skills encode domain expertise, best practices, and quality standards into reusable files. They work across multiple AI coding assistants including Claude Code, OpenCode, Cursor, Copilot, Codex, Gemini CLI, and Kiro.

The SKILL.md standard (agentskills.io) is now adopted by ~40 clients. Skills are markdown instruction files (not code) that teach agents how to perform specific tasks.

## Quick Start

1. Copy any skill file to your project's `.opencode/skills/` or `.claude/skills/` directory
2. The skill auto-triggers when your task matches its description
3. Or invoke manually: "use the brainstorming skill"

```bash
# Clone and explore
git clone https://github.com/michielhdoteth/agent-skills-hub.git
ls agent-skills-hub/skills/
```

## Skills from This Repository

Browse the full catalog: [`skills/catalog.json`](catalog.json)

### Development Workflow

| Skill | Description | File |
|-------|-------------|------|
| **test-driven-development** | Enforces strict RED-GREEN-REFACTOR cycle. Write failing test first, watch it fail, implement, verify | [test-driven-development/SKILL.md](test-driven-development/SKILL.md) |
| **systematic-debugging** | 4-phase root cause process: reproduce, isolate, identify root cause, fix and verify | [systematic-debugging/SKILL.md](systematic-debugging/SKILL.md) |
| **verification-before-completion** | Requires concrete evidence before marking tasks complete. No "it works on my machine" | [verification-before-completion/SKILL.md](verification-before-completion/SKILL.md) |
| **code-reviewer** | Structured review checking security, logic, performance, and style. Findings by severity | [code-reviewer/SKILL.md](code-reviewer/SKILL.md) |
| **git-commit-writer** | Analyzes staged changes, writes conventional commits with auto-detected scope | [git-commit-writer/SKILL.md](git-commit-writer/SKILL.md) |

### Planning & Design

| Skill | Description | File |
|-------|-------------|------|
| **brainstorming** | Design process for turning ideas into specs. Explore context, ask questions, propose approaches | [brainstorming/SKILL.md](brainstorming/SKILL.md) |
| **writing-plans** | Convert specs into multi-step implementation plans with task breakdowns and dependencies | [writing-plans/SKILL.md](writing-plans/SKILL.md) |
| **acceptance-traceability** | Map PRD requirements to tasks, tests, and evidence for plan/build handoffs | [acceptance-traceability/SKILL.md](acceptance-traceability/SKILL.md) |
| **subagent-driven-development** | Execute implementation plans with independent tasks using parallel subagents | [subagent-driven-development/SKILL.md](subagent-driven-development/SKILL.md) |

### Writing & Communication

| Skill | Description | File |
|-------|-------------|------|
| **humanizer** | Remove AI writing patterns from generated text. Detects and fixes em dashes, hedging, puffery | [humanizer/SKILL.md](humanizer/SKILL.md) |
| **cold-email** | SDR cold email outreach with 5-sentence structure, personalization, and low-friction CTAs | [cold-email/SKILL.md](cold-email/SKILL.md) |
| **copywriting** | Write and optimize marketing copy with persuasive frameworks | [copywriting/SKILL.md](copywriting/SKILL.md) |

### MCP & Agent Protocols

| Skill | Description | File |
|-------|-------------|------|
| **mcp-security** | Audit, harden, and securely configure MCP servers. 66% of servers have security findings | [mcp-security/SKILL.md](mcp-security/SKILL.md) |
| **a2a-protocol** | Implement multi-agent coordination using Agent-to-Agent protocol. Complements MCP | [a2a-protocol/SKILL.md](a2a-protocol/SKILL.md) |

### Multimedia Generation

| Skill | Description | File |
|-------|-------------|------|
| **multimedia-generation** | Generate video, voice, 3D models, and music using MCP servers and AI services | [multimedia-generation/SKILL.md](multimedia-generation/SKILL.md) |
| **playwright-automation** | Browser automation for testing, scraping, and workflow automation. 34K+ GitHub stars | [playwright-automation/SKILL.md](playwright-automation/SKILL.md) |
| **figma-design-to-code** | Bridge design and development using Figma MCP. Extract tokens, generate components | [figma-design-to-code/SKILL.md](figma-design-to-code/SKILL.md) |

### Data & Infrastructure

| Skill | Description | File |
|-------|-------------|------|
| **data-analysis** | Analyze data using MCP servers for CSV, Excel, databases, and visualization | [data-analysis/SKILL.md](data-analysis/SKILL.md) |
| **devops-infrastructure** | Manage containers, orchestration, CI/CD, and cloud infrastructure using MCP servers | [devops-infrastructure/SKILL.md](devops-infrastructure/SKILL.md) |

### External

| Skill | Description | Link |
|-------|-------------|------|
| **squish** | Connect once. Remember everywhere. Shared memory through OAuth. MCP + CLI. | [squishplugin.dev](https://squishplugin.dev) |

## Notable Skills from the Community

The AI-assisted development ecosystem has produced thousands of skill files. Here are some of the most popular and useful skill collections (June 2026 data):

| Collection | Stars | Installs | Description | URL |
|------------|------:|---------:|-------------|-----|
| **Superpowers** (obra) | 234K | 787K | Full agentic development methodology. Supports 8+ harnesses | [github.com/obra/superpowers](https://github.com/obra/superpowers) |
| **UI-UX Pro Max** (nextlevelbuilder) | 79K | - | Design system, UI/UX skills, and frontend development patterns | [github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| **Awesome Claude Skills** (Composio) | 60K | - | Directory of skills and tools organized by use case | [github.com/ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| **Claude-Mem** (thedotmack) | 76K | - | Persistent memory system for Claude Code sessions | [github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) |
| **Anthropic claude-plugins-official** | 30K | - | Official marketplace, 222 entries, pre-registered in Claude Code | [github.com/anthropics/claude-plugins](https://github.com/anthropics/claude-plugins) |
| **Vercel skills.sh** | - | 810K+ | 670K+ skills listed, top skill at 2.0M installs | [skills.sh](https://skills.sh) |
| **Agensi.io** | - | - | Curated, security-scanned marketplace | [agensi.io](https://agensi.io) |
| **BuySkills.ai** | - | - | Cross-agent marketplace supporting 14+ agents | [buyskills.ai](https://buyskills.ai) |

## Top Skills by Community Usage

These are the most-installed skills across the ecosystem (June 2026):

| Rank | Skill | Installs | Source |
|------|-------|----------|--------|
| 1 | **vercel-react-best-practices** | 492K | obra/superpowers |
| 2 | **web-design-guidelines** | 406K | obra/superpowers |
| 3 | **grill-me** | 360K | obra/superpowers |
| 4 | **improve-codebase-architecture** | 296K | obra/superpowers |
| 5 | **grill-with-docs** | 293K | obra/superpowers |
| 6 | **to-prd** | 261K | obra/superpowers |
| 7 | **to-issues** | 250K | obra/superpowers |
| 8 | **supabase-postgres-best-practices** | 244K | obra/superpowers |
| 9 | **diagnose** | 230K | obra/superpowers |
| 10 | **composition-patterns** | 219K | obra/superpowers |

## Skill Categories

### Spec-Driven Development
The dominant pattern in the ecosystem is **spec-first, code-second, test-always**. Top frameworks enforce:
1. Write the spec/design doc first
2. Get approval before implementation
3. Write failing tests before code
4. Implement until tests pass
5. Review and verify before closing

### Fresh-Context Subagents
Each subagent task gets a clean context window to avoid context rot. This is critical for long-running projects where accumulated context degrades AI performance.

### Verification Gates
Every task ends with explicit verification before marking complete. No task is closed without evidence.

### MCP Tool Integration
Skills that work alongside MCP servers to provide reasoning about tool usage. MCP provides capabilities, skills provide wisdom.

### Agent-to-Agent Coordination
New in 2026: Skills for coordinating multiple AI agents using the A2A protocol. MCP connects agents to tools, A2A connects agents to agents.

### Multimedia Generation
New in 2026: Skills for generating video, voice, 3D models, and music from AI agents. Covers Arcframe, ElevenLabs, Blender MCP, and more.

## How to Create Skills

Skills follow a standard format. At minimum, a SKILL.md file should include:
- **Purpose**: What this skill does (one paragraph)
- **When to Use**: Trigger conditions for the skill
- **Workflow**: Step-by-step instructions
- **Rules**: Constraints and requirements
- **Output format**: What the result should look like
- **References**: Links to tools, docs, and examples

See the skill files in this directory for examples.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Create a skill following the SKILL.md format
3. Add an entry to `skills/catalog.json`
4. Submit a PR

## Related Libraries

- [MCP Servers](../mcps/) - Model Context Protocol server collection
- [Agent Loops](../loops/) - Reusable agent workflow patterns
- [Contributing Guide](../CONTRIBUTING.md) - How to add skills, MCPs, or loops

---

**Keywords:** AI agent skills, SKILL.md, Claude Code skills, Cursor skills, OpenCode skills, Codex skills, AI coding assistant, agent workflows, skill library, AI development tools, coding agent skills, MCP skills, agent orchestration, skill marketplace, AI agent development, vibe coding skills, portable skills, cross-platform AI
