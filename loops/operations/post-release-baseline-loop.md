# The Post-Release Baseline Loop

**Category:** Operations | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/post-release-baseline-loop/

## Use When

You need to establish a new performance baseline after a release.

## Prompt

> After current releases finish, run the standard benchmarks and record the results as the new baseline.

## Verification

- **Title:** The new baseline belongs to the completed release.
- **Detail:** Revision, environment, benchmark version, conditions, and results are recorded together.

## Steps

1. Confirm every in-scope release is complete and record the production revision.
2. Run the standard benchmark suite under its documented environment.
3. Investigate invalid or unstable runs, then rerun under the same conditions.
4. Store the final results with the release identity and metadata.

## Why

Tying baseline to verified release creates trustworthy reference point.

## Keywords

baseline, benchmark, release, performance, reference

## Related Loops

- [stale-safe-batch-release-loop](stale-safe-batch-release-loop.md)
- [test-suite-speed-loop](../engineering/test-suite-speed-loop.md)
