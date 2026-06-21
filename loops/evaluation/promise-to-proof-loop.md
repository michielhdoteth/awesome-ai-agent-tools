# The Promise-to-Proof Loop

**Category:** Evaluation | **Author:** Felix Haeberle (@felixhaberle)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/promise-to-proof-loop/

## Use When

You need to verify that customer-facing promises match actual product behavior.

## Prompt

> List every customer-facing promise [product] makes in marketing, documentation, demos, and AI answers. Compare each promise with current product behavior and evidence, then label it proven, partly proven, misleading, unsupported, outdated, or missing evidence. Fix or narrow the riskiest mismatch and rerun the affected check. Repeat until no high-risk unsupported promise remains. Ask before changing production or public copy. Return the promises, evidence, fixes, and decisions needed.

## Verification

- **Title:** Every high-risk customer promise is supported, narrowed, or waiting on an explicit decision.
- **Detail:** Each promise is labeled with evidence status.

## Steps

1. List the promises customers can see and rewrite each one as a concrete expectation.
2. Compare each expectation with current product behavior, code, tests, documentation.
3. Rank mismatches by harm they could do to customer trust.
4. Rerun the same check and repeat until no high-risk unsupported promise remains.

## Why

Turns vague "can customers trust what we say?" into checkable list.

## Keywords

promises, trust, customer-facing, evidence, verification

## Related Loops

- [full-product-evaluation-loop](full-product-evaluation-loop.md)
- [recent-feedback-sweep](../engineering/recent-feedback-sweep.md)
