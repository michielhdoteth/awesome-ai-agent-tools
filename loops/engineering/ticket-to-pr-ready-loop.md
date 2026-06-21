# The Ticket-to-PR-Ready Loop

**Category:** Engineering | **Author:** Hiten Shah
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/ticket-to-pr-ready-loop/

## Use When

A ticket, bug report, or customer complaint needs to become a review-ready patch.

## Prompt

> Take a ticket, bug report, failing behavior, or customer complaint and turn it into a review-ready patch. Reproduce the failure in the smallest representative environment, prove the root cause, make the smallest credible fix, and rerun the original reproduction plus relevant regression tests. If the issue cannot be reproduced after two serious attempts, say so. Do not fold unrelated refactors into the patch. Finish with the cause, changed files, before-and-after proof, risks, and pull-request summary.

## Verification

- **Title:** The failure is fixed, verified, and ready for review.
- **Detail:** The issue reproduces before the fix, no longer reproduces afterward, and relevant regression checks pass.

## Steps

1. State the expected and actual behavior, then reproduce the failure in the smallest representative environment.
2. Trace the behavior to a root cause and confirm the causal link with evidence.
3. Implement the smallest credible fix, avoiding unrelated cleanup or hidden refactors.
4. Repeat the original reproduction, run relevant regression checks, and package the result for review.

## Why

Closes gap between something being wrong and reviewer trusting the patch.

## Keywords

ticket, bug-fix, root-cause, reproduction, PR, regression

## Related Loops

- [production-error-sweep](production-error-sweep.md)
- [quality-streak-loop](../evaluation/quality-streak-loop.md)
