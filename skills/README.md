# Skills Library

Curated AI agent skills following the [SKILL.md open standard](https://agentskills.io). Each skill is a reusable instruction file that teaches AI agents how to perform specific tasks.

## Local Skills (19 files)

These skills are included in this repo and can be copied directly to your project.

| Category | Skills |
|----------|--------|
| **Development** | brainstorming, code-reviewer, systematic-debugging, test-driven-development, writing-plans, verification-before-completion, subagent-driven-development |
| **Content** | cold-email, copywriting, humanizer, writing |
| **Design** | figma-design-to-code, multimedia-generation |
| **DevOps** | devops-infrastructure, git-commit-writer |
| **Data** | data-analysis |
| **Security** | mcp-security |
| **Testing** | playwright-automation |

## External Skills (54 references)

The full catalog includes 54 additional skills from external sources with install commands:

| Source | Skills | Install |
|--------|--------|---------|
| **obra/superpowers** | 13 skills | `npx skills add obra/superpowers` |
| **anthropics/skills** | 7 skills | `npx skills add anthropics/skills` |
| **mattpocock/skills** | 15 skills | `npx skills add mattpocock/skills` |
| **vercel-labs/agent-skills** | 8 skills | `npx skills add vercel-labs/agent-skills` |
| **Other sources** | 11 skills | See catalog.json |

## How to Use

### Copy Local Skills
```bash
# Claude Code
cp -r skills/brainstorming/ your-project/.claude/skills/

# OpenCode
cp -r skills/brainstorming/ your-project/.opencode/skills/

# Codex
cp -r skills/brainstorming/ your-project/.agents/skills/
```

### Install External Skills
```bash
# Install from source
npx skills add obra/superpowers --skill brainstorming

# Install all from a source
npx skills add mattpocock/skills
```

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata
- Individual skill directories for local skills
