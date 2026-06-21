# Multi-Agent Dev Loop

> Autonomous multi-agent development with planner, reviewer, architect, tester, and deployment agents.

**Source:** [kayoslab/karl](https://github.com/kayoslab/karl) (50+ stars)  
**Category:** Engineering / Multi-Agent  
**Pattern:** Plan → Implement → Review → Test → Deploy  
**Agent:** Claude Code (subagents)

## How It Works

Karl orchestrates multiple specialized agents working on the same codebase. Each agent has a specific role and the orchestrator manages coordination, rework loops, and parallel execution.

```
┌──────────────────────────────────────────────────────────┐
│               Multi-Agent Dev Loop                        │
│                                                           │
│  ┌──────────┐                                             │
│  │  Ticket  │                                             │
│  │  Queue   │                                             │
│  └────┬─────┘                                             │
│       │                                                   │
│       ▼                                                   │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│  │ Planner  │───▶│  Gate    │───▶│ Architect │            │
│  │ (break   │    │ (plan OK)│    │ (design)  │            │
│  │  down)   │    └──────────┘    └──────────┘            │
│  └──────────┘                          │                  │
│                                        ▼                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│  │  Deploy  │◀───│  Gate    │◀───│  Tester  │            │
│  │ (release)│    │ (tests   │    │ (verify) │            │
│  └──────────┘    │  pass)   │    └──────────┘            │
│       ▲          └──────────┘         ▲                  │
│       │                               │                  │
│       │          ┌──────────┐         │                  │
│       └──────────│  Gate    │◀────────┘                  │
│                  │ (review  │                            │
│                  │  OK)     │                            │
│                  └──────────┘                            │
│                       ▲                                  │
│                       │                                  │
│                  ┌──────────┐                            │
│                  │ Reviewer │                            │
│                  │ (review) │                            │
│                  └──────────┘                            │
│                       ▲                                  │
│                       │                                  │
│                  ┌──────────┐                            │
│                  │  Coder   │                            │
│                  │(implement)│                           │
│                  └──────────┘                            │
└──────────────────────────────────────────────────────────┘
```

## Agent Roles

```yaml
agents:
  planner:
    description: Breaks down tickets into implementation tasks
    tools: [Read, Grep, Glob]
    model: haiku  # Fast, cheap
    
  architect:
    description: Designs implementation approach
    tools: [Read, Grep, Glob, WebSearch]
    model: sonnet  # Balanced
    
  coder:
    description: Implements code changes
    tools: [Read, Write, Edit, Bash]
    model: sonnet
    
  reviewer:
    description: Reviews code quality and correctness
    tools: [Read, Grep, Glob]
    model: opus  # Best reasoning
    
  tester:
    description: Writes and runs tests
    tools: [Read, Write, Bash]
    model: sonnet
    
  deployer:
    description: Handles deployment and release
    tools: [Read, Bash]
    model: haiku
```

## Prompt

```
You are the [ROLE] agent in a multi-agent development team.

Ticket: [TICKET_DESCRIPTION]

Your responsibilities:
1. [ROLE-SPECIFIC_TASKS]
2. Hand off to the next agent
3. Do NOT proceed until previous agent completes

Rework rules:
- If reviewer finds issues, coder must fix them
- Maximum 3 rework cycles per agent
- Escalate to human if still failing after 3 cycles
```

## Verification Criteria

- [ ] All agents complete their phases
- [ ] Gates pass between phases
- [ ] Rework loop bounded (max 3 cycles)
- [ ] Tests pass before deployment
- [ ] Code reviewed before merge
- [ ] Deployment verified

## Configuration

```json
{
  "maxReworkCycles": 3,
  "parallelExecution": true,
  "worktreeIsolation": true,
  "timeoutMinutes": 60,
  "escalationContact": "@team-lead"
}
```

## When to Use

- Complex feature development
- When you need multiple perspectives
- Quality-critical projects
- When parallel execution helps

## When NOT to Use

- Simple tasks (overhead not worth it)
- When speed is priority
- Small codebases

---

**Tags:** `multi-agent`, `orchestration`, `subagents`, `parallel`, `rework`  
**Related:** [agent-teams](../operations/agent-teams.md), [gated-pipeline-loop](gated-pipeline-loop.md)
