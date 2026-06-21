# Validate Patterns Loop

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/blob/main/.github/workflows/validate-patterns.yml

## Use When

Loop patterns need automated validation on every push or PR.

## Prompt

> Validate all loop patterns in the repository against defined standards. Check format, required fields, prompt completeness, and verification criteria. Report any patterns that fail validation and suggest fixes.

## Verification

- **Title:** All patterns pass validation or failures are documented with fix suggestions.
- **Detail:** Validation runs automatically on every push or PR.

## Steps

1. Collect all pattern files in the repository.
2. Validate each pattern against the defined schema and standards.
3. Report failures with specific fix suggestions.
4. Ensure all patterns pass before allowing merge.

## Why

Automated validation prevents broken patterns from entering the library.

## Keywords

validation, CI, patterns, standards, automation

## Related Loops

- [loop-audit](loop-audit.md)
- [daily-triage](daily-triage.md)
