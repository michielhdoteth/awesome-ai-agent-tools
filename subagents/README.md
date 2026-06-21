# Subagents Library

20 specialized AI agents that can be invoked for specific tasks. Subagents provide focused expertise and clean context for complex workflows.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Subagents Count](https://img.shields.io/badge/Subagents-20-green.svg)](#all-subagents)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** June 2026

## What Are Subagents?

Subagents are specialized AI agents configured for specific tasks like code review, testing, debugging, security analysis, and more. They provide:

- **Focused Expertise**: Each subagent is optimized for a specific domain
- **Clean Context**: Fresh context for each task without conversation history pollution
- **Parallel Execution**: Run multiple specialized agents simultaneously
- **Reusable Workflows**: Share consistent workflows across your team

## Quick Start

1. Copy a subagent file to your project
2. Place it in `.claude/agents/`, `.opencode/agents/`, or your agent's config directory
3. Invoke with: "Use the code-reviewer agent to review my changes"

```bash
# Clone and explore
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
ls awesome-ai-agent-tools/subagents/
```

## Browse by Category

Browse the full catalog: [`subagents/catalog.json`](catalog.json)

| Category | Count | Subagents |
|----------|------:|-----------|
| Development | 8 | code-reviewer, test-runner, debugger, refactorer, performance-optimizer, frontend-developer, backend-developer, test-writer, api-designer, migration-specialist |
| Security | 1 | security-auditor |
| Data | 2 | data-analyst, database-expert |
| DevOps | 2 | dependency-updater, devops-engineer |
| Content | 1 | doc-writer |
| Productivity | 1 | planner |
| Orchestration | 1 | workflow-orchestrator |
| Research | 1 | research-analyst |
| Design | 1 | accessibility-expert |

---

## All Subagents

### Development

#### code-reviewer.md
**Tools:** Read, Edit, Grep, Bash, Glob | **Model:** sonnet
Automated code review with security focus. Checks for vulnerabilities, performance issues, and code quality.

#### test-runner.md
**Tools:** Bash, Read, Edit, Grep | **Model:** haiku
Run test suite and fix failures. Analyzes root causes and verifies fixes.

#### debugger.md
**Tools:** Read, Edit, Bash, Grep, Glob | **Model:** opus
Expert debugging: reproduce, isolate, understand, fix, verify.

#### refactorer.md
**Tools:** Read, Edit, Grep, Glob, Bash | **Model:** sonnet
Improve code quality through safe refactoring. Extract, simplify, organize, modernize.

#### performance-optimizer.md
**Tools:** Read, Edit, Bash, Grep, Glob | **Model:** opus
Identify and fix performance bottlenecks. Measure before and after.

#### frontend-developer.md
**Tools:** Read, Edit, Grep, Glob, Bash | **Model:** sonnet
Frontend specialist for React, Vue, Angular, CSS, responsive design, and component architecture.

#### backend-developer.md
**Tools:** Read, Edit, Grep, Glob, Bash | **Model:** sonnet
Backend specialist for APIs, databases, authentication, server architecture, and business logic.

#### test-writer.md
**Tools:** Read, Edit, Bash, Grep, Glob | **Model:** sonnet
Test writing specialist for unit, integration, and e2e tests. TDD, coverage, and test strategy.

#### api-designer.md
**Tools:** Read, Edit, Grep, Glob | **Model:** sonnet
API design specialist for REST, GraphQL, OpenAPI specs, versioning, and API governance.

#### migration-specialist.md
**Tools:** Read, Edit, Bash, Grep, Glob | **Model:** opus
Code and data migration specialist. Database migrations, API upgrades, framework migrations.

### Security

#### security-auditor.md
**Tools:** Read, Grep, Bash, Glob | **Model:** opus
OWASP Top 10 focused security analysis. Injection, auth, data protection, dependencies.

### Data

#### data-analyst.md
**Tools:** Read, Bash, Edit, Grep | **Model:** sonnet
Analyze data and generate insights. CSV, JSON, databases, statistics.

#### database-expert.md
**Tools:** Read, Edit, Bash, Grep | **Model:** sonnet
Database design and optimization. Schema, queries, migrations, performance tuning.

### DevOps

#### dependency-updater.md
**Tools:** Bash, Read, Edit, Grep | **Model:** haiku
Update dependencies safely. Audit, plan, verify, test.

#### devops-engineer.md
**Tools:** Read, Edit, Bash, Grep, Glob | **Model:** sonnet
Docker, Kubernetes, CI/CD, cloud deployment, infrastructure automation.

### Content

#### doc-writer.md
**Tools:** Read, Edit, Grep, Glob | **Model:** sonnet
Write and improve documentation. README, API docs, code comments.

### Productivity

#### planner.md
**Tools:** Read, Grep, Glob, Bash | **Model:** sonnet
Break down complex tasks into atomic, testable implementation plans.

### Orchestration

#### workflow-orchestrator.md
**Tools:** Read, Edit, Bash, Grep | **Model:** opus
Multi-agent workflow orchestration. Task delegation, parallel execution.

### Research

#### research-analyst.md
**Tools:** Read, Grep, Glob, Bash, WebSearch | **Model:** opus
Research and analysis. Technology evaluation, competitive analysis.

### Design

#### accessibility-expert.md
**Tools:** Read, Edit, Grep, Glob, Bash | **Model:** sonnet
WCAG compliance, screen reader testing, keyboard navigation, inclusive design.

---

## Cross-Platform Compatibility

| Platform | Config Path | Invocation |
|----------|-------------|------------|
| **Claude Code** | `.claude/agents/` | "Use the code-reviewer agent" |
| **OpenCode** | `.opencode/agents/` | "Use the code-reviewer agent" |
| **Codex** | `.codex/agents/` | "Use the code-reviewer agent" |
| **Cursor** | `.cursor/agents/` | "Use the code-reviewer agent" |

---

## Creating Subagents

```markdown
---
name: subagent-name
description: >
  Brief description of when to use this subagent.
tools: Read, Edit, Bash, Grep
model: sonnet
---

You are a specialist in [domain]. When invoked:
1. [Step 1]
2. [Step 2]

## Rules
- [Rule 1]
```

### Model Selection

| Model | Use For | Speed | Cost |
|-------|---------|-------|------|
| **haiku** | Simple tasks, running commands | Fast | Low |
| **sonnet** | Code review, planning, implementation | Medium | Medium |
| **opus** | Debugging, security, complex analysis | Slow | High |

---

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md). Add your subagent to `subagents/catalog.json`.

## Related

- [Skills Library](../skills/) - AI agent skill files
- [MCP Servers](../mcps/) - Model Context Protocol servers
- [Agent Loops](../loops/) - Reusable workflow patterns

---

**Keywords:** subagents, AI agents, code review, debugger, test runner, security auditor, frontend developer, backend developer, database expert, devops engineer, workflow orchestrator, Claude Code agents, OpenCode agents, Codex agents, cross-platform AI
