# Modernization Line

**Category:** Engineering | **Author:** Rohan Balkondekar
**Published:** 2026-06-21 | **Source:** https://github.com/rohanbalkondekar/agent-loop-patterns

## Use When

You need a structured pipeline for incremental code modernization with runtime gates.

## Prompt

> Migration milestone -> bounded code slice -> runtime gates -> ledger handoff -> next slice.

## Verification

- **Title:** Each code slice passes runtime gates before handoff.
- **Detail:** Ledger tracks completed slices and remaining work.

## Steps

1. Define the migration milestone and break it into bounded code slices.
2. Implement one slice with runtime verification gates.
3. Pass the slice through gates and record results in the ledger.
4. Hand off verified slices and proceed to the next.

## Why

Bounded slices prevent migration scope creep. Runtime gates catch regressions early.

## Keywords

modernization, migration, slices, runtime-gates, ledger

## Related Loops

- [architecture-satisfaction-loop](architecture-satisfaction-loop.md)
- [issue-burn-down-line](issue-burn-down-line.md)
