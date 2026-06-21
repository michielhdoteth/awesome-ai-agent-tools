# The Self-Improving Champion Loop

**Category:** Evaluation | **Author:** Jose C. Munoz
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/self-improving-champion-loop/

## Use When

You need to iteratively improve a prompt, policy, or configuration against holdout cases.

## Prompt

> Improve a prompt, policy, or configuration. A support assistant's system prompt is one example. Save the champion, its score, a working set, untouched holdout cases, must-pass checks, and [budget]. Each round, change one thing based on a recorded failure. Promote the challenger only if it beats the champion on holdouts by [margin] without weakening a must-pass check; otherwise keep the champion. Stop at the target, budget limit, or no progress. Return the winner, scores, experiment log, and remaining failures.

## Verification

- **Title:** The best holdout-tested champion is returned.
- **Detail:** Every challenger is logged.

## Steps

1. Save the current champion, working set, untouched holdout cases, must-pass checks, improvement margin, budget.
2. Use a recorded failure to propose one targeted challenger.
3. Freeze promising challengers and evaluate on holdout cases.
4. Promote only a meaningful, regression-free holdout win.

## Why

Separating working set from holdout limits overfitting. Fixed budget bounds the search.

## Keywords

champion, holdout, A/B, prompt-improvement, regression

## Related Loops

- [full-product-evaluation-loop](full-product-evaluation-loop.md)
- [quality-streak-loop](quality-streak-loop.md)
