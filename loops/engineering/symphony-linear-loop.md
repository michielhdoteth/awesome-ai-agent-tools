# Symphony Linear Loop

> Autonomous implementation runs from Linear boards with proof-of-work verification.

**Source:** [openai/symphony](https://github.com/openai/symphony) (25,514 stars)  
**Category:** Engineering / Autonomous  
**Pattern:** Monitor → Spawn → Implement → Verify  
**Agent:** OpenAI, Claude Code

## How It Works

Symphony monitors a Linear board for work items, spawns autonomous agents to handle tasks, and provides proof of work (CI status, PR feedback, complexity analysis).

```
┌──────────────────────────────────────────────────────┐
│                  Symphony Flow                        │
│                                                       │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│  │  Linear  │───▶│  Monitor │───▶│  Spawn   │        │
│  │  Board   │    │  for New │    │  Agent   │        │
│  └──────────┘    │   Items  │    └──────────┘        │
│                  └──────────┘         │               │
│                                       ▼               │
│                                 ┌──────────┐         │
│                                 │ Implement │         │
│                                 │   Task    │         │
│                                 └──────────┘         │
│                                       │               │
│                                       ▼               │
│                                 ┌──────────┐         │
│                                 │  Create  │         │
│                                 │    PR    │         │
│                                 └──────────┘         │
│                                       │               │
│                                       ▼               │
│                                 ┌──────────┐         │
│                                 │  Verify  │         │
│                                 │ CI + Review        │
│                                 └──────────┘         │
│                                       │               │
│                                       ▼               │
│                                 ┌──────────┐         │
│                                 │  Update  │         │
│                                 │  Linear  │         │
│                                 └──────────┘         │
└──────────────────────────────────────────────────────┘
```

## Prompt

```
You are an autonomous implementation agent. Your workflow:

1. READ the assigned task from Linear
2. UNDERSTAND the requirements and acceptance criteria
3. PLAN the implementation approach
4. IMPLEMENT the changes with tests
5. CREATE a pull request with descriptive title and body
6. VERIFY CI passes
7. REQUEST review from the team
8. UPDATE Linear with PR link and status

Constraints:
- Do NOT merge your own PR
- Do NOT push to main directly
- Write tests for all new functionality
- Follow existing code conventions
- Include screenshots for UI changes
```

## Verification Criteria

- [ ] PR created with descriptive title and body
- [ ] All CI checks pass
- [ ] Tests cover new functionality
- [ ] Linear ticket updated with PR link
- [ ] Code follows existing conventions
- [ ] No direct pushes to main

## Proof of Work

Symphony provides verifiable proof:
- CI status badges in PR
- Test coverage reports
- Code complexity analysis
- Review status tracking
- Linear status updates

## When to Use

- Teams using Linear for project management
- Autonomous development with oversight
- When you need audit trail of AI work
- Large backlogs that need processing

## When NOT to Use

- Projects not using Linear
- When real-time control is needed
- Highly creative/exploratory work

---

**Tags:** `autonomous`, `linear`, `proof-of-work`, `ci`, `project-management`  
**Related:** [ralph-autonomous-loop](ralph-autonomous-loop.md), [agent-teams](../operations/agent-teams.md)
