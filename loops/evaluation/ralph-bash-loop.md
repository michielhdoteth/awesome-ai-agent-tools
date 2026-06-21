# Ralph Bash Loop

**Category:** Evaluation | **Author:** Reddit user (r/ClaudeAI)
**Published:** 2026-06-21 | **Source:** https://www.reddit.com/r/ClaudeAI/comments/1r24f5f/

## Use When

You need serial execution of PRD tasks with TDD and learning journal generation.

## Prompt

> Spawns a fresh `claude` CLI session per task.
> Each iteration:
> 1. Reads the PRD
> 2. Finds next unchecked `- [ ]` task
> 3. Implements with TDD
> 4. Marks `[x]`
> 5. Appends learnings to progress file
> 6. Git commits
> 7. Exits
> Next iteration picks up where it left off.

## Verification

- **Title:** Each PRD task is implemented with TDD and the learning journal grows with each iteration.
- **Detail:** Fire-and-forget generates a 914-line learning journal per run.

## Steps

1. Read the PRD and identify the next unchecked task.
2. Spawn a fresh CLI session for the task.
3. Implement with TDD, mark the task complete.
4. Append learnings to the progress file and git commit.
5. Exit; next iteration picks up automatically.

## Why

Fire-and-forget, generates learning journal per run. Cheaper than parallel approaches for routine work.

## Keywords

ralph, bash, PRD, TDD, serial, learning-journal

## Related Loops

- [issue-burn-down-line](../engineering/issue-burn-down-line.md)
- [ticket-to-pr-ready-loop](../engineering/ticket-to-pr-ready-loop.md)
