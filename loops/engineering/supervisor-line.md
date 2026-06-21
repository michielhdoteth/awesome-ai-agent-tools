# Supervisor Line

**Category:** Engineering | **Author:** Rohan Balkondekar
**Published:** 2026-06-21 | **Source:** https://github.com/rohanbalkondekar/agent-loop-patterns

## Use When

You need a supervisor pattern for monitoring agent runs and detecting failures.

## Prompt

> runner -> stale detection -> restart or stop -> durable logs.

## Verification

- **Title:** Agent runs are monitored for staleness and failures are handled.
- **Detail:** Durable logs capture all run states for debugging.

## Steps

1. Start the agent runner with the defined task.
2. Monitor for stale runs, empty output, or repeated failures.
3. Restart on recoverable failures; stop on persistent issues.
4. Record all states in durable logs for later analysis.

## Why

Supervisor pattern prevents silent failures. Durable logs enable post-mortem analysis.

## Keywords

supervisor, monitoring, stale-detection, restart, logs

## Related Loops

- [issue-burn-down-line](issue-burn-down-line.md)
- [five-minute-repository-maintainer-loop](five-minute-repository-maintainer-loop.md)
