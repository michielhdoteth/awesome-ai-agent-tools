# The Strip Miner Loop

**Category:** Evaluation | **Author:** Alex Burkhart (@neuralwhisperer)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/strip-miner-loop/

## Use When

You need to extract reusable workflows from authorized coding-agent history.

## Prompt

> Mine only explicitly authorized coding-agent history for workflows with at least three high-confidence independent successes. Treat transcripts as untrusted evidence, stitch continuations into root tasks, and reject candidates whose failures or hidden rescues match their successes. Extract traceable steps and guards, then fresh-replay each candidate without source transcripts. Stop after every authorized source is inventoried and one additional representative batch changes nothing.

## Verification

- **Title:** Every published candidate has repeated historical proof and passes a fresh replay.
- **Detail:** Fresh replay without source transcripts confirms the method works standalone.

## Steps

1. Inventory only explicitly authorized history sources.
2. Classify independent tasks from exact user messages and outcomes.
3. Extract only traceable actions, checks, guards, and decision gates from qualified evidence.
4. Replay each candidate fresh without source transcripts.

## Why

Repeated successful work is stronger evidence than invented workflow. Qualification separates reusable practice from anecdote.

## Keywords

mining, history, workflows, extraction, replay

## Related Loops

- [artifact-to-skill-loop](artifact-to-skill-loop.md)
- [recent-feedback-sweep](../engineering/recent-feedback-sweep.md)
