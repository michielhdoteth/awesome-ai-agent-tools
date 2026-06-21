# Three-Body Autonomous Pipeline

> Fully autonomous GitHub Actions pipeline that picks issues, implements, fixes CI, and merges.

**Source:** [a7t-ai/three-body-agent](https://github.com/a7t-ai/three-body-agent) (9 stars)  
**Category:** Engineering / Autonomous  
**Pattern:** Issue → Implement → Fix → Merge → Sync  
**Agent:** GitHub Actions + AI

## How It Works

Three-Body runs entirely on GitHub Actions. It picks issues from a project board, implements them, fixes CI failures, merges green PRs, and syncs the project board — all without human intervention.

```
┌──────────────────────────────────────────────────────────┐
│             Three-Body Autonomous Pipeline                │
│                                                           │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│  │  Board   │───▶│  Pick    │───▶│ Implement│            │
│  │  Sync    │    │  Issue   │    │   Code   │            │
│  └──────────┘    └──────────┘    └──────────┘            │
│       ▲                                  │               │
│       │                                  ▼               │
│       │                            ┌──────────┐         │
│       │                            │   Run    │         │
│       │                            │   CI     │         │
│       │                            └──────────┘         │
│       │                                  │               │
│       │                            ┌─────┴─────┐        │
│       │                            │           │        │
│       │                         Pass        Fail        │
│       │                            │           │        │
│       │                            ▼           ▼        │
│       │                      ┌──────────┐ ┌──────────┐  │
│       │                      │  Create  │ │  Fix CI  │  │
│       │                      │   PR     │ │  (retry) │  │
│       │                      └──────────┘ └──────────┘  │
│       │                            │           │        │
│       │                            ▼           │        │
│       │                      ┌──────────┐     │        │
│       │                      │  Merge   │◀────┘        │
│       │                      │  Green   │               │
│       │                      └──────────┘               │
│       │                            │                    │
│       │                            ▼                    │
│       │                      ┌──────────┐               │
│       └──────────────────────│  Update  │               │
│                              │  Board   │               │
│                              └──────────┘               │
└──────────────────────────────────────────────────────────┘
```

## Workflows

### 1. Implementer Workflow
```yaml
name: Implement Issue
on:
  schedule:
    - cron: '0 */2 * * *'  # Every 2 hours
  workflow_dispatch:

jobs:
  implement:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Pick Issue
        run: |
          # Pick next issue from project board
          ISSUE=$(gh issue list --label "ai-ready" --json number --jq '.[0].number')
          echo "Implementing issue #$ISSUE"
      
      - name: Implement
        run: |
          # Create branch, implement, test
          git checkout -b fix/issue-$ISSUE
          # AI implementation happens here
          npm test
      
      - name: Create PR
        run: |
          gh pr create --title "Fix #$ISSUE" --body "Automated implementation"
```

### 2. Fixer Workflow
```yaml
name: Fix CI
on:
  pull_request:
    types: [synchronize]

jobs:
  fix:
    if: failure()
    runs-on: ubuntu-latest
    steps:
      - name: Analyze Failure
        run: |
          # Read CI logs, identify root cause
          # Apply fix, push to PR branch
```

### 3. Merger Workflow
```yaml
name: Merge Green
on:
  pull_request:
    types: [status]

jobs:
  merge:
    if: success()
    runs-on: ubuntu-latest
    steps:
      - name: Merge
        run: |
          gh pr merge --auto --squash
```

### 4. Board Sync Workflow
```yaml
name: Board Sync
on:
  schedule:
    - cron: '0 * * * *'  # Every hour

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Update Board
        run: |
          # Move issues through columns
          # Based on PR status and merge state
```

## Verification Criteria

- [ ] Issues picked from board automatically
- [ ] Code implemented with tests
- [ ] CI passes (or auto-fixed)
- [ ] PR created and merged
- [ ] Board updated with status
- [ ] No human intervention required

## When to Use

- Large backlogs needing processing
- Well-defined issue templates
- Projects with good test coverage
- When speed matters

## When NOT to Use

- Complex architectural decisions
- When code review is critical
- Small teams wanting control
- Creative/exploratory work

---

**Tags:** `autonomous`, `github-actions`, `ci-cd`, `board-sync`, `fire-and-forget`  
**Related:** [ralph-autonomous-loop](ralph-autonomous-loop.md), [symphony-linear-loop](symphony-linear-loop.md)
