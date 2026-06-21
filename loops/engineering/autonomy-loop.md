# The Autonomy-Loop Builder-Reviewer Loop

**Category:** Engineering | **Author:** @inferencegod
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/autonomy-loop/

## Use When

You need a builder-agent and reviewer-agent cycle with proof-of-test gates.

## Prompt

> Use autonomy-loop for [repository task] after the test, build, and lint gates pass. Run /autonomy-loop:autonomy-init, then start builder and reviewer in separate worktrees. The builder reads LOOP-STATE.md, makes one bounded change, and adds a red-before, green-after test. The reviewer reruns the gates and proves the test by reverting or mutating the fix. Accept only on both passes; park protected or repeated-failure work for a human. Finish with the commit, gate evidence, test proof, trust tier, and risks.

## Verification

- **Title:** Every accepted wave passes autonomy-loop's proof-of-test gate.
- **Detail:** New test fails without change, passes with it.

## Steps

1. Initialize autonomy-loop, configure deterministic gates and protected paths, and create separate builder and reviewer worktrees.
2. Have the builder read LOOP-STATE.md, implement one bounded change, add a red-before, green-after test, and hand off.
3. Have the reviewer rerun every gate and use revert-or-mutate proof to show the test catches the change.
4. Accept only on both passes; otherwise return findings or park the wave for a human.

## Why

Separate worktrees keep roles independent. Revert-or-mutate catches tests that execute without proving.

## Keywords

autonomy, builder, reviewer, proof-of-test, worktrees

## Related Loops

- [clodex-adversarial-review-loop](clodex-adversarial-review-loop.md)
- [loop-harness-verification-loop](loop-harness-verification-loop.md)
