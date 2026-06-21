# The Housekeeper Loop

**Category:** Engineering | **Author:** Eric Lott
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/housekeeper-loop/

## Use When

A codebase has accumulated dead code, stale files, unused dependencies, and structural confusion.

## Prompt

> Review [repository or code project] for dead code, meaning unreachable or unused code; stale files or comments; unused dependencies; duplication; broken links; old comments; inconsistent names; and confusing structure. Protect unrelated, active, uncommitted, generated, and uncertain work. Prove one low-risk cleanup, make the smallest coherent change, then rerun the build, tests, runtime checks, and diff review. Keep only verified improvements. Stop when none remain, progress stalls, verification is unavailable, or approval is required.

## Verification

- **Title:** No confirmed low-risk cleanup remains, and existing behavior still passes.
- **Detail:** Every retained cleanup is supported by direct evidence.

## Steps

1. Inspect the current code-project state and identify active branches, uncommitted edits, generated files.
2. Collect possible cleanups, then prove one candidate is genuinely low risk.
3. Make the smallest useful change and run the existing build, tests, application checks.
4. Repeat until no confirmed low-risk cleanup remains.

## Why

One proven cleanup at a time keeps work easy to review and undo.

## Keywords

cleanup, dead-code, dependencies, housekeeping, maintenance

## Related Loops

- [repository-cleanup-loop](repository-cleanup-loop.md)
- [overnight-docs-sweep](overnight-docs-sweep.md)
