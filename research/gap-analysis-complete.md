# Research: Claude Code Bible - Gap Analysis & Competitive Intelligence

## Executive Summary

This document synthesizes findings from 15+ repositories and 5+ official sources to identify gaps in the Claude Code Bible. The analysis reveals that while the Bible covers foundational topics well, there are critical gaps in **context management**, **hook reference**, **advanced workflows**, and **expert tips** that, if addressed, would make it the definitive Claude Code resource.

---

## 1. Official Documentation Analysis

### 1.1 Best Practices (code.claude.com/docs/en/best-practices)

**Key Insights Not in Bible:**

| Topic | Official Guidance | Bible Status |
|-------|------------------|--------------|
| **Context Window Management** | Track usage with `/context`, manage aggressively, 200K token window fills fast | Not covered |
| **Verification Strategy** | Give Claude a check it can run (tests, build, screenshots) | Partially covered |
| **Explore-Plan-Code-Commit** | 4-phase workflow: Explore → Plan → Implement → Commit | Not documented |
| **Rewind/Checkpoints** | Double-tap Escape, `/rewind`, restore conversation/code/both | Not covered |
| **Session Management** | `/clear` between tasks, `/compact`, `/btw` for side questions | Not covered |
| **Auto Mode** | Classifier reviews commands, blocks risky actions | Not covered |
| **Subagent Verification** | Use subagents for adversarial review in fresh context | Not covered |
| **Non-Interactive Mode** | `claude -p "prompt"` for CI, scripts, pre-commit hooks | Not covered |
| **Fan-Out Pattern** | Loop `claude -p` for parallel file processing | Not covered |
| **Writer/Reviewer Pattern** | Two sessions: one writes, one reviews in fresh context | Not covered |

### 1.2 CLAUDE.md Best Practices (morphllm.com)

**Key Insights:**

| Insight | Detail | Bible Status |
|---------|--------|--------------|
| **Loading Hierarchy** | Managed → Global → Project Root → Local → Parent → Child (on-demand) | Not documented |
| **Token Budget** | 200 lines recommended max, 5 @import depth | Not covered |
| **Layered Discovery** | Subdirectory CLAUDE.md loads on-demand, not at launch | Not documented |
| **Import Syntax** | `@path/to/file` for imports, `@README.md` | Partially covered |
| **Include/Exclude Table** | What to include vs exclude in CLAUDE.md | Not documented |

### 1.3 Power User Tips (support.claude.com, April 2026)

**Critical Features Not in Bible:**

| Feature | Description | Bible Status |
|---------|-------------|--------------|
| **/btw** | Side questions without polluting context | Not covered |
| **/goal** | Condition-based stopping with re-evaluator | Not covered |
| **/worktree** | Parallel sessions in isolated git checkouts | Not covered |
| **/loop** | Bundled skill for repeated execution | Not covered |
| **/schedule** | Cron-based task scheduling | Not covered |
| **/rc** | Remote control from mobile | Not covered |
| **/voice** | Voice dictation | Not covered |
| **/chrome** | Browser automation | Not covered |
| **Auto Mode** | Safety classifier, not just allowlists | Not covered |

---

## 2. Repository Competitive Analysis

### 2.1 hesreallyhim/awesome-claude-code (45k+ stars)

**Unique Content:**
- Curated catalog of 100+ tools, extensions, and resources
- Organized by category: Development, DevOps, Security, etc.
- Regular updates with community contributions

**Bible Gap:** No comprehensive catalog section

### 2.2 shanraisshan/claude-code-best-practice (55k+ stars)

**Unique Content:**
- Orchestration workflows (command → agent → skill flow)
- Hook system deep dive (25 lifecycle events, JSON formats)
- Context management (40%/60% thresholds, waste factor metric)
- Skills evaluation system (keyword, pattern, file path, intent detection)

**Bible Gaps:**
- Hook reference incomplete (missing 25 lifecycle events)
- Context management not documented
- Skills evaluation system not covered

### 2.3 alirezarezvani/claude-skills (16.7k stars)

**Unique Content:**
- 338 skills across 9 domains
- Complete skill templates with frontmatter
- Installation scripts and automation
- Category organization (DevOps, Security, Frontend, Backend, etc.)

**Bible Gap:** Skill library incomplete (7 skills vs 338)

### 2.4 obra/superpowers (215k stars)

**Unique Content:**
- Complete development methodology
- Git worktrees for parallel sessions
- Session management patterns
- Verification strategies

**Bible Gap:** Development workflows not documented

### 2.5 mattpocock/skills (114k stars)

**Unique Content:**
- Skills as folders, not files
- Gotchas section in skills
- Skill description as trigger, not summary
- Scripts/libraries embedded in skills
- `!command` for dynamic output

**Bible Gap:** Advanced skill patterns not covered

### 2.6 gstack (106k stars)

**Unique Content:**
- Agent teams for parallel execution
- Multi-agent coordination
- Task distribution patterns

**Bible Gap:** Multi-agent orchestration not documented

### 2.7 everything-claude-code (202k stars)

**Unique Content:**
- Comprehensive feature overview
- Tips from Boris Cherny (Claude Code creator)
- Git worktrees deep dive
- Auto mode explanation
- Dynamic workflows

**Bible Gaps:**
- Expert tips not curated
- Advanced features not documented
- Cross-model workflows not covered

### 2.8 claude-code-literate (152k stars)

**Unique Content:**
- Literate programming approach
- Code-as-documentation patterns
- Interactive examples

**Bible Gap:** No literate programming patterns

### 2.9 claude-code-showcase (5.9k stars)

**Unique Content:**
- Full project setup examples
- Reference implementations
- Real-world configurations

**Bible Gap:** No reference implementations

### 2.10 luongnv89/claude-howto (34.5k stars)

**Unique Content:**
- Step-by-step how-to guides
- Beginner-friendly explanations
- Common use cases with examples

**Bible Gap:** No how-to guides for common tasks

---

## 3. Expert Tips & Tricks

### 3.1 Boris Cherny (Claude Code Creator)

| Tip | Detail | Bible Status |
|-----|--------|--------------|
| **Keep PRs small** | p50 of 118 lines, p90 of 452 lines | Not covered |
| **Always squash merge** | Clean linear history | Not covered |
| **Commit often** | Aim for 1 commit/hour | Not covered |
| **Tag @claude on coworker PRs** | Review assistance | Not covered |
| **Start with plan mode** | Explore before implement | Not covered |
| **Phase-wise gated plans** | Break into phases | Not covered |

### 3.2 Thariq (Anthropic Engineer)

| Tip | Detail | Bible Status |
|-----|--------|--------------|
| **Skills are folders, not files** | Directory structure matters | Not covered |
| **Build Gotchas section** | Document pitfalls | Not covered |
| **Skill description is trigger** | Not summary | Not covered |
| **Use scripts/libraries** | Reusable components | Not covered |
| **Embed `!command`** | Dynamic output in skills | Not covered |
| **Context management** | Every turn is a branching point | Not covered |

### 3.3 Community Tips (r/ClaudeAI)

| Tip | Detail | Bible Status |
|-----|--------|--------------|
| **Document-and-Clear pattern** | Dump plan to markdown, /clear, new session | Not covered |
| **Subagent isolation** | 20 reads + 12 greps stay in child | Not covered |
| **Waste factor metric** | current turn tokens / first turn tokens | Not covered |
| **Prompting tricks** | "grill me on these changes", "scrap this and implement..." | Not covered |
| **Always start with plan mode** | Phase-wise gated plans | Not covered |

---

## 4. Advanced Features (Not in Bible)

### 4.1 Ultrareview

**What:** Deep cloud code review with fleet of reviewer agents
**How:** Cloud Opus 4.6 runs multiple reviewer agents in parallel
**Cost:** ~$0.40-$1.20 per review
**Use Case:** Critical code changes, security reviews

### 4.2 Ultraplan

**What:** Cloud plan drafting with Opus 4.6
**How:** Cloud Opus 4.6 drafts comprehensive implementation plan
**Cost:** ~$0.40-$1.20 per plan
**Use Case:** Complex features, architectural decisions

### 4.3 Auto Mode

**What:** Safety classifier evaluates every action
**How:** Separate model reviews commands before execution
**Blocking:** Scope escalation, unknown infrastructure, hostile-content-driven actions
**Use Case:** Unattended runs, CI/CD pipelines

### 4.4 Dynamic Workflows (/workflows)

**What:** Custom workflow definitions
**How:** Define multi-step processes with conditions
**Use Case:** Complex development workflows, team processes

### 4.5 Scheduled Tasks (/schedule)

**What:** Cron-based task scheduling
**How:** Schedule maintenance, monitoring, automation
**Use Case:** Automated testing, dependency updates, security scans

### 4.6 Remote Control (/rc)

**What:** Monitor/approve from mobile
**How:** WebSocket connection to running session
**Use Case:** Long-running tasks, approval workflows

### 4.7 Voice Dictation (/voice)

**What:** Hands-free coding
**How:** Voice-to-text for prompts
**Use Case:** Accessibility, hands-free development

### 4.8 Chrome Integration (/chrome)

**What:** Browser automation
**How:** Control Chrome for testing, screenshots
**Use Case:** E2E testing, visual verification

---

## 5. Hook System (Complete Reference)

### 5.1 Hook Types

| Type | Description | Use Case |
|------|-------------|----------|
| **command** | Run shell command | Auto-lint, auto-format |
| **http** | HTTP request to webhook | Logging, analytics |
| **mcp_tool** | MCP tool invocation | External integrations |
| **prompt** | Inject prompt | Context modification |
| **agent** | Spawn subagent | Complex workflows |

### 5.2 Lifecycle Events (25 Total)

**Blocking-capable (can prevent execution):**
- PreToolUse
- PostToolUse
- PreCommand
- PostCommand
- PreFileWrite
- PostFileWrite
- PreEdit
- PostEdit
- PreMCPToolUse
- PostMCPToolUse
- Stop

**Informational (logging only):**
- SessionStart
- SessionEnd
- ContextLoaded
- ContextSaved
- CompactStart
- CompactEnd
- SubagentSpawn
- SubagentComplete
- WorkflowStart
- WorkflowEnd
- HookRegistered
- HookTriggered
- HookCompleted
- HookFailed

### 5.3 JSON Formats

**Input (PreToolUse):**
```json
{
  "tool_name": "Bash",
  "tool_input": {
    "command": "npm test"
  },
  "session_id": "abc123",
  "cwd": "/path/to/project"
}
```

**Output (blocking):**
```json
{
  "decision": "block",
  "reason": "Tests must pass before commit"
}
```

**Output (allow):**
```json
{
  "decision": "allow"
}
```

---

## 6. Context Management (Complete Guide)

### 6.1 Degradation Thresholds

| Context Usage | Status | Action |
|---------------|--------|--------|
| 0-40% | Green | Normal operation |
| 40-60% | Yellow | Monitor closely |
| 60-80% | Orange | Consider `/compact` |
| 80-95% | Red | `/clear` or new session |
| 95%+ | Critical | Immediate action |

### 6.2 Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| **Waste Factor** | current turn tokens / first turn tokens | < 3.0 |
| **Context Efficiency** | useful tokens / total tokens | > 0.7 |
| **Session Length** | total turns / context window | < 50% |

### 6.3 Strategies

| Strategy | When to Use | How |
|----------|-------------|-----|
| **Document-and-Clear** | Complex tasks | Dump plan to markdown, /clear, new session |
| **Subagent Isolation** | Research tasks | Delegate to subagent, keep main clean |
| **Checkpointing** | Risky changes | Double-tap Escape, restore later |
| **/compact with hints** | Long sessions | `/compact Focus on API changes` |
| **/btw for side questions** | Quick questions | Answer in overlay, no context pollution |

---

## 7. Git Workflows (Best Practices)

### 7.1 PR Best Practices

| Practice | Detail | Source |
|----------|--------|--------|
| **Keep PRs small** | p50 of 118 lines | Boris Cherny |
| **Always squash merge** | Clean linear history | Boris Cherny |
| **Commit often** | Aim for 1 commit/hour | Boris Cherny |
| **Tag @claude** | Review assistance | Boris Cherny |

### 7.2 Git Worktrees

**Setup:**
```bash
git worktree add ../feature-branch feature-branch
cd ../feature-branch
claude --name feature-session
```

**Benefits:**
- Parallel sessions without conflicts
- Isolated workspaces
- Easy cleanup

### 7.3 GitHub Actions Integration

**Auto-review on @claude:**
```yaml
- name: Claude Code Review
  if: contains(github.event.comment.body, '@claude')
  run: claude -p "Review this PR: ${{ github.event.pull_request.diff_url }}"
```

**Scheduled maintenance:**
```yaml
- name: Daily Security Scan
  schedule:
    - cron: '0 0 * * *'
  run: claude -p "Run security audit on codebase"
```

---

## 8. Skills Evaluation System

### 8.1 Evaluation Methods

| Method | Description | Use Case |
|--------|-------------|----------|
| **Keyword Matching** | Match task keywords to skill triggers | Simple tasks |
| **Pattern Matching** | Regex on task description | Complex patterns |
| **File Path Mapping** | Match file paths to skill domains | File-specific tasks |
| **Intent Detection** | LLM classifies user intent | Ambiguous tasks |
| **Directory Mapping** | Match directories to skills | Monorepo tasks |

### 8.2 Confidence Scoring

| Score | Action |
|-------|--------|
| 0.0-0.3 | No skill match |
| 0.3-0.7 | Optional skill suggestion |
| 0.7-0.9 | Strong skill match |
| 0.9-1.0 | Auto-invoke skill |

---

## 9. Cross-Model Workflows

### 9.1 Claude + Codex Pipeline

**Workflow:**
1. **Plan:** Claude generates implementation plan
2. **QA Review:** Codex reviews plan for completeness
3. **Implement:** Claude implements changes
4. **Verify:** Codex runs tests, checks edge cases
5. **Ship:** Claude creates PR

### 9.2 Claude + Gemini Integration

**Workflow:**
1. **Analyze:** Gemini analyzes architecture
2. **Design:** Claude designs implementation
3. **Code:** Claude implements
4. **Review:** Gemini reviews for best practices

### 9.3 Tools

| Tool | Stars | Description |
|------|-------|-------------|
| **claude-code-router** | 34k+ | Route tasks between models |
| **CLIProxyAPI** | 32k+ | CLI proxy for multiple models |
| **codex-plugin-cc** | 18k+ | Codex integration for Claude |
| **pal-mcp-server** | 12k+ | Multi-model MCP server |
| **claude_codex_bridge** | 2.9k+ | Direct bridge between models |

---

## 10. Recommendations

### 10.1 High Priority (Immediate Impact)

| Section | Content | Effort |
|---------|---------|--------|
| **Context Management** | 40%/60% thresholds, waste factor, strategies | Medium |
| **Hook Reference** | 25 lifecycle events, JSON formats, examples | Large |
| **Tips & Tricks** | Boris Cherny, Thariq, community tips | Small |
| **Git Workflows** | PR best practices, worktrees, GitHub Actions | Medium |
| **Advanced Features** | Ultrareview, Ultraplan, Auto Mode | Medium |

### 10.2 Medium Priority (Value Add)

| Section | Content | Effort |
|---------|---------|--------|
| **Development Workflows** | Explore-Plan-Code-Commit, Writer/Reviewer | Medium |
| **Multi-Agent Orchestration** | Agent teams, parallel execution | Large |
| **Skill Evaluation System** | Keyword, pattern, intent detection | Medium |
| **Expanded Skill Library** | 50+ skills across 9 domains | Large |
| **Security & Governance** | Auto mode, permission rules, sandboxing | Medium |

### 10.3 Low Priority (Nice to Have)

| Section | Content | Effort |
|---------|---------|--------|
| **Cost Optimization** | Token usage, model selection | Small |
| **Voice Dictation** | /voice integration | Small |
| **Chrome Integration** | Browser automation | Medium |
| **Cross-Model Workflows** | Claude + Codex, Gemini | Medium |

---

## 11. Sources Analyzed

### Repositories
1. hesreallyhim/awesome-claude-code (45k+ stars)
2. shanraisshan/claude-code-best-practice (55k+ stars)
3. ChrisWiles/claude-code-showcase (5.9k stars)
4. alirezarezvani/claude-skills (16.7k stars)
5. obra/superpowers (215k stars)
6. anthropics/claude-code (130k stars)
7. anthropics/skills (146k stars)
8. mattpocock/skills (114k stars)
9. luongnv89/claude-howto (34.5k stars)
10. bfly123/claude_codex_bridge (2.9k stars)

### Official Documentation
1. code.claude.com/docs/en/best-practices
2. support.claude.com/en/articles/14554000-claude-code-power-user-tips
3. morphllm.com/claude-md-examples
4. Anthropic official documentation

### Expert Sources
1. Boris Cherny (Claude Code creator) - Tips
2. Thariq (Anthropic engineer) - Tips
3. Community tips from r/ClaudeAI
4. Edmund Yong (YouTube guide)
5. John Kim (50 tips guide)
