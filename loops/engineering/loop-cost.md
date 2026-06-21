# Loop Cost Estimator

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/tree/main/tools/loop-cost

## Use When

You need to estimate token spend for loop workflows before execution.

## Prompt

> Estimate the token cost of running a loop workflow. Analyze the prompt complexity, expected iterations, and verification overhead. Return a cost breakdown and budget recommendation.

## Verification

- **Title:** A cost estimate is generated with breakdown by loop phase.
- **Detail:** Budget recommendations account for retry and verification overhead.

## Steps

1. Run `npx @cobusgreyling/loop-cost` against the loop definition.
2. Review the token cost breakdown by phase.
3. Adjust the loop to fit within budget constraints if needed.
4. Record the estimate for future reference.

## Why

Cost awareness prevents budget overruns during automated loop execution.

## Keywords

cost, tokens, budget, estimation, planning

## Related Loops

- [loop-init](loop-init.md)
- [loop-audit](loop-audit.md)
