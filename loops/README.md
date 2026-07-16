# Agent Loop Library

103 reusable agent workflow patterns with built-in feedback mechanisms. Loops let agents learn from results and iterate until the task is complete.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Loops Count](https://img.shields.io/badge/Loops-103-green.svg)](#all-loops)
[![Sources](https://img.shields.io/badge/Sources-15-blue.svg)](#sources)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** June 2026

## What Are Agent Loops?

Agent loops are repeatable AI agent patterns with built-in feedback mechanisms. Unlike one-shot prompts, loops let agents learn from results and iterate.

```
Prompt -> Agent -> Output -> Verification -> Feedback -> Prompt (loop)
```

## Quick Start

1. Copy any loop pattern to your project
2. Use the prompt text as your agent instruction
3. The loop's verification criteria tell you when to stop

```bash
# Clone and explore
git clone https://github.com/michielhdoteth/awesome-ai-agent-tools.git
ls awesome-ai-agent-tools/loops/
```

## Quick Reference

| Category | Count | Top 3 Loops |
|----------|------:|-------------|
| [Engineering](#engineering-53-loops) | 53 | Symphony Linear Loop (Linear board monitoring with proof-of-work), Alpha Loop (end-to-end Plan-Build-Test-Review-Ship), Ralph Autonomous Loop (serial PRD execution with TDD) |
| [Evaluation](#evaluation-14-loops) | 14 | Quality Streak Loop (N consecutive passes required), Full Product Evaluation Loop (every capability against quality bar), Self-Improving Champion Loop (holdout-tested prompt optimization) |
| [Multi-Agent](#multi-agent-12-loops) | 12 | Agent Teams (Anthropic official multi-instance coordination), Multi-Agent Orchestration Loop (spawn-coordinate-execute-verify pattern), Claude Code Dynamic Harness (self-adapting per-task workflows) |
| [Operations](#operations-6-loops) | 6 | Stale-Safe Batch Release Loop (exclude stale work from releases), Living Story Loop (running project narrative), Recovery Proof Loop (test restores from real backups) |
| [Content](#content-3-loops) | 3 | SEO/GEO Visibility Loop (search and AI answer engine optimization), Anti-Slop Writing Loop (detect and remove AI writing patterns), Product Update Podcast Loop (nightly episodes from changelogs) |
| [Design](#design-6-loops) | 6 | Boeing 747 Benchmark (nine-angle 3D visual scoring), War Loops Frontend Designer (reconstruct frontend with fidelity scoring), UI/UX Score Loop (clean-session user flow scoring) |
| [Meta](#meta-9-loops) | 9 | Autoloop (GitHub Next scheduled metric-driven commits), Context Engineering Loop (structured context window management), Tiered Memory Architecture Loop (working/short/long-term memory tiers) |

---

## Engineering (53 loops)

Development workflows: CI, debugging, refactoring, testing, performance, cleanup, and shipping.

---

**The docs sweep** -- Keeps documentation aligned with the current codebase.
> Prompt: Whenever a documentation pass is needed, review the codebase in full and make sure all documentation reflects the current implementation.
> Verification: Documentation matches the current implementation. Finish with a reviewable pull request.
> Tags: `documentation` `pull-request` `maintenance`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The architecture satisfaction loop** -- Iterative refactoring with verification until architecture meets quality bar.
> Prompt: Refactor until you are happy with the architecture. After each significant step, live-test the system, run autoreview, and commit.
> Verification: The architecture is satisfactory and checks pass.
> Tags: `refactoring` `architecture` `verification` `iterative`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The sub-50 ms page-load loop** -- Optimizes page load performance until every page loads under 50ms.
> Prompt: Continue optimizing the code for speed. After each significant change, measure page-load performance across every page under the same repeatable test conditions.
> Verification: Every page loads in under 50 ms with no regressions.
> Tags: `performance` `optimization` `benchmarks` `speed`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The production error sweep** -- Reviews production logs, fixes actionable errors, and opens PRs.
> Prompt: Review our production logs for errors. If you find an actionable issue, trace it to its root cause, fix it, verify the fix, and open a pull request.
> Verification: Actionable production errors are fixed and verified. Finish with a pull request, or stop when no actionable errors are present.
> Tags: `errors` `production` `debugging` `pull-request`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The 100% test coverage loop** -- Adds tests until 100% coverage is achieved.
> Prompt: Add tests until we have 100% test coverage.
> Verification: The full test suite passes at 100% coverage.
> Tags: `testing` `coverage` `quality` `comprehensive`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The logging coverage loop** -- Ensures every important path produces useful, tested logs.
> Prompt: Review the system's logging and add missing coverage until every important path produces useful, tested logs.
> Verification: Every important path emits useful, tested logs without exposing sensitive data.
> Tags: `logging` `observability` `testing` `coverage`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The nightly changelog loop** -- Updates changelog with user-relevant changes from previous day.
> Prompt: Each night, review changes from the previous day and update the changelog with anything users should know.
> Verification: Every user-relevant change from the previous day is accounted for.
> Tags: `changelog` `documentation` `daily` `release-notes`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The test-suite speed loop** -- Optimizes test suite speed without reducing coverage.
> Prompt: Optimize the test suite to run as quickly as possible without reducing coverage or changing behavior.
> Verification: The suite is faster with no coverage or behavior regression.
> Tags: `testing` `performance` `speed` `optimization`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The repository cleanup loop** -- Cleans stale branches, PRs, and worktrees while recovering valuable work.
> Prompt: Inspect local and remote branches, pull requests, commits, and worktrees. Recover valuable work and clean everything stale until the repository is current and organized.
> Verification: Valuable work is recovered and remaining repository state is intentional.
> Tags: `git` `cleanup` `maintenance` `organization`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The ticket-to-PR-ready loop** -- Turns tickets/bugs into review-ready patches with root cause analysis.
> Prompt: Take a ticket, bug report, failing behavior, or customer complaint and turn it into a review-ready patch. Reproduce the failure, prove the root cause, make the smallest credible fix.
> Verification: The failure is fixed, verified, and ready for review with regression checks passing.
> Tags: `tickets` `bug-fix` `pull-request` `root-cause`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Clodex adversarial-review loop** -- Separates builder from reviewer with bounded repair loop.
> Prompt: Run /clodex [task] think hard --max-iter 5 --threshold medium. Claude plans, implements, opens a PR, asks Codex for adversarial review, fixes findings above the accepted severity.
> Verification: The pull request reaches the configured review bar. Codex approves it or only explicitly accepted findings remain.
> Tags: `adversarial` `review` `codex` `quality`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Loop Harness verification loop** -- Two-agent verification for scheduled repository work.
> Prompt: Use Loop Harness for scheduled repository work such as CI triage, issue grooming, dependency updates, or docs sync. Let one Claude session stage a patch and a second verify it.
> Verification: Only independently verified output ships.
> Tags: `verification` `two-agent` `scheduled` `ci`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The fresh-clone loop** -- Tests README documentation by cloning fresh and following only docs.
> Prompt: Clone [repository] into a disposable environment and follow only its README to the documented ready state. When a step fails, record the gap, fix the documentation, and start again.
> Verification: A clean environment reaches the documented ready state using only the README.
> Tags: `documentation` `testing` `fresh-clone` `onboarding`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The autonomy-loop builder-reviewer loop** -- Builder-reviewer separation with revert-or-mutate proof.
> Prompt: Use autonomy-loop for [repository task] after the test, build, and lint gates pass. Run /autonomy-loop:autonomy-init, then start builder and reviewer in separate worktrees.
> Verification: Every accepted wave passes autonomy-loop's proof-of-test gate.
> Tags: `autonomy` `builder-reviewer` `proof` `gates`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Codex completion-contract loop** -- Defines completion contracts with evidence tracking for long-running tasks.
> Prompt: Run $goal-planner-codex [task] for long-running Codex work. Before acting, define every required outcome and its evidence.
> Verification: Every requirement has current, adequate proof. No weak, missing, or contradicted required item.
> Tags: `completion` `contract` `evidence` `long-running`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The five-minute repository maintainer loop** -- Periodic repository maintenance with 5-minute heartbeat.
> Prompt: While repository maintenance is active, wake every five minutes. Triage [repositories] and read each repository thread's latest state.
> Verification: Every repository item reaches a proven handoff or terminal state.
> Tags: `maintenance` `periodic` `heartbeat` `triage`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The recent-feedback sweep** -- Processes reported issues, fixes confirmed instances, adds regression coverage.
> Prompt: Review all available threads from [lookback window] where I reported something wrong with [project] and asked for a fix. Build a deduplicated issue list and verify current state.
> Verification: The issue inventory is closed and every reported issue has current proof of resolution.
> Tags: `feedback` `issues` `regression` `patterns`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The propagation compliance loop** -- Ensures value changes propagate everywhere without leaving stale copies.
> Prompt: After changing a version, count, rule, name, or configuration, list where the new value belongs and update it. Search the project for the old value and related forms.
> Verification: No unintended copy of the old value remains.
> Tags: `propagation` `consistency` `configuration` `compliance`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Goal Forge loop** -- Turns rough coding ideas into planning files before implementation.
> Prompt: Turn [rough coding idea] into two planning files before Codex starts /goal. Interview the user, then write SPEC.md and GOAL.md.
> Verification: The planning files say what to build, how to judge it, and when to stop.
> Tags: `planning` `specification` `goals` `interview`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The cold-load trimmer loop** -- Reduces initial page load data while preserving pixel-perfect appearance.
> Prompt: Reduce the data [web app] downloads before its first screen appears. First record passing tests, screenshots, and compressed transferred bytes.
> Verification: The first screen downloads less data without a tested behavior or pixel changing.
> Tags: `performance` `optimization` `loading` `bytes`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The housekeeper loop** -- Identifies and removes dead code, stale files, and unused dependencies.
> Prompt: Review [repository or code project] for dead code, stale files, unused dependencies, duplication, broken links, and confusing structure.
> Verification: No confirmed low-risk cleanup remains, and existing behavior still passes.
> Tags: `cleanup` `dead-code` `maintenance` `quality`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The prepare-a-new-project loop** -- Ensures project documents are complete and unambiguous before implementation.
> Prompt: Prepare [project] for implementation. Ensure its documents cover requirements, technical design, tasks with acceptance criteria, and test strategy.
> Verification: Two independent reviewers derive substantially the same build from the project documents.
> Tags: `project-setup` `requirements` `documentation` `planning`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The test stabilizer loop** -- Fixes flaky tests by running repeatedly and fixing root causes.
> Prompt: Run [test suite] [N] times under the same conditions and list tests whose result changes. Fix the most frequent flake at its root cause.
> Verification: The full test suite passes for the required consecutive-run streak.
> Tags: `testing` `flaky` `stability` `root-cause`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Groundtruth loop** -- Audits project from actual code and configuration, not framework assumptions.
> Prompt: Audit [project] from its actual code and configuration. For architecture, platform compatibility, security, performance, deployment, and code quality.
> Verification: Every audit area has a current evidence-backed outcome and severity.
> Tags: `audit` `security` `architecture` `evidence`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**Daily Triage Pattern** -- 1d-2h maintenance loop for triaging issues, PRs, and priorities.
> Prompt: Triage issues, PRs, and priorities on a daily cadence.
> Verification: All items triaged and assigned with clear next actions.
> Tags: `triage` `daily` `maintenance` `issues`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**PR Babysitter Pattern** -- 5-15 minute loop for monitoring and maintaining PRs.
> Prompt: Monitor PRs for status changes, review requests, and merge readiness.
> Verification: PRs are monitored and actionable items addressed.
> Tags: `pr` `monitoring` `short-loop` `maintenance`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**Codebase Sweeper Pattern** -- L2 cautious loop for sweeping codebase improvements.
> Prompt: Sweep codebase for improvements with cautious, verified changes.
> Verification: All changes verified and no regressions introduced.
> Tags: `sweeping` `improvements` `cautious` `codebase`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**Issue Burn-Down Line** -- Curated backlog through worker, QA, and checkpoint stations.
> Prompt: Intake: turn vague goals into a queue of small, ordered work items. Worker station: let the agent change code, but only for one bounded item.
> Verification: Issues processed through all stations with verified checkpoints.
> Tags: `issues` `burn-down` `stations` `workflow`
> Source: [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns)

**Modernization Line** -- Migration milestone through bounded code slices with runtime gates.
> Prompt: Process modernization through bounded code slices with runtime gates and ledger handoff.
> Verification: Modernization milestones achieved with verified runtime gates.
> Tags: `modernization` `migration` `bounded` `gates`
> Source: [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns)

**Optimization Line** -- Idea through benchmark, score, and experiment log.
> Prompt: Process optimization ideas through benchmark, scoring, and experiment logging.
> Verification: Optimization experiments logged with clear scoring and decisions.
> Tags: `optimization` `benchmark` `experiment` `scoring`
> Source: [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns)

**Review Gate Line** -- Implementation through independent review to final validation.
> Prompt: Process implementation through independent review, findings, fixes, and final validation.
> Verification: Implementation passes independent review with all findings addressed.
> Tags: `review` `gate` `independent` `validation`
> Source: [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns)

**Supervisor Line** -- Runner through stale detection to restart or stop with durable logs.
> Prompt: Supervise runners with stale detection, restart logic, and durable logging.
> Verification: Runners supervised with proper stale detection and durable logs.
> Tags: `supervisor` `stale-detection` `logging` `restart`
> Source: [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns)

**Alpha Loop** -- Agent-agnostic automated development loop: Plan -> Build -> Test -> Review -> Ship.
> Prompt: Plan (GitHub Issues) -> Build (AI Agent) -> Test -> Review -> Verify -> Learn -> Ship (PR)
> Verification: PR created with test results, review summary, and verification status.
> Tags: `end-to-end` `development` `automated` `ship`
> Source: [bradtaylorsf/alpha-loop](https://github.com/bradtaylorsf/alpha-loop)

**The Workflow Loop** -- Complete shipping loop for coding agents with Plan/Execute/Land/Learn phases.
> Prompt: idea / plan / backlog / raw-issue -> gate -> Execute -> Land -> Learn -> (next idea)
> Verification: Workflow completes all four phases with learnings captured.
> Tags: `workflow` `shipping` `phases` `learning`
> Source: [iKon85/agent-workflow-kit](https://github.com/iKon85/agent-workflow-kit)

**The Kitchen Loop** -- Autonomous self-evolving codebase framework where LLM agent uses product as synthetic power user.
> Prompt: Six-Phase Loop: Backlog -> Ideation -> Triage -> Execution -> Polishing -> Regression
> Verification: UAT Gate passed with fresh agent verifying feature works from user perspective.
> Tags: `self-evolving` `uat` `regression` `autonomous`
> Source: [0xagentkitchen/kitchenloop](https://github.com/0xagentkitchen/kitchenloop)

**Ralph Bash Loop** -- Serial execution loop for PRD task completion with Claude Code.
> Prompt: Spawns a fresh claude CLI session per task. Each iteration: reads PRD, finds next unchecked task, implements with TDD, marks done, commits.
> Verification: All PRD tasks completed with TDD and committed.
> Tags: `serial` `prd` `tdd` `fire-and-forget`
> Source: [snarktank/ralph](https://github.com/snarktank/ralph)

**Ralph Autonomous Loop** -- Serial PRD execution with fresh AI context per iteration, TDD enforcement, fire-and-forget.
> Prompt: Spawn a fresh claude CLI session per PRD task. Each iteration: read PRD, find next unchecked task, implement with TDD, mark done, commit.
> Verification: All PRD tasks completed with TDD tests passing and committed.
> Tags: `autonomous` `prd` `tdd` `serial` `fire-and-forget`
> Source: [snarktank/ralph](https://github.com/snarktank/ralph)

**Symphony Linear Loop** -- Linear board monitoring that spawns autonomous implementation runs with proof-of-work.
> Prompt: Monitor Linear board for new work items. For each item: spawn an isolated agent, provide full context, implement the change, run CI, generate proof-of-work.
> Verification: PR created with passing CI, code review, and complexity analysis proof.
> Tags: `autonomous` `linear` `proof-of-work` `monitoring`
> Source: [openai/symphony](https://github.com/openai/symphony)

**GitHub Agentic Workflow** -- Official GitHub framework: markdown workflows compiled to sandboxed execution with multi-engine support.
> Prompt: Write workflow in markdown with YAML frontmatter. Compile to .lock.yml. Execute in sandboxed environment with safe outputs. Supports Copilot, Claude, Codex, Gemini.
> Verification: Workflow executes in sandbox with all outputs passing safety checks.
> Tags: `github` `official` `sandbox` `multi-engine` `compiled`
> Source: [github/gh-aw](https://github.com/github/gh-aw)

**Gated Pipeline Loop** -- 9 specialist agents with role-bounded tool access and quality gates between phases.
> Prompt: Route task through specialist agents: architect -> planner -> coder -> reviewer -> tester -> security -> deployer. Each agent has bounded tool access.
> Verification: All phases pass quality gates with specialist sign-off.
> Tags: `pipeline` `specialists` `gates` `role-bounded`
> Source: [zevtos/agentpipe](https://github.com/zevtos/agentpipe)

**Multi-Agent Dev Loop** -- Planner/architect/coder/reviewer/tester/deployer agents with rework loops and parallel execution.
> Prompt: Coordinate specialist agents: planner creates tasks, architect designs, coder implements, reviewer reviews, tester validates, deployer ships. Rework loop with up to 10 retries per ticket.
> Verification: All tickets completed with reviewer and tester sign-off.
> Tags: `multi-agent` `parallel` `rework` `worktrees`
> Source: [kayoslab/karl](https://github.com/kayoslab/karl)

**Three-Body Autonomous Pipeline** -- GitHub Actions pipeline: picks issues, implements, fixes CI, merges green PRs, syncs board.
> Prompt: 5-workflow pipeline: Implementer picks issues -> implements. Fixer handles CI failures. Merger merges green PRs. Board Sync updates project board. Week Rollover manages sprint transitions.
> Verification: Issue implemented, CI passing, PR merged, board updated.
> Tags: `github-actions` `autonomous` `pipeline` `issue-tracking`
> Source: [a7t-ai/three-body-agent](https://github.com/a7t-ai/three-body-agent)

**The Plan-Execute-Verify Loop** -- Structured development loop where agent plans, executes, then verifies each step before proceeding.
> Prompt: 1. Plan: Agent reads requirements and creates detailed implementation plan 2. Execute: Agent implements one step at a time 3. Verify: Agent runs tests and checks for regressions
> Verification: All planned steps completed with passing tests and no regressions.
> Tags: `plan` `execute` `verify` `structured` `trending`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeAI/)

**The Forge Master Loop** -- TDD enforcement with deterministic escalation rules. Agent implements, tests, and escalates when uncertain.
> Prompt: 1. Read task 2. Write failing test 3. Implement minimal code 4. Pass test 5. Refactor 6. If uncertain, escalate to human with context
> Verification: All tests pass, code is clean, escalations documented.
> Tags: `tdd` `enforcement` `escalation` `deterministic`
> Source: [forge-master/forge](https://github.com/forge-master/forge)

**HarnessKit Loop** -- OpenAI's methodology for building reliable agent harnesses.
> Prompt: 1. Define harness boundaries 2. Create test fixtures 3. Implement validation gates 4. Run integration tests 5. Deploy with rollback plan
> Verification: Harness passes all validation gates with documented rollback.
> Tags: `harness` `testing` `validation` `openai`
> Source: [openai/harnesskit](https://github.com/openai/harnesskit)

**Agentic Coding Reference** -- 9 specialist agents with role-bounded tool access. Architecture through deployment with quality gates.
> Prompt: Route through: architect -> planner -> coder -> reviewer -> tester -> security -> deployer -> monitor -> feedback
> Verification: All 9 stages complete with specialist sign-off.
> Tags: `specialists` `reference` `end-to-end` `gates`
> Source: [agentic-coding/reference](https://github.com/agentic-coding/reference)

**Millrace Governed Loop** -- Compiled workflow graphs with governance rules.
> Prompt: 1. Define workflow graph 2. Compile to executable 3. Execute with governance 4. Log all decisions 5. Audit trail
> Verification: Workflow completes with full audit trail and compliance checks.
> Tags: `governance` `workflow` `compliance` `audit`
> Source: [millrace/governed-loop](https://github.com/millrace/governed-loop)

**Loop Harness Verification Gate** -- Dual-agent verification with independent review.
> Prompt: 1. Agent A implements change 2. Agent B receives isolated copy 3. Agent B verifies independently 4. If pass, merge 5. If fail, return to Agent A
> Verification: Both agents agree on outcome with documented evidence.
> Tags: `verification` `dual-agent` `independent` `gate`
> Source: [loop-harness/verification-gate](https://github.com/loop-harness/verification-gate)

**Three-Body GitHub Actions Pipeline** -- 5-workflow GitHub Actions pipeline for autonomous development.
> Prompt: Implementer picks issues -> implements -> Fixer handles CI -> Merger merges green PRs -> Board Sync updates -> Week Rollover manages sprints
> Verification: Issue implemented, CI passing, PR merged, board updated.
> Tags: `github-actions` `pipeline` `autonomous` `sprint`
> Source: [a7t-ai/three-body-agent](https://github.com/a7t-ai/three-body-agent)

**Symphony Linear Monitoring Loop** -- Linear board monitoring that spawns autonomous implementation runs.
> Prompt: Monitor Linear board -> For new items: spawn isolated agent -> implement -> run CI -> generate proof -> create PR
> Verification: PR created with passing CI, code review, and complexity analysis.
> Tags: `linear` `monitoring` `autonomous` `proof-of-work`
> Source: [openai/symphony](https://github.com/openai/symphony)

**GitHub Agentic Workflow (Compiled)** -- Official GitHub framework. Markdown workflows compiled to sandboxed execution.
> Prompt: Write markdown workflow -> Compile to .lock.yml -> Execute in sandbox -> Safe outputs only -> Supports Copilot, Claude, Codex, Gemini
> Verification: Workflow executes in sandbox with all outputs passing safety checks.
> Tags: `github` `compiled` `sandbox` `multi-engine`
> Source: [github/gh-aw](https://github.com/github/gh-aw)

**Kitchen Loop UAT Gate** -- Autonomous self-evolving codebase with UAT gate.
> Prompt: Backlog -> Ideation -> Triage -> Execution -> Polishing -> Regression -> UAT Gate (fresh agent verifies)
> Verification: UAT Gate passed with fresh agent verifying feature works.
> Tags: `uat` `self-evolving` `regression` `verification`
> Source: [0xagentkitchen/kitchenloop](https://github.com/0xagentkitchen/kitchenloop)

**Gated Pipeline with Specialists** -- 9 specialist agents with role-bounded tool access and quality gates.
> Prompt: architect -> planner -> coder -> reviewer -> tester -> security -> deployer -> monitor -> feedback. Each with bounded tools.
> Verification: All phases pass quality gates with specialist sign-off.
> Tags: `specialists` `gated` `role-bounded` `pipeline`
> Source: [zevtos/agentpipe](https://github.com/zevtos/agentpipe)

---

## Evaluation (14 loops)

Testing, benchmarking, and quality assessment loops.

---

**The quality streak loop** -- Tests realistic scenarios and requires N consecutive passes.
> Prompt: Test realistic scenarios. When one fails, document it, add regression and benchmark coverage, fix it, and restart the streak. Stop after [N] successful cases in a row.
> Verification: The latest [N] realistic cases pass in a row.
> Tags: `quality` `testing` `streak` `regression`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The full product evaluation loop** -- Evaluates every major capability against defined quality bar.
> Prompt: Create [N] realistic scenarios covering every major capability. Before testing, define clear success criteria and choose a consistent evaluation method.
> Verification: Every one of the [N] scenarios meets the defined quality bar.
> Tags: `evaluation` `quality` `scenarios` `comprehensive`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The self-improving champion loop** -- Iteratively improves prompts/configs with holdout-tested champion selection.
> Prompt: Improve a prompt, policy, or configuration. Save the champion, its score, a working set, untouched holdout cases, must-pass checks, and [budget].
> Verification: The best holdout-tested champion is returned. Every challenger is logged.
> Tags: `improvement` `prompt` `optimization` `holdout`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The devil's-advocate loop** -- Separates critic and builder roles for adversarial design review.
> Prompt: Before committing to an architecture, interface, or rollout plan, have a critic argue that it is wrong. Record each objection, impact, and status in a repository-local log.
> Verification: No high-impact objection remains open.
> Tags: `adversarial` `design` `review` `criticism`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Revolve versioned-experiment loop** -- Versioned experiment loop for improving testable subjects.
> Prompt: Use Revolve to improve a support prompt, code path, or testable subject. Define the goal and [budget], freeze the tests and scoring, checkpoint the current version, and record a baseline.
> Verification: The best Revolve checkpoint wins within one evaluation revision.
> Tags: `experiments` `versioning` `improvement` `benchmarks`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The multi-LLM convergence loop** -- Requires two different model families to approve the same version.
> Prompt: Review [plan, specification, document, or code change] against [quality bar] for at most [pass limit] rounds. Have one of two genuinely different model families review it.
> Verification: Two different AI model families approve the exact same version.
> Tags: `multi-model` `convergence` `review` `quality`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The promise-to-proof loop** -- Verifies customer-facing promises match actual product behavior.
> Prompt: List every customer-facing promise [product] makes in marketing, documentation, demos, and AI answers. Compare each promise with current product behavior and evidence.
> Verification: Every high-risk customer promise is supported, narrowed, or waiting on an explicit decision.
> Tags: `promises` `verification` `marketing` `trust`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The easy onboarding loop** -- Tests onboarding flow from first-time user perspective.
> Prompt: Act like a first-time user of [product]. Start at the real entry point in a clean session with no saved login, site data, remembered route, or hidden setup.
> Verification: A first-time user can complete onboarding in one uninterrupted clean session.
> Tags: `onboarding` `user-experience` `testing` `clean-room`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Axelrod subagent arena loop** -- Fixed Axelrod tournament with two reasoning AI agents.
> Prompt: Run a fixed Axelrod tournament with two reasoning AI agents. Each round, every player privately chooses cooperate (C) or defect (D).
> Verification: All 18 matches and 180 rounds can be reproduced from the recorded moves and fixed scoring rules.
> Tags: `tournament` `game-theory` `cooperation` `agents`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The artifact-to-skill loop** -- Extracts reusable skills from successful artifacts.
> Prompt: Turn [artifact] into a skill, playbook, or procedure. Record evidence that the artifact succeeded and define success criteria.
> Verification: The extracted method succeeds on a fresh second case without the original artifact.
> Tags: `skill-creation` `extraction` `reusability` `knowledge`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Strip Miner loop** -- Mines coding-agent history for proven workflows.
> Prompt: Mine only explicitly authorized coding-agent history for workflows with at least three high-confidence independent successes.
> Verification: Every published candidate has repeated historical proof and passes a fresh replay.
> Tags: `mining` `history` `workflows` `proven`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The FRAM Evaluation Loop** -- Functional Resonance Analysis Method applied to agent evaluation.
> Prompt: 1. Define functions 2. Map variability 3. Analyze resonance 4. Evaluate performance 5. Identify bottlenecks
> Verification: All functions mapped with variability bounds documented.
> Tags: `fram` `evaluation` `resonance` `analysis`
> Source: [fram-eval/loop](https://github.com/fram-eval/loop)

**Agent Loop Evaluation Framework** -- Structured scoring system for agent loops.
> Prompt: 1. Define metrics 2. Create test suite 3. Run evaluation 4. Score results 5. Compare against baseline
> Verification: Evaluation scores documented with statistical significance.
> Tags: `evaluation` `scoring` `metrics` `baseline`
> Source: [agent-loop-eval/framework](https://github.com/agent-loop-eval/framework)

**Agent Loop TypeScript Evaluation** -- TypeScript-based agent loop evaluation with OpenTelemetry integration.
> Prompt: 1. Instrument with OpenTelemetry 2. Run evaluation suite 3. Collect traces 4. Score performance 5. Generate report
> Verification: Evaluation report generated with traces and scores.
> Tags: `typescript` `evaluation` `opentelemetry` `scoring`
> Source: [agent-loop-typescript/evaluation](https://github.com/agent-loop-typescript/evaluation)

---

## Multi-Agent (12 loops)

Orchestration, coordination, and teamwork patterns for multiple AI agents.

---

**Beacon Loop Planning** -- Loop-planning agent that watches repo state and ranks what matters next.
> Prompt: Setup mode: Agent reads your repo, interviews you, proposes multi-agent setup. Loop mode: Beacon reads repo state, ranks next work, creates task briefs.
> Verification: Work ranked and task briefs created with approval gates.
> Tags: `planning` `multi-agent` `ranking` `beacon`
> Source: [anshulixyz/multi-agent-loop-kit](https://github.com/anshulixyz/multi-agent-loop-kit)

**The CORE Agentic Workflow** -- Task -> Plan Review -> Approve -> PR with human judgment at decision point.
> Prompt: 1. Task file written 2. Agent drafts PLAN.md and stops 3. Human reviews and approves 4. Separate session executes approved PLAN.md 5. Session returns reviewable PR
> Verification: PR created with human-approved plan and QA inspector review.
> Tags: `human-in-loop` `plan-review` `approval` `qa`
> Source: [Code on Grass](https://codeongrass.com/blog/core-agentic-workflow-task-plan-review-approve-pr/)

**Dynamic Workflows in Claude Code** -- Claude writes its own harness on the fly, custom-built for the task.
> Prompt: Patterns: Loop until done, Tournament, Fan out across files, Adversarial review
> Verification: Workflow completes with all patterns verified.
> Tags: `dynamic` `harness` `tournament` `fan-out`
> Source: [anthropics/claude-code](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code)

**Agent Teams (Claude Code)** -- Coordinate multiple Claude Code instances as a team.
> Prompt: Team lead spawns and coordinates teammates working independently with shared task list and mailbox.
> Verification: All team tasks completed with proper coordination.
> Tags: `teams` `coordination` `multi-instance` `mailbox`
> Source: [anthropics/claude-code](https://code.claude.com/docs/en/agent-teams)

**Multi-Agent Ideation Workflow** -- ChatGPT 5 + Claude Code workflow for collaborative ideation.
> Prompt: 1. 5 agents with different perspectives go to work 2. Each proposes two designs 3. Agents collaborate and share feedback 4. Each improves design based on shared ideas 5. Final design incorporating all feedback
> Verification: Final design produced incorporating all agent feedback.
> Tags: `ideation` `collaboration` `multi-model` `design`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeAI/)

**Multi-Agent Orchestration Loop** -- Trending pattern for coordinating multiple specialized agents.
> Prompt: 1. Spawn: Create specialized agents (planner, coder, reviewer, tester) 2. Coordinate: Use shared task list and mailbox 3. Execute: Each agent works independently within bounded scope 4. Verify: Quality gates between phases
> Verification: All agents complete their tasks with proper coordination and no conflicts.
> Tags: `multi-agent` `orchestration` `coordination` `trending`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeAI/)

**Google ADK Loop Agent** -- Google's Agent Development Kit loop pattern with state management.
> Prompt: 1. Initialize agent state 2. Execute loop iterations 3. Manage state transitions 4. Handle errors gracefully 5. Persist results
> Verification: Agent completes all iterations with proper state management.
> Tags: `google` `adk` `state-management` `loop`
> Source: [google/adk-python](https://github.com/google/adk-python)

**OpenAI Agents SDK Handoff Loop** -- OpenAI's official agent handoff pattern.
> Prompt: 1. Receive task 2. Process in current agent 3. If out of scope, handoff to specialist 4. Receive handoff context 5. Continue processing
> Verification: Task completed through proper handoff chain with context preserved.
> Tags: `openai` `handoff` `agents` `python`
> Source: [openai/openai-agents-python](https://github.com/openai/openai-agents-python)

**LoopTroop LLM Council** -- Multi-model voting system with weighted confidence scores.
> Prompt: 1. Present proposal to council 2. Each LLM votes with confidence 3. Weight votes by confidence 4. If majority, proceed 5. If tie, escalate
> Verification: Decision reached through documented voting with confidence scores.
> Tags: `voting` `multi-model` `council` `consensus`
> Source: [loop-troop/llm-council](https://github.com/loop-troop/llm-council)

**Claude Code Dynamic Harness** -- Claude generates its own harness per task with self-adapting workflows.
> Prompt: 1. Analyze task requirements 2. Generate custom harness 3. Execute with generated harness 4. Validate results 5. Learn from outcome
> Verification: Generated harness produces correct results with documented adaptations.
> Tags: `dynamic` `harness` `self-adapting` `claude`
> Source: [anthropics/claude-code](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code)

**Harness DAG Orchestration** -- DAG-based agent orchestration with replan-on-failure.
> Prompt: 1. Build task DAG 2. Execute in parallel where possible 3. If node fails, replan 4. Continue until complete 5. Validate final state
> Verification: DAG completed with all nodes executed and validated.
> Tags: `dag` `orchestration` `parallel` `replan`
> Source: [harness-dag/orchestration](https://github.com/harness-dag/orchestration)

**Claude Code Agent Teams Pattern** -- Official Claude Code multi-agent coordination.
> Prompt: 1. Team lead creates task list 2. Spawn teammate agents 3. Each works independently 4. Communicate via mailbox 5. Team lead integrates results
> Verification: All tasks completed with proper coordination and no conflicts.
> Tags: `teams` `coordination` `claude` `official`
> Source: [anthropics/claude-code](https://code.claude.com/docs/en/agent-teams)

---

## Operations (6 loops)

DevOps, monitoring, deployment, and incident response workflows.

---

**The stale-safe batch release loop** -- Combines valid changes into release while excluding stale work.
> Prompt: Review pending changes and pull requests, exclude stale or unfinished work, combine the valid changes, and release them together.
> Verification: Only current, complete changes ship in the combined release.
> Tags: `release` `batch` `stale-exclusion` `deployment`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The production data cleanup loop** -- Cleans invalid production records and improves classification logic.
> Prompt: Review production records, remove anything that does not meet the allowed definition, improve the classification logic, and verify the remaining data.
> Verification: Every remaining record meets the allowed definition. Representative classification tests prove validity.
> Tags: `data` `cleanup` `production` `classification`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The post-release baseline loop** -- Records benchmark baseline after each release.
> Prompt: After current releases finish, run the standard benchmarks and record the results as the new baseline.
> Verification: The new baseline belongs to the completed release with all metadata recorded.
> Tags: `baseline` `benchmark` `release` `recording`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The customer AI deployment loop** -- Deploys AI workflows for customers with validation and monitoring.
> Prompt: Run this when a customer requests an AI workflow, reports a failure, or reaches an operations review. Choose one priority, define the owner, inputs, approvals, success metric, and ROI hypothesis.
> Verification: One customer priority reaches a proven terminal state. Workflow reaches agreed rollout stage.
> Tags: `deployment` `customer` `workflow` `monitoring`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Living Story loop** -- Maintains running narrative of project focus, deadlines, and wins.
> Prompt: On each [window], read the configured repositories, goals, prior STORY.md, and optional authorized sources. Update project files, then write STORY.md with focus, deadlines, open threads, and evidence-backed recent wins.
> Verification: The current story accounts for every prior thread and supports every recent win with evidence.
> Tags: `narrative` `project-status` `documentation` `tracking`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Recovery Proof loop** -- Tests recovery scenarios from random real backups.
> Prompt: For each required recovery scenario, randomly select an eligible real backup or recovery point and restore from zero in a disposable, isolated clean-room using only documented materials.
> Verification: Every required recovery scenario succeeds repeatedly from a real recovery point.
> Tags: `disaster-recovery` `backup` `testing` `clean-room`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

---

## Content (3 loops)

Content generation, editing, and optimization workflows.

---

**The SEO/GEO visibility loop** -- Iterative SEO/GEO audit and optimization across search and AI answer engines.
> Prompt: Run an SEO/GEO audit across crawlability, indexation, page intent, titles, internal links, structured data, source citations, and answer-first content.
> Verification: Priority pages are indexable, answer-ready, and technically sound. Repeatable crawl finds no remaining gaps.
> Tags: `seo` `geo` `visibility` `search-engine`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The product update podcast loop** -- Creates nightly podcast episodes from product changes.
> Prompt: Each night, review publicly released product changes and select only those users need to know. Verify each against the product, docs, or release notes.
> Verification: The episode accurately covers every meaningful public update.
> Tags: `podcast` `product-updates` `content` `automation`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Anti-Slop Writing Loop** -- Iterative content creation with anti-AI-slop verification at each step.
> Prompt: 1. Draft: Generate content 2. Detect: Check for AI-slop patterns (em-dashes, rule of three, superlatives) 3. Rewrite: Replace with natural language 4. Verify: Human reader test - would a person write this way?
> Verification: Content passes anti-slop detection and reads naturally.
> Tags: `anti-slop` `writing` `content` `verification` `trending`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeAI/)

---

## Design (6 loops)

UI/UX, accessibility, visual design, and prototyping workflows.

---

**The Boeing 747 benchmark** -- Iterative 3D model improvement with nine-angle visual scoring.
> Prompt: Before building, choose reference images, a scoring rubric, [visual threshold], and [budget]. Build the most realistic Boeing 747 you can from Three.js primitives.
> Verification: The Boeing 747 meets the visual bar from all nine angles.
> Tags: `3d` `modeling` `benchmark` `visual`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**War Loops: frontend reconstruction** -- Reconstructs frontend from source URL with fidelity scoring.
> Prompt: Point War Loops at an authorized URL or image. Capture it with a genuine browser and record the layout, styles, content, motion, and responsive behavior.
> Verification: The builds match the source across all three fidelity axes.
> Tags: `frontend` `reconstruction` `fidelity` `design`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The Infinite Clickbait thumbnail loop** -- Iterative thumbnail creation with scoring against reference channel.
> Prompt: For [video], use [approved assets] to make ten thumbnail concepts. Score each at real YouTube sizes against [inspiration channel] for clarity, curiosity, emotional pull, contrast, and accuracy.
> Verification: One accurate thumbnail clears the fixed quality threshold.
> Tags: `thumbnails` `youtube` `design` `scoring`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The UI/UX Score Loop** -- Improves user flow through clean-session scoring and iteration.
> Prompt: Improve [user flow, such as signup] at [URL] until [completion criterion]. In a real browser, start each pass from fresh state.
> Verification: The complete user task scores better without making another important screen worse.
> Tags: `ui` `ux` `user-flow` `scoring`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The pixel-safe CSS trim loop** -- Reduces CSS size while maintaining pixel-perfect appearance.
> Prompt: Reduce the CSS styling code [site] sends to users without changing tested screens. First capture representative pages, sizes, themes, and interactions.
> Verification: The delivered stylesheet is smaller while every tested screen remains pixel-identical.
> Tags: `css` `optimization` `pixel-perfect` `size`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

**The accessibility repair loop** -- Fixes accessibility barriers against WCAG standards.
> Prompt: Check [scope] against [accessibility standard, such as WCAG 2.2 AA] with automated scans and available keyboard, screen-reader, and other manual tests.
> Verification: No confirmed accessibility barrier remains in the agreed pages, components, or user tasks.
> Tags: `accessibility` `wcag` `compliance` `barriers`
> Source: [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)

---

## Meta (9 loops)

System-level loops for managing, validating, and improving other loops.

---

**Validate Patterns Loop** -- Self-maintaining loop that validates patterns on every push/PR.
> Prompt: Validate all patterns on every push and pull request.
> Verification: All patterns validated successfully.
> Tags: `validation` `patterns` `ci` `self-maintaining`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**Loop Audit CLI** -- CLI tool for scoring loop readiness with activity detection.
> Prompt: Run loop audit to score loop readiness.
> Verification: Audit score meets readiness threshold.
> Tags: `audit` `cli` `scoring` `readiness`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**Loop Init CLI** -- Scaffold starters with budget/run-log.
> Prompt: Initialize a new loop with budget and run-log configuration.
> Verification: Loop scaffold created with valid configuration.
> Tags: `scaffold` `initialization` `cli` `setup`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**Loop Cost Estimator** -- Token spend estimator for loop workflows.
> Prompt: Estimate token cost for loop workflow execution.
> Verification: Cost estimate provided within acceptable range.
> Tags: `cost` `estimation` `tokens` `budget`
> Source: [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)

**Autoloop** -- Loop anything in your repo: automate research, development and maintenance.
> Prompt: On every scheduled run: picks the most-overdue program, proposes a change, runs evaluation, commits if improved.
> Verification: Metric improved and change committed to branch.
> Tags: `automated` `scheduled` `metric-driven` `open-ended`
> Source: [githubnext/autoloop](https://github.com/githubnext/autoloop)

**Developer OS Memory Pattern** -- Persistent AI assistant that carries state between sessions.
> Prompt: Use agent md + beads + documentation for larger modules to maintain context across sessions.
> Verification: Context maintained across multiple sessions without loss.
> Tags: `memory` `persistence` `context` `state`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeCode/)

**Context Engineering Loop** -- Structured approach to building and maintaining context windows for optimal agent performance.
> Prompt: 1. Assess: Evaluate current context quality and gaps 2. Build: Construct context from codebase, docs, and conversation history 3. Select: Choose most relevant context for the task 4. Maintain: Update context as codebase evolves
> Verification: Agent consistently produces high-quality outputs with minimal context drift.
> Tags: `context-engineering` `methodology` `trending` `prompt-engineering`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeAI/)

**Tiered Memory Architecture Loop** -- Three-tier memory system for long-running agent sessions.
> Prompt: 1. Working Memory: Active context for current task 2. Short-Term Memory: Project-specific knowledge stored in .md files 3. Long-Term Memory: Global learnings and patterns stored across projects 4. Consolidation: Regular promotion/demotion between tiers
> Verification: Agent maintains consistent context across sessions with proper memory management.
> Tags: `memory` `architecture` `tiered` `persistence` `trending`
> Source: [Community (Reddit)](https://www.reddit.com/r/ClaudeCode/)

**Awesome Agentic Patterns Catalog** -- 171 patterns across 8 categories. Comprehensive catalog of agentic AI patterns and workflows.
> Prompt: Reference catalog - browse patterns by category and use case.
> Verification: Patterns documented with examples and implementation guides.
> Tags: `catalog` `patterns` `awesome-list` `comprehensive`
> Source: [awesome-agentic-patterns/catalog](https://github.com/awesome-agentic-patterns/catalog)

---

## How to Create a Loop

1. Copy the template below
2. Fill in all fields
3. Submit a PR to add it to `catalog.json`

### Template

```json
{
  "id": "your-loop-id",
  "title": "Loop Name",
  "category": "engineering|evaluation|multi-agent|operations|content|design|meta",
  "author": "your-name",
  "source": "https://original-source-url",
  "sourceRepo": "org/repo-name",
  "description": "One-line description of what this loop does",
  "prompt": "The full system prompt that defines the loop workflow.",
  "verification": "How to verify the loop's output is correct",
  "tags": ["tag1", "tag2", "tag3"],
  "related": ["related-loop-id-1", "related-loop-id-2"]
}
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique kebab-case identifier (e.g., `quality-streak-loop`) |
| `title` | Yes | Human-readable name |
| `category` | Yes | One of: `engineering`, `evaluation`, `multi-agent`, `operations`, `content`, `design`, `meta` |
| `author` | Yes | Loop creator or source author |
| `source` | Yes | URL to original article, blog post, or documentation |
| `sourceRepo` | No | GitHub `org/repo` if sourced from a repository |
| `description` | Yes | One-line summary |
| `prompt` | Yes | The system prompt that drives the loop |
| `verification` | Yes | Success criteria and stopping condition |
| `tags` | Yes | 2-5 lowercase tags for discoverability |
| `related` | No | Array of related loop IDs |

## Sources

| Source | Loops | Stars |
|--------|------:|------:|
| [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) | 49 | 599 |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | 7 | 474 |
| [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns) | 5 | - |
| [openai/symphony](https://github.com/openai/symphony) | 1 | 25,514 |
| [snarktank/ralph](https://github.com/snarktank/ralph) | 1 | 2,043 |
| [github/gh-aw](https://github.com/github/gh-aw) | 1 | 500 |
| [Community (Reddit/HN/Blogs)](https://www.reddit.com/r/ClaudeAI/) | 7 | - |

## Contributing

We welcome contributions! See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Add your loop following the template above
3. Add an entry to `loops/catalog.json`
4. Submit a PR

**Requirements:**
- Must be a real, working loop from an actual source
- Must include source attribution and URL
- No fabricated content

## Related Libraries

- [Skills Library](../skills/) - AI agent skill files
- [MCP Servers](../mcps/) - Model Context Protocol server collection
- [Contributing Guide](../CONTRIBUTING.md) - How to add skills, MCPs, or loops

---

## Related

- [Subagents](../subagents/) -- Specialized agents for multi-agent loops
- [Skills](../skills/) -- Installable instructions for loop components
- [Prompts](../prompts/) -- Prompt templates for loop inputs

---

**Keywords:** agent loops, AI agent workflows, agent feedback loops, Claude Code loops, OpenCode loops, agent patterns, AI development workflows, autonomous agents, agent orchestration, AI code review loops, TDD loops, agent iteration, cross-platform AI workflows
