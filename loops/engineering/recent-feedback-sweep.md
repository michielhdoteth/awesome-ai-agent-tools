# The Recent-Feedback Sweep

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/recent-feedback-sweep/

## Use When

Recent user-reported issues need to be deduplicated, verified, and fixed across the codebase.

## Prompt

> Review all available threads from [lookback window] where I reported something wrong with [project] and asked for a fix. Build a deduplicated issue list, group it into failure patterns, and verify current state. Audit the complete project for every pattern, fix each confirmed instance, and add regression coverage where practical. Repeat the full audit until it finds no remaining instance or [iteration budget] ends. Stop on blocked or approval-gated work. Return the issues, fixes, evidence, and blockers.

## Verification

- **Title:** The issue inventory is closed and a fresh pattern audit is clean.
- **Detail:** Every reported issue has current proof of resolution.

## Steps

1. Define the lookback window and complete project surface, then collect every accessible thread.
2. Deduplicate the reported issues, verify their current status, and turn concrete examples into explicit failure patterns.
3. Audit every in-scope project surface for each pattern, fix one confirmed instance at a time.
4. Run targeted checks after each fix, then rerun the complete pattern audit.

## Why

Recent corrections are concrete examples of the quality bar the project missed.

## Keywords

feedback, issues, patterns, audit, regression

## Related Loops

- [full-product-evaluation-loop](../evaluation/full-product-evaluation-loop.md)
- [quality-streak-loop](../evaluation/quality-streak-loop.md)
