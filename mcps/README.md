# MCP Server Catalog

Curated Model Context Protocol (MCP) servers for AI-assisted development. Each entry includes install commands, GitHub links, and security notes.

## 97 Servers Across 18 Categories

| Category | Count | Top Servers |
|----------|------:|-------------|
| **Official Reference** | 6 | Filesystem, Fetch, Memory, Sequential Thinking, Git, Time |
| **Developer Tools** | 11 | Context7 (53K stars), CodeGraph (54K stars), MarkItDown (119K stars), Atlassian, Desktop Commander |
| **Browser Automation** | 4 | Playwright (31K stars), Firecrawl (29.7K stars), Chrome DevTools, Puppeteer |
| **Databases** | 13 | PostgreSQL, MongoDB, Redis, Elasticsearch, Snowflake, dbt, Airtable |
| **Cloud Platforms** | 5 | AWS (8K stars), Cloudflare, DigitalOcean, Vercel, EdgeOne |
| **DevOps** | 6 | Docker (4K stars), Kubernetes, Terraform (HashiCorp), Pulumi, kubectl |
| **Communication** | 8 | Slack, Notion, Linear, Google Workspace, Asana, Obsidian |
| **Search** | 8 | Brave Search, Tavily, Perplexity, Serper, Jina AI, Last30Days |
| **AI & ML** | 6 | MiniMax (16.8K stars), UI-TARS (29.5K stars), Arize Phoenix, Langfuse, OpenRouter |
| **Agent Orchestration** | 5 | n8n (22K stars), Zapier, Ruflo (32.6K stars), Claude-Flow |
| **Marketing** | 1 | NotFair (~2.9K stars) - SEO, Google Ads, Meta Ads |
| **Monitoring** | 6 | Netdata (78K stars), Grafana, Datadog, Sentry, Sentry v2 |
| **Security** | 3 | Aperion Shield, Grype, Wundervault |
| **Design** | 3 | Figma, Figma Context (15K stars), Canva |
| **Finance** | 4 | Stripe, Dodo Payments, FLOX |
| **Maps** | 2 | Google Maps, Amap |
| **Research & Data** | 5 | TrendRadar (53K stars), Scrapling (38K stars), GPT-Researcher, Last30Days |
| **Data Engineering** | 1 | dbt MCP |

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

# New this week
npx -y @openrouter/mcp-server
npx -y @sentry/mcp-server
npx -y @anthropic-ai/codegraph-mcp
npx -y @last30days/mcp-server
npx -y @tavily/mcp-server
npx -y @perplexity/mcp-server
npx -y @hashicorp/terraform-mcp-server
npx -y @grafana/mcp-grafana
npx -y @mongodb/mongodb-mcp-server
npx -y @redis/mcp-redis

# Marketing
npx -y notfair-mcp
```

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata
- [essential-mcps.md](essential-mcps.md) - Getting started guide
- [mcp-introduction.md](mcp-introduction.md) - What is MCP?
