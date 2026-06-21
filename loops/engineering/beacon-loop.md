# Beacon Loop Planning

**Category:** Engineering | **Author:** Anshuli Yadav
**Published:** 2026-06-21 | **Source:** https://github.com/anshulixyz/multi-agent-loop-kit

## Use When

You need a loop-planning agent that watches repo state and ranks what matters next.

## Modes

1. **Setup mode** - Agent reads your repo, interviews you, proposes multi-agent setup
2. **Loop mode** - Beacon reads repo state, ranks next work, creates task briefs
3. **Safe auto-mode** - Approved agents keep working through numbered slices until stop condition

## Components

- **Beacon** - non-coding agent that ranks work into LOOP_RADAR.md
- **Coding agents** - each owns a slice of the repo
- **Task briefs** - small, approval-gated units of work
- **Approval gates** - Project Lead approves before agents build

## Verification

- **Title:** The beacon accurately ranks work and task briefs are approved before execution.
- **Detail:** Safe auto-mode respects stop conditions and approval gates.

## Steps

1. Run setup mode to analyze the repo and propose agent configuration.
2. Switch to loop mode for the beacon to rank work.
3. Create task briefs for the highest-priority items.
4. Execute approved briefs in safe auto-mode.

## Why

Separating planning from execution prevents premature coding. Approval gates maintain quality control.

## Keywords

beacon, planning, multi-agent, ranking, task-briefs

## Related Loops

- [goal-forge-loop](goal-forge-loop.md)
- [five-minute-repository-maintainer-loop](five-minute-repository-maintainer-loop.md)
