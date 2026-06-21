# The Clodex Adversarial-Review Loop

**Category:** Engineering | **Author:** Lukas Kucinski
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/clodex-adversarial-review-loop/

## Use When

You need an automated adversarial review cycle between a builder agent and a reviewer agent.

## Prompt

> Run /clodex [task] think hard --max-iter 5 --threshold medium. Claude plans the task, implements it, opens a pull request, asks Codex for an adversarial review, fixes findings above the accepted severity, and repeats. Keep the branch, PR, findings, verdict, and iteration state resumable. Stop when Codex approves, only accepted findings remain, progress stalls, or the iteration cap is reached. Never describe an errored or exhausted run as approved. Finish with the PR, checks, verdict, and remaining findings.

## Verification

- **Title:** The pull request reaches the configured review bar.
- **Detail:** Codex approves it or only explicitly accepted findings remain.

## Steps

1. Choose the task, thinking level, maximum iterations, and highest acceptable finding severity.
2. Have Claude plan, implement, verify, and open the pull request through Clodex.
3. Run the Codex adversarial review, fix blocking findings, push, and review again.
4. Persist state across rounds and finish with the verdict, remaining findings, checks, and pull-request link.

## Why

Separates builder from reviewer. Turns feedback into bounded repair loop.

## Keywords

adversarial, review, Codex, Claude, PR, iteration

## Related Loops

- [architecture-satisfaction-loop](architecture-satisfaction-loop.md)
- [stale-safe-batch-release-loop](../operations/stale-safe-batch-release-loop.md)
