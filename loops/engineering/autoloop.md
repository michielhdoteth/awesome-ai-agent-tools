# Autoloop

**Category:** Engineering | **Author:** GitHub Next
**Published:** 2026-06-21 | **Source:** https://github.com/githubnext/autoloop

## Use When

You need to automate research, development, or maintenance loops that run on a schedule.

## Prompt

> On every scheduled run (default: every 6 hours):
> 1. Picks the most-overdue program
> 2. Reads the program definition and past iteration history
> 3. Proposes a single, targeted change on the program's branch
> 4. Runs the evaluation command and compares the metric to the previous best
> 5. If metric improved: commits to branch and updates draft PR
> 6. If not: discards the change and logs what was tried

## Use Cases

- **Research** - autonomous exploration and experimentation loops
- **Development** - continuously improve test coverage, bundle size, build times, lint warnings, performance

## Verification

- **Title:** Each program iteration either improves the metric or is logged as a failed attempt.
- **Detail:** Programs can be open-ended or goal-oriented with target metrics.

## Steps

1. Define a program with an evaluation command and target metric.
2. On each scheduled run, pick the most-overdue program.
3. Propose a targeted change based on history.
4. Evaluate and commit only if the metric improves.

## Why

Scheduled loops enable continuous improvement without manual triggering. Metric-gated commits prevent regressions.

## Keywords

autoloop, scheduled, metric, continuous-improvement, research

## Related Loops

- [optimization-line](optimization-line.md)
- [sub-50ms-page-load-loop](sub-50ms-page-load-loop.md)
