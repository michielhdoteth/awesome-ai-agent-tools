# Agent Teams (Claude Code)

**Category:** Operations | **Author:** Anthropic
**Published:** 2026-06-21 | **Source:** https://code.claude.com/docs/en/agent-teams

## Use When

You need to coordinate multiple Claude Code instances as a team.

## Components

- **Team lead** - Main session that spawns and coordinates
- **Teammates** - Separate instances working independently
- **Task list** - Shared work items with pending/in-progress/completed states
- **Mailbox** - Inter-agent messaging

## Features

- Tasks have dependencies
- Each teammate loads same project context
- Team lead's conversation history does not carry over

## Verification

- **Title:** Teammates complete assigned tasks and communicate status through the mailbox.
- **Detail:** Task dependencies are respected and the team lead coordinates effectively.

## Steps

1. Initialize the team lead with the project context and task list.
2. Spawn teammates for independent work items.
3. Teammates execute tasks and update the shared task list.
4. Team lead monitors progress through the mailbox and adjusts assignments.

## Why

Parallel execution with coordination prevents duplicated work. Shared context ensures consistency.

## Keywords

teams, coordination, parallel, mailbox, task-list

## Related Loops

- [beacon-loop](../engineering/beacon-loop.md)
- [five-minute-repository-maintainer-loop](../engineering/five-minute-repository-maintainer-loop.md)
