# The Devil's-Advocate Loop

**Category:** Evaluation | **Author:** Anonymous contributor
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/devils-advocate-design-loop/

## Use When

You need a critic to argue against a design before committing to it.

## Prompt

> Before committing to an architecture, interface, or rollout plan, have a critic argue that it is wrong. Record each objection, impact, and status in a repository-local log at .agent-reviews/redteam.md. The builder must fix and verify each high-impact weakness or document why it is accepted; the critic may reopen unsupported answers. Stop when no high-impact objection remains or the same issues repeat for two rounds without new evidence. Finish with the decision, resolved and accepted objections, evidence, and any stalemate.

## Verification

- **Title:** No high-impact objection remains open.
- **Detail:** Every logged objection is verified as resolved or explicitly accepted with evidence.

## Steps

1. Write the design goals and acceptance criteria, then initialize .agent-reviews/redteam.md.
2. Have the critic present the strongest evidence-backed case against the current design.
3. Have the builder repair the weakness or document an explicit acceptance rationale.
4. Let the critic reopen weak answers and repeat until objections are closed with evidence.

## Why

Separating critic and builder roles makes disagreement explicit. Persistent log prevents circular debate.

## Keywords

critic, redteam, design-review, objections, evidence

## Related Loops

- [architecture-satisfaction-loop](../engineering/architecture-satisfaction-loop.md)
- [clodex-adversarial-review-loop](../engineering/clodex-adversarial-review-loop.md)
