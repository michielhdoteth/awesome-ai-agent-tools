# The Multi-LLM Convergence Loop

**Category:** Evaluation | **Author:** Donn Felker (@donnfelker)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/multi-llm-convergence-loop/

## Use When

You need two different AI model families to independently approve the same version.

## Prompt

> Review [plan, specification, document, or code change] against [quality bar] for at most [pass limit] rounds. Have one of two genuinely different model families—AI systems from separate providers—review it. Verify each finding and apply only necessary fixes, then give the revised version to the other reviewer. Succeed only when both approve the same unchanged version. Stop at the limit, repeating disagreement, unavailable review, or required approval. Return the final work, round log, verdict, and disagreements.

## Verification

- **Title:** Two different AI model families approve the exact same version.
- **Detail:** Both reviewers independently agree on the unchanged version.

## Steps

1. Choose the work being reviewed, define what counts as acceptable, set maximum rounds.
2. Give the current version to the first AI model family, check findings, apply only necessary fixes.
3. Give the resulting version to the other model family.
4. Finish only when both independently approve one unchanged version.

## Why

Different model families notice different problems. Requiring both prevents counting older draft approval.

## Keywords

multi-LLM, convergence, model-families, review, approval

## Related Loops

- [clodex-adversarial-review-loop](../engineering/clodex-adversarial-review-loop.md)
- [devils-advocate-design-loop](devils-advocate-design-loop.md)
