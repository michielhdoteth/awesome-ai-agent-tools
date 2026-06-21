# The Prepare-a-New-Project Loop

**Category:** Engineering | **Author:** Brad Shannon (@bradshannon)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/prepare-new-project-loop/

## Use When

A project's documents have gaps or contradictions that could cause two engineers to build different things.

## Prompt

> Prepare [project] for implementation. Ensure its documents cover requirements, technical design, tasks with acceptance criteria, and test strategy. Each round, fix the largest gap or contradiction that could make two competent engineers build different systems. Keep details traceable, record assumptions, and ask before product forks. Recheck consistency, then have two independent reviewers describe the components, data model, dependencies, and definition of done. Stop when they materially agree and every artifact is testable, or a decision needs the user.

## Verification

- **Title:** Two independent reviewers derive substantially the same build from the project documents.
- **Detail:** Components, data model, dependencies, and definition of done all align.

## Steps

1. Inventory the current project documents and identify missing requirements, technical design, task breakdown.
2. Find the single largest gap, contradiction, or vague requirement.
3. Record assumptions, ask about product forks, recheck consistency.
4. Have two independent reviewers describe the intended components; repeat until descriptions materially agree.

## Why

Concrete convergence test exposes ambiguity a single author may read past.

## Keywords

planning, specification, consistency, review, project-setup

## Related Loops

- [goal-forge-loop](goal-forge-loop.md)
- [multi-llm-convergence-loop](../evaluation/multi-llm-convergence-loop.md)
