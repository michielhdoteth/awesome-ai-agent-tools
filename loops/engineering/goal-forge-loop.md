# The Goal Forge Loop

**Category:** Engineering | **Author:** michael Guo (@michaelzsguo)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/goal-forge-loop/

## Use When

A rough coding idea needs structured planning files before Codex starts long-running work.

## Prompt

> Turn [rough coding idea] into two planning files before Codex starts /goal, its long-running task mode. Interview the user, then write SPEC.md: what to build, exclude, and consider, plus measurable done_when completion checks. Write GOAL.md: the work plan, progress scorecard, quick and final checks, memory files, evidence, and approval boundaries. If any key decision, permission, tool, environment requirement, or test is missing, stop as not ready. Do not start implementation without approval.

## Verification

- **Title:** The planning files say what to build, how to judge it, and when to stop.
- **Detail:** Every done_when completion check names observable evidence.

## Steps

1. Ask the user what the finished feature should do, what is out of scope, which edge cases matter.
2. Point out ambiguous requirements with concrete interpretations.
3. Write GOAL.md with the ordered work, a progress scorecard, quick checks, slower final checks, memory files, approval boundaries.
4. Confirm that the tools, permissions, environment, and tests exist; stop as not ready when anything essential is missing.

## Why

Makes user decide what success means before agent spends hours coding.

## Keywords

planning, SPEC, GOAL, requirements, completion

## Related Loops

- [codex-completion-contract-loop](codex-completion-contract-loop.md)
- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
