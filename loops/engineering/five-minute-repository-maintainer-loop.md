# The Five-Minute Repository Maintainer Loop

**Category:** Engineering | **Author:** Peter Steinberger
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/five-minute-repository-maintainer-loop/

## Use When

Multiple repositories need continuous triage and bounded autonomous maintenance.

## Prompt

> While repository maintenance is active, wake every five minutes. Triage [repositories] and read each repository thread's latest state. Reuse one thread per repository; assign its highest-value bounded task only within granted permissions, and do not interrupt coherent active work. Require tests, live proof, autoreview, and green CI before work can land. Escalate product, access, security, or irreversible decisions. Record meaningful changes and stop when every item is landed, decision-ready, blocked, or has no work.

## Verification

- **Title:** Every repository item reaches a proven handoff or terminal state.
- **Detail:** Authorized autonomous work lands with evidence.

## Steps

1. Define the repository scope, exclusions, and separate permissions for triage, delegation, implementation, push, CI repair, merge, and release.
2. Every five minutes, refresh each repository queue and read the latest state of its existing thread.
3. Reuse one thread per repository, assign one bounded task, and let coherent active work continue.
4. Require tests, live proof, autoreview, and green CI; record the evidence.

## Why

Five-minute heartbeat keeps control current without micromanagement. One thread preserves context.

## Keywords

maintenance, heartbeat, triage, autonomous, CI

## Related Loops

- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
- [stale-safe-batch-release-loop](../operations/stale-safe-batch-release-loop.md)
