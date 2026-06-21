# Awesome Model Context Protocol (MCP) Servers

A curated collection of **66 verified MCP servers** for AI-assisted development and agent workflows. Model Context Protocol is the universal standard (now under the Linux Foundation) for connecting AI agents to tools, databases, and external services.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Standard](https://img.shields.io/badge/Standard-MCP_2026-blue.svg)](https://modelcontextprotocol.io)
[![Servers Count](https://img.shields.io/badge/Servers-66-green.svg)](#full-catalog)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** June 2026

## What is MCP?

Model Context Protocol (MCP) is an open standard that standardizes how AI applications connect to external data sources and tools. Think of it as a **USB-C port for AI** — one universal interface that lets any AI model access any tool or data source.

### Key Stats (June 2026)
- **19,700+ MCP servers** exist across registries
- **97M+ monthly SDK downloads** (Python 45%, JS/TS 30-35%)
- **Donated to Linux Foundation** (Agentic AI Foundation) in December 2025
- **Every major AI vendor** adopted MCP: OpenAI, Google, Microsoft, Anthropic
- **Glama.ai** indexes 34,542 servers; **Smithery.ai** indexes 4,700+

### How MCP Works

```
AI Agent (Claude, GPT, Gemini)
    |
    v
MCP Protocol (JSON-RPC over Streamable HTTP or stdio)
    |
    v
MCP Server (tool implementation)
    |
    v
External Service (database, API, filesystem, etc.)
```

### Security Warning

**66% of scanned MCP servers have security findings.** Always:
- Use read-only mode by default
- Prefer OAuth over static API keys
- Validate tool inputs before execution
- Audit servers before production use

See our [MCP Security Skill](../skills/mcp-security/SKILL.md) for hardening guidance.

## Quick Start

```bash
# Install a popular MCP server via npx
npx @upstash/context7-mcp@latest

# Or use the MCP CLI for automatic agent configuration
npx add-mcp https://mcp.neon.tech/mcp
```

## Full Catalog

Browse the complete catalog: [`mcps/catalog.json`](catalog.json)

66 servers across 16 categories, each with GitHub links, stars, install commands, and license info.

## Top 10 by GitHub Stars

| Rank | Server | Stars | Category | Description |
|------|--------|------:|----------|-------------|
| 1 | **n8n** | 185K | Agent Orchestration | Workflow automation platform with MCP integration |
| 2 | **MarkItDown** | 119K | Developer Tools | Microsoft document converter (PDF/Office to Markdown) |
| 3 | **modelcontextprotocol/servers** | 87.5K | Official Reference | Anthropic reference implementations (filesystem, memory, etc.) |
| 4 | **Netdata** | 78K | Monitoring | Real-time infrastructure monitoring |
| 5 | **TrendRadar** | 53.4K | Research | Trend monitoring across web sources |
| 6 | **Context7** | 53.3K | Developer Tools | Live version-pinned library documentation |
| 7 | **Scrapling** | 38.2K | Browser/Web | Adaptive web scraping |
| 8 | **MindsDB** | 39K | Databases | 200+ data sources via one MCP endpoint |
| 9 | **UI-TARS** | 29.5K | AI & ML | GUI agent for browser/desktop automation |
| 10 | **Playwright MCP** | 31K | Browser/Web | Microsoft browser automation (de facto standard) |

## Most Searched MCP Servers

Based on search volume data (180K+ monthly searches across all MCP servers):

| Server | Monthly Searches | Category |
|--------|----------------:|----------|
| Playwright MCP | 35,000 | Browser Automation |
| Figma MCP | 23,000 | Design |
| GitHub MCP | 17,000 | Developer Tools |
| Context7 | 13,000 | Documentation |
| Cursor MCP | 12,000 | IDE Integration |
| Supabase MCP | 11,000 | Databases |
| Notion MCP | 9,500 | Communication |
| n8n MCP | 9,200 | Orchestration |
| Zapier MCP | 6,700 | Automation |
| Jira MCP | 6,100 | Project Management |

## Categories

### Official Reference MCPs

Maintained by the MCP steering group as reference implementations.

| Server | Description | Install |
|--------|-------------|---------|
| **Filesystem** | Secure file operations with configurable access controls | `npx -y @modelcontextprotocol/server-filesystem` |
| **Fetch** | Web content fetching and HTML-to-markdown conversion | `uvx mcp-server-fetch` |
| **Memory** | Persistent knowledge graph memory across sessions | `npx -y @modelcontextprotocol/server-memory` |
| **Sequential Thinking** | Dynamic problem-solving through structured thought sequences | `npx -y @modelcontextprotocol/server-sequential-thinking` |
| **Git** | Read, search, and manipulate Git repositories | `uvx mcp-server-git` |
| **Brave Search** | Official Brave Search API for web and local results | `npx -y @anthropic-ai/brave-search-mcp-server` |

### Developer Tools

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Context7** | 53.3K | Version-pinned library documentation | `npx @upstash/context7-mcp@latest` |
| **MarkItDown** | 119K | Microsoft document converter | `pip install markitdown[mcp]` |
| **Serena** | - | Language server protocol for code intelligence | Via Docker |
| **GitHub MCP** | 30.8K | Issues, PRs, code search, actions | Via Docker |

### Browser & Web Scraping

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Playwright MCP** | 31K | Cross-browser automation (Chrome, Firefox, Safari) | `npx @anthropic-ai/mcp-server-playwright` |
| **Firecrawl** | 29.7K | Web scraping, crawling, extraction | `npx -y firecrawl-mcp` |
| **Chrome DevTools** | - | Performance profiling with Core Web Vitals | Via Docker |

### Databases

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **PostgreSQL** | 2.9K | Database queries, index tuning, health checks | `pip install postgres-mcp` |
| **Neon** | 609 | Serverless Postgres with branching | `npx @neondatabase/mcp-server-neon` |
| **Supabase** | - | Backend management via natural language | Via Docker |
| **MindsDB** | 39K | 200+ data sources via one endpoint | `pip install mindsdb-mcp` |
| **Redis** | - | In-memory data store operations | Via Docker |
| **SQLite** | - | Lightweight embedded database | Via Docker |

### Cloud Platforms

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **AWS MCP** | 9.1K | Full AWS suite (S3, Lambda, DynamoDB, etc.) | Via Docker |
| **Cloudflare** | - | Workers, KV, R2, D1, AI services | `npx @cloudflare/mcp-server` |
| **DigitalOcean** | - | Droplet and app management | Via Docker |
| **Vercel** | - | Deployment and edge functions | Via Docker |

### DevOps

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Docker** | - | Container management and operations | Via Docker |
| **Kubernetes** | - | K8s cluster management | Via Docker |
| **Terraform** | - | Infrastructure as code | Via Docker |
| **Pulumi** | - | Cloud infrastructure programming | Via Docker |

### Communication & Productivity

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Notion** | - | Team knowledge base access | Remote (mcp.notion.com) |
| **Slack** | - | Team communication and channels | Via Docker |
| **Google Workspace** | - | Gmail, Drive, Calendar integration | Via Docker |
| **Obsidian** | - | Markdown knowledge base | Via npm |

### Search & Research

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Brave Search** | - | Web and local search results | `npx -y @anthropic-ai/brave-search-mcp-server` |
| **Perplexity** | 7K | AI-powered search | Via Docker |
| **GPT-Researcher** | 26.5K | Autonomous research agent | Via Docker |

### Agent Orchestration

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **n8n** | 185K | Workflow automation platform | Via Docker |
| **Ruflo** | 32.6K | Agent orchestration framework | Via Docker |
| **Claude-Flow** | 10K | Multi-agent coordination | Via Docker |

### Security

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Aperion Shield** | - | Security policy enforcement | Via Docker |
| **Grype** | - | Vulnerability scanning | Via Docker |

### Design

| Server | Stars | Description | Install |
|--------|------:|-------------|---------|
| **Figma MCP** | - | Design-to-code bridge, write to canvas | Via Docker |
| **Canva MCP** | - | Design creation and export | Via Docker |

## New in 2026

### MCP Apps (January 2026)
Tools now return interactive HTML inside Claude, ChatGPT, Goose, and VS Code via sandboxed iframes. Launch partners: Amplitude, Asana, Box, Canva, Clay, Figma, Hex, monday.com, Slack.

### MCP Gateways
Reverse proxies for auth, logging, and access control across MCP servers. Key players: Glama Gateway, MCP Manager.

### Remote MCP Hosting
Managed hosting for MCP servers with OAuth, persistent connections, and CLI tools. Key platforms: Smithery, Glama, MCPize.

### Stateless HTTP Spec
New MCP specification (2026-07-28 RC) moving from Streamable HTTP to fully stateless HTTP for better scalability.

## Understanding Context Windows

LLM context windows are limited. MCPs solve this by:

1. **Dynamic Retrieval** — Pull relevant info from external sources only when needed
2. **Structured Information** — Clear schemas for how external data is presented
3. **Tool Use** — Let AI use external tools and incorporate results
4. **Long-Term Memory** — Integration with knowledge bases and vector databases
5. **Version Control** — Always access current documentation versions

Each MCP server adds 2,000-5,000 tokens of overhead. Install 3 servers, not 13. Each server is a tax on every prompt.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Add an entry to `mcps/catalog.json` following the schema
3. Submit a PR — our CI validates catalog entries automatically

## Related Libraries

- [Skills Library](../skills/) - AI agent skill files
- [Agent Loops](../loops/) - Reusable agent workflow patterns
- [Contributing Guide](../CONTRIBUTING.md) - How to add skills, MCPs, or loops

---

**Keywords:** MCP servers, Model Context Protocol, AI agent tools, Claude Code MCP, Cursor MCP, OpenCode MCP, Codex MCP, AI tool integration, MCP registry, AI agent infrastructure, serverless AI, agent development, MCP security, AI coding assistant tools, model context protocol servers, AI agent connectivity, cross-platform MCP
