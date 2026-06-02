# Claude Code Bible Enhancement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add all missing Claude Code features, MCP specs, tools, and workflows discovered in the week of May 28 - June 2, 2026, plus apply SEO/AEO/GEO optimization across the entire Bible.

**Architecture:** Content-only changes to an existing documentation repository. No code to write or test. Each task modifies or creates markdown files. SEO/AEO/GEO enhancements apply inverted pyramid structure, FAQ sections, self-contained passages, and llms.txt across all content.

**Tech Stack:** Markdown, HTML (for llms.txt semantic markers), structured data concepts

---

## Task 1: Create llms.txt for AI Crawlers

**Files:**
- Create: `llms.txt`

- [ ] **Step 1: Create llms.txt**

This file helps AI systems (Claude, ChatGPT, Perplexity) understand the Bible's structure and content. Place at root for discoverability.

```markdown
# Claude Code Bible

> The ultimate resource for mastering Claude Code, AI-assisted software development, prompt engineering, LLM-powered coding workflows, MCP servers, and subagent orchestration.

## What This Repository Contains

- **docs/**: Getting started guides, feature references, CLAUDE.md templates, advanced tips
- **mcps/**: Model Context Protocol server configurations and the 2026-07-28 spec
- **skills/**: 8 production-ready skill files for AI workflows
- **workflows/**: Ralph Wiggum autonomous loops, OpenProse multi-agent orchestration, Dynamic Workflows
- **subagents/**: Specialized AI agents for code review, testing, debugging, security
- **tools/**: AI coding tools overview including Claude Code, Codex CLI, Copilot, Cursor
- **prompting/**: Prompt engineering techniques (Chain-of-Thought, ReAct, structured prompting)
- **rules/**: Best practices for security, ethics, code quality
- **hooks/**: Automation scripts for dev workflow
- **commands/**: Custom slash commands library
- **plugins/**: Extensions and IDE integrations
- **integrations/**: Tool integration guides (CodeRabbit, VS Code, Cursor, etc.)

## Key Topics

- Claude Code v2.1.160 features and commands
- Dynamic Workflows and Ultracode for parallel subagent orchestration
- MCP 2026-07-28 specification (stateless protocol, MCP Apps, Tasks)
- OpenAI Codex CLI integration
- GitHub Agentic Workflows
- Background sessions and Agent View
- Security hardening best practices

## About

Maintained by michielhdoteth. MIT License. Contributions welcome.
```

- [ ] **Step 2: Commit**

```bash
git add llms.txt
git commit -m "feat: add llms.txt for AI crawler discoverability (GEO)"
```

---

## Task 2: Enhance README.md with SEO/AEO/GEO

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add structured data comment block and meta description**

Insert after the title badge block (after line 13, before the `>` blockquote):

```markdown
<!-- AEO: Direct answer capsule for AI extraction -->
<!-- The Claude Code Bible is the most comprehensive open-source collection of Claude Code resources, covering AI-assisted development, prompt engineering, MCP servers, workflows, and subagent orchestration with 8 production-ready skill files. -->
<!-- GEO: Self-contained passage for generative AI citation -->
<!-- Claude Code Bible provides everything developers need to master AI-assisted coding: 40+ slash commands, 14+ MCP server configs, 8 reusable skill files, autonomous coding workflows (Ralph Wiggum), multi-agent orchestration (OpenProse, Dynamic Workflows), and battle-tested patterns from 32,000+ MCP repos and 27,000+ claude-code repos as of June 2026. -->
```

- [ ] **Step 2: Restructure the About section with inverted pyramid (AEO)**

Replace the current About section (lines 17-25) with:

```markdown
## About

The **Claude Code Bible** is the most comprehensive open-source collection of Claude Code resources. It covers AI-assisted development, prompt engineering, MCP servers, workflows, and subagent orchestration with 8 production-ready skill files you can use immediately.

**What makes this different:** Rather than just linking to tools, this repository includes production-ready skill files, detailed MCP server configurations, and battle-tested workflow patterns from the AI-assisted development community.

**Quick stats (June 2026):**
- 40+ slash commands documented
- 14+ MCP server configurations
- 8 reusable skill files
- 2 workflow patterns (Ralph Wiggum, OpenProse, Dynamic Workflows)
- 4 specialized subagent types
- 32,000+ MCP repos and 27,000+ claude-code repos in the ecosystem
```

- [ ] **Step 3: Add FAQ section at end of README (AEO/GEO)**

Append before the `## Tags` section:

```markdown
## Frequently Asked Questions

### What is Claude Code?
Claude Code is an AI-powered software development approach that uses Claude as a coding assistant. It enables natural language code generation, refactoring, debugging, and autonomous development workflows. Developers guide AI through conversational interactions rather than writing every line of code manually.

### What are MCP servers in Claude Code?
MCP (Model Context Protocol) servers are tools that extend Claude's capabilities by connecting to external data sources and services. They provide access to GitHub, databases, file systems, web search, and hundreds of other integrations through a standardized protocol.

### How do Dynamic Workflows work in Claude Code?
Dynamic Workflows (Claude Code v2.1.154+) let Claude write JavaScript orchestration scripts that run tens to hundreds of parallel subagents. Ultracode mode combines extended thinking with automatic workflow orchestration, supporting up to 16 concurrent agents and 1000 total per run.

### What is the Ralph Wiggum workflow?
Ralph Wiggum is an autonomous AI coding loop that builds features while you sleep. Claude continuously plans, codes, tests, and iterates across multiple sessions, checkpointing progress and resuming automatically.

### How does the Claude Code Bible help with AI-assisted development?
The Bible provides structured knowledge on Claude Code features, 40+ slash commands, MCP server configurations, prompt engineering techniques, security best practices, and reusable skill files. It serves as a comprehensive reference for both beginners and advanced users of AI-assisted development tools.
```

- [ ] **Step 4: Add dateModified meta comment**

Insert at the very top of README.md (before the title):

```markdown
<!-- Schema: Article, lastReviewed: 2026-06-02, dateModified: 2026-06-02 -->
<!-- Entity: Claude Code Bible, author: michielhdoteth, license: MIT -->
```

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "feat: enhance README with SEO/AEO/GEO optimization - FAQ, inverted pyramid, date stamps"
```

---

## Task 3: Add Claude Code v2.1.154 Features to Feature Reference

**Files:**
- Modify: `docs/feature-reference.md`

- [ ] **Step 1: Read current feature reference**

Read `docs/feature-reference.md` to find where to insert new sections.

- [ ] **Step 2: Add Dynamic Workflows section**

Insert a new section after the existing workflows content:

```markdown
## Dynamic Workflows (v2.1.154+)

**What it is:** Claude writes JavaScript orchestration scripts that run tens to hundreds of parallel subagents. This is the most powerful workflow feature in Claude Code.

**How it works:**
1. Claude analyzes your request and creates a JS orchestration script
2. The script spawns parallel subagents for independent tasks
3. Results are aggregated and Claude synthesizes the output
4. Supports up to 16 concurrent agents, 1000 total per run

**Key commands:**
- `/workflows` - Dashboard showing all active and recent workflows
- `/deep-research` - Bundled workflow for comprehensive research
- Save any workflow as a reusable slash command

**Ultracode mode:**
- Combines `xhigh` thinking with automatic workflow orchestration
- Claude decides when to spawn parallel agents
- Best for complex, multi-file changes

**Example use cases:**
- Refactor a module across 20+ files simultaneously
- Run parallel code review, testing, and security audit
- Generate documentation for 50+ functions at once
- Migrate an entire codebase to a new framework
```

- [ ] **Step 3: Add Agent View section**

```markdown
## Agent View (v2.1.154+)

**What it is:** A single screen showing every running, blocked, and completed session across all your Claude Code instances.

**Command:** `claude agents`

**Features:**
- Real-time status of all active sessions
- Filter by status (running, blocked, done)
- Jump directly into any session
- See which subagents are working on what

**When to use:**
- Managing multiple parallel workflows
- Debugging stuck or blocked sessions
- Monitoring overnight autonomous runs
- Coordinating multi-agent tasks
```

- [ ] **Step 4: Add Background Sessions section**

```markdown
## Background Sessions (v2.1.154+)

**What it is:** Run shell commands as background agents without blocking your current session.

**How to use:** Type `! ` (exclamation space) followed by any shell command.

**Example:**
```
! npm test -- --watch
! docker compose up -d
! git status
```

**Features:**
- Commands run in background, results appear when complete
- You can continue working while commands execute
- Multiple background sessions can run simultaneously
- Integrated with Agent View for monitoring
```

- [ ] **Step 5: Add /goal command section**

```markdown
## /goal Command (v2.1.154+)

**What it is:** Set a completion condition and Claude keeps working across turns until the goal is met.

**Usage:**
```
/goal "All tests pass and coverage is above 80%"
/goal "API endpoint returns correct response for all edge cases"
/goal "Documentation is complete for every public function"
```

**How it works:**
1. You define the success condition in natural language
2. Claude works continuously, checking progress against the goal
3. Automatically stops when the goal is achieved
4. Works across multiple turns without manual intervention
```

- [ ] **Step 6: Add /reload-skills section**

```markdown
## /reload-skills (v2.1.154+)

**What it is:** Re-scan skill directories without restarting Claude Code.

**Usage:** `/reload-skills`

**When to use:**
- After adding or modifying skill files
- When new skills appear in `.claude/skills/`
- After pulling changes that include skill updates
- Plugin auto-loading now works from `.claude/skills/` directory
```

- [ ] **Step 7: Add Ultraplan section**

```markdown
## Ultraplan (v2.1.154+)

**What it is:** Draft plans in the cloud from the CLI, then review and edit them in a web editor.

**Workflow:**
1. Run `claude plan` to start planning
2. Claude drafts a plan in the cloud
3. Review and edit in the web-based plan editor
4. Execute the plan with `claude execute`

**Benefits:**
- Visual plan editing interface
- Share plans with team members
- Version control for plans
- Works across multiple sessions
```

- [ ] **Step 8: Commit**

```bash
git add docs/feature-reference.md
git commit -m "feat: add Dynamic Workflows, Agent View, Background Sessions, /goal, /reload-skills, Ultraplan to feature reference"
```

---

## Task 4: Add Security Hardening v2.1.160

**Files:**
- Modify: `docs/feature-reference.md`
- Modify: `rules/best-practices.md`

- [ ] **Step 1: Add security hardening section to feature reference**

Insert after the v2.1.154 features:

```markdown
## Security Hardening (v2.1.160)

**What it is:** Claude Code now prompts before writing to shell startup files and build-tool config files, preventing accidental or malicious modifications.

**Protected files (prompt before write):**
- Shell startup: `.zshenv`, `.zlogin`, `.bash_login`
- Git config: `~/.config/git/`
- Build tools: `.npmrc`, `.yarnrc`, `bunfig.toml`, `.bazelrc`, `.pre-commit-config.yaml`
- Dev containers: `.devcontainer/`

**Other security improvements:**
- `grep` now satisfies the read-before-edit requirement
- Windows clipboard fixed on WSL
- Reduced default system prompt size for faster responses
```

- [ ] **Step 2: Add security section to best practices**

Insert at the top of `rules/best-practices.md` after the intro:

```markdown
## Security Hardening (v2.1.160)

Claude Code now protects critical configuration files by requiring confirmation before writing to them. This prevents:
- **Shell hijacking:** Modifying `.zshenv` or `.bash_login` to inject malicious commands
- **Git config tampering:** Changing `~/.config/git/` to redirect commits or alter behavior
- **Build supply chain attacks:** Modifying `.npmrc`, `.yarnrc`, or `.bazelrc` to redirect package downloads

**Best practices:**
- Always review Claude's changes to protected files before approving
- Use `.gitignore` to exclude sensitive config files from version control
- Run `claude config` to review current settings
- Keep `.devcontainer/` configurations in version control for audit trails
```

- [ ] **Step 3: Commit**

```bash
git add docs/feature-reference.md rules/best-practices.md
git commit -m "feat: add security hardening v2.1.160 to feature reference and best practices"
```

---

## Task 5: Add MCP 2026-07-28 Spec to MCP Documentation

**Files:**
- Modify: `mcps/mcp-introduction.md`
- Create: `mcps/mcp-2026-07-28-spec.md`

- [ ] **Step 1: Read current MCP introduction**

Read `mcps/mcp-introduction.md` to understand current structure.

- [ ] **Step 2: Create MCP 2026-07-28 spec document**

```markdown
# MCP Specification 2026-07-28 Release Candidate

> **Published:** May 21, 2026 | **Status:** Release Candidate | **Target Release:** July 28, 2026

The Model Context Protocol (MCP) 2026-07-28 specification introduces significant architectural changes that simplify the protocol, add UI capabilities, and improve security.

## Key Changes

### Stateless Protocol Core
The biggest change: MCP moves to a stateless model. The `initialize` handshake and `Mcp-Session-Id` header are removed. Servers now respond to each request independently, making the protocol simpler to implement and scale.

### MCP Apps
Servers can now render UI in sandboxed iframes. This enables rich interactive experiences directly within MCP-compatible tools. Apps are sandboxed for security and can communicate with the server through a defined API.

### Tasks Extension
Long-running work gets first-class support. The Tasks extension provides:
- `tasks/start` - Begin a long-running operation
- `tasks/poll` - Check progress
- `tasks/cancel` - Abort if needed

This replaces ad-hoc polling patterns with a standardized approach.

### Server Cards
Discovery mechanism using `.well-known/mcp.json`. Clients can automatically find and connect to MCP servers without manual configuration. Servers publish their capabilities in a standard format.

### Authorization Hardening
6 Security Enhancement Proposals (SEPs) align with OAuth 2.1 and OIDC standards:
- Token binding
- PKCE enforcement
- Scope validation
- Redirect URI restrictions
- Client authentication
- Token revocation

### Deprecation Policy
12-month minimum support for deprecated features. Roots, sampling, and logging are deprecated but remain functional for 12 months.

### Routing and Caching
- Required `Mcp-Method` and `Mcp-Name` headers for request routing
- `ttlMs` and `cacheScope` on list results enable intelligent caching
- W3C Trace Context propagation for distributed tracing

## Migration Guide

### From 2025-11-05 to 2026-07-28

1. **Remove initialize handshake** - Clients no longer need to call `initialize` before making requests
2. **Remove Mcp-Session-Id** - Stateless servers don't maintain session state
3. **Add Mcp-Method header** - All requests must include the method name
4. **Add Mcp-Name header** - Identify the server for routing
5. **Update auth** - Align with OAuth 2.1 requirements
6. **Implement Server Cards** - Add `.well-known/mcp.json` for discovery

### Deprecation Timeline
- **May 2026:** Roots, sampling, logging deprecated
- **May 2027:** Deprecated features removed
- **12-month minimum:** Any deprecated feature gets at least 12 months of support

## Impact on Claude Code

Claude Code's MCP support will need updates to:
- Remove session initialization code
- Add required headers to all requests
- Support Server Card discovery
- Implement Tasks for long-running operations
- Update auth to match new security requirements

## References

- [MCP Specification](https://modelcontextprotocol.io/)
- [2026-07-28 Release Candidate](https://modelcontextprotocol.io/specification/2026-07-28)
- [Migration Guide](https://modelcontextprotocol.io/docs/migration/2026-07-28)
```

- [ ] **Step 3: Add link in MCP introduction**

Insert at the top of `mcps/mcp-introduction.md`:

```markdown
## Latest: MCP 2026-07-28 Spec

The MCP 2026-07-28 Release Candidate introduces stateless protocol core, MCP Apps (UI in iframes), Tasks for long-running work, Server Cards for discovery, and authorization hardening. [Read the full spec breakdown](mcp-2026-07-28-spec.md).
```

- [ ] **Step 4: Commit**

```bash
git add mcps/mcp-introduction.md mcps/mcp-2026-07-28-spec.md
git commit -m "feat: add MCP 2026-07-28 specification breakdown with migration guide"
```

---

## Task 6: Add OpenAI Codex CLI to Tools

**Files:**
- Modify: `tools/overview.md`

- [ ] **Step 1: Read current tools overview**

Read `tools/overview.md` to find the right insertion point.

- [ ] **Step 2: Add Codex CLI section**

Insert in the AI Assistants / CLI Tools section:

```markdown
## OpenAI Codex CLI

> **Stars:** 88K+ | **Language:** Rust | **Latest:** v0.136.0 (June 2026)

**What it is:** OpenAI's open-source coding assistant, the main competitor to Claude Code. Runs in your terminal with full file system access.

**Key features:**
- **Remote execution:** Run tasks in OpenAI's cloud with `CODEX_API_KEY`
- **Windows sandbox alpha:** Full support on Windows
- **Image generation:** Create images from natural language
- **Python SDK:** Programmatic access for building tools
- **MCP support:** Connect to MCP servers with OAuth for HTTP
- **Web search:** Cached and live search modes
- **Subagent workflows:** Parallel agent execution
- **Code review:** `/review` command for automated review

**Recommended models:**
- `gpt-5.5` - Best overall performance
- `gpt-5.3-codex-spark` - Fast tasks, lower cost

**vs Claude Code:**
- Codex is open-source (Rust), Claude Code is closed-source
- Codex uses GPT-5.5, Claude Code uses Opus 4.8
- Both support MCP, subagents, and autonomous workflows
- Codex has remote execution; Claude Code has Dynamic Workflows
```

- [ ] **Step 3: Commit**

```bash
git add tools/overview.md
git commit -m "feat: add OpenAI Codex CLI v0.136.0 to tools overview"
```

---

## Task 7: Add GitHub Agentic Workflows to Tools

**Files:**
- Modify: `tools/overview.md`

- [ ] **Step 1: Add GitHub Agentic Workflows section**

Insert after the Codex CLI section:

```markdown
## GitHub Agentic Workflows (gh-aw)

> **Stars:** 5K+ | **Latest:** v0.77.6 (June 2026)

**What it is:** Define AI workflows in natural language, compiled to GitHub Actions YAML. Supports multiple AI engines.

**Supported engines:**
- GitHub Copilot
- Claude (Anthropic)
- OpenAI Codex
- Google Gemini
- copilot-sdk (direct SDK integration)

**Key features:**
- **aw.yml manifest:** Define workflows with includes, skills, and agents
- **Agent Workflow Firewall (AWF):** Control network egress for security
- **MCP Gateway:** Centralized access management for MCP servers
- **Templatable timeout-minutes:** Dynamic timeout configuration
- **Natural language definition:** Describe what you want, get GitHub Actions YAML

**Example aw.yml:**
```yaml
name: code-review
engine: claude
skills:
  - security-audit
  - test-coverage
agents:
  reviewer:
    prompt: "Review this PR for security issues and test coverage"
    timeout-minutes: 15
```
```

- [ ] **Step 2: Commit**

```bash
git add tools/overview.md
git commit -m "feat: add GitHub Agentic Workflows (gh-aw) to tools overview"
```

---

## Task 8: Add GitHub Copilot CLI Agent to Tools

**Files:**
- Modify: `tools/overview.md`

- [ ] **Step 1: Add Copilot CLI Agent section**

Insert after GitHub Agentic Workflows:

```markdown
## GitHub Copilot CLI Agent

> **Status:** Public Preview (May 2026) | **Platforms:** JetBrains IDEs

**What it is:** Copilot's agentic coding mode, now available as a CLI agent in JetBrains IDEs.

**Key features:**
- **Unified sessions view:** See all agent sessions with live status
- **Ask question tool:** Agent can clarify requirements before acting
- **Global .agent.md:** Configure agent behavior in `~/.copilot/agents/`
- **JetBrains integration:** Native support in IntelliJ, PyCharm, WebStorm

**vs Claude Code:**
- Copilot Agent is IDE-focused, Claude Code is CLI-focused
- Copilot uses GitHub's infrastructure, Claude Code uses Anthropic's
- Both support agentic coding with file system access
- Copilot has `ask question` for clarification; Claude Code uses `/goal`
```

- [ ] **Step 2: Commit**

```bash
git add tools/overview.md
git commit -m "feat: add GitHub Copilot CLI Agent to tools overview"
```

---

## Task 9: Add AI Model Updates to Tools

**Files:**
- Modify: `tools/overview.md`

- [ ] **Step 1: Add Mistral section**

Insert in the Models section:

```markdown
## Mistral Medium 3.5

> **Parameters:** 128B dense | **Context:** 256K tokens | **Weights:** Open

**What it is:** Mistral's latest model, powering the Vibe remote agents platform. Open weights allow self-hosting.

**Key specs:**
- 128B parameters (dense, not MoE)
- 256K context window
- Open weights for self-hosting
- Powers Vibe remote agents for autonomous coding

**Use cases:**
- Self-hosted AI coding assistance
- Privacy-sensitive environments
- Custom fine-tuning for specific codebases
```

- [ ] **Step 2: Add MiniMax section**

```markdown
## MiniMax M3

> **Context:** 1M tokens | **Multimodal:** Native | **SWE-Bench Pro:** 59%

**What it is:** Frontier model with 1M context and native multimodal support. Top coding performance on SWE-Bench Pro.

**Key specs:**
- 1M token context window (longest available)
- Native multimodal (text + images + code)
- 59% on SWE-Bench Pro (frontier coding)
- Fast inference for real-time coding

**Use cases:**
- Large codebase analysis (1M context)
- Visual code review (screenshots, diagrams)
- Complex refactoring across many files
```

- [ ] **Step 3: Add Grok Build section**

```markdown
## Grok Build 0.1

> **Speed:** 100+ tok/s | **Cost:** $1/$2 per million tokens

**What it is:** xAI's coding-optimized model. Extremely fast and affordable.

**Key specs:**
- 100+ tokens per second inference
- $1 input / $2 output per million tokens
- Optimized for code generation and analysis

**Use cases:**
- High-volume code generation
- Real-time coding assistance
- Cost-sensitive projects
```

- [ ] **Step 4: Commit**

```bash
git add tools/overview.md
git commit -m "feat: add Mistral Medium 3.5, MiniMax M3, Grok Build 0.1 to tools overview"
```

---

## Task 10: Add Dynamic Workflows to Workflows

**Files:**
- Modify: `workflows/README.md`
- Create: `workflows/dynamic-workflows.md`

- [ ] **Step 1: Create Dynamic Workflows document**

```markdown
# Dynamic Workflows

> **Available since:** Claude Code v2.1.154 | **Max agents:** 16 concurrent, 1000 total per run

Dynamic Workflows are Claude Code's most powerful automation feature. Claude writes JavaScript orchestration scripts that spawn and manage parallel subagents, enabling massive parallelization of development tasks.

## How It Works

1. **You describe the task** in natural language
2. **Claude analyzes** dependencies and identifies parallelizable work
3. **Claude writes a JS script** that orchestrates subagents
4. **Subagents execute** in parallel (up to 16 concurrent)
5. **Results aggregate** and Claude synthesizes the output

## Ultracode Mode

Ultracode combines extended thinking (`xhigh`) with automatic workflow orchestration:

```
claude --thinking xhigh --workflow auto
```

**When Claude decides to use workflows:**
- Multi-file refactoring across 10+ files
- Parallel code review + testing + security audit
- Documentation generation for large APIs
- Migration tasks with many independent steps

## Commands

- `/workflows` - Dashboard showing active and recent workflows
- `/deep-research` - Bundled workflow for comprehensive research
- Save any workflow as a reusable slash command

## Example: Parallel Code Review

```javascript
// Claude writes this orchestration script
const files = getChangedFiles();
const agents = files.map(file => ({
  task: `Review ${file} for bugs, security issues, and style`,
  type: 'code-reviewer'
}));
const results = await parallel(agents);
return synthesize(results);
```

## Example: Documentation Generation

```javascript
// Generate docs for 50+ functions simultaneously
const functions = getPublicFunctions();
const batches = chunk(functions, 16); // 16 concurrent agents
for (const batch of batches) {
  await parallel(batch.map(fn => ({
    task: `Write documentation for ${fn.name}`,
    type: 'documenter'
  })));
}
```

## Best Practices

1. **Identify parallel work** - Look for independent tasks that don't depend on each other
2. **Keep agent tasks focused** - Each subagent should do one thing well
3. **Use chunking** - Break large tasks into batches of 16 or fewer
4. **Monitor with Agent View** - Use `claude agents` to track progress
5. **Save reusable workflows** - Turn successful patterns into slash commands
```

- [ ] **Step 2: Update workflows README**

Insert in the workflows README:

```markdown
## Dynamic Workflows

Claude Code v2.1.154+ introduced Dynamic Workflows -- JavaScript orchestration scripts that run tens to hundreds of parallel subagents. Ultracode mode combines extended thinking with automatic workflow orchestration. [Read the full guide](dynamic-workflows.md).
```

- [ ] **Step 3: Commit**

```bash
git add workflows/dynamic-workflows.md workflows/README.md
git commit -m "feat: add Dynamic Workflows documentation with examples and best practices"
```

---

## Task 11: Add Background Sessions and Agent View to Subagents

**Files:**
- Modify: `subagents/README.md`

- [ ] **Step 1: Add Background Sessions section**

Insert in the subagents README:

```markdown
## Background Sessions

Background sessions let you run shell commands as background agents without blocking your current work.

**Usage:** Type `! ` (exclamation space) followed by any command:

```
! npm test -- --watch
! docker compose up -d
! cargo build --release
```

**Features:**
- Non-blocking: Continue working while commands execute
- Multiple concurrent: Run several background tasks simultaneously
- Integrated monitoring: Track all sessions via Agent View (`claude agents`)
- Automatic result delivery: Results appear when commands complete

**Use cases:**
- Run test suites while coding
- Start development servers
- Build projects in background
- Monitor long-running processes
```

- [ ] **Step 2: Add Agent View section**

```markdown
## Agent View

Agent View provides a single screen for monitoring all your Claude Code sessions.

**Command:** `claude agents`

**Views:**
- **Running:** Active sessions currently executing
- **Blocked:** Sessions waiting on input or resources
- **Done:** Completed sessions with results

**Features:**
- Real-time status updates
- Filter by status, type, or project
- Jump directly into any session
- See subagent relationships and dependencies
```

- [ ] **Step 3: Commit**

```bash
git add subagents/README.md
git commit -m "feat: add Background Sessions and Agent View to subagents documentation"
```

---

## Task 12: Add Dynamic Workflows Patterns to Advanced Tips

**Files:**
- Modify: `docs/advanced-tips.md`

- [ ] **Step 1: Read current advanced tips**

Read `docs/advanced-tips.md` to find insertion point.

- [ ] **Step 2: Add Dynamic Workflows patterns**

Insert a new section:

```markdown
## Dynamic Workflows Patterns

### When to Use Dynamic Workflows
- **10+ files affected** - Parallelize the work
- **Independent tasks** - No dependencies between subtasks
- **Time-sensitive** - Need results faster than sequential execution
- **Multi-perspective** - Need review from different angles (security, performance, style)

### Pattern: Parallel Refactoring
```
Task: Refactor authentication module to use JWT
Strategy: Split by file, run 8 parallel subagents
Result: 8x faster than sequential, consistent output
```

### Pattern: Multi-Agent Review
```
Task: Review pull request #123
Strategy: Spawn security-auditor, test-runner, code-reviewer in parallel
Result: Comprehensive review in minutes instead of hours
```

### Pattern: Documentation Blitz
```
Task: Document entire API (50+ endpoints)
Strategy: Chunk into batches of 16, run Dynamic Workflow
Result: Complete API docs generated in one session
```

### Anti-Patterns
- **Sequential dependencies** - Don't parallelize tasks that depend on each other
- **Too many agents** - Stay under 16 concurrent for reliability
- **Vague tasks** - Each subagent needs a clear, specific prompt
- **No monitoring** - Always use Agent View to track progress
```

- [ ] **Step 3: Commit**

```bash
git add docs/advanced-tips.md
git commit -m "feat: add Dynamic Workflows patterns and anti-patterns to advanced tips"
```

---

## Task 13: Add GEO FAQ Section to Getting Started

**Files:**
- Modify: `docs/getting-started.md`

- [ ] **Step 1: Read current getting started**

Read `docs/getting-started.md` to find where to add FAQ.

- [ ] **Step 2: Add FAQ section at end**

```markdown
## Frequently Asked Questions

### What is Claude Code?
Claude Code is an AI-powered coding assistant that lives in your terminal. It reads your codebase, understands context, and helps you write, debug, refactor, and document code through natural language conversation. Unlike traditional code completion, Claude Code can execute commands, edit files, and run tests autonomously.

### How do I install Claude Code?
Install via npm: `npm install -g @anthropic-ai/claude-code`. Requires Node.js 18+ and an Anthropic API key. Run `claude` to start your first session.

### What is the difference between Claude Code and ChatGPT?
Claude Code runs in your terminal with direct access to your file system, git history, and running processes. ChatGPT is a web-based chat without local context. Claude Code can edit files, run commands, and manage your project autonomously. ChatGPT requires you to copy-paste code and manually apply changes.

### How do MCP servers work?
MCP (Model Context Protocol) servers extend Claude's capabilities by connecting to external tools and data sources. Configure them in your `.claude/settings.json` file. Claude automatically discovers and uses available MCP tools during conversations.

### Can Claude Code work without an API key?
No. Claude Code requires an Anthropic API key or Claude Pro/Team subscription. The API key is used for all AI interactions. No code runs locally -- all inference happens on Anthropic's servers.

### What programming languages does Claude Code support?
Claude Code works with any programming language. It has strongest proficiency in Python, JavaScript/TypeScript, Rust, Go, Java, C++, and Ruby due to training data coverage. It can assist with any language by reading your codebase and applying general programming knowledge.
```

- [ ] **Step 3: Commit**

```bash
git add docs/getting-started.md
git commit -m "feat: add FAQ section to getting started guide (AEO/GEO)"
```

---

## Task 14: Update README Quick Links Table

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update Quick Links table**

Replace the Quick Links table with updated entries:

```markdown
| Category | Description | Path |
|----------|-------------|------|
| **Getting Started** | Fundamentals, setup, Hello World, FAQ | [docs/getting-started.md](docs/getting-started.md) |
| **Feature Reference** | Complete CLI reference, 40+ commands, Dynamic Workflows | [docs/feature-reference.md](docs/feature-reference.md) |
| **CLAUDE.md Templates** | Ready-to-use templates by project type | [docs/claude-md-templates.md](docs/claude-md-templates.md) |
| **Commands** | Slash commands library | [commands/](commands/) |
| **Subagents** | Specialized AI agents, Background Sessions, Agent View | [subagents/](subagents/) |
| **Hooks** | Automation scripts | [hooks/](hooks/) |
| **MCPs** | Tool integrations, 2026-07-28 spec | [mcps/](mcps/) |
| **Workflows** | Dynamic Workflows, Ralph Wiggum, OpenProse | [workflows/](workflows/) |
| **Prompting** | Engineering techniques | [prompting/](prompting/) |
| **Rules** | Best practices, security hardening | [rules/](rules/) |
| **Skills** | Reusable skill files for AI workflows | [skills/](skills/) |
| **Tools** | AI coding tools: Claude, Codex, Copilot, Cursor | [tools/](tools/) |
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "feat: update README Quick Links with new sections and descriptions"
```

---

## Task 15: Add GroundTruth-MCP and Other Missing MCPs

**Files:**
- Modify: `mcps/essential-mcps.md`

- [ ] **Step 1: Read current essential MCPs**

Read `mcps/essential-mcps.md` to find where to add new entries.

- [ ] **Step 2: Add GroundTruth-MCP**

Insert in the appropriate category:

```markdown
## GroundTruth-MCP v6.0.0

> **Curated libraries:** 422+ | **Features:** Self-hosted docs, audits

**What it is:** A curated collection of MCP server configurations for 422+ libraries and frameworks. Self-hosted documentation and audit capabilities.

**Key features:**
- 422+ pre-configured library integrations
- Self-hosted documentation generation
- Audit trails for compliance
- One-click setup for common stacks

**Best for:** Teams wanting comprehensive MCP coverage without manual configuration.
```

- [ ] **Step 3: Add GitHub MCP Server v1.1.2**

```markdown
## GitHub MCP Server

> **Stars:** 30K+ | **Latest:** v1.1.2 | **Features:** Lockdown mode

**What it is:** Official GitHub MCP server for repository management, issue tracking, and CI/CD integration.

**Key features:**
- Repository management (clone, push, pull)
- Issue and PR creation/management
- CI/CD status monitoring
- Lockdown mode for security-sensitive environments

**Best for:** Teams using GitHub who want AI-assisted repository management.
```

- [ ] **Step 4: Commit**

```bash
git add mcps/essential-mcps.md
git commit -m "feat: add GroundTruth-MCP v6.0.0 and GitHub MCP Server v1.1.2"
```

---

## Task 16: Final SEO/AEO Pass on All Modified Files

**Files:**
- All files modified in previous tasks

- [ ] **Step 1: Add dateModified to all modified files**

For each file modified, add a comment at the top:
```markdown
<!-- dateModified: 2026-06-02 -->
```

- [ ] **Step 2: Verify inverted pyramid structure**

Check that each section starts with a direct answer (40-60 words) before diving into details.

- [ ] **Step 3: Verify self-contained passages**

Each section should make sense standalone when extracted by AI.

- [ ] **Step 4: Verify statistics are present**

Add at least one specific statistic per 150-200 words where applicable.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final SEO/AEO/GEO pass - dateModified stamps, inverted pyramid verification"
```

---

## Execution Notes

**Total tasks:** 16
**Estimated time:** 2-3 hours for full implementation
**Dependencies:** Tasks 1-2 can run in parallel. Tasks 3-4 are sequential. Tasks 5-9 are independent. Tasks 10-16 depend on earlier tasks.

**Recommended execution order:**
1. Task 1 (llms.txt) - Quick win, no dependencies
2. Task 2 (README SEO) - Foundation for all other changes
3. Tasks 3-4 (Feature Reference + Security) - Claude Code features
4. Task 5 (MCP Spec) - Independent, high-value
5. Tasks 6-9 (Tools) - Independent, can be parallelized
6. Tasks 10-11 (Workflows + Subagents) - Build on earlier work
7. Tasks 12-16 (Advanced tips, FAQ, final pass) - Polish and verification
