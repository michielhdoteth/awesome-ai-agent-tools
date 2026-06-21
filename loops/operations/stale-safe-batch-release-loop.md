# The Stale-Safe Batch Release Loop

**Category:** Operations | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/stale-safe-batch-release-loop/

## Use When

You need to combine valid changes for release while excluding stale work.

## Prompt

> Review pending changes and pull requests, exclude stale or unfinished work, combine the valid changes, and release them together.

## Verification

- **Title:** Only current, complete changes ship in the combined release.
- **Detail:** The released revision is the latest integrated main.

## Steps

1. Fetch current repository and pull-request state, then inspect every candidate change.
2. Exclude stale, superseded, conflicting, or unfinished work and record why.
3. Integrate the valid changes, rerun the combined checks.
4. Release complete artifacts from a clean checkout, serialize the deployment.

## Why

Evaluating all candidates before integration prevents stale code from entering release.

## Keywords

release, batch, stale, integration, deployment

## Related Loops

- [repository-cleanup-loop](../engineering/repository-cleanup-loop.md)
- [post-release-baseline-loop](post-release-baseline-loop.md)
