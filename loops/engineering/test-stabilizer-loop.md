# The Test Stabilizer Loop

**Category:** Engineering | **Author:** hungtv27 (@hungtv27)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/test-stabilizer-loop/

## Use When

Flaky tests need root-cause fixes instead of blind retries.

## Prompt

> Run [test suite] [N] times under the same conditions and list tests whose result changes. Fix the most frequent flake at its root cause—shared state, timing, ordering, or an external dependency—never with a blind sleep or retry. Run that test [N] times, then rerun the full suite. Repeat until [N] consecutive full-suite runs pass, progress stalls, or approval is required.

## Verification

- **Title:** The full test suite passes for the required consecutive-run streak.
- **Detail:** No blind sleep or retry hides an unresolved cause.

## Steps

1. Choose the test suite, the required run count, and the conditions that must stay fixed.
2. Select the most frequent flake, reproduce it as narrowly as practical, and identify the underlying failure.
3. Fix the test or product code without adding a blind sleep or retry.
4. Repeat until the required number of consecutive full-suite runs pass.

## Why

Repeated runs turn intermittent failures into measurable evidence.

## Keywords

flaky-tests, stability, root-cause, CI, reliability

## Related Loops

- [quality-streak-loop](../evaluation/quality-streak-loop.md)
- [test-suite-speed-loop](test-suite-speed-loop.md)
