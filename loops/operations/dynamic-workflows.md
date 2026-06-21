# Dynamic Workflows in Claude Code

**Category:** Operations | **Author:** Anthropic
**Published:** 2026-06-21 | **Source:** https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code

## Use When

Claude needs to write its own harness on the fly, custom-built for the task.

## Patterns

- **Loop until done** - Loop spawning agents until stop condition met
- **Tournament** - Pairwise comparisons more reliable than single evaluation
- **Fan out across files** - Parallel subagents for independent work
- **Adversarial review** - Reviewer in fresh subagent catches gaps

## Commands

- `/goal` - Set hard completion requirement
- `/loop` - Run at regular intervals
- `ultracode` - Trigger workflow creation

## Verification

- **Title:** The dynamic workflow matches the task requirements and produces verified results.
- **Detail:** Each pattern has explicit entry/exit criteria.

## Steps

1. Assess the task requirements and choose the appropriate workflow pattern.
2. Set completion requirements with `/goal` or interval with `/loop`.
3. Execute the workflow with appropriate subagent coordination.
4. Verify results and adjust the workflow if needed.

## Why

Custom-built workflows match task requirements better than one-size-fits-all approaches.

## Keywords

dynamic, workflow, tournament, fan-out, adversarial, ultracode

## Related Loops

- [clodex-adversarial-review-loop](../engineering/clodex-adversarial-review-loop.md)
- [multi-llm-convergence-loop](../evaluation/multi-llm-convergence-loop.md)
