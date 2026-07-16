# Skills Directory

88 reusable AI agent skills following the [SKILL.md open standard](https://agentskills.io). Skills give your agent new capabilities -- from code review to web scraping to content creation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills Count](https://img.shields.io/badge/Skills-88-blue.svg)](#all-skills)
[![Sources](https://img.shields.io/badge/Sources-20+-green.svg)](#sources)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** July 2026

## What Are Skills?

Skills are reusable instruction files (SKILL.md) that give AI agents new capabilities. When you install a skill, your agent learns a new workflow -- like how to do code review, write content, or manage infrastructure.

```
Agent + Skill = New Capability
```

## Quick Start

```bash
# Install a specific skill
npx skills add obra/superpowers --skill executing-plans

# Install all skills from a repository
npx skills add mattpocock/skills

# Discover skills interactively
npx skills add vercel-labs/skills --skill find-skills
```

## Quick Reference

| Category | Count | Top 3 Skills |
|----------|------:|-------------|
| [Development](#development-29-skills) | 29 | Frontend Design (572K installs), Vercel React Best Practices (492K installs), Improve Codebase Architecture (296K installs) |
| [Productivity](#productivity-16-skills) | 16 | Find Skills (2.1M installs), Grill Me (360K installs), Skill Creator (280K installs) |
| [Content](#content-10-skills) | 10 | Remotion Best Practices (383K installs), PowerPoint (153K installs), PDF Documents (139K installs) |
| [Design](#design-9-skills) | 9 | Web Design Guidelines (406K installs), Frontend Design (572K installs), shadcn/ui (199K installs) |
| [DevOps](#devops-7-skills) | 7 | Microsoft Foundry (406K installs), Finishing a Development Branch (106K installs), Vercel Deploy |
| [Testing](#testing-3-skills) | 3 | Agent Browser (469K installs), Web App Testing (100K installs), TDD (279K installs) |
| [Marketing](#marketing-4-skills) | 4 | Viral Content Hooks (110K installs), SEO Audit (142K installs), Copywriting (132K installs) |
| [Data](#data-3-skills) | 3 | Azure AI (403K installs), Supabase PostgreSQL (244K installs), Just Scrape (211K installs) |
| [Security](#security-2-skills) | 2 | Trail of Bits Skills (6K installs), Ghost Security Skills |

---

## Development (29 skills)

Coding workflows: architecture, code review, debugging, design patterns, and best practices.

---

**Frontend Design** -- Creates distinctive, production-grade frontend interfaces with high design quality.
> Install: `npx skills add anthropics/skills --skill frontend-design`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 572,900 | License: Apache-2.0
> Tags: `frontend` `ui` `design` `production`

**Vercel React Best Practices** -- React and Next.js performance optimization guidelines from Vercel Engineering. 40+ rules across 8 categories.
> Install: `npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 492,200 | License: MIT
> Tags: `react` `nextjs` `performance` `optimization`

**Improve Codebase Architecture** -- Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
> Install: `npx skills add mattpocock/skills --skill improve-codebase-architecture`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 296,200 | License: MIT
> Tags: `architecture` `refactoring` `codebase` `improvement`

**Grill With Docs** -- Grilling session that also builds your project's domain model, sharpening terminology and updating CONTEXT.md and ADRs inline.
> Install: `npx skills add mattpocock/skills --skill grill-with-docs`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 292,900 | License: MIT
> Tags: `domain-model` `documentation` `adr` `terminology`

**Caveman (Julius)** -- Compress verbose code into concise, readable form.
> Install: `npx skills add juliusbrussee/caveman`
> Source: [juliusbrussee/caveman](https://github.com/juliusbrussee/caveman) | Installs: 270,300 | License: MIT
> Tags: `compression` `readability` `concise` `code`

**To PRD** -- Turn the current conversation into a PRD and publish it to the issue tracker. No interview -- just synthesizes what you've already discussed.
> Install: `npx skills add mattpocock/skills --skill to-prd`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 260,500 | License: MIT
> Tags: `prd` `specification` `issue-tracker` `synthesis`

**To Issues** -- Break any plan, spec, or PRD into independently-grabbable issues using vertical slices.
> Install: `npx skills add mattpocock/skills --skill to-issues`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 249,600 | License: MIT
> Tags: `issues` `vertical-slices` `planning` `breakdown`

**Diagnose** -- Disciplined diagnosis loop for hard bugs and performance regressions.
> Install: `npx skills add mattpocock/skills --skill diagnose`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 229,500 | License: MIT
> Tags: `diagnosis` `bugs` `performance` `regression`

**Triage** -- Move issues through a state machine of triage roles.
> Install: `npx skills add mattpocock/skills --skill triage`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 225,900 | License: MIT
> Tags: `triage` `issues` `state-machine` `workflow`

**Composition Patterns** -- React composition patterns that scale. Helps avoid boolean prop proliferation.
> Install: `npx skills add vercel-labs/agent-skills --skill composition-patterns`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 219,300 | License: MIT
> Tags: `composition` `patterns` `react` `scalability`

**Prototype** -- Build a throwaway prototype to flesh out a design -- either a runnable terminal app or several UI variations.
> Install: `npx skills add mattpocock/skills --skill prototype`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 199,900 | License: MIT
> Tags: `prototype` `throwaway` `design` `exploration`

**React Native Guidelines** -- React Native best practices optimized for AI agents. 16 rules across 7 sections.
> Install: `npx skills add vercel-labs/agent-skills --skill react-native-guidelines`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 147,400 | License: MIT
> Tags: `react-native` `mobile` `best-practices` `guidelines`

**Executing Plans** -- Executes implementation plans with verification at each step.
> Install: `npx skills add obra/superpowers --skill executing-plans`
> Source: [obra/superpowers](https://github.com/obra/superpowers) | Installs: 125,500 | License: MIT
> Tags: `execution` `planning` `verification` `workflow`

**Receiving Code Review** -- Guides agents on responding to feedback from code reviews.
> Install: `npx skills add obra/superpowers --skill receiving-code-review`
> Source: [obra/superpowers](https://github.com/obra/superpowers) | Installs: 111,900 | License: MIT
> Tags: `code-review` `feedback` `iteration` `quality`

**Next.js Best Practices** -- Next.js best practices and optimization.
> Install: `npx skills add vercel-labs/next-skills --skill next-best-practices`
> Source: [vercel-labs/next-skills](https://github.com/vercel-labs/next-skills) | Installs: 110,300 | License: MIT
> Tags: `nextjs` `best-practices` `optimization` `react`

**CodeGraph** -- Local-first code indexing with 54K GitHub stars. Enables fast semantic code search across large codebases without cloud dependency.
> Install: `npx skills add anthropics/codegraph`
> Source: [anthropics/codegraph](https://github.com/anthropics/codegraph) | Installs: 54,000 | License: MIT
> Tags: `code-indexing` `semantic-search` `local-first` `codebase`

**Emil Design Engineering** -- Emil Kowalski's design engineering patterns.
> Install: `npx skills add emilkowalski/skill`
> Source: [emilkowalski/skill](https://github.com/emilkowalski/skill) | Installs: 101,000 | License: MIT
> Tags: `design` `engineering` `patterns` `ui`

**Ponytail Anti-Over-Engineering** -- Anti-over-engineering skill that keeps code simple and maintainable. Born 3 weeks ago and rapidly adopted.
> Install: `npx skills add DietrichGebert/ponytail`
> Source: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Installs: 69,000 | License: MIT
> Tags: `simplicity` `anti-overengineering` `maintainability` `code-quality`

**Understand-Anything** -- Code knowledge graphs for AI agents. Builds semantic understanding of any codebase with visual dependency maps.
> Install: `npx skills add Egonex-AI/understand-anything`
> Source: [Egonex-AI/understand-anything](https://github.com/Egonex-AI/understand-anything) | Installs: 59,400 | License: MIT
> Tags: `knowledge-graph` `codebase` `understanding` `architecture`

**Headroom** -- Code complexity analyzer that identifies headroom for improvement in existing codebases.
> Install: `npx skills add anthropics/headroom`
> Source: [anthropics/headroom](https://github.com/anthropics/headroom) | Installs: 12,000 | License: Apache-2.0
> Tags: `complexity` `analysis` `optimization` `codebase`

**Andrej Karpathy Skills** -- Viral Karpathy guidelines - 4 principles for better LLM coding. Clean code practices for AI-assisted development.
> Install: `npx skills add forrestchang/andrej-karpathy-skills`
> Source: [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | Installs: 7,600 | License: MIT
> Tags: `karpathy` `clean-code` `llm` `principles`

**Trail of Bits Skills** -- Premier security skills from leading security firm. CodeQL, Semgrep, smart contract auditing, vulnerability research.
> Install: `npx skills add trailofbits/skills`
> Source: [trailofbits/skills](https://github.com/trailofbits/skills) | Installs: 6,000 | License: MIT
> Tags: `security` `codeql` `semgrep` `smart-contracts` `vulnerability`

**SkillOpt (Microsoft)** -- Self-evolving agent skills from Microsoft Research. Skills that improve themselves through iterative refinement.
> Install: `npx skills add microsoft/skillopt`
> Source: [microsoft/skillopt](https://github.com/microsoft/skillopt) | Installs: 11,000 | License: MIT
> Tags: `self-improving` `microsoft` `research` `meta-learning`

**Battle Tested Engineer** -- Reusable agent skills for battle-tested engineering judgment. Ask before guessing, change only what was asked.
> Install: `npx skills add sayeed1999/agent-skills --skill battle-tested-engineer`
> Source: [sayeed1999/agent-skills](https://github.com/sayeed1999/agent-skills) | Installs: 4 | License: MIT
> Tags: `engineering-judgment` `minimal-code` `safety` `review`

**Fable Skill - Executing Hard Tasks** -- Pressure-tested skill for decomposing hard tasks risk-first, verifying with pasteable evidence.
> Install: `npx skills add wsbm393/Fable-Skill --skill executing-hard-tasks`
> Source: [wsbm393/Fable-Skill](https://github.com/wsbm393/Fable-Skill) | Installs: 22 | License: MIT
> Tags: `risk-first` `verification` `skill-tdd` `frontier-models`

**Agent Maxxing** -- 95+ production-ready skills, 19 UI components, and 7 system prompts extracted from Claude Fable 5, GPT-5.5, Gemini CLI.
> Install: `npx skills add subhansh-dev/agent-maxxing`
> Source: [subhansh-dev/agent-maxxing](https://github.com/subhansh-dev/agent-maxxing) | Installs: 95 | License: MIT
> Tags: `multi-agent` `system-prompts` `ui-components` `frontend`

**InSkillFlow Claude Code Skills** -- 179+ skills collection for Claude Code. Wide coverage of development workflows and patterns.
> Install: `npx skills add inskillflow/claude-code-skills`
> Source: [inskillflow/claude-code-skills](https://github.com/inskillflow/claude-code-skills) | Installs: 0 | License: MIT
> Tags: `collection` `claude-code` `workflows` `patterns`

**DynamoDS Skills** -- Enterprise org-level skills for Dynamo. Organized by team and domain with shared standards.
> Install: `npx skills add DynamoDS/skills`
> Source: [DynamoDS/skills](https://github.com/DynamoDS/skills) | Installs: 0 | License: MIT
> Tags: `enterprise` `org-level` `standards` `team`

**Alireza Rezvani Claude Skills** -- 337 skills + 579 Python tools spanning engineering, marketing, finance, and more. Massive multi-domain collection.
> Install: `npx skills add alirezarezvani/claude-skills`
> Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Installs: 19,000 | License: MIT
> Tags: `multi-domain` `python` `engineering` `marketing` `finance`

---

## Productivity (16 skills)

Workflow optimization: planning, decision-making, knowledge management, and agent coordination.

---

**Find Skills** -- Discover and install new skills for your agent.
> Install: `npx skills add vercel-labs/skills --skill find-skills`
> Source: [vercel-labs/skills](https://github.com/vercel-labs/skills) | Installs: 2,100,000 | License: MIT
> Tags: `discovery` `search` `installation` `marketplace`

**Grill Me** -- Get relentlessly interviewed about a plan or design until every branch of the decision tree is resolved.
> Install: `npx skills add mattpocock/skills --skill grill-me`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 360,600 | License: MIT
> Tags: `interview` `planning` `design` `decisions`

**Skill Creator** -- Creates new skills, modifies existing skills, and measures skill performance.
> Install: `npx skills add anthropics/skills --skill skill-creator`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 280,200 | License: Apache-2.0
> Tags: `skill-creation` `meta` `performance` `measurement`

**Setup Matt Pocock Skills** -- Configure this repo for the engineering skills (issue tracker, triage labels, domain doc layout). Run once per repo.
> Install: `npx skills add mattpocock/skills --skill setup-matt-pocock-skills`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 241,800 | License: MIT
> Tags: `setup` `configuration` `repo` `engineering`

**Write a Skill** -- Reference for writing and editing skills well: the vocabulary and principles that make a skill predictable.
> Install: `npx skills add mattpocock/skills --skill write-a-skill`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 221,600 | License: MIT
> Tags: `skill-creation` `writing` `principles` `meta`

**Zoom Out** -- Step back from details to see the big picture of what you're building.
> Install: `npx skills add mattpocock/skills --skill zoom-out`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 220,900 | License: MIT
> Tags: `perspective` `big-picture` `strategy` `overview`

**Handoff** -- Compact the current conversation into a handoff document so another agent can continue the work.
> Install: `npx skills add mattpocock/skills --skill handoff`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 201,800 | License: MIT
> Tags: `handoff` `continuity` `documentation` `agents`

**Writing Skills** -- Meta-skill for creating and testing new skills with modularity and framework standards.
> Install: `npx skills add obra/superpowers --skill writing-skills`
> Source: [obra/superpowers](https://github.com/obra/superpowers) | Installs: 110,800 | License: MIT
> Tags: `meta` `skill-creation` `framework` `standards`

**AGENTS.md Standard** -- Linux Foundation standard for AI agent instructions. AGENTS.md files define agent behavior, constraints, and workflows.
> Install: Create AGENTS.md in project root
> Source: [AGENTS.md/LinuxFoundation](https://github.com/AGENTS.md/LinuxFoundation) | Installs: 25,000 | License: MIT
> Tags: `agents-md` `standards` `agent-instructions` `linux-foundation`

**Context Engineering** -- Replacing prompt engineering with structured context management. Techniques for building, selecting, and maintaining context windows.
> Install: Reference methodology - no install needed
> Source: trending/2026-06 | Installs: 15,000 | License: MIT
> Tags: `context-engineering` `prompt-engineering` `methodology` `trending`

**Composio Awesome Claude Skills** -- Major community directory of Claude skills. Curated list of the best skills for Claude Code and AI agents.
> Install: Reference directory - browse at github.com/ComposioHQ/awesome-claude-skills
> Source: [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Installs: 66,000 | License: MIT
> Tags: `directory` `awesome-list` `claude` `curated`

**VoltAgent Awesome Agent Skills** -- Primary ecosystem directory with 1000+ indexed AI agent skills. Discover, compare, and install skills.
> Install: Reference directory - browse at github.com/VoltAgent/awesome-agent-skills
> Source: [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | Installs: 26,700 | License: MIT
> Tags: `directory` `awesome-list` `discovery` `ecosystem`

**Obsidian Skills** -- Created by Obsidian's creator. Skills for Markdown, Bases, JSON Canvas, and knowledge management workflows.
> Install: `npx skills add kepano/obsidian-skills`
> Source: [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Installs: 35,000 | License: MIT
> Tags: `obsidian` `markdown` `knowledge-management` `notes`

**TravisVN Awesome Claude Skills** -- Curated awesome list of Claude skills. Quality over quantity approach to skill discovery.
> Install: Reference directory - browse at github.com/travisvn/awesome-claude-skills
> Source: [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) | Installs: 13,700 | License: MIT
> Tags: `directory` `awesome-list` `claude` `curated`

**Open Agent Skill Registry** -- Growing open registry for AI agent skills. Community-driven discovery and installation platform.
> Install: Browse at openagentskill.com
> Source: openagentskill.com | Installs: 0 | License: MIT
> Tags: `registry` `discovery` `community` `platform`

**Ask Matt** -- Ask which skill or flow fits your situation. A router over the user-invoked skills.
> Install: `npx skills add mattpocock/skills --skill ask-matt`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 0 | License: MIT
> Tags: `router` `navigation` `help` `selection`

---

## Content (10 skills)

Document creation, multimedia, and writing quality.

---

**Remotion Best Practices** -- Best practices for Remotion video creation in React.
> Install: `npx skills add remotion-dev/skills --skill remotion-best-practices`
> Source: [remotion-dev/skills](https://github.com/remotion-dev/skills) | Installs: 383,400 | License: MIT
> Tags: `remotion` `video` `react` `content`

**PowerPoint (pptx)** -- Creates and edits PowerPoint presentations programmatically.
> Install: `npx skills add anthropics/skills --skill pptx`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 153,300 | License: Apache-2.0
> Tags: `powerpoint` `presentations` `slides` `office`

**PDF Documents** -- Creates and edits PDF documents with full formatting support.
> Install: `npx skills add anthropics/skills --skill pdf`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 139,500 | License: Apache-2.0
> Tags: `pdf` `documents` `formatting` `creation`

**Word Documents (docx)** -- Creates and edits Word documents with professional formatting.
> Install: `npx skills add anthropics/skills --skill docx`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 131,500 | License: Apache-2.0
> Tags: `word` `documents` `office` `professional`

**Excel Spreadsheets (xlsx)** -- Creates and edits Excel spreadsheets with formulas and charts.
> Install: `npx skills add anthropics/skills --skill xlsx`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 116,000 | License: Apache-2.0
> Tags: `excel` `spreadsheets` `formulas` `charts`

**AI Video Generation** -- AI video generation workflows for creating and editing video content using cutting-edge models.
> Install: `npx skills add halt-catch-fire/skills --skill ai-video-generation`
> Source: [halt-catch-fire/skills](https://github.com/halt-catch-fire/skills) | Installs: 109,900 | License: MIT
> Tags: `video` `generation` `multimedia` `ai-media`

**Writing Guidelines** -- Review docs and prose for compliance with the Vercel writing handbook. 80+ rules covering voice, structure, content types.
> Install: `npx skills add vercel-labs/agent-skills --skill writing-guidelines`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 0 | License: MIT
> Tags: `writing` `documentation` `voice` `style`

**Stop Sloppy AI Writing** -- Anti-AI-slop writing skill. Detects and eliminates patterns of AI-generated text that sound robotic, generic, or unnatural.
> Install: `npx skills add obra/stop-slop`
> Source: [obra/stop-slop](https://github.com/obra/stop-slop) | Installs: 11,800 | License: MIT
> Tags: `anti-slop` `writing` `humanization` `quality`

**Content Research Writer** -- Research-backed content creation with web search, source verification, and structured writing pipeline.
> Install: `npx skills add anthropics/content-research-writer`
> Source: [anthropics/content-research-writer](https://github.com/anthropics/content-research-writer) | Installs: 8,500 | License: Apache-2.0
> Tags: `research` `writing` `content` `verification`

**Ace Step Audio Generation** -- Audio and music generation using Ace Step models.
> Install: `npx skills add doany-ai/skills --skill ace-step`
> Source: [doany-ai/skills](https://github.com/doany-ai/skills) | Installs: 5,500 | License: MIT
> Tags: `audio` `music` `generation` `multimedia`

---

## Design (9 skills)

UI/UX, visual design, and design systems.

---

**Web Design Guidelines** -- Review UI code for compliance with web interface best practices. 100+ rules covering accessibility, performance, and UX.
> Install: `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 406,200 | License: MIT
> Tags: `web-design` `accessibility` `ux` `best-practices`

**shadcn/ui** -- shadcn/ui component library integration.
> Install: `npx skills add shadcn/ui`
> Source: [shadcn/ui](https://github.com/shadcn/ui) | Installs: 199,800 | License: MIT
> Tags: `shadcn` `components` `ui` `library`

**React View Transitions** -- Implement smooth, native-feeling animations using React's View Transition API.
> Install: `npx skills add vercel-labs/agent-skills --skill react-view-transitions`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 0 | License: MIT
> Tags: `animations` `transitions` `react` `ux`

**Open Design** -- Claude Design alternative with 259+ skills and 142+ design systems. Comprehensive design-to-code workflows.
> Install: `npx skills add nexu-io/open-design`
> Source: [nexu-io/open-design](https://github.com/nexu-io/open-design) | Installs: 66,000 | License: MIT
> Tags: `design` `design-systems` `figma` `ui` `code-generation`

**Taste Frontend Design** -- Anti-slop frontend design skill with taste-based UI generation. Creates visually refined interfaces.
> Install: `npx skills add Leonxlnx/taste-skill`
> Source: [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Installs: 55,900 | License: MIT
> Tags: `design` `ui` `aesthetics` `anti-slop`

**GPT Image Edit** -- GPT-powered image editing workflows for AI-assisted image manipulation.
> Install: `npx skills add agentspace-so/skills --skill gpt-image-edit`
> Source: [agentspace-so/skills](https://github.com/agentspace-so/skills) | Installs: 6,000 | License: MIT
> Tags: `image` `editing` `gpt` `design` `ai-media`

**Design Team OS** -- Claude skill library for product design teams - PRD to validated prototype workflow.
> Install: `npx skills add royvergara/design-team-os`
> Source: [royvergara/design-team-os](https://github.com/royvergara/design-team-os) | Installs: 0 | License: MIT
> Tags: `design` `product` `prd` `prototype` `ux`

---

## DevOps (7 skills)

CI/CD, deployment, infrastructure, and operations.

---

**Microsoft Foundry** -- Microsoft Azure Foundry SDK integration.
> Install: `npx skills add microsoft/azure-skills --skill microsoft-foundry`
> Source: [microsoft/azure-skills](https://github.com/microsoft/azure-skills) | Installs: 406,400 | License: MIT
> Tags: `azure` `microsoft` `cloud` `sdk`

**GitHub Actions Docs** -- GitHub Actions documentation and workflow help.
> Install: `npx skills add xixu-me/skills --skill github-actions-docs`
> Source: [xixu-me/skills](https://github.com/xixu-me/skills) | Installs: 233,300 | License: MIT
> Tags: `github-actions` `ci-cd` `workflows` `documentation`

**Using Git Worktrees** -- Creates isolated workspace on new branch, runs project setup, verifies clean test baseline.
> Install: `npx skills add obra/superpowers --skill using-git-worktrees`
> Source: [obra/superpowers](https://github.com/obra/superpowers) | Installs: 108,700 | License: MIT
> Tags: `git` `worktrees` `isolation` `workspace`

**Finishing a Development Branch** -- Handles branch cleanup, merge prep, and final verification.
> Install: `npx skills add obra/superpowers --skill finishing-a-development-branch`
> Source: [obra/superpowers](https://github.com/obra/superpowers) | Installs: 106,600 | License: MIT
> Tags: `git` `branch` `merge` `cleanup`

**Vercel Deploy Claimable** -- Deploy applications and websites to Vercel instantly. Auto-detects 40+ frameworks.
> Install: `npx skills add vercel-labs/agent-skills --skill vercel-deploy-claimable`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 0 | License: MIT
> Tags: `vercel` `deployment` `frameworks` `hosting`

**Vercel Optimize** -- Audits a Vercel project for cost, performance, reliability, caching, function usage, and billing opportunities.
> Install: `npx skills add vercel-labs/agent-skills --skill vercel-optimize`
> Source: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Installs: 0 | License: MIT
> Tags: `vercel` `optimization` `cost` `performance`

**Vibe Ship** -- Claude Code deployment and shipping tool for rapid production deployments.
> Install: `npx skills add sudais-khalid/vibe-ship`
> Source: [sudais-khalid/vibe-ship](https://github.com/sudais-khalid/vibe-ship) | Installs: 0 | License: MIT
> Tags: `deployment` `shipping` `devops` `production`

---

## Testing (3 skills)

Automated testing, QA, and quality verification.

---

**Agent Browser** -- Automate browser interactions for testing and scraping.
> Install: `npx skills add vercel-labs/agent-browser`
> Source: [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Installs: 469,800 | License: MIT
> Tags: `browser` `automation` `testing` `scraping`

**TDD (mattpocock)** -- Test-driven development with a red-green-refactor loop. Builds features or fixes bugs one vertical slice at a time.
> Install: `npx skills add mattpocock/skills --skill tdd`
> Source: [mattpocock/skills](https://github.com/mattpocock/skills) | Installs: 279,400 | License: MIT
> Tags: `tdd` `red-green` `refactor` `vertical-slice`

**Web App Testing** -- Tests web applications using Playwright for end-to-end verification.
> Install: `npx skills add anthropics/skills --skill webapp-testing`
> Source: [anthropics/skills](https://github.com/anthropics/skills) | Installs: 100,600 | License: Apache-2.0
> Tags: `testing` `playwright` `e2e` `web`

---

## Marketing (4 skills)

SEO, copywriting, and marketing psychology.

---

**Viral Content Hooks** -- Generate viral content hooks for social media platforms - TikTok, Instagram, YouTube, Twitter.
> Install: `npx skills add vyralcontent/content-skills --skill viral-hooks`
> Source: [vyralcontent/content-skills](https://github.com/vyralcontent/content-skills) | Installs: 110,600 | License: MIT
> Tags: `marketing` `social-media` `content-creation` `viral`

**SEO Audit** -- SEO audit and optimization recommendations.
> Install: `npx skills add coreyhaines31/marketingskills --skill seo-audit`
> Source: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Installs: 142,400 | License: MIT
> Tags: `seo` `audit` `optimization` `marketing`

**Copywriting** -- Professional copywriting for marketing materials.
> Install: `npx skills add coreyhaines31/marketingskills --skill copywriting`
> Source: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Installs: 132,200 | License: MIT
> Tags: `copywriting` `marketing` `content` `writing`

**Marketing Psychology** -- Psychological principles for marketing effectiveness.
> Install: `npx skills add coreyhaines31/marketingskills --skill marketing-psychology`
> Source: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Installs: 97,500 | License: MIT
> Tags: `psychology` `marketing` `persuasion` `behavior`

---

## Data (3 skills)

Databases, data engineering, and data analysis.

---

**Azure AI** -- Azure AI services integration.
> Install: `npx skills add microsoft/azure-skills --skill azure-ai`
> Source: [microsoft/azure-skills](https://github.com/microsoft/azure-skills) | Installs: 403,900 | License: MIT
> Tags: `azure` `ai` `machine-learning` `services`

**Supabase PostgreSQL Best Practices** -- Supabase PostgreSQL patterns and optimization.
> Install: `npx skills add supabase/agent-skills --skill supabase-postgres-best-practices`
> Source: [supabase/agent-skills](https://github.com/supabase/agent-skills) | Installs: 244,100 | License: MIT
> Tags: `supabase` `postgresql` `database` `optimization`

**Just Scrape** -- Web scraping with AI-powered extraction.
> Install: `npx skills add scrapegraphai/just-scrape`
> Source: [scrapegraphai/just-scrape](https://github.com/scrapegraphai/just-scrape) | Installs: 211,100 | License: MIT
> Tags: `scraping` `extraction` `ai` `web`

---

## Security (2 skills)

Security auditing, vulnerability scanning, and AppSec.

---

**Trail of Bits Skills** -- Premier security skills from leading security firm. CodeQL, Semgrep, smart contract auditing.
> Install: `npx skills add trailofbits/skills`
> Source: [trailofbits/skills](https://github.com/trailofbits/skills) | Installs: 6,000 | License: MIT
> Tags: `security` `codeql` `semgrep` `smart-contracts`

**Ghost Security Skills** -- Production AppSec skills: SAST, SCA, secrets scanning, DAST, and security best practices.
> Install: `npx skills add ghostsecurity/skills`
> Source: [ghostsecurity/skills](https://github.com/ghostsecurity/skills) | Installs: 394 | License: MIT
> Tags: `appsec` `sast` `sca` `secrets` `dast`

---

## Sources

Major repositories contributing to this catalog:

| Repository | Skills | Stars | Description |
|------------|--------|-------|-------------|
| [obra/superpowers](https://github.com/obra/superpowers) | 6 | 239K | Git workflows, code review, execution |
| [anthropics/skills](https://github.com/anthropics/skills) | 7 | 157K | Official Anthropic skills |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 15 | 141K | Planning, debugging, TDD, architecture |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 8 | 29K | React, design, deployment |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 24 | 77K | Chrome team lifecycle skills |
| [anthropics/codegraph](https://github.com/anthropics/codegraph) | 1 | 54K | Code indexing and semantic search |
| [skills.sh leaderboard](https://skills.sh) | -- | 850K installs | Community skill discovery |

## How to Use

```bash
# Install a specific skill
npx skills add obra/superpowers --skill executing-plans

# Install all skills from a repository
npx skills add mattpocock/skills

# Install from another source
npx skills add vercel-labs/agent-skills
npx skills add anthropics/skills
npx skills add nowork-studio/NotFair

# Discover skills interactively
npx skills add vercel-labs/skills --skill find-skills
```

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata, install commands, and links

## Related

- [MCP Servers](../mcps/) -- Connect your skills to external services
- [Agent Loops](../loops/) -- Repeatable workflows with verification
- [Plugins](../plugins/) -- Platform-specific extensions for Claude Code, Cursor, and more
