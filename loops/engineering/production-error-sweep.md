# The Production Error Sweep

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/production-error-sweep/

## Use When

Production logs contain actionable errors that need root-cause analysis and verified fixes.

## Prompt

> Review our production logs for errors. If you find an actionable issue, trace it to its root cause, fix it, verify the fix, and open a pull request. If no actionable errors are present, stop without making changes.

## Verification

- **Title:** Actionable production errors are fixed and verified.
- **Detail:** Finish with a pull request, or stop when no actionable errors are present.

## Steps

1. Review the agreed production log window and group repeated symptoms into likely incidents.
2. Separate actionable product errors from expected noise, transient upstream failures, and already-known issues.
3. Trace each actionable error to a root cause, implement the smallest appropriate fix, and verify it with focused checks.
4. Open a pull request for each verified fix. If the logs are clean, stop without making changes.

## Why

Converts passive log review into closed reliability workflow. Requires root cause and verified change.

## Keywords

production, errors, logs, root-cause, PR, reliability

## Related Loops

- [overnight-docs-sweep](overnight-docs-sweep.md)
- [sub-50ms-page-load-loop](sub-50ms-page-load-loop.md)
