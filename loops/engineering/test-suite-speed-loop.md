# The Test-Suite Speed Loop

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/test-suite-speed-loop/

## Use When

The test suite is too slow and you need to reduce runtime without sacrificing coverage.

## Prompt

> Optimize the test suite to run as quickly as possible without reducing coverage or changing behavior.

## Verification

- **Title:** The suite is faster with no coverage or behavior regression.
- **Detail:** Repeatable timing, the full passing suite, and the original coverage report prove the result.

## Steps

1. Record the full-suite runtime, coverage, environment, worker settings, and repeatable timing method.
2. Profile the suite to find expensive setup, redundant work, poor isolation, unnecessary integration paths, or safe parallelization opportunities.
3. Make one optimization at a time, then rerun the full suite and compare timing, coverage, and behavior.
4. Stop at the agreed runtime target or diminishing-returns rule with all original checks still passing.

## Why

Fixed baseline prevents speed work from trading away coverage. Profiling directs effort to measured bottlenecks.

## Keywords

testing, speed, performance, profiling, parallelization

## Related Loops

- [100-percent-test-coverage-loop](100-percent-test-coverage-loop.md)
- [sub-50ms-page-load-loop](sub-50ms-page-load-loop.md)
