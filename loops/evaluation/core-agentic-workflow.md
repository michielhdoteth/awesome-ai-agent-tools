# The CORE Agentic Workflow

**Category:** Evaluation | **Author:** Code on Grass
**Published:** 2026-06-21 | **Source:** https://codeongrass.com/blog/core-agentic-workflow-task-plan-review-approve-pr/

## Use When

You need human judgment at the decision point between planning and execution.

## Prompt

> 1. Task file written
> 2. Agent drafts PLAN.md and stops (separate session)
> 3. Human reviews and approves
> 4. Separate session executes approved PLAN.md
> 5. Session returns reviewable PR
> 6. QA inspector reviews execution diff

## Key Property

Agent never writes source code without human-reviewed plan on disk.

## Verification

- **Title:** Code is only written after a human-approved plan exists on disk.
- **Detail:** QA inspector reviews the execution diff before human final review.

## Steps

1. Write the task file with requirements.
2. Agent drafts PLAN.md in a separate session and stops.
3. Human reviews and approves the plan.
4. Separate session executes the approved PLAN.md.
5. Session returns a reviewable PR.
6. QA inspector reviews the execution diff.

## Why

Forcing human approval before coding prevents wasted effort on wrong approaches. Separate sessions prevent context contamination.

## Keywords

CORE, plan-review, human-in-the-loop, QA, separate-sessions

## Related Loops

- [goal-forge-loop](../engineering/goal-forge-loop.md)
- [devils-advocate-design-loop](devils-advocate-design-loop.md)
