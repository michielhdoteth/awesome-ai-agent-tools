# Claude Code Bible: Complete Guide to AI-Assisted Development, Prompt Engineering, MCP Servers, and Workflows

*Last updated: 2026-06-02*

<p align="center">
  <a href="https://claude.ai/code"><img src="https://img.shields.io/badge/Claude-Code-8A2BE2?style=flat-square" alt="Claude Code"></a>
  <a href="https://github.com/topics/ai-coding"><img src="https://img.shields.io/badge/AI-Assisted_Development-22c55e?style=flat-square" alt="AI Assisted Development"></a>
  <a href="https://github.com/topics/prompt-engineering"><img src="https://img.shields.io/badge/Prompt_Engineering-a855f7?style=flat-square" alt="Prompt Engineering"></a>
  <a href="https://github.com/topics/mcp"><img src="https://img.shields.io/badge/Model_Context_Protocol_(MCP)-f97316?style=flat-square" alt="MCP"></a>
  <a href="https://github.com/topics/claude-code"><img src="https://img.shields.io/badge/Claude_Code_Resources-3b82f6?style=flat-square" alt="Claude Code Resources"></a>
  <br>
  <a href="https://github.com/michielhdoteth/claude-bible/stargazers"><img src="https://img.shields.io/github/stars/michielhdoteth/claude-bible?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://github.com/michielhdoteth/claude-bible/forks"><img src="https://img.shields.io/github/forks/michielhdoteth/claude-bible?style=flat-square" alt="GitHub Forks"></a>
  <a href="https://github.com/michielhdoteth/claude-bible"><img src="https://img.shields.io/github/last-commit/michielhdoteth/claude-bible?style=flat-square" alt="Last Commit"></a>
</p>

> **Claude Code Bible** is the most comprehensive open-source resource for Claude Code, AI-assisted development, prompt engineering, MCP servers, and subagent orchestration. It includes 7 production-ready skill files, 50+ MCP server configurations, and battle-tested workflow patterns used by 32,000+ MCP repos and 27,000+ Claude Code repos as of May 2026.

---

## What is Claude Code Bible?

Claude Code Bible is an open-source knowledge base that teaches developers how to use Claude Code, MCP servers, prompt engineering, and AI agents to build software faster. It covers the entire Claude Code ecosystem: CLI commands, slash commands, subagents, hooks, plugins, workflows, and integrations with 50+ external tools.

**Who this is for:** Developers using Claude Code, AI coding assistants, LLM-powered workflows, or Model Context Protocol servers. Works with Claude Sonnet, Claude Opus, GPT-4, Gemini, and open-source LLMs.

**What you get:**
- 40+ Claude Code slash commands with examples
- 7 reusable skill files (brainstorming, planning, TDD, security review, copywriting)
- 50+ MCP server configurations (GitHub, Context7, Brave, Sentry, databases)
- Autonomous workflow patterns (Ralph Wiggum loops, OpenProse orchestration)
- Prompt engineering techniques (Chain-of-Thought, ReAct, structured prompting)
- Best practices for security, ethics, and code quality

---

## Quick Links

### Start Here

| Resource | What You Learn | Time |
|----------|----------------|------|
| [Getting Started](docs/getting-started.md) | Setup, first project, core workflow | 10 min |
| [Feature Reference](docs/feature-reference.md) | 40+ commands, flags, examples | 20 min |
| [CLAUDE.md Templates](docs/claude-md-templates.md) | Copy-paste config files | 5 min |

### Build With

| Resource | What You Get | Path |
|----------|--------------|------|
| **Skills** | 12 production-ready skill files (TDD, debugging, code review, planning) | [skills/](skills/) |
| **MCPs** | 50+ server configs with setup examples | [mcps/](mcps/) |
| **Workflows** | Autonomous coding patterns (Ralph Wiggum, OpenProse) | [workflows/](workflows/) |
| **Hooks** | 20+ automation scripts (security gate, auto-format, context loader) | [hooks/](hooks/) |
| **Subagents** | Specialized AI agents (reviewer, debugger, security auditor) | [subagents/](subagents/) |
| **Commands** | Custom slash command library | [commands/](commands/) |

### Learn More

| Resource | What You Master | Path |
|----------|-----------------|------|
| **Prompt Engineering** | Chain-of-Thought, ReAct, structured prompting | [prompting/](prompting/) |
| **Best Practices** | Security, ethics, code quality, testing | [rules/](rules/) |
| **Building Blocks** | Markdown files, agents, skills, hooks, plugins | [docs/building-blocks.md](docs/building-blocks.md) |
| **Advanced Tips** | Context management, worktrees, parallel sessions | [docs/advanced-tips.md](docs/advanced-tips.md) |
| **Tools Overview** | AI assistants, IDEs, testing, linting, docs | [tools/overview.md](tools/overview.md) |
| **Integrations** | VS Code, JetBrains, GitHub, Vercel, 15+ services | [integrations/](integrations/) |

---

## Key Features

### Claude Code CLI Reference
Complete documentation of 40+ slash commands including `/add-dir`, `/agents`, `/compact`, `/config`, `/context`, `/cost`, `/doctor`, `/export`, `/hooks`, `/ide`, `/init`, `/mcp`, `/memory`, `/model`, `/permissions`, `/plan`, `/plugin`, `/review`, `/sandbox`, `/security-review`, `/todos`, and more. Each command includes usage examples, flags, and best practices.

### Prompt Engineering Guide
Master AI communication with techniques like Chain-of-Thought prompting, ReAct pattern, structured prompting, modular prompt design, and prompt testing. Covers basic tips through advanced multi-step reasoning strategies.

### MCP Server Directory
Curated Model Context Protocol servers including Context7 (39k+ stars), GitHub MCP, Filesystem, Brave Search, Sentry, PostgreSQL, Taskmaster, Wrinkl, Squish, and 40+ more. Each server includes configuration examples and use cases.

### Workflow Patterns
Advanced autonomous workflows including Ralph Wiggum loops (overnight coding sessions that build features while you sleep), OpenProse language for multi-agent orchestration, and TDD workflows with parallel subagents.

### 12 Production-Ready Skills
Reusable skill files you can drop into any project:

**Development Workflow:**
- **test-driven-development** - RED-GREEN-REFACTOR enforcement
- **systematic-debugging** - 4-phase root cause process
- **verification-before-completion** - Evidence-based task completion
- **code-reviewer** - Security, logic, performance, style review
- **git-commit-writer** - Conventional commit messages from staged changes

**Planning & Design:**
- **brainstorming** - Explore intent and requirements before coding
- **writing-plans** - Create detailed implementation plans
- **acceptance-traceability** - Map requirements to tests and evidence
- **subagent-driven-development** - Execute plans with parallel agents

**Writing & Communication:**
- **cold-email** - Write effective outreach emails
- **copywriting** - Create compelling marketing content
- **humanizer** - Make AI text sound natural

### Best Practices
Security guidelines, ethical considerations, code review practices, testing strategies, and team collaboration patterns for responsible AI-assisted development.

---

## Table of Contents

### [Getting Started](docs/getting-started.md)
Your entry point to Claude Code. Covers environment setup, IDE integrations, first project, and core workflow patterns.

### [Feature Reference](docs/feature-reference.md)
Complete reference of all Claude Code features: 40+ slash commands, subagents, hooks, MCP configuration, plugins, workflows, and CLI reference.

### [Building Blocks](docs/building-blocks.md)
Deep dive into Claude Code's six building blocks: Markdown Files, Slash Commands, Agents, Skills, Hooks, and Plugins.

### [Workflows](workflows/README.md)
Advanced autonomous workflows including Ralph Wiggum loops and OpenProse multi-agent orchestration.

### [MCP Servers](mcps/README.md)
Model Context Protocol server directory with 50+ curated integrations, configuration examples, and context window explanations.

### [Prompt Engineering](prompting/prompt-engineering.md)
Complete guide to prompt techniques: Chain-of-Thought, ReAct, structured prompting, modular design, and testing.

### [Best Practices](rules/best-practices.md)
Security, ethics, code quality, testing, integration, and responsible AI use guidelines.

### [Tools Overview](tools/overview.md)
AI assistants, IDE integrations, testing tools, linters, debugging tools, and documentation generators.

### [Integrations](integrations/README.md)
Connect Claude Code with VS Code, JetBrains, GitHub, GitLab, Sentry, Vercel, and 15+ other services.

### [Subagents](subagents/README.md)
Specialized AI agents for code review, testing, debugging, and security analysis.

### [Hooks](hooks/README.md)
Automated scripts for pre/post tool execution, validation, and workflow automation.

### [Plugins](plugins/README.md)
Extensions for MCP servers, IDE integrations, and third-party tools.

### [Commands](commands/README.md)
Custom slash command creation, namespacing, arguments, and bash execution.

### [Showcase](showcase/README.md)
Real-world examples and projects built with Claude Code principles.

---

## Frequently Asked Questions

### What is Claude Code?
Claude Code is Anthropic's command-line tool for AI-assisted coding. It lets you generate, refactor, debug, and test code using natural language prompts. Developers describe what they want in plain English, and Claude Code writes the implementation. It supports multi-step task automation, context-aware development with persistent memory, and integration with external tools via MCP servers.

### What are MCP servers?
MCP (Model Context Protocol) servers connect Claude Code to external tools and data sources. They let Claude access GitHub repos, databases, web search, file systems, and 50+ other services. MCP is an open standard that works across AI models including Claude, GPT-4, and Gemini.

### What are subagents in Claude Code?
Subagents are specialized AI agents that handle specific tasks like code review, testing, debugging, or security analysis. They run in isolated contexts with focused expertise, keeping your main conversation clean. Claude Code includes built-in subagents (Explore, Plan, General-purpose) and supports custom subagents via markdown files.

### How do I get started with Claude Code?
Install Claude Code via npm (`npm install -g @anthropic-ai/claude-code`), configure your environment, and start a session with `claude`. The Bible provides step-by-step guides for setup, your first project, and advanced workflows.

### What skills are included in the Bible?
The Bible includes 7 production-ready skill files: brainstorming (explore intent before coding), writing-plans (create implementation plans), subagent-driven-development (execute plans with parallel agents), acceptance-traceability (map requirements to tests), cold-email (write outreach), copywriting (marketing content), and humanizer (make AI text natural).

### What is the Ralph Wiggum workflow?
Ralph Wiggum is an autonomous AI coding loop that builds features while you sleep. It uses a structured workflow where Claude plans, implements, tests, and commits code in cycles, with human checkpoints at key milestones. The pattern is documented in the workflows section.

### How does Claude Code compare to GitHub Copilot?
Claude Code is a CLI-based agentic coding tool that handles multi-step tasks, while Copilot is primarily an inline code completion tool. Claude Code can plan, implement, test, and commit entire features from natural language descriptions. Copilot excels at real-time code suggestions in your IDE. Many developers use both together.

---

## Principles of Claude Code

- **Human-in-the-loop:** The developer guides the AI, maintaining ultimate control and critical oversight
- **Conversational and Iterative:** Development is a continuous dialogue with the AI, fostering rapid prototyping and refinement
- **Accelerated and Accessible:** AI automates tasks, speeding up development and lowering the barrier to entry
- **Context-Aware and Quality-Driven:** AI leverages rich context to generate accurate, high-quality code

---

## Contributing

Contributions welcome! Read our [contributing guide](CONTRIBUTING.md) to add resources, tools, and best practices.

**Quick ways to contribute:**
- Add an MCP server config
- Submit a skill file
- Fix a broken link
- Improve documentation

All PRs are automatically reviewed by Claude Code via GitHub Actions.

## License

MIT License - use these resources in your own projects.

---

## Resources and References

- [Official Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Claude Code GitHub Showcase](https://github.com/ChrisWiles/claude-code-showcase)
- [Awesome Claude Code List](https://github.com/hesreallyhim/awesome-claude-code)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

---

## Search Keywords

`claude-code` `ai-coding` `llm` `prompt-engineering` `anthropic` `claude-ai` `ai-assistant` `code-generation` `autonomous-agents` `mcp` `model-context-protocol` `subagents` `hooks` `slash-commands` `claude-cli` `ai-development` `developer-tools` `automation` `rag` `context-engineering` `ai-workflow` `vibe-coding` `ai-code-review` `tdd-workflow` `multi-agent`
