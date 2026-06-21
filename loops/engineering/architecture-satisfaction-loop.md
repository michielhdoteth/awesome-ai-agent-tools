# The Architecture Satisfaction Loop

**Category:** Engineering | **Author:** Peter Steinberger
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/architecture-satisfaction-loop/

## Use When

Refactoring toward a cleaner architecture and you need verified checkpoints along the way.

## Prompt

> Refactor until you are happy with the architecture. After each significant step, live-test the system, run autoreview, and commit. Track progress in /tmp/refactor-{projectname}.md.

## Verification

- **Title:** The architecture is satisfactory and checks pass.
- **Detail:** Live-test, autoreview, and commit each significant step.

## Steps

1. Write down the architectural target, constraints, and current risks before editing code.
2. Make one significant, reviewable change at a time.
3. Live-test the affected behavior and run an independent review after each significant step.
4. Commit each verified checkpoint and update the temporary progress file with decisions, blockers, and the next action.

## Why

Small verified checkpoints reduce refactor risk. Progress file keeps goal available across handoffs.

## Keywords

refactor, architecture, checkpoint, autoreview, commit

## Related Loops

- [overnight-docs-sweep](overnight-docs-sweep.md)
- [sub-50ms-page-load-loop](sub-50ms-page-load-loop.md)
