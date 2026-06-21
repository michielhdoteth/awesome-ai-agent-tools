# The Axelrod Subagent Arena Loop

**Category:** Evaluation | **Author:** Kan Yuenyong (@sikkha)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/axelrod-subagent-arena-loop/

## Use When

You need to evaluate reasoning AI agents through game-theory simulations.

## Prompt

> Run a fixed Axelrod tournament with two reasoning AI agents. Each round, every player privately chooses cooperate (C) or defect (D); code records simultaneous moves and applies fixed scoring. Include always-defect and always-cooperate comparison players. Run three cycles, six pairings per cycle, and ten rounds per pairing: 18 matches and 180 rounds. Hide opponent type and private reasoning. Validate every move and total.

## Verification

- **Title:** All 18 matches and 180 rounds can be reproduced from the recorded moves and fixed scoring rules.
- **Detail:** Move validation ensures no illegal choices.

## Steps

1. Set up fixed scoring, move validation, the match schedule, stored history.
2. Before each cycle, have each reasoning agent choose a bounded strategy.
3. Run all six possible pairings for ten rounds, collecting choices simultaneously.
4. Recalculate all matches from the saved record, then report rankings and reasoning.

## Why

Always-cooperate and always-defect players reveal whether reasoning agents exploit, defend, or rebuild cooperation.

## Keywords

Axelrod, tournament, game-theory, cooperation, reasoning

## Related Loops

- [boeing-747-benchmark](../design/boeing-747-benchmark.md)
- [full-product-evaluation-loop](full-product-evaluation-loop.md)
