# PR Babysitter Pattern

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/pr-babysitter.md

## Use When

Active PRs need continuous monitoring for CI status, review feedback, and merge readiness.

## Pattern Card

- **Duration:** 5-15 minutes
- **Complexity:** Higher
- **Risk:** High
- **Starter:** pr-babysitter

## Prompt

> Monitor open pull requests for CI status, review comments, and merge readiness. When a PR is ready, merge it. When a PR needs attention, process the feedback and push updates. Record outcomes and stop when all PRs are merged, blocked, or explicitly deferred.

## Verification

- **Title:** All monitored PRs reach a terminal state (merged, blocked, or deferred).
- **Detail:** Each PR action is recorded with evidence.

## Steps

1. List all open PRs and their current CI/review status.
2. For each PR, determine the next action (merge, address feedback, defer).
3. Execute the highest-priority action and record the result.
4. Repeat until all PRs are in a terminal state.

## Why

Continuous PR monitoring prevents merge delays and catches CI failures early.

## Keywords

PR, CI, merge, monitoring, review

## Related Loops

- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
- [daily-triage](daily-triage.md)
