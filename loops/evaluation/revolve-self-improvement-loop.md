# The Revolve Versioned-Experiment Loop

**Category:** Evaluation | **Author:** Agent Zero
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/revolve-self-improvement-loop/

## Use When

You need versioned experiments to improve a prompt, code path, or testable subject.

## Prompt

> Use Revolve to improve a support prompt, code path, or testable subject. In revolve/, define the goal and [budget], freeze the tests and scoring, checkpoint the current version, and record a baseline. Each round, test one hypothesis; keep only a clear, regression-free win. If the evaluation changes, open a new revision and rerun the baseline. Ask before changing live files. Stop on success, no progress, a blocker, or exhausted budget. Return the best checkpoint, comparisons, rollback, and next action.

## Verification

- **Title:** The best Revolve checkpoint wins within one evaluation revision.
- **Detail:** Incumbent and candidates have comparable recorded runs.

## Steps

1. Create or resume revolve/, define the objective and permissions, freeze an evaluation revision.
2. Choose one evidence-backed hypothesis, create a candidate checkpoint, and test it.
3. Promote internally only on a meaningful guard-safe win.
4. Stop on a named condition, require explicit approval before changing live files.

## Why

Revision boundaries prevent scores from different tests from being compared. Checkpoints keep research resumable.

## Keywords

revolve, versioned, experiments, checkpoints, rollback

## Related Loops

- [self-improving-champion-loop](self-improving-champion-loop.md)
- [full-product-evaluation-loop](full-product-evaluation-loop.md)
