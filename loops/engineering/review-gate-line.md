# Review Gate Line

**Category:** Engineering | **Author:** Rohan Balkondekar
**Published:** 2026-06-21 | **Source:** https://github.com/rohanbalkondekar/agent-loop-patterns

## Use When

You need a structured pipeline for implementation with independent review and fixes.

## Prompt

> implementation -> independent review -> findings -> fixes -> final validation.

## Verification

- **Title:** Implementation passes independent review and final validation.
- **Detail:** All findings are addressed or explicitly accepted.

## Steps

1. Implement the change according to requirements.
2. Submit to independent review for findings.
3. Address each finding with targeted fixes.
4. Run final validation to confirm all issues are resolved.

## Why

Independent review catches issues the implementer missed. Structured fixes prevent ad-hoc changes.

## Keywords

review, gate, findings, fixes, validation

## Related Loops

- [clodex-adversarial-review-loop](clodex-adversarial-review-loop.md)
- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
