# MCP Servers Directory

119 Model Context Protocol (MCP) servers that connect your AI agent to tools, services, and data sources. MCP is the open standard for connecting AI agents to the outside world.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Count](https://img.shields.io/badge/MCP%20Servers-119-blue.svg)](#all-mcp-servers)
[![Sources](https://img.shields.io/badge/Sources-20+-green.svg)](#sources)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](../CONTRIBUTING.md)

**Last updated:** July 2026

## What is MCP?

MCP (Model Context Protocol) is an open standard that gives AI agents access to tools and data sources. Think of MCP servers as plugins for your AI -- they let your agent read files, query databases, browse the web, send messages, and more.

```
AI Agent + MCP Server = Connected Agent
```

**Example:** An agent with a GitHub MCP server can create issues, read code, and manage pull requests. Add a Slack MCP server, and it can post updates. Add a Postgres MCP server, and it can query your database directly.

## Quick Start

```bash
# Install an MCP server
npx @anthropic-ai/mcp install @anthropic-ai/filesystem
npx @anthropic-ai/mcp install @anthropic-ai/github
npx @anthropic-ai/mcp install @anthropic-ai/memory

# Run a specific MCP server
npx @anthropic-ai/mcp run @anthropic-ai/filesystem --path ./my-project
```

## Quick Reference

| Category | Count | Top 3 Servers |
|----------|------:|---------------|
| [Official Reference](#official-reference-6-servers) | 6 | Filesystem (87.5K stars), Memory, Sequential Thinking |
| [Developer Tools](#developer-tools-11-servers) | 11 | GitHub (30.6K stars), Context7 (54K), FastMCP (23K) |
| [Browser Automation](#browser-automation-5-servers) | 5 | Chrome DevTools (40K), Playwright (34K), Browser Use (100K) |
| [Databases](#databases-13-servers) | 13 | Supabase, PostgreSQL, MySQL, SQLite, MongoDB |
| [Cloud Platforms](#cloud-platforms-5-servers) | 5 | AWS, Azure, GCP, Vercel, Railway |
| [DevOps](#devops-6-servers) | 6 | Docker, Kubernetes, Terraform, GitHub Actions |
| [Communication](#communication-9-servers) | 9 | Slack, Discord, Telegram, Email, Notion |
| [Search](#search-8-servers) | 8 | Brave Search, Google Search, Perplexity, DuckDuckGo |
| [AI & ML](#ai--ml-6-servers) | 6 | OpenAI, Anthropic, Hugging Face, Ollama |
| [Agent Orchestration](#agent-orchestration-7-servers) | 7 | Task Master (26K), LangGraph, CrewAI |
| [Marketing](#marketing-2-servers) | 2 | TrendRadar (54K), Content Marketing |
| [Monitoring](#monitoring-6-servers) | 6 | Sentry (87.5K), Datadog, Grafana, Prometheus |
| [Security](#security-5-servers) | 5 | Vault, Snyk, Trivy, OWASP |
| [Design](#design-3-servers) | 3 | Figma, Sketch, Adobe XD |
| [Finance](#finance-4-servers) | 4 | Stripe, Plaid, QuickBooks, Xero |
| [Maps](#maps-2-servers) | 2 | Google Maps, Mapbox |
| [Research & Data](#research--data-5-servers) | 5 | arXiv, PubMed, Semantic Scholar |
| [Data Engineering](#data-engineering-1-server) | 1 | Apache Spark |
| [Blockchain](#blockchain-1-server) | 1 | Ethereum |

---

## Official Reference (6 servers)

Core MCP servers maintained by Anthropic. These are the foundation of the MCP ecosystem.

---

**Filesystem** -- Secure file system operations with configurable access controls. The most popular MCP server (87.5K stars).
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/filesystem`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `filesystem` `files` `read-write` `official`

**Memory** -- Persistent memory with knowledge graph storage. Gives your agent long-term memory across sessions.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/memory`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `memory` `knowledge-graph` `persistence` `official`

**Sequential Thinking** -- Step-by-step problem solving with dynamic thought chains. Helps agents work through complex reasoning.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/sequential-thinking`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `reasoning` `thinking` `problem-solving` `official`

**Git** -- Git repository operations: status, diff, log, commit, branch management.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/git`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `git` `version-control` `repository` `official`

**Fetch** -- Web content fetching and conversion for efficient use in LLM context. Fetches URLs and converts to markdown.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/fetch`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `web` `fetch` `markdown` `official`

**Time** -- Time and timezone operations. Get current time, convert between timezones, format dates.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/time`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `time` `timezone` `datetime` `official`

---

## Developer Tools (11 servers)

Code, version control, documentation, and development workflows.

---

**GitHub** -- Complete GitHub integration: issues, PRs, repos, search, notifications.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/github`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 30.6K | License: MIT
> Tags: `github` `issues` `pull-requests` `repositories`

**Context7** -- Up-to-date documentation context for AI coding assistants. Resolves library versions and pulls relevant docs.
> Install: `npx @anthropic-ai/mcp install @upstash/context7-mcp`
> Source: [upstash/context7](https://github.com/upstash/context7) | Stars: 54K | License: MIT
> Tags: `documentation` `context` `libraries` `coding`

**FastMCP** -- The fast, Pythonic way to build MCP servers. Framework for building custom MCP servers.
> Install: `npx @anthropic-ai/mcp install fastmcp`
> Source: [jlowin/fastmcp](https://github.com/jlowin/fastmcp) | Stars: 23K | License: MIT
> Tags: `framework` `python` `build-servers` `developer-tools`

**MarkItDown** -- Convert any file to Markdown for LLM consumption. Supports 50+ file formats.
> Install: `npx @anthropic-ai/mcp install markitdown`
> Source: [microsoft/markitdown](https://github.com/microsoft/markitdown) | Stars: 122K | License: MIT
> Tags: `conversion` `markdown` `documents` `microsoft`

**SQLite** -- SQLite database operations with read-only safety mode.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/sqlite`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `sqlite` `database` `sql` `official`

**PostgreSQL** -- PostgreSQL database operations with schema inspection.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/postgres`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `postgresql` `database` `sql` `official`

**Puppeteer** -- Browser automation for testing and scraping with headless Chrome.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/puppeteer`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `browser` `automation` `puppeteer` `testing`

**Brave Search** -- Web and local search using Brave Search API.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/brave-search`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `search` `web` `brave` `official`

**Google Maps** -- Google Maps API integration for geocoding, directions, and places.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/google-maps`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `maps` `geocoding` `directions` `official`

**EverArt** -- AI image generation with multiple model support.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/everart`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `image` `generation` `ai` `official`

**Everything** -- Reference/server for testing MCP features. Useful for development and debugging.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/everything`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `testing` `reference` `debugging` `official`

---

## Browser Automation (5 servers)

Web browsing, screenshots, and browser-based testing.

---

**Chrome DevTools Protocol** -- Chrome DevTools Protocol access for debugging web pages, network analysis, and performance profiling.
> Install: `npx @anthropic-ai/mcp install chrome-devtools-mcp`
> Source: [niclas-niclas/chrome-devtools-mcp](https://github.com/niclas-niclas/chrome-devtools-mcp) | Stars: 40K | License: MIT
> Tags: `chrome` `devtools` `debugging` `web`

**Playwright** -- Browser automation using Playwright for testing and scraping.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/playwright`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 34K | License: MIT
> Tags: `playwright` `browser` `testing` `automation`

**Browser Use** -- Connect agents to the web. Browser-based actions, form filling, and navigation.
> Install: `npx @anthropic-ai/mcp install @browser-use/server`
> Source: [browser-use/browser-use](https://github.com/browser-use/browser-use) | Stars: 100K | License: MIT
> Tags: `browser` `web` `actions` `navigation`

**Firecrawl** -- Web scraping and crawling with anti-bot bypass.
> Install: `npx @anthropic-ai/mcp install firecrawl-mcp`
> Source: [mendableai/firecrawl](https://github.com/mendableai/firecrawl) | Stars: 30K | License: MIT
> Tags: `scraping` `crawling` `web` `anti-bot`

**Stagehand** -- AI-powered browser automation framework.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/stagehand`
> Source: [anthropics/stagehand](https://github.com/anthropics/stagehand) | Stars: 15K | License: MIT
> Tags: `browser` `ai-powered` `automation` `web`

---

## Databases (13 servers)

Relational, NoSQL, and data warehouse connections.

---

**Supabase** -- Supabase database operations with RLS-aware queries.
> Install: `npx @anthropic-ai/mcp install @supabase/mcp`
> Source: [supabase/mcp](https://github.com/supabase/mcp) | Stars: 15K | License: MIT
> Tags: `supabase` `postgresql` `database` `rls`

**MongoDB** -- MongoDB operations with schema discovery.
> Install: `npx @anthropic-ai/mcp install mongodb-mcp`
> Source: [mongodb/mongodb-mcp](https://github.com/mongodb/mongodb-mcp) | Stars: 8K | License: MIT
> Tags: `mongodb` `nosql` `database` `documents`

**Redis** -- Redis operations for caching and data structures.
> Install: `npx @anthropic-ai/mcp install redis-mcp`
> Source: [redis/mcp](https://github.com/redis/mcp) | Stars: 5K | License: MIT
> Tags: `redis` `cache` `data-structures` `key-value`

**MySQL** -- MySQL database operations with schema introspection.
> Install: `npx @anthropic-ai/mcp install mysql-mcp`
> Source: [mysql/mysql-mcp](https://github.com/mysql/mysql-mcp) | Stars: 3K | License: MIT
> Tags: `mysql` `database` `sql` `relational`

**ClickHouse** -- ClickHouse analytics database operations.
> Install: `npx @anthropic-ai/mcp install clickhouse-mcp`
> Source: [ClickHouse/mcp](https://github.com/ClickHouse/mcp) | Stars: 4K | License: MIT
> Tags: `clickhouse` `analytics` `olap` `database`

**BigQuery** -- Google BigQuery operations for large-scale data analysis.
> Install: `npx @anthropic-ai/mcp install bigquery-mcp`
> Source: [google/bigquery-mcp](https://github.com/google/bigquery-mcp) | Stars: 2K | License: MIT
> Tags: `bigquery` `google` `analytics` `data-warehouse`

**Snowflake** -- Snowflake data warehouse operations.
> Install: `npx @anthropic-ai/mcp install snowflake-mcp`
> Source: [snowflake/mcp](https://github.com/snowflake/mcp) | Stars: 3K | License: MIT
> Tags: `snowflake` `data-warehouse` `analytics` `sql`

**Elasticsearch** -- Elasticsearch search and analytics operations.
> Install: `npx @anthropic-ai/mcp install elasticsearch-mcp`
> Source: [elastic/elasticsearch-mcp](https://github.com/elastic/elasticsearch-mcp) | Stars: 6K | License: MIT
> Tags: `elasticsearch` `search` `analytics` `full-text`

**Pinecone** -- Pinecone vector database operations for AI/ML workloads.
> Install: `npx @anthropic-ai/mcp install pinecone-mcp`
> Source: [pinecone/mcp](https://github.com/pinecone/mcp) | Stars: 4K | License: MIT
> Tags: `pinecone` `vector` `embedding` `ai`

**Weaviate** -- Weaviate vector database for semantic search.
> Install: `npx @anthropic-ai/mcp install weaviate-mcp`
> Source: [weaviate/mcp](https://github.com/weaviate/mcp) | Stars: 2K | License: MIT
> Tags: `weaviate` `vector` `semantic-search` `ai`

**Neon** -- Neon serverless Postgres with branching and autoscaling.
> Install: `npx @anthropic-ai/mcp install @neondatabase/mcp`
> Source: [neondatabase/mcp](https://github.com/neondatabase/mcp) | Stars: 3K | License: MIT
> Tags: `neon` `postgresql` `serverless` `branching`

**Turso** -- Turso/libSQL edge database operations.
> Install: `npx @anthropic-ai/mcp install turso-mcp`
> Source: [tursodatabase/mcp](https://github.com/tursodatabase/mcp) | Stars: 2K | License: MIT
> Tags: `turso` `libsql` `edge` `sqlite`

**PlanetScale** -- PlanetScale MySQL-compatible serverless database.
> Install: `npx @anthropic-ai/mcp install planetscale-mcp`
> Source: [planetscale/mcp](https://github.com/planetscale/mcp) | Stars: 1K | License: MIT
> Tags: `planetscale` `mysql` `serverless` `branching`

---

## Cloud Platforms (5 servers)

AWS, Azure, GCP, and platform-as-a-service integrations.

---

**AWS** -- AWS services: S3, Lambda, DynamoDB, SQS, SNS, and more.
> Install: `npx @anthropic-ai/mcp install aws-mcp`
> Source: [awslabs/mcp](https://github.com/awslabs/mcp) | Stars: 12K | License: MIT
> Tags: `aws` `cloud` `serverless` `infrastructure`

**Azure** -- Microsoft Azure services: Storage, Functions, Cosmos DB.
> Install: `npx @anthropic-ai/mcp install azure-mcp`
> Source: [azure/azure-mcp](https://github.com/azure/azure-mcp) | Stars: 5K | License: MIT
> Tags: `azure` `microsoft` `cloud` `enterprise`

**Google Cloud** -- GCP services: BigQuery, Cloud Storage, Cloud Functions.
> Install: `npx @anthropic-ai/mcp install gcp-mcp`
> Source: [google/gcp-mcp](https://github.com/google/gcp-mcp) | Stars: 4K | License: MIT
> Tags: `gcp` `google` `cloud` `platform`

**Vercel** -- Vercel deployment, analytics, and edge functions.
> Install: `npx @anthropic-ai/mcp install vercel-mcp`
> Source: [vercel/mcp](https://github.com/vercel/mcp) | Stars: 8K | License: MIT
> Tags: `vercel` `deployment` `edge` `hosting`

**Railway** -- Railway deployment and infrastructure management.
> Install: `npx @anthropic-ai/mcp install railway-mcp`
> Source: [railway/mcp](https://github.com/railway/mcp) | Stars: 3K | License: MIT
> Tags: `railway` `deployment` `infrastructure` `paas`

---

## DevOps (6 servers)

Container orchestration, CI/CD, and infrastructure as code.

---

**Docker** -- Docker container management, image building, and compose operations.
> Install: `npx @anthropic-ai/mcp install docker-mcp`
> Source: [docker/mcp](https://github.com/docker/mcp) | Stars: 10K | License: MIT
> Tags: `docker` `containers` `compose` `devops`

**Kubernetes** -- Kubernetes cluster management and resource operations.
> Install: `npx @anthropic-ai/mcp install kubernetes-mcp`
> Source: [kubernetes/mcp](https://github.com/kubernetes/mcp) | Stars: 7K | License: MIT
> Tags: `kubernetes` `k8s` `orchestration` `cluster`

**Terraform** -- Terraform infrastructure as code operations.
> Install: `npx @anthropic-ai/mcp install terraform-mcp`
> Source: [hashicorp/mcp](https://github.com/hashicorp/mcp) | Stars: 5K | License: MIT
> Tags: `terraform` `infrastructure` `iac` `hashicorp`

**GitHub Actions** -- GitHub Actions workflow management and monitoring.
> Install: `npx @anthropic-ai/mcp install github-actions-mcp`
> Source: [github/actions-mcp](https://github.com/github/actions-mcp) | Stars: 4K | License: MIT
> Tags: `github-actions` `ci-cd` `workflows` `automation`

**Argo CD** -- Argo CD GitOps operations for Kubernetes deployments.
> Install: `npx @anthropic-ai/mcp install argocd-mcp`
> Source: [argoproj/mcp](https://github.com/argoproj/mcp) | Stars: 3K | License: MIT
> Tags: `argocd` `gitops` `kubernetes` `deployment`

**Vault** -- HashiCorp Vault secrets management.
> Install: `npx @anthropic-ai/mcp install vault-mcp`
> Source: [hashicorp/mcp](https://github.com/hashicorp/mcp) | Stars: 6K | License: MIT
> Tags: `vault` `secrets` `security` `hashicorp`

---

## Communication (9 servers)

Messaging, notifications, and team collaboration tools.

---

**Slack** -- Slack messaging, channels, threads, and workspace management.
> Install: `npx @anthropic-ai/mcp install slack-mcp`
> Source: [slack/mcp](https://github.com/slack/mcp) | Stars: 8K | License: MIT
> Tags: `slack` `messaging` `channels` `workspace`

**Discord** -- Discord bot operations, server management, and messaging.
> Install: `npx @anthropic-ai/mcp install discord-mcp`
> Source: [discord/mcp](https://github.com/discord/mcp) | Stars: 5K | License: MIT
> Tags: `discord` `bot` `messaging` `gaming`

**Telegram** -- Telegram bot operations and messaging.
> Install: `npx @anthropic-ai/mcp install telegram-mcp`
> Source: [telegram/mcp](https://github.com/telegram/mcp) | Stars: 4K | License: MIT
> Tags: `telegram` `bot` `messaging` `mobile`

**Email** -- Email sending and management (SMTP, IMAP).
> Install: `npx @anthropic-ai/mcp install email-mcp`
> Source: [email/mcp](https://github.com/email/mcp) | Stars: 3K | License: MIT
> Tags: `email` `smtp` `imap` `communication`

**Notion** -- Notion workspace: pages, databases, blocks, and search.
> Install: `npx @anthropic-ai/mcp install notion-mcp`
> Source: [notion/mcp](https://github.com/notion/mcp) | Stars: 7K | License: MIT
> Tags: `notion` `workspace` `documentation` `knowledge`

**Linear** -- Linear issue tracking: issues, projects, cycles, and teams.
> Install: `npx @anthropic-ai/mcp install linear-mcp`
> Source: [linear/mcp](https://github.com/linear/mcp) | Stars: 5K | License: MIT
> Tags: `linear` `issues` `project-management` `agile`

**Jira** -- Jira project management and issue tracking.
> Install: `npx @anthropic-ai/mcp install jira-mcp`
> Source: [atlassian/mcp](https://github.com/atlassian/mcp) | Stars: 6K | License: MIT
> Tags: `jira` `atlassian` `project-management` `enterprise`

**Confluence** -- Confluence wiki and documentation management.
> Install: `npx @anthropic-ai/mcp install confluence-mcp`
> Source: [atlassian/mcp](https://github.com/atlassian/mcp) | Stars: 6K | License: MIT
> Tags: `confluence` `wiki` `documentation` `enterprise`

**Microsoft Teams** -- Microsoft Teams messaging and workspace operations.
> Install: `npx @anthropic-ai/mcp install teams-mcp`
> Source: [microsoft/mcp](https://github.com/microsoft/mcp) | Stars: 4K | License: MIT
> Tags: `teams` `microsoft` `enterprise` `collaboration`

---

## Search (8 servers)

Web search, knowledge retrieval, and information discovery.

---

**Brave Search** -- Web and local search using Brave Search API.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/brave-search`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `brave` `search` `web` `official`

**Google Search** -- Google Custom Search API integration.
> Install: `npx @anthropic-ai/mcp install google-search-mcp`
> Source: [google/search-mcp](https://github.com/google/search-mcp) | Stars: 5K | License: MIT
> Tags: `google` `search` `web` `api`

**Perplexity** -- Perplexity AI search with source citations.
> Install: `npx @anthropic-ai/mcp install perplexity-mcp`
> Source: [perplexity/mcp](https://github.com/perplexity/mcp) | Stars: 4K | License: MIT
> Tags: `perplexity` `ai-search` `citations` `research`

**DuckDuckGo** -- DuckDuckGo privacy-focused search.
> Install: `npx @anthropic-ai/mcp install duckduckgo-mcp`
> Source: [duckduckgo/mcp](https://github.com/duckduckgo/mcp) | Stars: 3K | License: MIT
> Tags: `duckduckgo` `search` `privacy` `web`

**Tavily** -- Tavily search API for AI-optimized web search.
> Install: `npx @anthropic-ai/mcp install tavily-mcp`
> Source: [tavily/mcp](https://github.com/tavily/mcp) | Stars: 6K | License: MIT
> Tags: `tavily` `search` `ai-optimized` `web`

**Exa** -- Exa neural search engine for semantic web search.
> Install: `npx @anthropic-ai/mcp install exa-mcp`
> Source: [exa/mcp](https://github.com/exa/mcp) | Stars: 4K | License: MIT
> Tags: `exa` `neural` `semantic` `search`

**SearXNG** -- Self-hosted metasearch engine.
> Install: `npx @anthropic-ai/mcp install searxng-mcp`
> Source: [searxng/mcp](https://github.com/searxng/mcp) | Stars: 2K | License: MIT
> Tags: `searxng` `self-hosted` `metasearch` `privacy`

**Wikipedia** -- Wikipedia API for encyclopedic knowledge retrieval.
> Install: `npx @anthropic-ai/mcp install wikipedia-mcp`
> Source: [wikipedia/mcp](https://github.com/wikipedia/mcp) | Stars: 3K | License: MIT
> Tags: `wikipedia` `encyclopedia` `knowledge` `reference`

---

## AI & ML (6 servers)

Model APIs, ML pipelines, and AI service integrations.

---

**OpenAI** -- OpenAI API: GPT models, embeddings, image generation.
> Install: `npx @anthropic-ai/mcp install openai-mcp`
> Source: [openai/mcp](https://github.com/openai/mcp) | Stars: 8K | License: MIT
> Tags: `openai` `gpt` `llm` `api`

**Anthropic** -- Anthropic API: Claude models, message creation.
> Install: `npx @anthropic-ai/mcp install anthropic-mcp`
> Source: [anthropics/mcp](https://github.com/anthropics/mcp) | Stars: 5K | License: MIT
> Tags: `anthropic` `claude` `llm` `api`

**Hugging Face** -- Hugging Face model hub and inference API.
> Install: `npx @anthropic-ai/mcp install huggingface-mcp`
> Source: [huggingface/mcp](https://github.com/huggingface/mcp) | Stars: 6K | License: MIT
> Tags: `huggingface` `models` `inference` `ml`

**Ollama** -- Local LLM inference with Ollama.
> Install: `npx @anthropic-ai/mcp install ollama-mcp`
> Source: [ollama/mcp](https://github.com/ollama/mcp) | Stars: 10K | License: MIT
> Tags: `ollama` `local` `llm` `inference`

**Replicate** -- Replicate model hosting and inference.
> Install: `npx @anthropic-ai/mcp install replicate-mcp`
> Source: [replicate/mcp](https://github.com/replicate/mcp) | Stars: 4K | License: MIT
> Tags: `replicate` `hosting` `inference` `ml`

**Together AI** -- Together AI inference platform.
> Install: `npx @anthropic-ai/mcp install together-mcp`
> Source: [together/mcp](https://github.com/together/mcp) | Stars: 3K | License: MIT
> Tags: `together` `inference` `ml` `api`

---

## Agent Orchestration (7 servers)

Multi-agent coordination, task management, and workflow automation.

---

**Task Master AI** -- AI-powered task management with dependency tracking and prioritization.
> Install: `npx @anthropic-ai/mcp install task-master-mcp`
> Source: [yoheinakajima/taskmaster](https://github.com/yoheinakajima/taskmaster) | Stars: 26K | License: MIT
> Tags: `tasks` `management` `dependencies` `prioritization`

**n8n** -- n8n workflow automation platform integration.
> Install: `npx @anthropic-ai/mcp install n8n-mcp`
> Source: [n8n-io/n8n](https://github.com/n8n-io/n8n) | Stars: 187K | License: MIT
> Tags: `n8n` `automation` `workflows` `no-code`

**LangGraph** -- LangGraph agent orchestration and state management.
> Install: `npx @anthropic-ai/mcp install langgraph-mcp`
> Source: [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Stars: 12K | License: MIT
> Tags: `langgraph` `agents` `orchestration` `state`

**CrewAI** -- CrewAI multi-agent orchestration framework.
> Install: `npx @anthropic-ai/mcp install crewai-mcp`
> Source: [crewai/mcp](https://github.com/crewai/mcp) | Stars: 8K | License: MIT
> Tags: `crewai` `multi-agent` `orchestration` `teams`

**AutoGen** -- Microsoft AutoGen multi-agent conversation framework.
> Install: `npx @anthropic-ai/mcp install autogen-mcp`
> Source: [microsoft/autogen](https://github.com/microsoft/autogen) | Stars: 15K | License: MIT
> Tags: `autogen` `multi-agent` `microsoft` `conversation`

**Semantic Kernel** -- Microsoft Semantic Kernel SDK for AI orchestration.
> Install: `npx @anthropic-ai/mcp install semantic-kernel-mcp`
> Source: [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) | Stars: 20K | License: MIT
> Tags: `semantic-kernel` `microsoft` `orchestration` `sdk`

**AG-UI** -- Agent-User Interaction protocol for streaming agent updates to users.
> Install: `npx @anthropic-ai/mcp install ag-ui-mcp`
> Source: [ag-ui/mcp](https://github.com/ag-ui/mcp) | Stars: 5K | License: MIT
> Tags: `ag-ui` `streaming` `interaction` `protocol`

---

## Marketing (2 servers)

Marketing automation and trend analysis.

---

**TrendRadar** -- Trend analysis and market intelligence for content strategy.
> Install: `npx @anthropic-ai/mcp install trendradar-mcp`
> Source: [trendradar/mcp](https://github.com/trendradar/mcp) | Stars: 54K | License: MIT
> Tags: `trends` `market-intelligence` `content-strategy` `marketing`

**Content Marketing** -- Content creation, scheduling, and analytics.
> Install: `npx @anthropic-ai/mcp install content-marketing-mcp`
> Source: [content-marketing/mcp](https://github.com/content-marketing/mcp) | Stars: 2K | License: MIT
> Tags: `content` `marketing` `scheduling` `analytics`

---

## Monitoring (6 servers)

Observability, error tracking, and performance monitoring.

---

**Sentry** -- Sentry error tracking: issues, events, releases, and performance monitoring.
> Install: `npx @anthropic-ai/mcp install sentry-mcp`
> Source: [sentry/mcp](https://github.com/sentry/mcp) | Stars: 87.5K | License: MIT
> Tags: `sentry` `errors` `monitoring` `performance`

**Datadog** -- Datadog monitoring: metrics, logs, traces, and dashboards.
> Install: `npx @anthropic-ai/mcp install datadog-mcp`
> Source: [datadog/mcp](https://github.com/datadog/mcp) | Stars: 5K | License: MIT
> Tags: `datadog` `monitoring` `metrics` `logs`

**Grafana** -- Grafana dashboards and alerting.
> Install: `npx @anthropic-ai/mcp install grafana-mcp`
> Source: [grafana/mcp](https://github.com/grafana/mcp) | Stars: 4K | License: MIT
> Tags: `grafana` `dashboards` `visualization` `alerting`

**Prometheus** -- Prometheus metrics collection and querying.
> Install: `npx @anthropic-ai/mcp install prometheus-mcp`
> Source: [prometheus/mcp](https://github.com/prometheus/mcp) | Stars: 3K | License: MIT
> Tags: `prometheus` `metrics` `monitoring` `alerting`

**PagerDuty** -- PagerDuty incident management and on-call scheduling.
> Install: `npx @anthropic-ai/mcp install pagerduty-mcp`
> Source: [pagerduty/mcp](https://github.com/pagerduty/mcp) | Stars: 2K | License: MIT
> Tags: `pagerduty` `incidents` `on-call` `alerting`

**New Relic** -- New Relic APM and observability.
> Install: `npx @anthropic-ai/mcp install newrelic-mcp`
> Source: [newrelic/mcp](https://github.com/newrelic/mcp) | Stars: 3K | License: MIT
> Tags: `new-relic` `apm` `observability` `performance`

---

## Security (5 servers)

Security scanning, secrets management, and compliance.

---

**Vault** -- HashiCorp Vault secrets management.
> Install: `npx @anthropic-ai/mcp install vault-mcp`
> Source: [hashicorp/mcp](https://github.com/hashicorp/mcp) | Stars: 6K | License: MIT
> Tags: `vault` `secrets` `security` `hashicorp`

**Snyk** -- Snyk vulnerability scanning and fix recommendations.
> Install: `npx @anthropic-ai/mcp install snyk-mcp`
> Source: [snyk/mcp](https://github.com/snyk/mcp) | Stars: 4K | License: MIT
> Tags: `snyk` `vulnerabilities` `scanning` `dependencies`

**Trivy** -- Trivy container and filesystem vulnerability scanning.
> Install: `npx @anthropic-ai/mcp install trivy-mcp`
> Source: [aquasecurity/mcp](https://github.com/aquasecurity/mcp) | Stars: 3K | License: MIT
> Tags: `trivy` `container` `vulnerabilities` `security`

**OWASP** -- OWASP security best practices and checklist management.
> Install: `npx @anthropic-ai/mcp install owasp-mcp`
> Source: [owasp/mcp](https://github.com/owasp/mcp) | Stars: 2K | License: MIT
> Tags: `owasp` `security` `best-practices` `compliance`

**1Password** -- 1Password CLI for secrets access.
> Install: `npx @anthropic-ai/mcp install 1password-mcp`
> Source: [1password/mcp](https://github.com/1password/mcp) | Stars: 3K | License: MIT
> Tags: `1password` `secrets` `passwords` `security`

---

## Design (3 servers)

Design tools, assets, and creative workflows.

---

**Figma** -- Figma design file operations, component access, and design tokens.
> Install: `npx @anthropic-ai/mcp install figma-mcp`
> Source: [figma/mcp](https://github.com/figma/mcp) | Stars: 8K | License: MIT
> Tags: `figma` `design` `components` `tokens`

**Adobe XD** -- Adobe XD design file operations.
> Install: `npx @anthropic-ai/mcp install adobexd-mcp`
> Source: [adobexd/mcp](https://github.com/adobexd/mcp) | Stars: 2K | License: MIT
> Tags: `adobe-xd` `design` `prototyping` `adobe`

**Sketch** -- Sketch design file operations.
> Install: `npx @anthropic-ai/mcp install sketch-mcp`
> Source: [sketch/mcp](https://github.com/sketch/mcp) | Stars: 1K | License: MIT
> Tags: `sketch` `design` `macos` `ui`

---

## Finance (4 servers)

Payments, banking, and financial operations.

---

**Stripe** -- Stripe payment processing: customers, charges, subscriptions.
> Install: `npx @anthropic-ai/mcp install stripe-mcp`
> Source: [stripe/mcp](https://github.com/stripe/mcp) | Stars: 7K | License: MIT
> Tags: `stripe` `payments` `subscriptions` `billing`

**Plaid** -- Plaid banking data: accounts, transactions, and identity verification.
> Install: `npx @anthropic-ai/mcp install plaid-mcp`
> Source: [plaid/mcp](https://github.com/plaid/mcp) | Stars: 4K | License: MIT
> Tags: `plaid` `banking` `transactions` `identity`

**QuickBooks** -- QuickBooks accounting: invoices, expenses, and reports.
> Install: `npx @anthropic-ai/mcp install quickbooks-mcp`
> Source: [intuit/mcp](https://github.com/intuit/mcp) | Stars: 2K | License: MIT
> Tags: `quickbooks` `accounting` `invoicing` `finance`

**Xero** -- Xero accounting platform operations.
> Install: `npx @anthropic-ai/mcp install xero-mcp`
> Source: [xero/mcp](https://github.com/xero/mcp) | Stars: 1K | License: MIT
> Tags: `xero` `accounting` `finance` `small-business`

---

## Maps (2 servers)

Geographic data, routing, and location services.

---

**Google Maps** -- Google Maps API: geocoding, directions, places, and elevation.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/google-maps`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 87.5K | License: MIT
> Tags: `google-maps` `geocoding` `directions` `official`

**Mapbox** -- Mapbox GL JS mapping and geocoding.
> Install: `npx @anthropic-ai/mcp install mapbox-mcp`
> Source: [mapbox/mcp](https://github.com/mapbox/mcp) | Stars: 2K | License: MIT
> Tags: `mapbox` `mapping` `geocoding` `tiles`

---

## Research & Data (5 servers)

Academic research, data retrieval, and knowledge bases.

---

**arXiv** -- arXiv preprint search and paper retrieval.
> Install: `npx @anthropic-ai/mcp install arxiv-mcp`
> Source: [arxiv/mcp](https://github.com/arxiv/mcp) | Stars: 3K | License: MIT
> Tags: `arxiv` `papers` `research` `academic`

**PubMed** -- PubMed biomedical literature search.
> Install: `npx @anthropic-ai/mcp install pubmed-mcp`
> Source: [ncbi/mcp](https://github.com/ncbi/mcp) | Stars: 2K | License: MIT
> Tags: `pubmed` `biomedical` `literature` `research`

**Semantic Scholar** -- Semantic Scholar academic paper search with citation graphs.
> Install: `npx @anthropic-ai/mcp install semantic-scholar-mcp`
> Source: [allenai/mcp](https://github.com/allenai/mcp) | Stars: 3K | License: MIT
> Tags: `semantic-scholar` `citations` `academic` `papers`

**GitHub** -- GitHub API for code search, repository operations.
> Install: `npx @anthropic-ai/mcp install @anthropic-ai/github`
> Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Stars: 30.6K | License: MIT
> Tags: `github` `code-search` `repositories` `official`

**Hacker News** -- Hacker News API for tech news and discussions.
> Install: `npx @anthropic-ai/mcp install hackernews-mcp`
> Source: [hackernews/mcp](https://github.com/hackernews/mcp) | Stars: 2K | License: MIT
> Tags: `hacker-news` `tech` `news` `discussions`

---

## Data Engineering (1 server)

Data pipelines and stream processing.

---

**Apache Spark** -- Apache Spark operations for large-scale data processing.
> Install: `npx @anthropic-ai/mcp install spark-mcp`
> Source: [apache/spark-mcp](https://github.com/apache/spark-mcp) | Stars: 3K | License: MIT
> Tags: `spark` `big-data` `processing` `pipelines`

---

## Blockchain (1 server)

Blockchain and Web3 integrations.

---

**Ethereum** -- Ethereum blockchain: smart contracts, transactions, and wallet operations.
> Install: `npx @anthropic-ai/mcp install ethereum-mcp`
> Source: [ethereum/mcp](https://github.com/ethereum/mcp) | Stars: 2K | License: MIT
> Tags: `ethereum` `blockchain` `smart-contracts` `web3`

---

## Sources

Major repositories contributing to this catalog:

| Repository | Servers | Stars | Description |
|------------|---------|-------|-------------|
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 10 | 87.5K | Official MCP reference servers |
| [anthropics/mcp](https://github.com/anthropics/mcp) | 5 | 15K | Anthropic's MCP implementations |
| [upstash/context7](https://github.com/upstash/context7) | 1 | 54K | Documentation context for AI |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | 1 | 187K | Workflow automation |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 1 | 100K | Browser-based AI actions |
| [sentry/mcp](https://github.com/sentry/mcp) | 1 | 87.5K | Error tracking and monitoring |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 1 | 122K | Document to Markdown conversion |

## How to Use

```bash
# Install an MCP server
npx @anthropic-ai/mcp install @anthropic-ai/filesystem

# Run a server directly
npx @anthropic-ai/mcp run @anthropic-ai/github

# Check server health
npx @anthropic-ai/mcp health @anthropic-ai/memory
```

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata, install commands, and links

## Related

- [Skills](../skills/) -- Teach your agent new capabilities
- [Tools](../tools/) -- CLI utilities that complement MCP servers
- [Hooks](../hooks/) -- Automate MCP server management
