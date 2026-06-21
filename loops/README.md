# Loop Library

Practical repeatable AI-agent workflows for engineering, evaluation, operations, content, and design.

**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) (599 stars, MIT License)
**Catalog:** [signals.forwardfuture.ai/loop-library](https://signals.forwardfuture.ai/loop-library/)
**Last synced:** June 2026 | **Published loops:** 75

## What is a Loop?

Most prompts ask an agent to do something once. A loop gives the agent a way to learn from the result and take the next useful step.

**One-shot prompt:**
> Make this website faster.

**Loop:**
> Find the slowest page, make one focused improvement, and measure it again. Keep the change only if it helps. Repeat until every page meets the target or another pass stops producing a meaningful improvement.

Think of a loop as a playbook with feedback built in. A good loop answers four questions:
1. What is the agent trying to accomplish?
2. How will it know whether the latest attempt worked?
3. What should it do with what it learned?
4. When should it finish or ask for help?

## Categories

### Engineering (41 loops)
| Loop | Author | Description |
|------|--------|-------------|
| [overnight-docs-sweep](engineering/overnight-docs-sweep.md) | Matthew Berman | Compare documentation with codebase, fix drift, open PR |
| [architecture-satisfaction-loop](engineering/architecture-satisfaction-loop.md) | Peter Steinberger | Bounded refactoring with live-test, autoreview, commit checkpoints |
| [sub-50ms-page-load-loop](engineering/sub-50ms-page-load-loop.md) | Matthew Berman | Performance optimization until every page meets threshold |
| [production-error-sweep](engineering/production-error-sweep.md) | Matthew Berman | Trace production errors to root cause, fix, verify, PR |
| [100-percent-test-coverage-loop](engineering/100-percent-test-coverage-loop.md) | Matthew Berman | Add tests until full suite passes at 100% coverage |
| [exhaustive-logging-coverage-loop](engineering/exhaustive-logging-coverage-loop.md) | Matthew Berman | Audit paths, add structured logs, verify with tests |
| [nightly-changelog-sweep](engineering/nightly-changelog-sweep.md) | Matthew Berman | Review daily changes, update user-facing release history |
| [test-suite-speed-loop](engineering/test-suite-speed-loop.md) | Matthew Berman | Reduce test runtime without weakening coverage |
| [repository-cleanup-loop](engineering/repository-cleanup-loop.md) | Matthew Berman | Audit branches, PRs, worktrees; recover work, remove stale |
| [ticket-to-pr-ready-loop](engineering/ticket-to-pr-ready-loop.md) | Hiten Shah | Turn ticket/bug into proven root cause, minimal patch, review-ready |
| [clodex-adversarial-review-loop](engineering/clodex-adversarial-review-loop.md) | Lukas Kucinski | Automated adversarial review between builder and reviewer agents |
| [loop-harness-verification-loop](engineering/loop-harness-verification-loop.md) | Istasha | Two-agent verification gate for scheduled repository work |
| [fresh-clone-loop](engineering/fresh-clone-loop.md) | 0xUmbra | Test documentation by following README from clean environment |
| [autonomy-loop](engineering/autonomy-loop.md) | @inferencegod | Builder-reviewer cycle with proof-of-test gates |
| [codex-completion-contract-loop](engineering/codex-completion-contract-loop.md) | 3goblack | Long-running Codex work with requirement-to-evidence tracking |
| [five-minute-repository-maintainer-loop](engineering/five-minute-repository-maintainer-loop.md) | Peter Steinberger | Continuous triage and bounded autonomous maintenance |
| [recent-feedback-sweep](engineering/recent-feedback-sweep.md) | Matthew Berman | Deduplicate and fix user-reported issues across codebase |
| [propagation-compliance-loop](engineering/propagation-compliance-loop.md) | @iamTristan | Ensure configuration changes propagate to all copies |
| [goal-forge-loop](engineering/goal-forge-loop.md) | michael Guo | Turn rough idea into SPEC.md and GOAL.md before Codex starts |
| [cold-load-trimmer-loop](engineering/cold-load-trimmer-loop.md) | Christian Katzmann | Reduce first-screen data downloads without pixel changes |
| [housekeeper-loop](engineering/housekeeper-loop.md) | Eric Lott | Prove one low-risk cleanup at a time with verified evidence |
| [prepare-new-project-loop](engineering/prepare-new-project-loop.md) | Brad Shannon | Ensure project docs pass two-reviewer convergence test |
| [test-stabilizer-loop](engineering/test-stabilizer-loop.md) | hungtv27 | Fix flaky tests at root cause, never with blind retries |
| [groundtruth-audit-loop](engineering/groundtruth-audit-loop.md) | Mohamed | Comprehensive audit from actual code, not framework assumptions |
| [daily-triage](engineering/daily-triage.md) | Cobus Greyling | 1d-2h maintenance loop for triaging issues, PRs, priorities |
| [pr-babysitter](engineering/pr-babysitter.md) | Cobus Greyling | 5-15 minute loop for monitoring and maintaining PRs |
| [codebase-sweeper](engineering/codebase-sweeper.md) | Cobus Greyling | Cautious loop for sweeping codebase improvements |
| [validate-patterns](engineering/validate-patterns.md) | Cobus Greyling | Self-maintaining loop that validates patterns on push/PR |
| [loop-audit](engineering/loop-audit.md) | Cobus Greyling | CLI tool for scoring loop readiness with activity detection |
| [loop-init](engineering/loop-init.md) | Cobus Greyling | Scaffold starters with budget and run-log structure |
| [loop-cost](engineering/loop-cost.md) | Cobus Greyling | Token spend estimator for loop workflows |
| [issue-burn-down-line](engineering/issue-burn-down-line.md) | Rohan Balkondekar | Structured pipeline: intake -> worker -> proof -> QA -> memory |
| [modernization-line](engineering/modernization-line.md) | Rohan Balkondekar | Incremental code modernization with runtime gates |
| [optimization-line](engineering/optimization-line.md) | Rohan Balkondekar | Performance optimization experiments with benchmark scoring |
| [review-gate-line](engineering/review-gate-line.md) | Rohan Balkondekar | Implementation -> independent review -> fixes -> validation |
| [supervisor-line](engineering/supervisor-line.md) | Rohan Balkondekar | Monitor agent runs, detect staleness, durable logs |
| [alpha-loop](engineering/alpha-loop.md) | bradtaylorsf | Agent-agnostic: Plan -> Build -> Test -> Review -> Ship |
| [plan-execute-land-learn](engineering/plan-execute-land-learn.md) | iKon85 | Complete shipping loop with 24 skills across 4 phases |
| [autoloop](engineering/autoloop.md) | GitHub Next | Scheduled automation: research, development, maintenance loops |
| [beacon-loop](engineering/beacon-loop.md) | Anshuli Yadav | Loop-planning agent that ranks work into LOOP_RADAR.md |
| [kitchenloop](engineering/kitchenloop.md) | 0xAgentKitchen | Self-evolving codebase: product as synthetic power user |

### Evaluation (14 loops)
| Loop | Author | Description |
|------|--------|-------------|
| [quality-streak-loop](evaluation/quality-streak-loop.md) | Matthew Berman | Test realistic scenarios, document failures, restart streak |
| [full-product-evaluation-loop](evaluation/full-product-evaluation-loop.md) | Matthew Berman | Evaluate across full feature set, fix weak outcomes |
| [self-improving-champion-loop](evaluation/self-improving-champion-loop.md) | Jose C. Munoz | Iteratively improve prompt/policy against holdout cases |
| [devils-advocate-design-loop](evaluation/devils-advocate-design-loop.md) | Anonymous | Critic argues against design before commit, persistent log |
| [revolve-self-improvement-loop](evaluation/revolve-self-improvement-loop.md) | Agent Zero | Versioned experiments with checkpoints and rollback |
| [multi-llm-convergence-loop](evaluation/multi-llm-convergence-loop.md) | Donn Felker | Two different model families approve same version |
| [promise-to-proof-loop](evaluation/promise-to-proof-loop.md) | Felix Haeberle | Verify customer-facing promises match product behavior |
| [easy-onboarding-loop](evaluation/easy-onboarding-loop.md) | Eric Lott | First-time user completes onboarding in clean session |
| [axelrod-subagent-arena-loop](evaluation/axelrod-subagent-arena-loop.md) | Kan Yuenyong | Game-theory tournament evaluating reasoning AI agents |
| [artifact-to-skill-loop](evaluation/artifact-to-skill-loop.md) | Hiten Shah | Extract reusable methods from successful artifacts |
| [strip-miner-loop](evaluation/strip-miner-loop.md) | Alex Burkhart | Mine authorized coding-agent history for reusable workflows |
| [ralph-bash-loop](evaluation/ralph-bash-loop.md) | Reddit (r/ClaudeAI) | Serial PRD task execution with TDD and learning journal |
| [core-agentic-workflow](evaluation/core-agentic-workflow.md) | Code on Grass | Task -> Plan Review -> Approve -> PR with human judgment |
| [chatgpt5-claude-code-ideation](evaluation/chatgpt5-claude-code-ideation.md) | Reddit (r/ClaudeAI) | 5-agent ideation with perspectives, collaboration, feedback |

### Operations (9 loops)
| Loop | Author | Description |
|------|--------|-------------|
| [stale-safe-batch-release-loop](operations/stale-safe-batch-release-loop.md) | Matthew Berman | Exclude stale work, combine valid changes, ship |
| [production-data-cleanup-loop](operations/production-data-cleanup-loop.md) | Matthew Berman | Remove disallowed records, improve classifier, verify |
| [post-release-baseline-loop](operations/post-release-baseline-loop.md) | Matthew Berman | Run benchmarks after release, record baseline |
| [customer-ai-deployment-loop](operations/customer-ai-deployment-loop.md) | AgentLed.ai Agent | Validate, approve, rollout, monitor AI workflow |
| [living-story-loop](operations/living-story-loop.md) | Buddy Hadry | Recurring narrative preserving project threads and wins |
| [recovery-proof-loop](operations/recovery-proof-loop.md) | Eric Lott | Prove backup recovery works from real recovery points |
| [developer-os-memory](operations/developer-os-memory.md) | Reddit (r/ClaudeCode) | Persistent AI assistant with cross-session state |
| [agent-teams](operations/agent-teams.md) | Anthropic | Coordinate multiple Claude Code instances as a team |
| [dynamic-workflows](operations/dynamic-workflows.md) | Anthropic | Claude writes its own harness custom-built for the task |

### Content (3 loops)
| Loop | Author | Description |
|------|--------|-------------|
| [seo-geo-visibility-loop](content/seo-geo-visibility-loop.md) | Matthew Berman | Fix crawl, indexation, answer-readiness gaps |
| [product-update-podcast-loop](content/product-update-podcast-loop.md) | Pierson Marks | Turn product changes into short podcast episode |
| [content-refresh-loop](content/content-refresh-loop.md) | Matthew Berman | Update stale content with current information |

### Design (6 loops)
| Loop | Author | Description |
|------|--------|-------------|
| [boeing-747-benchmark](design/boeing-747-benchmark.md) | @victormustar | Nine-angle visual benchmark for 3D model quality |
| [war-loops-frontend-designer](design/war-loops-frontend-designer.md) | Swayam | Frontend reconstruction with fidelity verification |
| [infinite-clickbait-loop](design/infinite-clickbait-loop.md) | @Alex_FF | Iterative YouTube thumbnail scoring and improvement |
| [ui-ux-score-loop](design/ui-ux-score-loop.md) | Hayden Cassar | Scored user flow improvement with clean sessions |
| [pixel-safe-css-trim-loop](design/pixel-safe-css-trim-loop.md) | Christian Katzmann | Reduce CSS without changing pixel-identical screens |
| [accessibility-repair-loop](design/accessibility-repair-loop.md) | Eric Lott | Systematic WCAG barrier repair with verified fixes |

## How to Use

### Find a Loop
```
/loop-library Find a loop for improving test reliability.
```

### Adapt a Loop
```
/loop-library Adapt the docs sweep to this repository and our existing checks.
```

### Audit a Loop
```
/loop-library Audit this loop and repair only material problems: [paste loop]
```

### Design a New Loop
```
/loop-library Help me design a loop that turns customer feedback into verified fixes.
```

## Loop Structure

Every loop includes:
- **Use when** - The problem the loop solves
- **Prompt** - Copy-ready instruction for your agent
- **Verification** - Evidence that proves success
- **Steps** - The feedback cycle
- **Why** - Why this loop is useful
- **Keywords** - Searchable terms
- **Related loops** - Nearby workflows

## Sources

| Source | Stars | License | Loops |
|--------|-------|---------|-------|
| [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) | 599 | MIT | 49 |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | 474 | MIT | 7 |
| [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns) | N/A | N/A | 5 |
| [bradtaylorsf/alpha-loop](https://github.com/bradtaylorsf/alpha-loop) | N/A | N/A | 1 |
| [iKon85/agent-workflow-kit](https://github.com/iKon85/agent-workflow-kit) | N/A | N/A | 1 |
| [githubnext/autoloop](https://github.com/githubnext/autoloop) | N/A | N/A | 1 |
| [anshulixyz/multi-agent-loop-kit](https://github.com/anshulixyz/multi-agent-loop-kit) | N/A | N/A | 1 |
| [0xagentkitchen/kitchenloop](https://github.com/0xagentkitchen/kitchenloop) | N/A | N/A | 1 |
| Community (Reddit/Blogs) | N/A | N/A | 5 |
| Claude Code Official | N/A | N/A | 4 |
| **Total** | | | **75** |

## License

MIT License - Forward Future
