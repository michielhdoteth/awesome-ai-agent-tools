# Daily Triage Pattern

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/daily-triage.md

## Use When

Issues, PRs, and priorities need daily triage with minimal loop overhead.

## Pattern Card

- **Duration:** 1 day to 2 hours
- **Complexity:** L1 (minimal-loop)
- **Risk:** Low
- **Starter:** minimal-loop

## Prompt

> Triage incoming issues, pull requests, and priorities. Classify each item, assign urgency, and process the highest-value bounded task. Record decisions and stop when the queue is clear or the time budget is exhausted.

## Verification

- **Title:** Every item is classified and the highest-priority task is processed or explicitly deferred.
- **Detail:** Triage decisions are recorded with rationale.

## Steps

1. Collect all open issues, PRs, and priority items from the repository.
2. Classify each by type, urgency, and effort required.
3. Process the highest-value item within granted permissions.
4. Record triage decisions and next actions.

## Why

Daily triage prevents issue accumulation and keeps priorities visible.

## Keywords

triage, issues, PRs, priorities, daily

## Related Loops

- [overnight-docs-sweep](overnight-docs-sweep.md)
- [five-minute-repository-maintainer-loop](five-minute-repository-maintainer-loop.md)
