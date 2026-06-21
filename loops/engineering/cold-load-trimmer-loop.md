# The Cold-Load Trimmer Loop

**Category:** Engineering | **Author:** Christian Katzmann
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/cold-load-trimmer-loop/

## Use When

A web app downloads too much data before its first screen appears.

## Prompt

> Reduce the data [web app] downloads before its first screen appears. First record passing tests, mobile and desktop screenshots, and compressed transferred bytes. Use the build report only to suggest candidates. Defer, compress, or remove one item, then rebuild and rerun every check. Keep it only if tests pass, screenshots are pixel-identical, and bytes decrease; otherwise revert. Stop when no safe candidate remains, progress stalls, or approval is needed. Return measurements, changes, and untested states.

## Verification

- **Title:** The first screen downloads less data without a tested behavior or pixel changing.
- **Detail:** Same screenshots and passing tests prove no regression.

## Steps

1. Before changing code, record passing tests, representative screenshots, and a repeatable baseline for compressed transferred bytes.
2. Use a build or bundle report to find large or early downloads, then choose one safe candidate.
3. Rebuild and rerun the same tests, screenshots, and download measurement; keep the change only when every gate passes.
4. Repeat until no safe candidate remains.

## Why

Recording behavior before first change prevents broken screen from becoming new normal.

## Keywords

cold-load, bundle, performance, screenshots, bytes

## Related Loops

- [sub-50ms-page-load-loop](sub-50ms-page-load-loop.md)
- [pixel-safe-css-trim-loop](../design/pixel-safe-css-trim-loop.md)
