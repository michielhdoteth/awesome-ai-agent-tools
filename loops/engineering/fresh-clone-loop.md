# The Fresh-Clone Loop

**Category:** Engineering | **Author:** 0xUmbra
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/fresh-clone-loop/

## Use When

A repository's README claims a ready state but new contributors cannot reach it.

## Prompt

> Clone [repository] into a disposable environment and follow only its README to the documented ready state, such as running the app or building the package. When a step fails or assumes missing knowledge, record the gap, fix the setup or documentation issue, discard the environment, and start again. Carry no dependencies, configuration, credentials, or repairs between attempts. Stop when one uninterrupted fresh clone reaches that state, progress stalls, or [budget] ends. Return exact commands, gaps closed, and remaining blockers.

## Verification

- **Title:** A clean environment reaches the documented ready state using only the README.
- **Detail:** No carried-over state hides problems.

## Steps

1. Create a disposable environment with no project dependencies or configuration carried over from another checkout.
2. Fresh-clone the repository and follow only the README, recording every missing step, hidden assumption, and failure.
3. Fix the smallest setup or documentation gap, discard the environment completely, and begin again.
4. Repeat until one clean run reaches the documented ready state without intervention.

## Why

Destroying environment after repair prevents local state from hiding next problem.

## Keywords

onboarding, README, fresh-clone, documentation, disposable

## Related Loops

- [overnight-docs-sweep](overnight-docs-sweep.md)
- [repository-cleanup-loop](repository-cleanup-loop.md)
