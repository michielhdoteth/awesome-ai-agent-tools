# Issue Burn-Down Line

**Category:** Engineering | **Author:** Rohan Balkondekar
**Published:** 2026-06-21 | **Source:** https://github.com/rohanbalkondekar/agent-loop-patterns

## Use When

You need a structured pipeline for turning vague goals into shipped fixes through defined stations.

## Prompt

> Intake: turn vague goals into a queue of small, ordered work items.
> Worker station: let the agent change code, but only for one bounded item.
> Proof station: require a local repro, test, metric, or code-path proof before claiming progress.
> QA station: run an independent validator that can reject the work.
> Memory station: update the ledger so the next pass starts with concrete state.
> Ratchet station: checkpoint accepted work and quarantine rejected work.
> Supervisor station: watch for stale runs, empty output, and repeated failure.

## Verification

- **Title:** Each work item passes through all stations and reaches a verified terminal state.
- **Detail:** Rejected work is quarantined and the ledger reflects current state.

## Steps

1. Intake: convert vague goals into small, ordered work items.
2. Worker: implement one bounded item with code changes.
3. Proof: verify with reproduction, test, metric, or code-path evidence.
4. QA: run independent validation and accept or reject.
5. Memory: update the ledger with current state.
6. Ratchet: checkpoint accepted work, quarantine rejected work.
7. Supervisor: detect stale runs, empty output, repeated failure.

## Why

Defined stations prevent work from skipping verification. Supervisor catches stalled loops.

## Keywords

stations, pipeline, intake, worker, proof, QA, supervisor

## Related Loops

- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
- [quality-streak-loop](../evaluation/quality-streak-loop.md)
