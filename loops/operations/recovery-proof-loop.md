# The Recovery Proof Loop

**Category:** Operations | **Author:** Eric Lott
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/recovery-proof-loop/

## Use When

You need to prove that backup and recovery procedures actually work from real recovery points.

## Prompt

> For each required recovery scenario, randomly select an eligible real backup or recovery point and restore from zero in a disposable, isolated clean-room using only documented materials. Verify integrity, dependencies, representative reads and writes, and actual RPO and RTO. Repair one blocker, destroy the environment, and retry fresh. Stop when every scenario reaches its predefined consecutive-success streak or an exception is explicitly accepted.

## Verification

- **Title:** Every required recovery scenario succeeds repeatedly from a real recovery point.
- **Detail:** Random selection exposes gaps in backup coverage.

## Steps

1. Define the required scenarios, eligible recovery points, unchanged success criteria, consecutive-success streak.
2. Randomly select one eligible real recovery point, restore from zero in a disposable clean-room.
3. Verify checksums, control totals, referential integrity, keys, dependencies, representative reads/writes.
4. Repair one recovery blocker, destroy the environment, retry fresh.

## Why

Backup is only useful if real recovery point can rebuild system. Random selection exposes gaps.

## Keywords

recovery, backup, RPO, RTO, clean-room, verification

## Related Loops

- [quality-streak-loop](../evaluation/quality-streak-loop.md)
- [post-release-baseline-loop](post-release-baseline-loop.md)
