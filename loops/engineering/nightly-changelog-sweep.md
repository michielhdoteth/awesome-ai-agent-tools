# The Nightly Changelog Loop

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/nightly-changelog-sweep/

## Use When

The changelog has fallen behind daily product changes and needs reconciliation.

## Prompt

> Each night, review changes from the previous day and update the changelog with anything users should know.

## Verification

- **Title:** Every user-relevant change from the previous day is accounted for.
- **Detail:** The changelog is updated and validated, or the no-change result is recorded.

## Steps

1. Collect the previous day's merged pull requests, commits, deployments, and other in-scope changes.
2. Identify which changes affect users and compare them with the current changelog.
3. Add concise dated entries with useful references while preserving existing content and avoiding duplicates.
4. Run the relevant checks and record either the validated update or the fact that no user-facing entry was needed.

## Why

Daily reconciliation makes omissions visible while context is fresh.

## Keywords

changelog, release-notes, daily, reconciliation, user-facing

## Related Loops

- [overnight-docs-sweep](overnight-docs-sweep.md)
- [repository-cleanup-loop](repository-cleanup-loop.md)
