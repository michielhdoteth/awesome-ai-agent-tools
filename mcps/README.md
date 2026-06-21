# MCP Server Catalog

Curated Model Context Protocol (MCP) servers for AI-assisted development. Each entry includes install commands, GitHub links, and security notes.

## 68 Servers Across 17 Categories

| Category | Count | Top Servers |
|----------|------:|-------------|
| **Official Reference** | 6 | Filesystem, Fetch, Memory, Sequential Thinking, Git, Time |
| **Developer Tools** | 8 | Context7 (53K stars), MarkItDown (119K stars), GitHub MCP, Task Master |
| **Browser Automation** | 4 | Playwright (31K stars), Firecrawl (29.7K stars), Chrome DevTools, Puppeteer |
| **Databases** | 8 | PostgreSQL, SQLite, Redis, Supabase, MongoDB, MindsDB |
| **Cloud Platforms** | 5 | AWS (8K stars), Cloudflare, DigitalOcean, Vercel, EdgeOne |
| **DevOps** | 5 | Docker (4K stars), Kubernetes, Terraform, Pulumi, kubectl |
| **Communication** | 4 | Slack, Notion, Linear, Google Workspace |
| **Search** | 4 | Brave Search, Tavily, Serper, Jina AI |
| **AI & ML** | 3 | MiniMax (16.8K stars), UI-TARS (29.5K stars), EverArt |
| **Agent Orchestration** | 3 | n8n (185K stars), Ruflo (32.6K stars), Claude-Flow |
| **Marketing** | 1 | NotFair (~2.9K stars) - SEO, Google Ads, Meta Ads |
| **Monitoring** | 3 | Netdata (78K stars), Grafana, Sentry |
| **Security** | 3 | Aperion Shield, Grype, Wundervault |
| **Design** | 2 | Figma, Canva |
| **Finance** | 3 | Stripe, Dodo Payments, FLOX |
| **Maps** | 2 | Google Maps, Amap |
| **Research & Data** | 3 | TrendRadar (53K stars), Scrapling (38K stars), GPT-Researcher |

### NotFair - Marketing Skills

**NotFair (~2.9K stars)** - Open-source Claude Code skills for SEO, GEO, Google Ads, and Meta Ads.

| Skill Area | Capabilities |
|------------|-------------|
| **SEO** | Site analysis, keyword research, meta tags, schema markup, GEO optimization, content writing |
| **Google Ads** | Campaign audits, wasted-spend detection, search-term cleanup, keyword and bid management |
| **Meta Ads** | ROAS analysis, creative fatigue detection, audience overlap analysis |

Connects to live data via: Google Ads MCP, Meta Ads MCP, Google Search Console MCP, Google Analytics (GA4) MCP

- **GitHub:** [github.com/nowork-studio/NotFair](https://github.com/nowork-studio/NotFair)
- **Website:** [notfair.co](https://notfair.co/)

## Quick Install

```bash
# Official MCP servers
npx -y @modelcontextprotocol/server-filesystem /path/to/dir
npx -y @modelcontextprotocol/server-memory
npx -y @modelcontextprotocol/server-fetch

# Popular community servers
npx -y @upstash/context7-mcp
npx -y @playwright/mcp
npx -y @anthropic-ai/chrome-devtools-mcp

# Marketing
npx -y notfair-mcp
```

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata
- [essential-mcps.md](essential-mcps.md) - Getting started guide
- [mcp-introduction.md](mcp-introduction.md) - What is MCP?
