# The Quality Streak Loop

**Category:** Evaluation | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/quality-streak-loop/

## Use When

You need consecutive passing realistic scenarios before declaring quality sufficient.

## Prompt

> Test realistic scenarios. When one fails, document it, add regression and benchmark coverage, fix it, and restart the streak. Stop after [N] successful cases in a row.

## Verification

- **Title:** The latest [N] realistic cases pass in a row.
- **Detail:** Every earlier failure is documented, fixed, and protected.

## Steps

1. Define realistic scenarios, the quality bar, the value of [N], and the evidence required for a pass.
2. Run cases one at a time under consistent conditions.
3. On any failure, document it, add regression and benchmark coverage, fix the cause, verify the fix, and reset the streak.
4. Stop only after [N] consecutive cases meet the original quality bar.

## Why

Restarting prevents isolated successes from hiding intermittent weaknesses.

## Keywords

quality, streak, regression, testing, benchmark

## Related Loops

- [full-product-evaluation-loop](full-product-evaluation-loop.md)
- [100-percent-test-coverage-loop](../engineering/100-percent-test-coverage-loop.md)
