# Optimization Line

**Category:** Engineering | **Author:** Rohan Balkondekar
**Published:** 2026-06-21 | **Source:** https://github.com/rohanbalkondekar/agent-loop-patterns

## Use When

You need a structured pipeline for performance optimization experiments.

## Prompt

> idea -> benchmark -> score -> keep/revert -> experiment log -> next idea.

## Verification

- **Title:** Each optimization idea is benchmarked, scored, and either kept or reverted with evidence.
- **Detail:** Experiment log records all attempts and outcomes.

## Steps

1. Generate an optimization idea based on profiling or analysis.
2. Benchmark the current state before making changes.
3. Implement the optimization and score the result.
4. Keep the change only if it improves the metric; otherwise revert.
5. Log the experiment and proceed to the next idea.

## Why

Benchmarking before and after prevents subjective optimization claims. Experiment log builds knowledge.

## Keywords

optimization, benchmark, experiments, performance, scoring

## Related Loops

- [sub-50ms-page-load-loop](sub-50ms-page-load-loop.md)
- [test-suite-speed-loop](test-suite-speed-loop.md)
