# Alpha Loop

**Category:** Engineering | **Author:** bradtaylorsf
**Published:** 2026-06-21 | **Source:** https://github.com/bradtaylorsf/alpha-loop

## Use When

You need an agent-agnostic automated development loop from plan to ship.

## Prompt

> Plan (GitHub Issues) -> Build (AI Agent) -> Test -> Review -> Verify -> Learn -> Ship (PR)

## Commands

```
alpha-loop run --epic <issue>
alpha-loop plan    # full project scope
alpha-loop roadmap # schedule milestones
```

## Verification

- **Title:** Code is implemented, tested, verified, reviewed, and shipped as a PR.
- **Detail:** Each phase has explicit entry and exit criteria.

## Steps

1. **Implement** - Agent writes code guided by project vision, context, comments, learnings.
2. **Test + Retry** - Run test command; if fails, agent fixes and retries.
3. **Verify + Retry** - Start dev server, use playwright-cli to test like real user.
4. **Review** - Review agent reads diff, checks gaps, security, missing wiring.
5. **Create PR** - Open PR with test results, review summary, verification status.

## Why

End-to-end automation from issue to PR reduces manual coordination. Retry loops handle flaky tests.

## Keywords

alpha-loop, plan, build, test, review, ship, PR

## Related Loops

- [ticket-to-pr-ready-loop](ticket-to-pr-ready-loop.md)
- [clodex-adversarial-review-loop](clodex-adversarial-review-loop.md)
