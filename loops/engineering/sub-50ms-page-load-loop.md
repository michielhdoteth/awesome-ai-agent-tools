# The Sub-50 ms Page-Load Loop

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/sub-50ms-page-load-loop/

## Use When

Page-load performance needs to be driven below a specific threshold across all routes.

## Prompt

> Continue optimizing the code for speed. After each significant change, measure page-load performance across every page under the same repeatable test conditions. Continue until every page loads in under 50 ms.

## Verification

- **Title:** Every page loads in under 50 ms.
- **Detail:** Use the same benchmark and confirm there are no regressions.

## Steps

1. Define the exact metric, routes, test environment, warm-up behavior, and number of benchmark runs.
2. Capture a baseline for every target page before making changes.
3. Make one significant optimization, rerun the same benchmark, and inspect regressions across all routes.
4. Continue until every page meets the threshold under the original test conditions.

## Why

Fixed harness prevents anecdotal tuning. Measuring every route catches local wins that slow other pages.

## Keywords

performance, page-load, benchmark, optimization, threshold

## Related Loops

- [architecture-satisfaction-loop](architecture-satisfaction-loop.md)
- [production-error-sweep](production-error-sweep.md)
