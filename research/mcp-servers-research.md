# Research: MCP Servers for the Claude Code Bible

## Executive Summary

The MCP ecosystem has exploded since late 2024. The punkpeye/awesome-mcp-servers list alone has **88.4k stars** and catalogs thousands of servers across 30+ categories. After analyzing multiple registries (Official MCP Registry, Glama, PulseMCP, MCP Market, awesome-mcp-servers), I've identified the highest-value MCP servers to add to the Claude Code Bible, organized by category and prioritized by stars, official backing, and developer utility.

The Bible already has: Context7, Taskmaster, Wrinkl, Filesystem, Fetch, Memory, Sequential Thinking, Git, Brave, Cloudflare, lunarcrush_mcp, MCP-Codex, NotFair, Squish.

---

## Tier 1: Must-Have (Official, High Stars, Broad Utility)

### Databases

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **Supabase MCP** | [supabase-community/supabase-mcp](https://github.com/supabase-community/supabase-mcp) | ~3k | Official Supabase integration - database, auth, edge functions, storage | Full-stack backend from AI; huge dev community |
| **PostgreSQL** | [modelcontextprotocol/server-postgres](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres) | Official | Read-only PostgreSQL access with schema inspection | Core reference server for any Postgres work |
| **SQLite** | [modelcontextprotocol/server-sqlite](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite) | Official | SQLite operations with built-in analysis | Local database workflows, embedded apps |
| **Redis** | [redis/mcp-redis](https://github.com/redis/mcp-redis) | ~512 | Official Redis MCP - key-value operations, pub/sub, search | Caching, session management, real-time data |
| **MongoDB** | [mongodb-js/mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server) | ~600+ | Atlas support, document operations, aggregations | NoSQL document database access |
| **ClickHouse** | [ClickHouse/mcp-clickhouse](https://github.com/ClickHouse/mcp-clickhouse) | ~200+ | Analytics database integration | OLAP analytics queries |
| **Neon** | [neondatabase/mcp-server-neon](https://github.com/neondatabase/mcp-server-neon) | ~579 | Serverless Postgres with branching | Modern serverless Postgres workflows |
| **MySQL** | [designcomputer/mysql_mcp_server](https://github.com/designcomputer/mysql_mcp_server) | ~400+ | Full MySQL with configurable permissions | Widespread relational database |
| **Pinecone** | [sirmews/mcp-pinecone](https://github.com/sirmews/mcp-pinecone) | ~300+ | Vector database for RAG applications | AI/ML vector search workflows |
| **Qdrant** | [qdrant/mcp-server-qdrant](https://github.com/qdrant/mcp-server-qdrant) | ~200+ | Vector search and semantic memory | Open-source vector DB alternative |
| **Neo4j** | [neo4j-contrib/mcp-neo4j](https://github.com/neo4j-contrib/mcp-neo4j) | ~1k+ | Graph database queries and knowledge graphs | Relationship-heavy data modeling |

### Cloud Platforms

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **AWS MCP** | [awslabs/mcp](https://github.com/awslabs/mcp) | ~9k | 20+ AWS servers: S3, Lambda, DynamoDB, CloudWatch, CDK, Bedrock | Official AWS integration - massive coverage |
| **Azure MCP** | [microsoft/mcp](https://github.com/microsoft/mcp) | ~3k | Azure Storage, Cosmos DB, Monitor, DevOps, Fabric | Official Microsoft Azure integration |
| **Terraform** | [hashicorp/terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server) | ~1.3k | Registry, providers, modules, IaC generation | Infrastructure as Code workflows |
| **Kubernetes** | [manusa/kubernetes-mcp-server](https://github.com/manusa/kubernetes-mcp-server) | ~1.6k | CRUD for any K8s resource + OpenShift support | Container orchestration management |
| **Pulumi** | [pulumi/mcp-server](https://github.com/pulumi/mcp-server) | ~300+ | Infrastructure as Code with Pulumi | Alternative IaC tool support |

### Developer Tools

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **GitHub MCP** | [github/github-mcp-server](https://github.com/github/github-mcp-server) | ~30k | Full GitHub: repos, issues, PRs, Actions, code scanning | THE gold standard for GitHub integration |
| **Playwright MCP** | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | ~33k | Browser automation via accessibility snapshots | Microsoft's official browser automation |
| **Docker** | [QuantGeekDev/docker-mcp](https://github.com/QuantGeekDev/docker-mcp) | ~500+ | Container management, image operations, compose | Container workflow automation |
| **JetBrains** | [jetbrains/mcpProxy](https://github.com/jetbrains/mcpProxy) | ~2k+ | Connect to IntelliJ, PyCharm, WebStorm, all JetBrains IDEs | IDE integration for JetBrains users |
| **Exa Search** | [exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) | ~4.5k | AI-native web search with semantic understanding | Better web search than basic scraping |
| **Firecrawl** | [firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) | ~5.9k | Web scraping, crawling, search, content extraction | Production-grade web scraping |
| **Sentry** | [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | ~621 | Error tracking and performance monitoring | Debug production issues from AI |

### Communication

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **Slack** | [modelcontextprotocol/server-slack](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack) | Official | Channel management and messaging | Team communication integration |
| **Discord** | [discord/discourse-mcp](https://github.com/discourse/discourse-mcp) | Official | Forum integration | Community management |
| **Notion** | [makenotion/notion-mcp-server](https://github.com/makenotion/notion-mcp-server) | ~2k+ | 22 tools for pages, databases, search | Knowledge management and documentation |
| **Atlassian** | [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server) | ~716 | Jira + Confluence integration | Enterprise project management |
| **Telegram** | [chaindead/telegram-mcp](https://github.com/chaindead/telegram-mcp) | ~200+ | API integration for messaging | Popular messaging platform |

### Monitoring

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **Grafana** | [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana) | ~3k | Search dashboards, investigate incidents, query datasources | Official Grafana monitoring integration |
| **Prometheus** | [yshngg/pmcp](https://github.com/yshngg/pmcp) | ~100+ | Prometheus metrics querying | Time-series monitoring |

---

## Tier 2: High Value (Strong Stars, Specific Use Cases)

### Data Science & Analytics

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **dbt** | [dbt-labs/dbt-mcp](https://github.com/dbt-labs/dbt-mcp) | Official | dbt Core/Cloud CLI, metadata, semantic layer | Data transformation workflows |
| **DuckDB** | [ktanaka101/mcp-server-duckdb](https://github.com/ktanaka101/mcp-server-duckdb) | ~100+ | Local analytics database | In-process analytics |
| **Snowflake** | [Snowflake-Labs/mcp](https://github.com/Snowflake-Labs/mcp) | ~200+ | Cortex Agents, SQL, semantic views | Enterprise data warehouse |

### AI/ML Tools

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **Ollama Bridge** | [jaspertvdm/mcp-server-ollama-bridge](https://github.com/jaspertvdm/mcp-server-ollama-bridge) | ~100+ | Local LLM inference via Ollama | Run LLMs locally without API costs |
| **OpenAI Bridge** | [jaspertvdm/mcp-server-openai-bridge](https://github.com/jaspertvdm/mcp-server-openai-bridge) | ~100+ | GPT-4, GPT-4o access through MCP | OpenAI API integration |
| **Gemini Bridge** | [jaspertvdm/mcp-server-gemini-bridge](https://github.com/jaspertvdm/mcp-server-gemini-bridge) | ~100+ | Google Gemini Pro/Flash models | Google AI integration |
| **Chroma** | [chroma-core/chroma-mcp](https://github.com/chroma-core/chroma-mcp) | ~300+ | Local and cloud Chroma vector DB | Open-source vector search |
| **Weaviate** | [weaviate/mcp-server-weaviate](https://github.com/weaviate/mcp-server-weaviate) | ~200+ | Vector collections as knowledge base | Vector DB with GraphQL API |
| **HuggingFace** | Community | ~200+ | Model inference | Access to thousands of ML models |

### Search & Web

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **Tavily** | [tavily-ai/tavily-mcp](https://github.com/tavily-ai/tavily-mcp) | ~500+ | AI-optimized web search | Search API designed for AI agents |
| **Perplexity** | [tanigami/mcp-server-perplexity](https://github.com/tanigami/mcp-server-perplexity) | ~200+ | Real-time web search with citations | Search with source attribution |
| **Apify** | [apify/actors-mcp-server](https://github.com/apify/actors-mcp-server) | ~300+ | 3,000+ pre-built web scrapers | Massive scraping library |
| **Bright Data** | [luminati-io/brightdata-mcp](https://github.com/luminati-io/brightdata-mcp) | ~400+ | Enterprise web scraping and data extraction | Professional-grade data collection |

### Project Management

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **Linear** | [jerhadf/linear-mcp-server](https://github.com/jerhadf/linear-mcp-server) | ~344 | Issue tracking and project management | Modern project management tool |
| **Trello** | Community | ~100+ | Kanban board management | Simple project tracking |
| **Asana** | Community | ~100+ | Task management | Enterprise task management |

### Code Quality & Security

| Name | GitHub | Stars | What It Does | Why It's Useful |
|------|--------|-------|-------------|-----------------|
| **SonarQube** | Community | ~200+ | Code quality and security scanning | Enterprise code quality |
| **Trivy** | Community | ~100+ | Container security scanning | Security vulnerability detection |

---

## Tier 3: Notable (Emerging, Specialized, or Niche)

### Productivity & Notes

| Name | GitHub | Stars | What It Does |
|------|--------|-------|-------------|
| **Obsidian** | [calclavia/mcp-obsidian](https://github.com/calclavia/mcp-obsidian) | ~600+ | Vault access, note management, search |
| **Apple Notes** | Community | ~100+ | Local note access on macOS |
| **Google Workspace** | [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) | ~300+ | Calendar, Drive, Gmail, Docs, Sheets |

### Browser Automation

| Name | GitHub | Stars | What It Does |
|------|--------|-------|-------------|
| **Puppeteer** | [modelcontextprotocol/server-puppeteer](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer) | Official | Browser automation via Chrome DevTools |
| **Browserbase** | [browserbase/mcp-server-browserbase](https://github.com/browserbase/mcp-server-browserbase) | ~500+ | Cloud browser with stealth mode |

### Creative & Design

| Name | GitHub | Stars | What It Does |
|------|--------|-------|-------------|
| **Blender** | [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) | ~22k | 3D modeling and rendering |
| **Figma** | Community | ~500+ | Design file access and manipulation |

### Version Control (Beyond Git)

| Name | GitHub | Stars | What It Does |
|------|--------|-------|-------------|
| **GitLab** | [modelcontextprotocol/server-gitlab](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gitlab) | Official | GitLab API integration |
| **Gitea** | Community | ~100+ | Self-hosted Git forge |

---

## Configuration Examples

### Supabase
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase-community/mcp-server-supabase"],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "your-token"
      }
    }
  }
}
```

### GitHub MCP
```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxx"
      }
    }
  }
}
```

### Playwright
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-playwright"]
    }
  }
}
```

### Grafana
```json
{
  "mcpServers": {
    "grafana": {
      "command": "docker",
      "args": ["run", "--rm", "-e", "GRAFANA_URL", "-e", "GRAFANA_API_KEY", "mcp/grafana"],
      "env": {
        "GRAFANA_URL": "http://localhost:3000",
        "GRAFANA_API_KEY": "your-api-key"
      }
    }
  }
}
```

### Redis
```json
{
  "mcpServers": {
    "redis": {
      "command": "uvx",
      "args": ["redis-mcp-server", "--url", "redis://localhost:6379/0"]
    }
  }
}
```

### Notion
```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_TOKEN": "ntn_xxxx"
      }
    }
  }
}
```

### Exa Search
```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "exa-mcp-server"],
      "env": {
        "EXA_API_KEY": "your-api-key"
      }
    }
  }
}
```

### Firecrawl
```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "fc-your-key"
      }
    }
  }
}
```

---

## Recommendations

### Priority 1: Add Immediately (Official, High Impact)
1. **GitHub MCP** (30k stars) - The Bible already has Git, but GitHub's official MCP is far more powerful
2. **Playwright MCP** (33k stars) - Browser automation is essential for web development
3. **AWS MCP** (9k stars) - Cloud infrastructure management
4. **Firecrawl** (5.9k stars) - Web scraping capabilities
5. **Exa Search** (4.5k stars) - AI-native web search
6. **Supabase MCP** (3k stars) - Full-stack backend database
7. **Grafana MCP** (3k stars) - Monitoring and observability
8. **Azure MCP** (3k stars) - Microsoft cloud integration
9. **Notion MCP** (2k+ stars) - Knowledge management
10. **Terraform MCP** (1.3k stars) - Infrastructure as Code

### Priority 2: Add Soon (Strong Utility)
1. **Redis** (512 stars) - Caching and real-time data
2. **Sentry** (621 stars) - Error tracking
3. **Atlassian** (716 stars) - Jira + Confluence
4. **Obsidian** (600+ stars) - Note management
5. **MongoDB** (600+ stars) - Document database
6. **Neon** (579 stars) - Serverless Postgres
7. **Docker** (500+ stars) - Container management
8. **Tavily** (500+ stars) - AI-optimized search
9. **Bright Data** (400+ stars) - Enterprise web scraping
10. **MySQL** (400+ stars) - Relational database

### Priority 3: Add for Completeness
1. **Kubernetes** (1.6k stars) - Container orchestration
2. **Pulumi** (300+ stars) - Alternative IaC
3. **ClickHouse** (200+ stars) - Analytics database
4. **Qdrant** (200+ stars) - Vector search
5. **Pinecone** (300+ stars) - Vector database
6. **Neo4j** (1k+ stars) - Graph database
7. **Ollama Bridge** - Local LLM inference
8. **Discord** - Community management
9. **Linear** (344 stars) - Project management
10. **dbt** - Data transformation

---

## Risks & Considerations

1. **Configuration Complexity**: Each MCP server requires its own API keys and configuration. The Bible should provide clear setup guides.

2. **Remote vs Local**: Some MCPs are remote (hosted by vendors) while others run locally. The Bible should distinguish these.

3. **Security**: Many MCP servers require API keys with significant permissions. Users should understand the security implications.

4. **Rate Limits**: Cloud-based MCPs (Exa, Firecrawl, etc.) often have rate limits and usage costs.

5. **Maintenance**: Community MCPs may become stale. Official MCPs from vendors (GitHub, AWS, Azure, Grafana) are more reliable.

6. **Transport**: MCP supports stdio and Streamable HTTP transports. The Bible should note which transport each server uses.

---

## Open Questions

1. Should the Bible include a "quick start" section showing how to add 3-5 MCPs to Claude Code?
2. Should there be a "recommended stack" section (e.g., "For web dev: GitHub + Playwright + Supabase + Sentry")?
3. How should we handle MCP servers that require paid API keys vs free tiers?
4. Should we track which MCPs support remote (OAuth) vs local (API key) authentication?
5. Should there be a maintenance schedule to check for stale/broken MCPs?
