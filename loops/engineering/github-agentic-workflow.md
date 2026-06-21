# GitHub Agentic Workflow

> Official GitHub framework for natural language workflows with safe outputs.

**Source:** [github/gh-aw](https://github.com/github/gh-aw) (500+ stars)  
**Category:** Engineering / Framework  
**Pattern:** Markdown → Compiled → Sandboxed execution  
**Agent:** Copilot, Claude, Codex, Gemini

## How It Works

GitHub Agentic Workflows (gh-aw) lets you write workflows in natural language markdown. The framework compiles them to safe, sandboxed execution with pre-approved GitHub operations.

```
┌──────────────────────────────────────────────────────┐
│              GitHub Agentic Workflow                  │
│                                                       │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│  │ Markdown │───▶│ Compile  │───▶│  Lock    │        │
│  │ Workflow │    │ to YAML  │    │  File    │        │
│  └──────────┘    └──────────┘    └──────────┘        │
│                                       │               │
│                                       ▼               │
│                                 ┌──────────┐         │
│                                 │ Sandboxed │         │
│                                 │ Execution │         │
│                                 └──────────┘         │
│                                       │               │
│                                       ▼               │
│                                 ┌──────────┐         │
│                                 │  Safe    │         │
│                                 │ Outputs  │         │
│                                 └──────────┘         │
└──────────────────────────────────────────────────────┘
```

## Workflow Format

```markdown
---
name: Issue Triage
on:
  issues:
    types: [opened]

permissions:
  issues: write
  contents: read

steps:
  - name: Triage Issue
    prompt: |
      Read the new issue and:
      1. Classify it (bug, feature, question)
      2. Add appropriate labels
      3. Assign to the right team
      4. Add to the project board
      5. Post a triage comment
```

## Key Features

- **Natural language workflows** — write in markdown
- **Safe outputs** — pre-approved GitHub operations only
- **Sandboxed execution** — Agent Workflow Firewall
- **Multi-engine support** — Copilot, Claude, Codex, Gemini
- **Version control** — workflows are git-tracked

## Verification Criteria

- [ ] Workflow compiles to valid lock file
- [ ] Permissions are minimal and explicit
- [ ] Outputs are safe and pre-approved
- [ ] Execution is sandboxed
- [ ] Audit trail is maintained

## Installation

```bash
# Install gh-aw CLI
npm install -g @githubnext/gh-aw

# Create a workflow
mkdir -p .github/workflows
cat > .github/workflows/triage.yml << 'EOF'
---
name: Issue Triage
on:
  issues:
    types: [opened]
permissions:
  issues: write
steps:
  - name: Triage
    prompt: Classify and label this issue
EOF

# Compile
gh-aw compile .github/workflows/triage.yml
```

## When to Use

- GitHub-centric development
- Teams wanting safe AI automation
- When audit trail matters
- Multi-engine environments

## When NOT to Use

- Non-GitHub projects
- When full tool access is needed
- Highly custom workflows

---

**Tags:** `github`, `framework`, `sandboxed`, `safe-outputs`, `multi-engine`  
**Related:** [agent-teams](../operations/agent-teams.md), [ralph-autonomous-loop](ralph-autonomous-loop.md)
