# The Kitchen Loop

**Category:** Engineering | **Author:** 0xAgentKitchen
**Published:** 2026-06-21 | **Source:** https://github.com/0xagentkitchen/kitchenloop

## Use When

You need an autonomous self-evolving codebase framework where the LLM agent uses the product as a synthetic power user.

## Six-Phase Loop

| Phase | What happens |
|-------|--------------|
| **Backlog** | Prioritize coverage gaps in spec surface |
| **Ideation** | Exercise product as real user would. Document what breaks. |
| **Triage** | Convert findings into prioritized tickets with root causes |
| **Execution** | Branch, implement, write tests, open PR |
| **Polishing** | Multi-model review (Codex, Gemini, CodeRabbit), CI, merge |
| **Regression** | Run regression oracle. Measure drift. Update loop state. |

## Key Features

- **Unbeatable Tests** - 4-layer pattern: Compile -> Execute -> Parse -> State Deltas
- **UAT Gate** - Fresh agent (zero context, weakest model, read-only, isolated worktree) verifies feature works from user perspective

## Verification

- **Title:** Each finding is triaged, implemented, tested, reviewed, and regression-checked.
- **Detail:** UAT gate ensures features work from a user perspective with zero context.

## Steps

1. **Backlog:** Identify coverage gaps in the spec surface.
2. **Ideation:** Exercise the product as a real user would and document failures.
3. **Triage:** Convert findings into prioritized tickets with root causes.
4. **Execution:** Branch, implement, write tests, open PR.
5. **Polishing:** Multi-model review, CI checks, merge.
6. **Regression:** Run regression oracle, measure drift, update loop state.

## Why

Using the product as a synthetic user catches issues that code review misses. Multi-model review reduces blind spots.

## Keywords

kitchenloop, self-evolving, UAT, regression, multi-model

## Related Loops

- [full-product-evaluation-loop](../evaluation/full-product-evaluation-loop.md)
- [quality-streak-loop](../evaluation/quality-streak-loop.md)
