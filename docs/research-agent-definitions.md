# Research: GitHub Repositories with AI Agent/Subagent Definitions

## Executive Summary

The AI agent definition landscape has exploded in 2025-2026, with multiple competing standards and formats emerging. The most significant finding is that **agent definitions are converging on declarative file formats** (YAML, TOML, Markdown with frontmatter) rather than code-based configurations. The top repos fall into three categories: (1) large curated catalogs of pre-built agent definitions, (2) open standards for portable agent definitions, and (3) multi-agent frameworks with YAML-based configuration.

---

## Top 25+ Repositories with Real Agent Definitions

### TIER 1: Large Curated Agent Catalogs (100+ agents)

#### 1. VoltAgent/awesome-claude-code-subagents
- **URL:** https://github.com/VoltAgent/awesome-claude-code-subagents
- **Stars:** 22.1k
- **License:** MIT
- **Agent Format:** Markdown with YAML frontmatter (`.md` files)
- **Agent Count:** 100+ specialized subagents
- **Categories:** Core Development, Language Specialists, Infrastructure, Quality & Security, AI/ML, Data Engineering, Documentation, Specialized Domains, Meta & Orchestration, Research & Analysis
- **Has Catalog/Registry:** Yes -- includes `subagent-catalog` Claude Code skill for browsing/fetching agents
- **Key Agents:** code-reviewer, security-auditor, backend-developer, frontend-developer, test-writer, database-expert, devops-engineer, workflow-orchestrator, research-analyst
- **Install Method:** Copy `.md` files to `~/.claude/agents/` or `.claude/agents/`
- **Why Important:** THE definitive catalog for Claude Code subagents. Each agent has tuned model profiles, sandbox permissions, and explicit instruction sets.

#### 2. VoltAgent/awesome-codex-subagents
- **URL:** https://github.com/VoltAgent/awesome-codex-subagents
- **Stars:** 5.2k
- **License:** MIT
- **Agent Format:** TOML files (`.toml`)
- **Agent Count:** 166+ subagents across 13 categories
- **Categories:** Core Development, Language Specialists, Infrastructure, Quality & Security, AI/ML, Data Engineering, Documentation, Specialized Domains, Meta & Orchestration, Research & Analysis, and more
- **Has Catalog/Registry:** Yes -- organized by category folders
- **Key Agents:** api-designer, backend-developer, code-mapper, frontend-developer, security-scanner, test-writer, kubernetes-expert, workflow-orchestrator
- **Install Method:** Copy `.toml` files to `~/.codex/agents/` or `.codex/agents/`
- **Why Important:** The Codex equivalent of the Claude Code catalog. Each TOML file includes model routing (gpt-5.4 for deep reasoning, gpt-5.3-codex-spark for speed).

#### 3. iannuttall/claude-agents
- **URL:** https://github.com/iannuttall/claude-agents
- **Stars:** 2.1k (archived)
- **License:** MIT
- **Agent Format:** Markdown files (`.md`)
- **Agent Count:** 7 agents
- **Agents:** code-refactorer, content-writer, frontend-designer, prd-writer, project-task-planner, security-auditor, vibe-coding-coach
- **Has Catalog/Registry:** No (simple folder)
- **Install Method:** Copy to `.claude/agents/` or `~/.claude/agents/`
- **Why Important:** Early, influential Claude Code agent collection. Archived but widely forked.

#### 4. davila7/claude-code-templates (aitmpl.com)
- **URL:** https://github.com/davila7/claude-code-templates
- **Stars:** Not specified (high traffic via aitmpl.com)
- **License:** Not specified
- **Agent Format:** Markdown with YAML frontmatter
- **Agent Count:** 421+ agents, 847+ skills, 281+ commands
- **Has Catalog/Registry:** Yes -- aitmpl.com is a full browsable marketplace
- **Key Agents:** frontend-developer, ui-ux-pro-max, senior-architect, skill-creator, backend-architect
- **Why Important:** Largest centralized marketplace for Claude Code templates. Browse by category, search, one-click install.

#### 5. subagents.cc
- **URL:** https://subagents.cc/
- **Stars:** N/A (directory site)
- **Agent Format:** Markdown with YAML frontmatter
- **Agent Count:** Dozens listed with download counts
- **Top Agents:** frontend-developer (2643 downloads), ui-designer (2158), backend-architect (1909), code-reviewer (1827), debugger (1041)
- **Has Catalog/Registry:** Yes -- browsable directory with curl install commands
- **Why Important:** Community-driven directory with download metrics showing actual usage.

---

### TIER 2: Open Standards for Agent Definitions

#### 6. agent-format/agent-format-schema (Agent Format)
- **URL:** https://github.com/agent-format/agent-format-schema
- **Stars:** New (launched Mar 2026)
- **License:** Apache 2.0
- **Agent Format:** `.agf.yaml` (proprietary YAML schema)
- **Agent Count:** Standard + examples
- **Has Catalog/Registry:** Yes -- JSON Schema, CLI linting tool, browser playground
- **Key Features:** POMDP formalism, tighten-only invariant for multi-agent delegation, six execution policies (ReAct, sequential, parallel, batch, loop, conditional), first-class MCP integration, governance constraints (token budgets, call limits, approval gates)
- **Multi-language SDKs:** Go, Python, Java, TypeScript
- **Why Important:** The "Kubernetes for AI Agents" -- the most formally rigorous open standard. Backed by Snap Inc. Designed for enterprise compliance.

#### 7. open-gitagent/opengap (GitAgent Protocol)
- **URL:** https://github.com/open-gitagent/opengap
- **Stars:** 2.8k
- **License:** MIT
- **Agent Format:** `agent.yaml` + `SOUL.md` + `RULES.md` + `skills/` directory (git-native)
- **Agent Count:** Standard + examples (minimal, standard, full)
- **Has Catalog/Registry:** Yes -- CLI with `opengap validate`, `opengap export`, `opengap audit`
- **Adapters:** system-prompt, claude-code, openai, crewai, lyzr, github, git, opencode, gemini, openclaw, nanobot, cursor, copilot, codex, kiro, gitclaw (16 adapters)
- **Key Features:** Git-native (version control for agent behavior), compliance-ready (FINRA, SEC, SOX, GDPR), segregation of duties, inheritance & composition, hooks (bootstrap/teardown)
- **Why Important:** Most comprehensive cross-framework portability. Your repo IS the agent. Exports to Claude Code, OpenAI, CrewAI, LangChain, and 10+ other frameworks.

#### 8. agentbrazley/dot.agent
- **URL:** https://github.com/agentbrazley/dot.agent
- **Stars:** Small (new)
- **License:** Open source
- **Agent Format:** `.agent` files (Markdown with YAML frontmatter)
- **Agent Count:** Spec + examples
- **Has Catalog/Registry:** No (spec + reference implementations)
- **Key Features:** IANA MIME type submitted (`application/vnd.agent+markdown`), VS Code extension, Python/JavaScript parsers
- **Why Important:** Attempts to create a universal MIME type for agent definitions. Simple format: Markdown + YAML frontmatter.

#### 9. agentskills/agentskills
- **URL:** https://github.com/agentskills/agentskills
- **Stars:** 20.8k
- **License:** Apache 2.0
- **Agent Format:** `SKILL.md` files (Markdown with YAML frontmatter)
- **Agent Count:** Standard + reference skills
- **Has Catalog/Registry:** Yes -- agentskills.io, client showcase
- **Key Features:** Progressive disclosure (discovery -> activation -> execution), supported by 30+ tools (Claude Code, Codex, Cursor, Copilot, Gemini CLI, etc.)
- **Why Important:** The emerging open standard for portable agent skills. Used by Claude Code, Codex, and 30+ other tools. Simple 2-field frontmatter (name + description).

#### 10. agentsmd/agents.md (AGENTS.md)
- **URL:** https://github.com/agentsmd/agents.md
- **Stars:** N/A (standard body)
- **License:** Open
- **Agent Format:** `AGENTS.md` (Markdown)
- **Agent Count:** Standard (60k+ open-source projects use it)
- **Has Catalog/Registry:** Yes -- agentsmd.io, GitHub search
- **Key Features:** Used by Codex, Cursor, Copilot, Claude Code (fallback), Continue.dev, Aider, OpenHands. Nested AGENTS.md for monorepos.
- **Why Important:** The universal "README for agents." 60k+ GitHub repos already have AGENTS.md files.

---

### TIER 3: Claude Code Specific Agent Repos

#### 11. kevinschawinski/claude-agents
- **URL:** https://github.com/kevinschawinski/claude-agents
- **Stars:** 4
- **License:** MIT
- **Agent Format:** Markdown with YAML frontmatter
- **Agent Count:** 7 agents
- **Agents:** answer-writer, code-writer, documentation-writer, evidence-gatherer, plan-orchestrator, quality-guard, tool-runner
- **Has Catalog/Registry:** No
- **Key Features:** "Good-Explanation" Agent Crew based on David Deutsch's criterion. Clean-Code limits (20-line functions).
- **Why Important:** Well-designed 6-agent crew with philosophical foundation.

#### 12. stewnight/claude-code-agents
- **URL:** https://github.com/stewnight/claude-code-agents
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** Markdown with YAML frontmatter + `.claude-patterns.yml`
- **Agent Count:** Multiple agents + pattern system
- **Has Catalog/Registry:** No (but has pattern validation)
- **Key Features:** Three-tier config hierarchy (user > project > patterns), `.claude-patterns.yml` for validation and enforcement, CLAUDE.md as control plane
- **Why Important:** Most sophisticated Claude Code agent architecture with pattern validation.

#### 13. hemanth19088/claude-agents
- **URL:** https://github.com/hemanth19088/claude-agents-
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** Markdown files
- **Agent Count:** 100+ agents
- **Has Catalog/Registry:** No
- **Why Important:** Another large collection of Claude Code agents.

#### 14. rahulvrane/awesome-claude-agents
- **URL:** https://github.com/rahulvrane/awesome-claude-agents
- **Stars:** Not specified
- **License:** MIT
- **Agent Format:** Markdown files
- **Agent Count:** Curated list
- **Has Catalog/Registry:** Yes (awesome-list format)
- **Why Important:** Community-curated directory of Claude agent repos.

---

### TIER 4: Multi-Agent Frameworks with YAML Config

#### 15. crewAIInc/crewAI
- **URL:** https://github.com/crewAIInc/crewAI
- **Stars:** 51.4k
- **License:** MIT
- **Agent Format:** YAML (`agents.yaml` + `tasks.yaml`)
- **Agent Count:** Framework (users define their own)
- **Has Catalog/Registry:** No (but has template projects)
- **Key Features:** Role-based orchestration (sequential, hierarchical, consensual), YAML config recommended, CrewBase class, variable interpolation (`{topic}`)
- **Why Important:** Most popular multi-agent framework. YAML-first approach for agent definitions.

#### 16. microsoft/autogen (now maintenance mode)
- **URL:** https://github.com/microsoft/autogen
- **Stars:** 52.9k
- **License:** CC-BY-4.0 + MIT
- **Agent Format:** Python code (conversation-driven)
- **Agent Count:** Framework
- **Has Catalog/Registry:** No
- **Why Important:** Major framework (now superseded by Microsoft Agent Framework). Conversation-driven multi-agent patterns.

#### 17. FoundationAgents/MetaGPT
- **URL:** https://github.com/FoundationAgents/MetaGPT
- **Stars:** 61.9k
- **License:** MIT
- **Agent Format:** Python code (simulates software company)
- **Agent Count:** Framework (product manager, architect, engineer roles)
- **Has Catalog/Registry:** No
- **Why Important:** Highest-starred agent framework. Simulates entire software teams.

#### 18. yx-fan/multi-agent-orchestration-framework
- **URL:** https://github.com/yx-fan/multi-agent-orchestration-framework
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** YAML (`intents.yaml` + `workflow.yaml`)
- **Agent Count:** Framework (domain-specific workflows)
- **Has Catalog/Registry:** No
- **Key Features:** LangGraph-powered, YAML-defined domain workflows, Node-Agent hierarchy, Redis memory, FastAPI integration
- **Why Important:** Clean YAML-based multi-agent orchestration with intent + workflow separation.

#### 19. KillerMeritus/YAML-based-Multi-Agent-AI-orchestrator-Engine
- **URL:** https://github.com/KillerMeritus/YAML-based-Multi-Agent-AI-orchestrator-Engine
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** YAML configuration files
- **Agent Count:** Framework
- **Has Catalog/Registry:** No
- **Why Important:** Pure YAML-driven multi-agent pipeline system.

#### 20. vstorm-co/pydantic-ai-subagents (SubAgentSpec)
- **URL:** https://github.com/vstorm-co/pydantic-ai-subagents
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** YAML/JSON (`agents.yaml`)
- **Agent Count:** Framework (declarative config)
- **Has Catalog/Registry:** No
- **Key Features:** Pydantic AI-based, type-safe agent specs, separate config from code, environment-aware
- **Why Important:** Solves the "code-defined agents don't scale for teams" problem with declarative YAML.

#### 21. frostlogic-ab/agent-forge
- **URL:** https://github.com/frostlogic-ab/agent-forge
- **Stars:** Not specified
- **License:** MIT
- **Agent Format:** YAML (`agent.yaml`)
- **Agent Count:** Framework
- **Has Catalog/Registry:** No
- **Key Features:** YAML-defined agents, sequential workflows, hierarchical teams, TypeScript, rate limiting, streaming
- **Why Important:** Clean YAML-to-agent pipeline with workflow and team patterns.

---

### TIER 5: Codex/Copilot Agent Systems

#### 22. betterup/codex-cli-subagents
- **URL:** https://github.com/betterup/codex-cli-subagents
- **Stars:** 17
- **License:** MIT
- **Agent Format:** Markdown with YAML frontmatter (`agents/*.md`)
- **Agent Count:** 2 demo agents (word-counter, file-writer) + framework
- **Has Catalog/Registry:** No (demo/reference implementation)
- **Key Features:** Agent executor that spawns isolated Codex subprocesses, CLI wrappers, parent-child agent pattern
- **Why Important:** Reference implementation for Codex subagent orchestration.

#### 23. sehoon787/my-codex
- **URL:** https://github.com/sehoon787/my-codex
- **Stars:** 16
- **License:** Not specified
- **Agent Format:** TOML files
- **Agent Count:** 400+ agents, 200+ skills, 3 MCP servers
- **Has Catalog/Registry:** Yes (Boss meta-orchestrator pattern)
- **Why Important:** Largest single Codex agent collection with meta-orchestrator.

#### 24. OleynikAleksandr/multicli-subagents
- **URL:** https://github.com/OleynikAleksandr/multicli-subagents
- **Stars:** 9
- **License:** Not specified
- **Agent Format:** Various (cross-CLI)
- **Agent Count:** Manager system
- **Has Catalog/Registry:** Yes (SubAgent Manager)
- **Key Features:** Works across Codex CLI, Claude Code, and other CLI tools
- **Why Important:** Cross-platform subagent management.

#### 25. VKirill/codex-starter-kit
- **URL:** https://github.com/VKirill/codex-starter-kit
- **Stars:** 1
- **License:** Not specified
- **Agent Format:** TOML + AGENTS.md + hooks
- **Agent Count:** Starter kit
- **Has Catalog/Registry:** No
- **Key Features:** Custom agents, skills, AGENTS.md, hooks, MCP docs servers, one-command install
- **Why Important:** Complete Codex starter kit with all components.

---

### TIER 6: Specialized/Notable Repos

#### 26. dwmkerr/claude-code-agent
- **URL:** https://github.com/dwmkerr/claude-code-agent
- **Stars:** 7
- **License:** Not specified
- **Agent Format:** YAML (`claude-code-agent.example.yaml`)
- **Agent Count:** 1 (framework for A2A registration)
- **Has Catalog/Registry:** No
- **Key Features:** A2A (Agent-to-Agent) protocol support, session initialization, workspace management
- **Why Important:** Reference for A2A agent registration with Claude Code.

#### 27. joelhooks/opencode-config (SwarmTools)
- **URL:** https://github.com/joelhooks/opencode-config
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** OpenCode configuration (agents, skills, commands)
- **Agent Count:** Multi-agent swarm system
- **Has Catalog/Registry:** No
- **Key Features:** Outcome-based learning, anti-pattern detection, pattern promotion, confidence decay, semantic search via Ollama
- **Why Important:** Self-improving multi-agent system with learning capabilities.

#### 28. EvoAgentX/EvoAgentX
- **URL:** https://github.com/EvoAgentX/EvoAgentX
- **Stars:** Not specified
- **License:** Not specified
- **Agent Format:** Python framework + YAML workflow definitions
- **Agent Count:** Framework
- **Has Catalog/Registry:** No
- **Key Features:** Self-evolving agent ecosystem, workflow autoconstruction, built-in evaluation, human-in-the-loop
- **Why Important:** Agents that learn and improve over time.

#### 29. cohen-liel/hivemind
- **URL:** https://github.com/cohen-liel/hivemind
- **Stars:** 100
- **License:** Not specified
- **Agent Format:** Python
- **Agent Count:** Framework (full AI engineering team)
- **Has Catalog/Registry:** No
- **Why Important:** "One prompt, a full AI engineering team."

#### 30. GeiserX/cc-agents-md
- **URL:** https://github.com/GeiserX/cc-agents-md
- **Stars:** Not specified (34 commits, active)
- **License:** GPL-3.0
- **Agent Format:** AGENTS.md bridge for Claude Code
- **Agent Count:** Tool (not agent definitions)
- **Has Catalog/Registry:** No
- **Key Features:** Loads AGENTS.md into Claude Code sessions (Claude Code doesn't natively support AGENTS.md)
- **Why Important:** Bridges the AGENTS.md standard to Claude Code.

---

## Format Comparison Matrix

| Format | Tools Supporting | Portability | Validation | Example Repo |
|--------|-----------------|-------------|------------|--------------|
| **Markdown + YAML frontmatter** (`.md`) | Claude Code, Codex, Cursor, Copilot | High | Schema-based | VoltAgent/awesome-claude-code-subagents |
| **TOML** (`.toml`) | Codex CLI | Medium | Config-level | VoltAgent/awesome-codex-subagents |
| **YAML** (`.agf.yaml`) | Agent Format standard | Highest | JSON Schema | agent-format/agent-format-schema |
| **YAML** (`agents.yaml`) | CrewAI | Medium | Framework-specific | crewAIInc/crewAI |
| **SKILL.md** | Claude Code, Codex, 30+ tools | Highest | agentskills.io spec | agentskills/agentskills |
| **AGENTS.md** | Codex, Cursor, Copilot, Claude Code (fallback) | Highest | Community | agentsmd/agents.md |
| **Git-native** (`agent.yaml` + `SOUL.md`) | OpenGAP (16 adapters) | Highest | CLI validation | open-gitagent/opengap |

---

## Key Findings

### 1. The Format War is Converging
Three formats dominate:
- **Markdown + YAML frontmatter** for Claude Code agents (`.md` files in `.claude/agents/`)
- **TOML** for Codex agents (`.toml` files in `.codex/agents/`)
- **YAML** for cross-platform standards (Agent Format `.agf.yaml`, OpenGAP `agent.yaml`)

### 2. The "Awesome" Catalog Pattern Works
VoltAgent's two repos (22.1k + 5.2k stars) prove that curated catalogs of agent definitions are the highest-value contribution. They provide:
- Categorized, browsable agent definitions
- One-command installation
- Model routing (which model for which agent)
- Tool permission scoping

### 3. Standards are Emerging Fast
- **Agent Skills** (agentskills.io) -- 20.8k stars, supported by 30+ tools
- **AGENTS.md** -- 60k+ GitHub repos already use it
- **Agent Format** (agentformat.org) -- enterprise-grade, Apache 2.0
- **OpenGAP** (gitagent.sh) -- git-native, 16 framework adapters

### 4. Claude Code Agent Structure
Claude Code agents live in `.claude/agents/` as Markdown files with YAML frontmatter:
```markdown
---
name: code-reviewer
description: Reviews code for quality and security
model: sonnet
tools: [Read, Grep, Glob]
---

# Code Reviewer

You are a senior code reviewer...
```

### 5. Codex Agent Structure
Codex agents live in `.codex/agents/` as TOML files:
```toml
[agent]
name = "code-reviewer"
model = "gpt-5.4"
sandbox_mode = "read-only"

[agent.instructions]
text = "You are a code review specialist..."
```

### 6. Cross-Platform Portability
OpenGAP is the most portable option, with adapters for: Claude Code, OpenAI, CrewAI, LangChain, Gemini, Cursor, Copilot, Codex, Kiro, and 6+ others. A single `agent.yaml` + `SOUL.md` can export to any of these.

---

## Recommendations

### For Your Project (claude-bible)

1. **Use Markdown + YAML frontmatter** for agent definitions -- this is the Claude Code native format
2. **Study VoltAgent/awesome-claude-code-subagents** as the reference catalog structure
3. **Consider OpenGAP format** if you want cross-framework portability
4. **Follow the Agent Skills standard** (SKILL.md) for skill definitions
5. **Include AGENTS.md** for Codex/Cursor/Copilot compatibility

### For Agent Definition Structure
```yaml
# Recommended agent definition structure
---
name: agent-name
description: What this agent does
model: sonnet  # or haiku, opus
color: "#FF6B6B"
tools:
  - Read
  - Grep
  - Glob
  - Write
  - Edit
  - Bash
mcpServers:
  - server-name
memory: user  # or none, project
---

# Agent Name

## Role
[Description of the agent's expertise]

## Instructions
[Detailed instructions for how the agent should behave]

## Constraints
[What the agent should NOT do]
```

---

## Open Questions

1. **Will Agent Format (.agf.yaml) become the dominant standard?** It's the most formally rigorous but requires runtime support.
2. **How will Claude Code's native format evolve?** The `.claude/agents/` directory structure is stable but the frontmatter schema may expand.
3. **Will AGENTS.md replace CLAUDE.md?** Claude Code doesn't natively support AGENTS.md yet, but community tools (cc-agents-md) bridge this gap.
4. **What's the right granularity for agent definitions?** Some repos define agents at the role level (backend-developer), others at the task level (code-reviewer). Both patterns are valid.
5. **How do we handle agent dependencies?** OpenGAP supports `dependencies` and `extends` in agent.yaml. This pattern needs wider adoption.

---

*Research compiled: June 2026*
*Sources: GitHub, web search, documentation sites, Hacker News, Medium, community forums*
