# Skills

Reusable skill files for Claude Code, OpenCode, Cursor, and AI-assisted development workflows. Each skill provides a specialized set of instructions for a specific task domain. Skills are the building blocks of consistent, high-quality AI interactions.

## What Are Skills?

Skills are structured instruction sets that tell an AI assistant how to handle a specific type of task. Unlike ad-hoc prompting, skills encode domain expertise, best practices, and quality standards into reusable files. They work across multiple AI coding assistants including Claude Code, OpenCode, Cursor, Windsurf, and Roo.

## Skills from This Repository

| Skill | Description | File |
|-------|-------------|------|
| **squish-memory** | Memory runtime for production AI agents. Auto-captures signal, derives beliefs, restores context across sessions. MCP + CLI + Web UI. | [external: squishplugin.dev](https://squishplugin.dev) |
| **humanizer** | Remove AI writing patterns from generated text. Detects and fixes em dashes, hedging, puffery, and other LLM tells | [humanizer/SKILL.md](humanizer/SKILL.md) |
| **brainstorming** | Design process for turning ideas into specs. Explore context, ask questions, propose approaches, write design docs | [brainstorming/SKILL.md](brainstorming/SKILL.md) |
| **writing-plans** | Convert specs into multi-step implementation plans with task breakdowns and dependencies | [writing-plans/SKILL.md](writing-plans/SKILL.md) |
| **acceptance-traceability** | Map PRD requirements to tasks, tests, and evidence for plan/build handoffs | [acceptance-traceability/SKILL.md](acceptance-traceability/SKILL.md) |
| **subagent-driven-development** | Execute implementation plans with independent tasks using parallel subagents | [subagent-driven-development/SKILL.md](subagent-driven-development/SKILL.md) |
| **cold-email** | SDR cold email outreach with 5-sentence structure, personalization, and low-friction CTAs | [cold-email/SKILL.md](cold-email/SKILL.md) |
| **copywriting** | Write and optimize marketing copy with persuasive frameworks | [copywriting/SKILL.md](copywriting/SKILL.md) |

## Notable Skills from the Community

The AI-assisted development ecosystem has produced thousands of skill files. Here are some of the most popular and useful skill collections:

| Collection | Stars | Description | URL |
|------------|-------|-------------|-----|
| **Superpowers** (obra) | 193k | Comprehensive skill framework for Claude Code. Spec-driven dev, PR review, debugging, and planning workflows | [github.com/obra/superpowers](https://github.com/obra/superpowers) |
| **Everything CC** (affaan-m) | 184k | Full-platform resource covering everything from basic setup to advanced subagent orchestration | [github.com/affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) |
| **UI-UX Pro Max** (nextlevelbuilder) | 79k | Design system, UI/UX skills, and frontend development patterns for AI-assisted development | [github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| **Awesome Claude Skills** (Composio) | 60k | Directory of skills and tools organized by use case | [github.com/ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| **Claude-Mem** (thedotmack) | 76k | Persistent memory system for Claude Code sessions | [github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) |
| **CC-Switch** (farion1231) | 72k | Desktop app and configuration manager for switching between Claude Code configurations | [github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch) |

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

## How to Create Skills

Skills follow a standard format. At minimum, a SKILL.md file should include:
- **Purpose**: What this skill does (one paragraph)
- **Workflow**: Step-by-step instructions
- **Rules**: Constraints and requirements
- **Output format**: What the result should look like

See the skill files in this directory for examples.
