# The Codex Completion-Contract Loop

**Category:** Engineering | **Author:** 3goblack (@Dis_Trackted)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/codex-completion-contract-loop/

## Use When

Long-running Codex work could be mistaken for done before all outcomes are proved.

## Prompt

> Run $goal-planner-codex [task] for long-running Codex work where partial work could be mistaken for done. Landing a PR and verifying production is one example. Before acting, define every required outcome and its evidence. After each bounded action, mark requirements proved, weak, missing, or contradicted. Complete the Goal only when all are proved; otherwise stop as blocked, stalled, or exhausted. Ask before creating Goal state. Finish with the requirement-to-evidence table, status, owner, and next action.

## Verification

- **Title:** Every Codex Goal requirement has current, adequate proof.
- **Detail:** No weak, missing, or contradicted required item.

## Steps

1. Recover a measurable definition of done for every ambiguous requirement.
2. Record the requirements, scope, non-goals, evidence plan, and current status.
3. Execute one bounded action at a time and attach current evidence to each affected requirement.
4. Audit every requirement before closure and preserve honest blocked, exhausted, stalled, or contradicted states.

## Why

Durable completion contract keeps definition of done visible. Mapping requirements to evidence catches false completion.

## Keywords

codex, completion, contract, evidence, requirements

## Related Loops

- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
- [quality-streak-loop](../evaluation/quality-streak-loop.md)
