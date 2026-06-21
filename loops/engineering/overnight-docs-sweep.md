# The Docs Sweep

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/overnight-docs-sweep/

## Use When

Documentation has drifted from the current implementation and needs a full reconciliation pass.

## Prompt

> Whenever a documentation pass is needed, review the codebase in full and make sure all documentation reflects the current implementation. Update stale documentation, verify the changes, then open a pull request.

## Verification

- **Title:** Documentation matches the current implementation. Finish with a reviewable pull request.
- **Detail:** Every command, link, and example in documentation is verified against the current repository state.

## Steps

1. Review implementation changes since the last documentation pass.
2. Compare the repository's documentation with the code, configuration, commands, and behavior that now ship.
3. Update only stale material, then verify commands, links, and examples against the current repository.
4. Run the relevant checks and open a pull request that explains the documentation drift and the fixes.

## Why

Ties documentation to implementation instead of memory. PR creates visible diff and review point.

## Keywords

documentation, drift, PR, audit, maintenance

## Related Loops

- [production-error-sweep](production-error-sweep.md)
- [architecture-satisfaction-loop](architecture-satisfaction-loop.md)
