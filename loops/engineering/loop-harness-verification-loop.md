# The Loop Harness Verification Loop

**Category:** Engineering | **Author:** Istasha
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/loop-harness-verification-loop/

## Use When

Scheduled repository work needs a two-agent verification gate before shipping.

## Prompt

> Use Loop Harness for scheduled repository work such as CI triage, issue grooming, dependency updates, or docs sync. Set [retry limit], then start an isolated git worktree. Let one Claude session stage a patch or outbox message and a second Claude session verify it against explicit criteria. Ship only after a pass; otherwise preserve the findings and retry only within the limit. Finish with the source revision, staged output, verifier result, delivery status, and next run.

## Verification

- **Title:** Only independently verified output ships.
- **Detail:** A second-agent pass releases the configured output.

## Steps

1. Set the retry limit, wake the due Loop Harness task, and create an isolated worktree from the approved source revision.
2. Have the primary Claude session stage one bounded result without publishing it.
3. Have a second Claude session inspect the staged work against explicit acceptance criteria.
4. Ship on a pass; otherwise preserve the findings, publish nothing, and retry only until the preset limit.

## Why

Workspace isolation limits interference. Second-agent gate separates generation from approval.

## Keywords

verification, two-agent, worktree, CI, gating

## Related Loops

- [clodex-adversarial-review-loop](clodex-adversarial-review-loop.md)
- [overnight-docs-sweep](overnight-docs-sweep.md)
