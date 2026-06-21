# Agent Loop Library

73 reusable agent workflow patterns with built-in feedback mechanisms. Unlike one-shot prompts, loops let agents learn from results and iterate.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Loops Count](https://img.shields.io/badge/Loops-73-green.svg)](#all-loops)
[![Sources](https://img.shields.io/badge/Sources-10-blue.svg)](#sources)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** June 2026

## What Are Agent Loops?

Agent loops are repeatable AI agent patterns with built-in feedback mechanisms. Unlike one-shot prompts, loops let agents learn from results and iterate until the task is complete.

```
Prompt -> Agent -> Output -> Verification -> Feedback -> Prompt (loop)
```

## Quick Start

1. Copy any loop file to your project
2. Use the prompt text as your agent instruction
3. The loop's verification criteria tell you when to stop

```bash
# Clone and explore
git clone https://github.com/michielhdoteth/agent-skills-hub.git
ls agent-skills-hub/loops/
```

## Browse by Category

Browse the full catalog: [`loops/catalog.json`](catalog.json)

| Category | Count | Description |
|----------|------:|-------------|
| [Engineering](#engineering) | 41 | Code quality, testing, performance, cleanup |
| [Evaluation](#evaluation) | 14 | Analysis, benchmarking, assessment |
| [Operations](#operations) | 9 | Deployment, monitoring, incident response |
| [Content](#content) | 3 | Documentation, marketing, SEO |
| [Design](#design) | 6 | UI/UX, accessibility, prototyping |

## Sources

All loops are sourced from real repositories and community contributions:

| Source | Loops | Stars | License |
|--------|------:|------:|---------|
| [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) | 49 | 599 | MIT |
| [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering) | 7 | 474 | MIT |
| [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns) | 5 | - | MIT |
| bradtaylorsf/alpha-loop | 1 | - | MIT |
| iKon85/agent-workflow-kit | 1 | - | MIT |
| githubnext/autoloop | 1 | - | MIT |
| anshulixyz/multi-agent-loop-kit | 1 | - | MIT |
| 0xagentkitchen/kitchenloop | 1 | - | MIT |
| Community (Reddit/Blogs) | 5 | - | - |
| Claude Code Official | 2 | - | - |

---

## Engineering (41 loops)

### overnight-docs-sweep.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### alpha-loop.md
**Source:** [bradtaylorsf/alpha-loop](https://github.com/bradtaylorsf/alpha-loop)
**Author:** bradtaylorsf

### architecture-satisfaction-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### autoloop.md
**Source:** [githubnext/autoloop](https://github.com/githubnext/autoloop)
**Author:** GitHub Next

### autonomy-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### beacon-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### clodex-adversarial-review-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### codebase-sweeper.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### codex-completion-contract-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### cold-load-trimmer-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### daily-triage.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### exhaustive-logging-coverage-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### five-minute-repository-maintainer-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### fresh-clone-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### goal-forge-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### groundtruth-audit-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### housekeeper-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### issue-burn-down-line.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### kitchenloop.md
**Source:** [0xagentkitchen/kitchenloop](https://github.com/0xagentkitchen/kitchenloop)
**Author:** 0xagentkitchen

### loop-audit.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### loop-cost.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### loop-harness-verification-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### loop-init.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### modernization-line.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### nightly-changelog-sweep.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### optimization-line.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### plan-execute-land-learn.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### pr-babysitter.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### prepare-new-project-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### production-error-sweep.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### propagation-compliance-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### recent-feedback-sweep.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### repository-cleanup-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### review-gate-line.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### sub-50ms-page-load-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### supervisor-line.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### test-stabilizer-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### test-suite-speed-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### ticket-to-pr-ready-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### validate-patterns.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### 100-percent-test-coverage-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

---

## Evaluation (14 loops)

### artifact-to-skill-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### axelrod-subagent-arena-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### chatgpt5-claude-code-ideation.md
**Source:** Community
**Author:** Community

### core-agentic-workflow.md
**Source:** [rohanbalkondekar/agent-loop-patterns](https://github.com/rohanbalkondekar/agent-loop-patterns)
**Author:** rohanbalkondekar

### devils-advocate-design-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### easy-onboarding-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### full-product-evaluation-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### multi-llm-convergence-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### promise-to-proof-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### quality-streak-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### ralph-bash-loop.md
**Source:** Community
**Author:** Community

### revolve-self-improvement-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### self-improving-champion-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### strip-miner-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

---

## Operations (9 loops)

### agent-teams.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### customer-ai-deployment-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### developer-os-memory.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### dynamic-workflows.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### living-story-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### post-release-baseline-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### production-data-cleanup-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### recovery-proof-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### stale-safe-batch-release-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

---

## Content (3 loops)

### content-refresh-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### product-update-podcast-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### seo-geo-visibility-loop.md
**Source:** Community
**Author:** Community

---

## Design (6 loops)

### accessibility-repair-loop.md
**Source:** [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library)
**Author:** Forward-Future

### boeing-747-benchmark.md
**Source:** [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)
**Author:** cobusgreyling

### infinite-clickbait-loop.md
**Source:** [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)
**Author:** cobusgreyling

### pixel-safe-css-trim-loop.md
**Source:** [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)
**Author:** cobusgreyling

### ui-ux-score-loop.md
**Source:** [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)
**Author:** cobusgreyling

### war-loops-frontend-designer.md
**Source:** [cobusgreyling/loop-engineering](https://github.com/cobusgreyling/loop-engineering)
**Author:** cobusgreyling

---

## How to Create Loops

Each loop file follows this format:

```markdown
---
title: Loop Name
category: engineering
author: Original Author
published: 2026-01-01
source: https://github.com/repo/loop
---

# Loop Name

## Use When
[When to use this loop]

## Prompt
[Exact prompt text]

## Verification
[What proves success]

## Steps
1. [Step 1]
2. [Step 2]

## Why
[Why this loop is useful]

## Keywords
[keyword1, keyword2]

## Related Loops
- [other-loop](../category/other-loop.md)
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Add your loop following the format above
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

**Keywords:** agent loops, AI agent workflows, agent feedback loops, Claude Code loops, OpenCode loops, agent patterns, AI development workflows, autonomous agents, agent orchestration, AI code review loops, TDD loops, agent iteration, cross-platform AI workflows
