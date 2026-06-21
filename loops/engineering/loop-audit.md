# Loop Audit CLI

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/tree/main/tools/loop-audit

## Use When

You need to score loop readiness and detect activity patterns across a loop library.

## Prompt

> Run the loop audit tool against the repository to score loop readiness. Check for required fields, prompt quality, verification completeness, and activity detection. Generate a readiness report with improvement suggestions.

## Verification

- **Title:** A readiness score is generated for each loop with specific improvement suggestions.
- **Detail:** Activity detection identifies loops that are stale or underutilized.

## Steps

1. Run `npx @cobusgreyling/loop-audit . --suggest` against the repository.
2. Review the readiness scores for each loop.
3. Identify loops with low scores or missing required fields.
4. Apply suggested improvements and re-audit.

## Why

Quantified readiness scores make loop quality measurable and comparable.

## Keywords

audit, readiness, scoring, quality, CLI

## Related Loops

- [validate-patterns](validate-patterns.md)
- [loop-init](loop-init.md)
