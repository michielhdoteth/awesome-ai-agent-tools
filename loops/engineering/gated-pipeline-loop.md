# Gated Pipeline Loop

> Multi-agent orchestration with role-bounded tool access and quality gates.

**Source:** [zevtos/agentpipe](https://github.com/zevtos/agentpipe) (50+ stars)  
**Category:** Engineering / Orchestration  
**Pattern:** Role → Execute → Gate → Next Role  
**Agent:** Claude Code, Codex CLI

## How It Works

AgentPipe defines 9 specialist agents with role-bounded tool access. Each gated workflow enforces quality gates between phases. Agents only access tools relevant to their role.

```
┌──────────────────────────────────────────────────────────┐
│                  Gated Pipeline                           │
│                                                           │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│  │ Planner  │───▶│  Gate    │───▶ │ Coder    │            │
│  │ (plan)   │    │ (review) │    │ (implement)│           │
│  └──────────┘    └──────────┘    └──────────┘            │
│                       │                   │               │
│                       │                   ▼               │
│                       │             ┌──────────┐         │
│                       │             │  Gate    │         │
│                       │             │ (tests) │         │
│                       │             └──────────┘         │
│                       │                   │               │
│                       │                   ▼               │
│                       │             ┌──────────┐         │
│                       │             │ Reviewer │         │
│                       │             │ (review) │         │
│                       │             └──────────┘         │
│                       │                   │               │
│                       │                   ▼               │
│                       │             ┌──────────┐         │
│                       │             │  Gate    │         │
│                       │             │ (approve)│         │
│                       │             └──────────┘         │
│                       │                   │               │
│                       │                   ▼               │
│                       │             ┌──────────┐         │
│                       └────────────▶│  Ship    │         │
│                                     │  (merge) │         │
│                                     └──────────┘         │
└──────────────────────────────────────────────────────────┘
```

## Agent Roles

| Role | Tools | Purpose |
|------|-------|---------|
| **Planner** | Read, Grep, Glob | Understand requirements |
| **Coder** | Read, Write, Edit, Bash | Implement changes |
| **Tester** | Read, Bash, Glob | Write and run tests |
| **Reviewer** | Read, Grep, Glob | Review code quality |
| **Security** | Read, Grep | Security analysis |
| **DevOps** | Read, Write, Bash | Deployment prep |
| **Docs** | Read, Write | Documentation |
| **PM** | Read | Requirements validation |
| **Shipper** | Read, Bash | Final merge and release |

## Prompt

```
You are the [ROLE] in a gated pipeline. Your tools are restricted to [TOOLS].

Pipeline: /feature [description]

Your responsibilities:
1. [ROLE-SPECIFIC TASKS]
2. Complete your phase
3. Wait for gate approval
4. Do NOT proceed until gate passes

Gate criteria for your phase:
- [GATE-CRITERIA]
```

## Verification Criteria

- [ ] Each agent only accesses allowed tools
- [ ] Gates block progression on failure
- [ ] All phases complete successfully
- [ ] Audit trail maintained for each gate
- [ ] Final output passes all quality checks

## Available Workflows

| Workflow | Phases | Description |
|----------|--------|-------------|
| `/feature` | Plan → Code → Test → Review → Ship | Full feature development |
| `/sprint` | Plan → Execute → Verify → Retrospective | Sprint cycle |
| `/audit` | Scan → Analyze → Report → Fix | Security/quality audit |
| `/refactor` | Analyze → Plan → Refactor → Verify | Code improvement |
| `/hotfix` | Diagnose → Fix → Test → Deploy | Emergency fix |

## When to Use

- Multi-agent development
- When role separation matters
- Quality-critical projects
- When you need audit trails

## When NOT to Use

- Simple tasks (overhead not worth it)
- When speed matters more than quality
- Single-developer projects

---

**Tags:** `pipeline`, `gates`, `multi-agent`, `role-bounded`, `orchestration`  
**Related:** [agent-teams](../operations/agent-teams.md), [clodex-adversarial-review-loop](clodex-adversarial-review-loop.md)
