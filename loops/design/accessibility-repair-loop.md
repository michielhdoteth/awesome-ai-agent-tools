# The Accessibility Repair Loop

**Category:** Design | **Author:** Eric Lott
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/accessibility-repair-loop/

## Use When

You need to systematically fix accessibility barriers in pages, components, or user tasks.

## Prompt

> Check [scope] against [accessibility standard, such as WCAG 2.2 AA] with automated scans and available keyboard, screen-reader, and other manual tests. Confirm each issue, rank it by harm, and fix the highest-impact blocker. Rerun the same checks, affected task, and regression tests. Keep only verified fixes. Stop when no blocker remains, progress stalls, verification is unavailable, or approval is required. Never silence a check or weaken the target.

## Verification

- **Title:** No confirmed accessibility barrier remains in the agreed pages, components, or user tasks.
- **Detail:** Fixed scope and repeated checks keep work tied to real people and reproducible evidence.

## Steps

1. Choose the pages, components, user tasks; name the accessibility standard; list available scans and checks.
2. Run baseline, reproduce each finding, rank confirmed barriers by harm.
3. Fix the most harmful barrier, repeat same scan, manual check, user task, regression tests.
4. Keep only verified fixes until no confirmed barrier remains.

## Why

Fixed scope and repeated checks keep work tied to real people and reproducible evidence.

## Keywords

accessibility, WCAG, ARIA, keyboard, screen-reader, compliance

## Related Loops

- [ui-ux-score-loop](ui-ux-score-loop.md)
- [full-product-evaluation-loop](../evaluation/full-product-evaluation-loop.md)
