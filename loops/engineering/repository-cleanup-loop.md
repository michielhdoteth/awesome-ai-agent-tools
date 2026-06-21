# The Repository Cleanup Loop

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/repository-cleanup-loop/

## Use When

A repository has accumulated stale branches, PRs, worktrees, and unmerged work.

## Prompt

> Inspect local and remote branches, pull requests, commits, and worktrees. Recover valuable work and clean everything stale until the repository is current and organized.

## Verification

- **Title:** Valuable work is recovered and remaining repository state is intentional.
- **Detail:** Branches, pull requests, commits, and worktrees are current, owned, or safely removed with evidence.

## Steps

1. Inventory local and remote branches, open and recently closed pull requests, unmerged commits, and registered worktrees.
2. Classify each item as current, valuable but unfinished, superseded, merged, abandoned, or uncertain, recording evidence and ownership.
3. Recover valuable changes into an appropriate current branch before removing any stale reference.
4. Clean only proven stale state, fetch and prune safely, then rerun the inventory until every remaining item is intentional.

## Why

Inventory separates recoverable work from clutter. Repeating proves organization, not just smaller size.

## Keywords

repository, cleanup, branches, PRs, worktrees, git

## Related Loops

- [stale-safe-batch-release-loop](../operations/stale-safe-batch-release-loop.md)
- [nightly-changelog-sweep](nightly-changelog-sweep.md)
