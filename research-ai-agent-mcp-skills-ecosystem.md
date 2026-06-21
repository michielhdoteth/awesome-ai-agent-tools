# Research: AI Agent / MCP / Skills Ecosystem - June 2025

## Executive Summary

The MCP (Model Context Protocol) ecosystem has exploded since Anthropic open-sourced it in November 2024. As of June 2025:
- **19,700+ MCP servers** exist (up from ~500 in Jan 2026, ~1,200 a year prior)
- **97 million monthly SDK downloads** (March 2026)
- OpenAI, Google DeepMind, and Microsoft have all adopted MCP
- MCP was donated to the Linux Foundation's Agentic AI Foundation (Dec 2025)
- **Skills** are emerging as the next major abstraction layer after MCP

---

## 1. TOP 20 RECOMMENDED MCP SERVERS

### Tier 1: Must-Have (Day One Installs)

| # | MCP Server | Stars | Category | Purpose |
|---|-----------|-------|----------|---------|
| 1 | **GitHub MCP Server** | 30.8k | Code & Productivity | Issues, PRs, code search, CI/CD, repository management. Official from GitHub. |
| 2 | **Filesystem MCP** | 15k+ | Core | Read/write files, directory operations. Essential baseline. |
| 3 | **Brave Search MCP** | 5k+ | Web Search | Real-time web search via Brave API. Free tier available. |
| 4 | **Context7 MCP** | 56.2k | Documentation | Version-accurate library docs. Eliminates hallucinated API names. |
| 5 | **Playwright MCP** | 33.1k | Browser Automation | Browser control, screenshots, E2E testing. Official from Microsoft. |

### Tier 2: High-Value (Add Based on Your Stack)

| # | MCP Server | Stars | Category | Purpose |
|---|-----------|-------|----------|---------|
| 6 | **PostgreSQL MCP** | 5k+ | Database | Schema inspection, read-only queries. Essential for backend work. |
| 7 | **Firecrawl MCP** | 6.5k | Web Scraping | Turn any website into clean LLM-ready data. Strips nav/ads/markup. |
| 8 | **Supabase MCP** | 1.7k | Database + Auth | Full Supabase integration with Row Level Security awareness. |
| 9 | **Notion MCP** | 4.4k | Productivity | Access Notion databases, pages, blocks. Official from Notion. |
| 10 | **Linear MCP** | 2.1k+ | Project Management | Read/update Linear issues. Team context without copy-pasting. |

### Tier 3: Specialized Power Tools

| # | MCP Server | Stars | Category | Purpose |
|---|-----------|-------|----------|---------|
| 11 | **Sentry MCP** | 687 | Observability | Pull error details, stack traces, issue counts for debugging. |
| 12 | **Framelink Figma MCP** | 14.9k | Design-to-Code | Read design specs, extract dimensions, colors, components. |
| 13 | **Docker MCP** | 3k+ | DevOps | Manage containers, images, volumes, networks. |
| 14 | **Slack MCP** | 3k+ | Communication | Messages, channels, workspace management. |
| 15 | **Atlassian MCP** | 2.1k | Project Management | Jira + Confluence in one install. |

### Tier 4: Emerging/Ecosystem

| # | MCP Server | Stars | Category | Purpose |
|---|-----------|-------|----------|---------|
| 16 | **Exa MCP** | 4.5k | Semantic Search | Find similar content, deep research. Paid API. |
| 17 | **Cloudflare MCP** | 3.8k | Cloud & Edge | Workers, KV, cloud services. |
| 18 | **AWS MCP Servers** | 9.1k | Cloud | DynamoDB, Aurora, Neptune. Full AWS suite. |
| 19 | **Vercel MCP** | 2k+ | Deployment | Deploy, manage, monitor Vercel projects. |
| 20 | **Puppeteer MCP** | 2.4k | Browser | Web navigation, screenshots, scraping. |

---

## 2. NEW SKILL CATEGORIES (Didn't Exist 6 Months Ago)

### A. Multimedia Generation (HOT RIGHT NOW)

| Category | Tools/Examples | What It Does |
|----------|---------------|--------------|
| **Video Generation** | Arcframe MCP, mcp-video-gen, Pixazo MCP | Text-to-video (Veo 3.1, Kling 2.5, Sora 2, Seedance), image-to-video |
| **Voice Cloning** | mcp-voice-clone, ElevenLabs MCP, Fish Audio MCP | Clone voices from audio samples, generate speech |
| **3D Model Generation** | BlenderMCP (10.5k stars!), Context3D, Tripo3D MCP | Text-to-3D, image-to-3D (GLB output) |
| **Image Generation** | MiniMax MCP, Arcframe, Pixazo (50+ models) | Flux, Imagen 4, Ideogram, GPT Image |
| **Music Generation** | Suno V5, Lyria 2, Stable Audio MCP | Instrumental music, songs with lyrics |
| **Virtual Try-On** | Fashn, Kling, IDM MCPs | Virtual clothing/accessories try-on |

### B. Advanced Browser Automation

| Tool | What It Does |
|------|--------------|
| **Browserbase MCP** | Remote browser control via Stagehand |
| **Playwright MCP** | Full browser automation, accessibility snapshots |
| **Firecrawl /interact** | Scrape + take actions via natural language |

### C. Research & Knowledge

| Tool | What It Does |
|------|--------------|
| **Semantic Scholar MCP** | 50k uses. Academic papers, citation analysis, PDF extraction |
| **PubMed MCP** | Medical literature search |
| **Trends MCP** | 12+ data sources: Google, YouTube, TikTok, Reddit, Amazon trends |

### D. Finance & Crypto

| Tool | What It Does |
|------|--------------|
| **Blockscout MCP** | Blockchain data, balances, tokens, NFTs, contracts |
| **Paradex MCP** | Perpetual futures trading, order management |
| **Dodo Payments MCP** | Payments, subscriptions, license keys |

### E. Compliance & Security

| Tool | What It Does |
|------|--------------|
| **Obsidian Regulatory MCP** | 850+ official sources across 50+ jurisdictions |
| **WhisperGraph MCP** | 7.39B node threat intelligence graph |
| **Grype MCP** | Container vulnerability scanning |

---

## 3. MAJOR SKILLS FRAMEWORKS

### Superpowers (234k+ GitHub stars!)
- **The #1 skills framework** for AI coding agents
- Created by Jesse Vincent (obra)
- Composable skills for: TDD, systematic debugging, brainstorming, subagent-driven development, code review
- Supports: Claude Code, OpenCode, Cursor, Codex, Gemini CLI, Windsurf, and 8+ more
- Key principle: "Instead of making the agent smarter, enforce discipline"
- Available via official Claude plugin marketplace

### ClaudSkills.com
- **121,000+ community-contributed skills** catalog
- 10 categories, 118 sub-categories
- Auto-mined from GitHub nightly
- Categories: security, engineering, growth, sales, content, science, product, tools, ads, general

### OpenCode Skills
- Native support since v1.0.190
- Skills stored as `SKILL.md` files with YAML frontmatter
- Locations: `.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`, `.agents/skills/`
- Pattern-based permissions per agent

---

## 4. MCP REGISTRIES & DISCOVERY

| Registry | Servers | Key Feature |
|----------|---------|-------------|
| **Glama.ai** | 38,537 | Largest indexed registry. Security scoring. Quality scores. |
| **mcp.so** | 22,569 | Largest catalog. Chinese tech presence. |
| **Smithery** | 3,068+ | CLI install, managed OAuth, hosted servers |
| **FindMCP** | 8,000+ | Weekly trending, install counts |
| **MCP Market** | 100+ (curated) | GitHub stars ranking |
| **Awesome MCP Servers** | 7,747+ (TensorBlock) | Community-curated, searchable API |
| **Docker MCP Catalog** | N/A | Containerized servers with isolation |
| **PulseMCP** | N/A | Curated trending servers + clients |
| **ClaudSkills** | 121,000+ | Skills catalog (not MCP servers) |

---

## 5. COMMUNITY RECOMMENDATIONS (Reddit/HN/June 2025)

### AI Coding Assistant Rankings (Community Consensus)
1. **Claude Code** - "Best for actual longer coding tasks", most accurate, terminal-based
2. **Cursor** - Best UX, AI-native editor, agent mode
3. **OpenCode** - Open source, model-agnostic, supports MCP + skills + subagents
4. **Roo Code / Cline** - Advanced users, memory bank feature, multi-model support
5. **Codex (OpenAI)** - Good for bug fixes and code review, generous limits
6. **GitHub Copilot** - Solid autocomplete, 300 requests without token worries

### What People Are Actually Using
- **MCPs are huge** for productivity - "Learn how to make your own and you'll speed up development even more"
- **Gemini 2.5 Pro** is "blowing people away" with Cline + memory bank
- **Architect mode** (planning model + coding model) outperforms single models by ~10%
- Most developers use **3-6 MCP servers** - more than 10 slows the agent down
- **Superpowers** is "essential" for production Claude Code work

### Hot Topics
- **Skills > MCP** for some use cases - Simon Willison: "Claude Skills are awesome, maybe a bigger deal than MCP"
- **Subagent-driven development** is the new frontier
- **Context engineering** (planning, memory banks) makes massive difference
- **Multi-model workflows** (different models for planning vs. coding)

---

## 6. SPECIFIC GITHUB REPOS WORTH INVESTIGATING

### MCP Servers
| Repo | Stars | What |
|------|-------|------|
| `github/github-mcp-server` | 30.8k | Official GitHub MCP |
| `upstash/context7-mcp` | 56.2k | Live documentation |
| `microsoft/playwright-mcp` | 33.1k | Browser automation |
| `punkpeye/awesome-mcp-servers` | 87.3k | Community catalog |
| `ahujasid/blender-mcp` | 10.5k | 3D modeling |
| `firecrawl/firecrawl-mcp` | 6.5k | Web scraping |
| `exa-labs/exa-mcp-server` | 4.5k | Semantic search |
| `modelcontextprotocol/servers` | 86.3k | Official reference servers |

### Skills & Agent Frameworks
| Repo | Stars | What |
|------|-------|------|
| `obra/superpowers` | 234k+ | #1 skills framework |
| `anthropics/skills` | N/A | Official Anthropic skills |
| `karanb192/awesome-claude-skills` | 377 | 50+ verified skills |
| `malhashemi/opencode-skills` | N/A | OpenCode skills plugin |
| `joshuadavidthomas/opencode-agent-skills` | N/A | OpenCode skills with extras |

### Registries & Tools
| Repo | Stars | What |
|------|-------|------|
| `tensorblock/awesome-mcp-servers` | 746 | Searchable MCP index |
| `chatmcp/mcpso` | 2k | mcp.so directory |
| `tolkonepiu/best-of-mcp-servers` | N/A | 400 MCPs, 1.1M stars total |

---

## 7. WHAT'S "HOT RIGHT NOW" (June 2025)

### Trending NOW
1. **Multimedia MCP servers** - Video/voice/3D generation from AI agents
2. **Skills frameworks** - Superpowers dominating, skills becoming the abstraction layer above MCP
3. **Multi-model agent workflows** - Using different models for planning vs execution
4. **Remote/HTTP MCP servers** - Moving beyond STDIO to hosted, managed servers
5. **MCP in enterprise** - Salesforce Agentforce 3 adding native MCP support
6. **Google Gemini CLI** - Open-source AI agent, free 60 req/min
7. **Browser automation** - Playwright MCP, Browserbase for web interaction
8. **AI agent observability** - SUPERWISE AgentOps, monitoring agent behavior

### Emerging (Watch Closely)
1. **Agent-to-agent protocols** - CB Insights "Team of Agents" pattern
2. **Voice-first agents** - Voice cloning MCPs enabling natural conversation
3. **3D/AR generation** - BlenderMCP popular, VR content creation
4. **Regulatory compliance MCPs** - 850+ official sources
5. **Crypto/Web3 MCPs** - Blockchain data, DeFi trading
6. **AI-native IDEs** - Cursor, OpenCode, Kilo Code competing with VS Code extensions
7. **Token-efficient MCPs** - Tools like kie-ai that load only needed tools to save context

### Dying Down
- Basic code completion (commoditized)
- Single-model workflows (multi-model is the future)
- STDIO-only MCP servers (remote HTTP is the trend)

---

## 8. RECOMMENDATIONS FOR THIS PROJECT

### Immediate Adds (High Impact)
1. **Context7 MCP** - Eliminate hallucinated API names (56k stars, must-have)
2. **Firecrawl MCP** - Web research and scraping
3. **Playwright MCP** - Browser automation for testing
4. **GitHub MCP** - Already essential, ensure it's configured

### Skills to Create
1. **Multimedia Generation Skill** - Video, image, voice, 3D from agents
2. **Research & Trends Skill** - Academic papers, web trends, competitor analysis
3. **Financial Data Skill** - Crypto, market data, payment processing
4. **Compliance & Regulatory Skill** - Multi-jurisdiction data access

### Registry Integration
- Consider publishing to **Smithery** for distribution
- List on **Glama.ai** for discoverability
- Contribute to **awesome-mcp-servers** (87k stars, high visibility)

### Architecture Decisions
- MCP is now the universal standard - all major AI tools support it
- Skills are the abstraction layer above MCP - plan for both
- Remote/HTTP MCP servers are the trend - design for hosted deployment
- Token efficiency matters - don't load unused tool schemas

---

## 9. OPEN QUESTIONS

1. How will MCP authentication evolve? (OAuth, API keys, managed auth)
2. Will skills become a formal standard like MCP?
3. How will local/edge MCP servers compete with cloud-hosted?
4. What's the right number of MCP servers for a project? (Community says 3-6)
5. How will MCP interact with emerging agent-to-agent protocols?
6. What's the future of the awesome-mcp-servers list vs. registries like Glama?

---

*Research compiled: June 2026*
*Sources: GitHub, Reddit, Hacker News, Smithery, Glama, mcp.so, various tech blogs and documentation*
