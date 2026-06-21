# The UI/UX Score Loop

**Category:** Design | **Author:** Hayden Cassar (@hcassar93)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/ui-ux-score-loop/

## Use When

You need to iteratively improve a user flow through scored evaluations.

## Prompt

> Improve [user flow, such as signup] at [URL] until [completion criterion]. In a real browser, start each pass from fresh state—no saved login, cookies, or site data. Capture meaningful screens at the agreed sizes and modes, score them with one checklist, and improve the weakest safe area. Rerun the whole flow and keep only regression-free changes.

## Verification

- **Title:** The complete user task scores better without making another important screen worse.
- **Detail:** Same scoring rubric makes results comparable across iterations.

## Steps

1. Choose the user task, starting URL, success target, browser, clean-session rule, screen sizes, modes.
2. Complete the task once without editing; capture screens, score with rubric.
3. Improve weakest safe area, start new clean browser session, repeat entire task.
4. Keep only changes that improve target without hurting another screen.

## Why

Clean browser session exposes problems saved logins can hide. Same scoring rubric makes results comparable.

## Keywords

UI, UX, scoring, user-flow, regression, clean-session

## Related Loops

- [war-loops-frontend-designer](war-loops-frontend-designer.md)
- [full-product-evaluation-loop](../evaluation/full-product-evaluation-loop.md)
