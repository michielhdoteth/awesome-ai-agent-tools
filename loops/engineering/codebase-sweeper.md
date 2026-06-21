# Codebase Sweeper Pattern

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/codebase-sweeper.md

## Use When

A codebase needs cautious, low-risk improvements across multiple dimensions.

## Pattern Card

- **Complexity:** L2 cautious
- **Risk:** Very high
- **Starter:** codebase-sweeper

## Prompt

> Sweep the codebase for improvements: dead code, unused imports, inconsistent naming, missing types, and structural issues. Make one small verified change at a time. Prove each change passes build, tests, and lint before proceeding. Record what was changed and why. Stop when no safe improvements remain or approval is needed.

## Verification

- **Title:** Each codebase improvement is verified and passes all checks.
- **Detail:** Changes are small, isolated, and independently verifiable.

## Steps

1. Identify the category of improvement to focus on (dead code, types, naming, etc.).
2. Find one small, low-risk instance to fix.
3. Make the change and run build, tests, and lint checks.
4. Record the change and repeat until no safe improvements remain.

## Why

Cautious incremental approach prevents large-scale regressions from codebase-wide changes.

## Keywords

sweep, cleanup, dead-code, types, naming, cautious

## Related Loops

- [housekeeper-loop](housekeeper-loop.md)
- [repository-cleanup-loop](repository-cleanup-loop.md)
