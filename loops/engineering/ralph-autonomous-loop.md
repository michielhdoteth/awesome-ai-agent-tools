# Ralph Autonomous Loop

> Serial execution loop for PRD task completion with fresh AI context per iteration.

**Source:** [snarktank/ralph](https://github.com/snarktank/ralph) (2,043 stars)  
**Category:** Engineering / Autonomous  
**Pattern:** Fire-and-forget serial loop  
**Agent:** Claude Code, Amp

## How It Works

Ralph spawns a fresh AI CLI session for each PRD task. No context accumulates between iterations. Memory persists via git history, `progress.txt`, and `prd.json`.

```
┌─────────────────────────────────────────────────┐
│                  Ralph Loop                      │
│                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐   │
│  │ Read PRD │───▶│ Find Next│───▶│ Implement│   │
│  │          │    │ Unchecked│    │ with TDD │   │
│  └──────────┘    │   Task   │    └──────────┘   │
│                  └──────────┘         │          │
│                       ▲               ▼          │
│                       │         ┌──────────┐     │
│                       │         │ Mark Done│     │
│                       │         │ & Commit │     │
│                       │         └──────────┘     │
│                       │               │          │
│                       │               ▼          │
│                       │         ┌──────────┐     │
│                       │         │ All Done?│──No─┤
│                       │         └──────────┘     │
│                       │               │Yes       │
│                       │               ▼          │
│                       │         ┌──────────┐     │
│                       └─────────│  STOP    │     │
│                                 └──────────┘     │
└─────────────────────────────────────────────────┘
```

## Prompt

```
You are working on a PRD with multiple tasks. Your job:

1. Read prd.json and find the next unchecked task
2. Implement that ONE task using TDD
3. Write tests FIRST, then implement
4. Run tests to verify they pass
5. Mark the task as done in prd.json
6. Commit with a descriptive message
7. Stop. Do NOT start the next task.

Rules:
- Fresh context each iteration (no memory of previous runs)
- Only ONE task per run
- Always write tests before code
- Commit after each task
- If tests fail, fix and re-run before marking done
```

## Configuration

```json
{
  "maxIterations": 10,
  "prdFile": "prd.json",
  "progressFile": "progress.txt",
  "commitPrefix": "feat:",
  "testFirst": true
}
```

## Verification Criteria

- [ ] Each PRD task is implemented with tests
- [ ] Tests pass before marking task done
- [ ] Each task has its own commit
- [ ] No context carries over between iterations
- [ ] All PRD tasks completed (or max iterations reached)

## Key Features

- **Fresh context per run** — no context window pollution
- **Git-based memory** — state persists in files, not AI memory
- **TDD enforcement** — tests written before implementation
- **Bounded iterations** — configurable max to prevent infinite loops
- **Fire-and-forget** — start it and check results later

## Installation

```bash
# Clone ralph
git clone https://github.com/snarktank/ralph.git

# Copy to your project
cp ralph/ralph.sh your-project/
cp ralph/prd-template.json your-project/prd.json

# Edit prd.json with your tasks
# Run
./ralph.sh
```

## When to Use

- Large PRDs with many independent tasks
- Tasks that benefit from fresh context each time
- Fire-and-forget development sessions
- When you want TDD enforced automatically

## When NOT to Use

- Tasks requiring deep context across multiple files
- Highly interconnected changes
- When you need real-time control

---

**Tags:** `autonomous`, `serial`, `prd`, `tdd`, `fire-and-forget`  
**Related:** [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md), [alpha-loop](alpha-loop.md)
