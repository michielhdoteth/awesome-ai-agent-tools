# The Pixel-Safe CSS Trim Loop

**Category:** Design | **Author:** Christian Katzmann
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/pixel-safe-css-trim-loop/

## Use When

You need to reduce CSS file size without changing any tested screens.

## Prompt

> Reduce the CSS styling code [site] sends to users without changing tested screens. First capture representative pages, sizes, themes, and interactions, and record the built CSS size. Treat coverage reports only as suggestions. Remove one declaration or rule, rebuild, and rerun screenshots and project checks. Keep it only if every screenshot is pixel-identical and built CSS is smaller; otherwise revert.

## Verification

- **Title:** The delivered stylesheet is smaller while every tested screen remains pixel-identical.
- **Detail:** Exact image comparison catches visual changes.

## Steps

1. Before deleting styling code, list representative pages, screen sizes, themes, interactions; capture screenshots and record CSS size.
2. Use CSS coverage report to suggest declarations that may be unused.
3. Rebuild, run project checks, recreate every screenshot; keep deletion only when all images are pixel-identical.
4. Repeat until no well-supported candidate remains.

## Why

Screenshots taken before cleanup preserve current appearance as standard. Exact image comparison catches visual changes.

## Keywords

CSS, trim, pixel-safe, stylesheet, screenshots, optimization

## Related Loops

- [cold-load-trimmer-loop](../engineering/cold-load-trimmer-loop.md)
- [ui-ux-score-loop](ui-ux-score-loop.md)
