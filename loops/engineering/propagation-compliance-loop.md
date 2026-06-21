# The Propagation Compliance Loop

**Category:** Engineering | **Author:** @iamTristan
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/propagation-compliance-loop/

## Use When

A version, count, rule, name, or configuration has changed and stale copies remain.

## Prompt

> After changing a version, count, rule, name, or configuration, list where the new value belongs and update it. Search the project for the old value and related forms. Review each match: fix real stale values, but keep intentional history, examples, migrations, or compatibility rules. Repeat until zero stale values remain. If one returns for two rounds, stop and identify what may be regenerating it. Return changes, intentional matches, and search output.

## Verification

- **Title:** No unintended copy of the old value remains.
- **Detail:** Only references that are intentionally historical or required remain.

## Steps

1. List the files, documentation, settings, generated outputs, or operational notes that are expected to copy the changed value.
2. Update the known copies, then search the whole project for the old value and related forms.
3. Decide whether each match is truly stale or intentionally preserved.
4. Repeat the same searches until no stale match remains.

## Why

Repeat search catches copies missed by first update. Reviewing prevents corrupting historical notes.

## Keywords

propagation, consistency, configuration, versioning, search

## Related Loops

- [overnight-docs-sweep](overnight-docs-sweep.md)
- [recent-feedback-sweep](recent-feedback-sweep.md)
