export interface SkillItem {
  id: string;
  name: string;
  category: 'Development' | 'Content' | 'Design' | 'DevOps' | 'Data' | 'Security' | 'Testing';
  type: 'local' | 'external';
  description: string;
  details?: string;
  installCommand?: string;
  link?: string;
}

export interface SubagentItem {
  id: string;
  name: string;
  category: 'Development' | 'Security' | 'Productivity' | 'Content' | 'Data' | 'DevOps' | 'Research' | 'Design' | 'Orchestration';
  stars?: number;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  installCommand?: string;
  language?: string;
  tools?: string[];
  model?: string;
  tags?: string[];
}

export interface PluginItem {
  id: string;
  name: string;
  category: 'Claude Code' | 'OpenCode' | 'Cursor' | 'Copilot' | 'Windsurf' | 'Aider' | 'VS Code AI' | 'JetBrains' | 'Cross-Tool';
  platform: string;
  stars?: number;
  installs?: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  installCommand?: string;
}

export interface McpServerItem {
  id: string;
  name: string;
  category: string;
  stars?: string;
  description: string;
  installCommand?: string;
  githubUrl?: string;
  websiteUrl?: string;
  capabilities: string[];
}

export interface AgentLoopItem {
  id: string;
  name: string;
  category: 'Engineering' | 'Evaluation' | 'Operations' | 'Content' | 'Design';
  description: string;
  steps: string[];
  visualFlow: string[]; // Step-by-step description of loop logic
}

export const SKILLS_CATALOG: SkillItem[] = [
  // Local Development Skills
  {
    id: 'brainstorming',
    name: 'Brainstorming & Architecture',
    category: 'Development',
    type: 'local',
    description: 'Generates creative ideas, robust system designs, potential edge cases, and technical blueprints.',
    details: 'This skill guides the agent to explore alternate system structures, outline database schemas, predict scaling pain points, and define high-level modular blocks.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/brainstorming'
  },
  {
    id: 'code-reviewer',
    name: 'Semantic Code Reviewer',
    category: 'Development',
    type: 'local',
    description: 'Performs deep, semantic checks on code quality, performance bottlenecks, and style standard conformity.',
    details: 'Instructs the agent to scan files for security pitfalls (like SQLi, XSS), complexity hotspots, and styling standards, leaving inline style tips and optimization notes.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/code-reviewer'
  },
  {
    id: 'systematic-debugging',
    name: 'Systematic Debugging',
    category: 'Development',
    type: 'local',
    description: 'Diagnoses bugs by forming hypotheses, checking logs, tracing variables, and testing fixes systematically.',
    details: 'Rather than editing code randomly, this skill forces the agent to establish state assumptions, locate log boundaries, implement isolated reproductions, and verify solutions.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/systematic-debugging'
  },
  {
    id: 'test-driven-development',
    name: 'Test-Driven Development (TDD)',
    category: 'Development',
    type: 'local',
    description: 'Writes comprehensive unit, integration, and end-to-end tests before refactoring or implementing features.',
    details: 'Strictly enforces red-green-refactor behaviors. Guide agents to write tests first, verify fail state, implement minimum code to pass, then clean up.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/test-driven-development'
  },
  {
    id: 'writing-plans',
    name: 'Execution Planner',
    category: 'Development',
    type: 'local',
    description: 'Forces the creation of a structured markdown plan before making edits, saving time and token budget.',
    details: 'Defines the boundaries of edits, checklists of targets, verification scripts, and fallback procedures. Indispensable for complex migrations.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/writing-plans'
  },
  {
    id: 'verification-before-completion',
    name: 'Strict Verification Guard',
    category: 'Development',
    type: 'local',
    description: 'Runs linters, test suites, and compilers before reporting a task as completed to prevent breaking builds.',
    details: 'Instructs the agent to review all modified lines against code rules, check logs, run development builds, and run lint checks before declaring victory.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/verification-before-completion'
  },
  {
    id: 'subagent-driven-development',
    name: 'Subagent Orchestrator',
    category: 'Development',
    type: 'local',
    description: 'Delegates highly specific subtasks to subagent containers to divide and conquer complex feature goals.',
    details: 'Defines system prompts, contexts, and clear scopes of work for subagent instances, coordinating their parallel outputs into the main codebase.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/subagent-driven-development'
  },
  // Content
  {
    id: 'cold-email',
    name: 'Cold Outreach Writer',
    category: 'Content',
    type: 'local',
    description: 'Drafts highly personalized, non-spammy business outreach messages that maximize reply rates.',
    details: 'Injects direct value propositions, removes generic filler phrases, matches recipient tone, and creates strong call-to-actions (CTAs).',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/cold-email'
  },
  {
    id: 'copywriting',
    name: 'Persuasive Copywriter',
    category: 'Content',
    type: 'local',
    description: 'Applies psychological frameworks (AIDA, PAS) to produce landing page headings, hero content, and ads.',
    details: 'Optimizes content for emotional hook, immediate clarity, visual formatting, and search intent alignment.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/copywriting'
  },
  {
    id: 'humanizer',
    name: 'Text Conversational Humanizer',
    category: 'Content',
    type: 'local',
    description: 'Cleans up dry, highly repetitive, or boilerplate AI language to produce warm, flowing, human-grade text.',
    details: 'Varies sentence lengths, adds real analogies, removes corporate jargon, and smooths transition grammar.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/humanizer'
  },
  // Design
  {
    id: 'figma-design-to-code',
    name: 'Figma-to-Code Builder',
    category: 'Design',
    type: 'local',
    description: 'Translates pixel design specs, layouts, and SVG vectors into responsive React + Tailwind CSS code.',
    details: 'Focuses on visual layout authenticity, hover feedback, active focus states, screen scaling, and typography matching.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/figma-design-to-code'
  },
  {
    id: 'multimedia-generation',
    name: 'Multimedia Asset Prompting',
    category: 'Design',
    type: 'local',
    description: 'Engineers precise prompts to generate beautiful vectors, hero illustrations, or instructional videos.',
    details: 'Defines aspect ratios, style seeds, visual weight distributions, palette tables, and resolution scaling configs.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/multimedia-generation'
  },
  // DevOps
  {
    id: 'devops-infrastructure',
    name: 'Infrastructure Blueprinting',
    category: 'DevOps',
    type: 'local',
    description: 'Configures secure, modular Dockerfiles, docker-compose setups, and GitHub Actions CI/CD rules.',
    details: 'Sets up node caching, multi-stage building for microcontainers, secret injection routes, and automated status pings.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/devops-infrastructure'
  },
  {
    id: 'git-commit-writer',
    name: 'Semantic Commit Writer',
    category: 'DevOps',
    type: 'local',
    description: 'Writes highly descriptive, structured conventional commit messages and automated package changelogs.',
    details: 'Follows standard formats: feat/fix/chore/refactor with clear breaking-change declarations and scope markers.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/git-commit-writer'
  },
  // Data
  {
    id: 'data-analysis',
    name: 'Exploratory Data Analyst',
    category: 'Data',
    type: 'local',
    description: 'Processes csv, json, or SQL streams to clean, aggregate, extract trends, and draft charts.',
    details: 'Instructs agents to detect missing fields, normalize columns, perform regression pivots, and output clean charts.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/data-analysis'
  },
  // Security
  {
    id: 'mcp-security',
    name: 'MCP Security Evaluator',
    category: 'Security',
    type: 'local',
    description: 'Audits Model Context Protocol servers for command injection risk, paths traversal, and permission limits.',
    details: 'Audits tool descriptions and parameters, locks access paths inside specific directories, and restricts network commands.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/mcp-security'
  },
  // Testing
  {
    id: 'playwright-automation',
    name: 'Playwright E2E Tester',
    category: 'Testing',
    type: 'local',
    description: 'Creates resilient end-to-end browser tests with Playwright that wait for network and element states.',
    details: 'Forces best practices: page selectors instead of fixed xpaths, retry mechanisms, mobile-view ports scaling, and video captures.',
    installCommand: 'npx skills add michielhdoteth/awesome-ai-agent-tools/skills/playwright-automation'
  },

  // Notable External References
  {
    id: 'squish',
    name: 'Squish Memory Client',
    category: 'Data',
    type: 'external',
    description: 'Connect once. Remember everywhere. Shared persistent memory across agents and sessions through OAuth.',
    details: 'Provides agents with a secure, cross-applet contextual memory buffer so previous tasks or rules are recalled.',
    link: 'https://squishplugin.dev',
    installCommand: 'npx skills add squishplugin/mcp'
  },
  {
    id: 'notfair',
    name: 'NotFair Ad & SEO Suite',
    category: 'Content',
    type: 'external',
    description: 'Open-source Claude Code skills connecting Google Ads, Meta Ads, Search Console, and GA4 for real-time optimization.',
    details: 'Audits PPC spend, detects wasted click budgets, auto-generates high-performing headings, and optimizes site metadata.',
    link: 'https://github.com/nowork-studio/NotFair',
    installCommand: 'npx skills add nowork-studio/NotFair'
  },
  {
    id: 'superpowers',
    name: 'Obra Superpowers Pack',
    category: 'Development',
    type: 'external',
    description: 'A robust pack of 13 general productivity and utility skills for the modern AI assistant.',
    details: 'Includes advanced code refactoring, context parsing, dependency cleaning, and responsive error fixes.',
    link: 'https://github.com/obra/superpowers',
    installCommand: 'npx skills add obra/superpowers'
  },
  {
    id: 'anthropics-skills',
    name: 'Anthropic Official Skills',
    category: 'Development',
    type: 'external',
    description: 'The standard 7 reference skills directly from Anthropic’s engineering team.',
    details: 'Includes the reference specifications for git-integration, standard documentation parsing, and terminal-logs.',
    link: 'https://github.com/anthropics/skills',
    installCommand: 'npx skills add anthropics/skills'
  },
  {
    id: 'mattpocock-skills',
    name: 'Pocock TS Toolkit',
    category: 'Development',
    type: 'external',
    description: '15 TypeScript-focused coding and diagnostic skills created by Matt Pocock.',
    details: 'Covers advanced generic typings, schema validation (zod), union-splitting, and tsconfig alignments.',
    link: 'https://github.com/mattpocock/skills',
    installCommand: 'npx skills add mattpocock/skills'
  }
];

export const MCP_SERVERS: McpServerItem[] = [
  // Official
  {
    id: 'filesystem',
    name: 'Filesystem MCP',
    category: 'Official Reference',
    description: 'Provides secure, validated filesystem read/write and directory traversal within defined roots.',
    installCommand: 'npx add-mcp @modelcontextprotocol/server-filesystem /path/to/workspace',
    capabilities: ['Read/Write Files', 'List Directories', 'Find Text/Grep', 'File System Metadata'],
    githubUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem'
  },
  {
    id: 'fetch',
    name: 'Fetch MCP',
    category: 'Official Reference',
    description: 'Performs HTTP requests securely and parses raw web pages into clean, agent-readable markdown.',
    installCommand: 'npx add-mcp @modelcontextprotocol/server-fetch',
    capabilities: ['Fetch URLs', 'HTML-to-Markdown', 'Content-type parsing', 'Network safe checks'],
    githubUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch'
  },
  {
    id: 'memory',
    name: 'Memory MCP',
    category: 'Official Reference',
    description: 'Knowledge graph memory server tracking facts, semantic connections, and persistent entity relationships.',
    installCommand: 'npx add-mcp @modelcontextprotocol/server-memory',
    capabilities: ['Entity Creation', 'Semantic Relationship Linking', 'Fact retrieval', 'Graph searches'],
    githubUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory'
  },
  // Dev Tools
  {
    id: 'github',
    name: 'GitHub MCP',
    category: 'Developer Tools',
    description: 'Enables complete orchestration of repositories, including issues, pull requests, file changes, and search.',
    installCommand: 'npx add-mcp @modelcontextprotocol/server-github',
    capabilities: ['Create PRs', 'Get Issue details', 'Create branches', 'Commit code', 'Repository Search'],
    githubUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/github'
  },
  {
    id: 'context7',
    name: 'Context7 upstash',
    category: 'Developer Tools',
    stars: '53K',
    description: 'High-performance vector retrieval and context-window optimization to search external knowledge.',
    installCommand: 'npx add-mcp @upstash/context7-mcp',
    capabilities: ['Vector Search', 'Embeddings query', 'Context pinning', 'Caching'],
    websiteUrl: 'https://upstash.com'
  },
  // Browser
  {
    id: 'playwright',
    name: 'Playwright Browser MCP',
    category: 'Browser Automation',
    stars: '31K',
    description: 'Interactive browser automation allowing agents to navigate sites, take screenshots, and click buttons.',
    installCommand: 'npx add-mcp @playwright/mcp',
    capabilities: ['Browser Navigation', 'Screenshot capture', 'DOM clicks/typing', 'PDF extraction'],
    githubUrl: 'https://github.com/microsoft/playwright-mcp'
  },
  {
    id: 'firecrawl',
    name: 'Firecrawl API Server',
    category: 'Browser Automation',
    stars: '29.7K',
    description: 'Turns complete domains into LLM-ready markdown pages and structured lists, fully bypassing scrapers.',
    installCommand: 'npx add-mcp firecrawl-mcp',
    capabilities: ['Domain Scrape', 'Markdown Translation', 'Search Indexing', 'Anti-bot Bypass'],
    websiteUrl: 'https://firecrawl.dev'
  },
  // Databases
  {
    id: 'postgres',
    name: 'PostgreSQL Server',
    category: 'Databases',
    description: 'Direct, secure communication channel to database tables for fetching schemas and writing safe queries.',
    installCommand: 'npx add-mcp @modelcontextprotocol/server-postgres',
    capabilities: ['Schema extraction', 'Write queries', 'Index reviews', 'Describe tables'],
    githubUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres'
  },
  {
    id: 'supabase',
    name: 'Supabase MCP',
    category: 'Databases',
    description: 'Integrates Supabase projects, tables, users, edge functions, and files storage with your agent.',
    installCommand: 'npx add-mcp @supabase/mcp',
    capabilities: ['List tables', 'Row edits', 'File Uploads', 'Logs auditing'],
    websiteUrl: 'https://supabase.com'
  },
  // Search
  {
    id: 'brave',
    name: 'Brave Web Search',
    category: 'Search',
    description: 'High-accuracy, non-tracking web search engine supplying agents with web context and reference URLs.',
    installCommand: 'npx add-mcp @modelcontextprotocol/server-brave-search',
    capabilities: ['Web queries', 'Snippet extracts', 'Local business lookup', 'News searches'],
    githubUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search'
  },
  {
    id: 'tavily',
    name: 'Tavily Search Agent',
    category: 'Search',
    description: 'Search engine designed exclusively for AI agents and LLM contexts, filtering duplicate noise.',
    installCommand: 'npx add-mcp @tavily/mcp-server',
    capabilities: ['Fact retrieval', 'Topic aggregation', 'Resource filtering', 'JSON schemas outputs'],
    websiteUrl: 'https://tavily.com'
  },
  // Marketing & Ads
  {
    id: 'notfair-mcp',
    name: 'NotFair Marketing MCP',
    category: 'Marketing',
    stars: '2.9K',
    description: 'Connects to Google Ads, Meta Ads, Search Console, and GA4 to query campaign analytics and run updates.',
    installCommand: 'npx add-mcp notfair-mcp',
    capabilities: ['Ads audit', 'Wasted spend checks', 'SEO crawls', 'Keyword bidding'],
    githubUrl: 'https://github.com/nowork-studio/NotFair'
  },
  // Monitoring & DevOps
  {
    id: 'docker',
    name: 'Docker Orchestrator',
    category: 'DevOps',
    stars: '4K',
    description: 'Manages containers, reads logs, verifies status, restarts microservices, and inspects networks.',
    installCommand: 'npx add-mcp docker-mcp-server',
    capabilities: ['List containers', 'Container stats', 'View logs', 'Network routes'],
    githubUrl: 'https://github.com/docker/mcp-server'
  },
  // Design & Media
  {
    id: 'figma',
    name: 'Figma Designer MCP',
    category: 'Design',
    description: 'Queries canvas files, retrieves design components, reads styles, and outputs pixel layouts.',
    installCommand: 'npx add-mcp figma-mcp',
    capabilities: ['Read design nodes', 'Figma styles audit', 'Retrieve file schemas', 'Fetch SVGs'],
    websiteUrl: 'https://figma.com'
  }
];

export const AGENT_LOOPS: AgentLoopItem[] = [
  {
    id: 'overnight-docs-sweep',
    name: 'Nightly Documentation & Schema Sweep',
    category: 'Engineering',
    description: 'Iterative repository scanner that triggers at night, locating stale docs, updating type definitions, and aligning markdown files with the current code changes.',
    steps: [
      'Git Pull & scan modified files in codebase since previous day.',
      'Analyze exported functions, APIs, and TypeScript interfaces.',
      'Check existing code comments, READMEs, and inline docs.',
      'Generate updated inline descriptions and output a complete Nightly Changelog.',
      'Git Commit changes automatically onto dev branch.'
    ],
    visualFlow: [
      'Scheduler triggers cron event',
      'Agent runs code parser & AST builder',
      'Agent cross-references documentation blocks with AST signatures',
      'Gemini writes precise diffs for mismatched documentation files',
      'Test builder runs compilation validation',
      'PR opened for human team approval'
    ]
  },
  {
    id: 'ticket-to-pr-ready-loop',
    name: 'Issue-to-PR Developer Loop',
    category: 'Engineering',
    description: 'Takes a newly filed issue from GitHub or Linear, reads the code context, builds an implementation plan, implements the code, runs the test suite, and opens a finalized Pull Request.',
    steps: [
      'Fetch issue description and reproduce bug or trace feature requirement.',
      'Locate target code blocks and write execution blueprint.',
      'Write TDD tests mapping failure state.',
      'Write functional fix until test block completes successfully.',
      'Run linter, compiler, and code style checks.',
      'Push branch and open complete Pull Request with architectural logs.'
    ],
    visualFlow: [
      'Webhook fires from GitHub/Linear',
      'Triage agent evaluates severity & builds plan',
      'Coding subagent receives sandbox directory',
      'TDD loop writes test → modifies code → runs test until GREEN',
      'QA agent reviews diff against security and style checklist',
      'Pull Request pushed with full implementation walkthrough'
    ]
  },
  {
    id: 'devils-advocate-design-loop',
    name: "Devil's Advocate Design Review",
    category: 'Evaluation',
    description: 'Two specialized agents: one acts as the UI Architect pushing visual edits, and the other acts as the Critic exposing UX issues, access barriers, and responsive failures until zero critique remains.',
    steps: [
      'Render target view component inside simulated viewport.',
      'Critic agent scans DOM and styles looking for alignment flaws or contrast issues.',
      'Drafts visual critique report with prioritized scoring.',
      'Architect subagent fixes the layout classes using Tailwind CSS.',
      'Iterates loop until Critic records score exceeding 95% perfection.'
    ],
    visualFlow: [
      'Developer commits layout changes',
      'Puppeteer captures view screenshots in mobile, tablet, and desktop sizes',
      'Critic agent uses visual LLM to audit layout balance, padding, and labels',
      'Identified bugs cataloged with precise CSS selector coordinates',
      'Layout agent applies corrective Tailwind classes',
      'Approved only when both agents reach consensus'
    ]
  },
  {
    id: 'seo-geo-visibility-loop',
    name: 'SEO & Generative Engine Optimization (GEO)',
    category: 'Content',
    description: 'Analyzes user search intent, maps keyword tables, audits metadata, crawlability factors, and Generative AI indexability, ensuring the site appears in both Google Search and Gemini recommendations.',
    steps: [
      'Crawl landing pages to evaluate keyword weights and semantic clear structures.',
      'Cross-reference Google Search Console and target queries database.',
      'Analyze indexability with respect to AI Search (GEO guidelines).',
      'Generate clean micro-metadata and schema markups (JSON-LD).',
      'Optimize viewport loads and readability headings.'
    ],
    visualFlow: [
      'Search keywords database scanned',
      'NotFair MCP queries current Google Search Console performance',
      'Agent reviews landing page copy against SEO / GEO checklist',
      'Gemini rewrites titles, metadata, and inserts structured JSON-LD schemas',
      'Verification check runs to verify Schema correctness',
      'Updated pages pushed to live server'
    ]
  }
];

export interface AgentItem {
  id: string;
  name: string;
  role: string;
  category: 'Engineering' | 'Operations' | 'Marketing' | 'Writing' | 'Data';
  description: string;
  skillsRequired: string[];
  mcpRequired: string[];
  systemPrompt: string;
  configFile: string; // JSON configuration file content
}

export const AGENTS_DIRECTORY: AgentItem[] = [
  {
    id: 'claude-senior-dev',
    name: 'Claude Senior Dev Agent',
    role: 'Autonomous Senior Engineer',
    category: 'Engineering',
    description: 'A full-stack, test-driven developer agent configured to write clean, self-correcting TypeScript code, debug systematically, and handle pull requests.',
    skillsRequired: ['Systematic Debugging', 'Test-Driven Development (TDD)', 'Strict Verification Guard'],
    mcpRequired: ['Filesystem MCP', 'GitHub MCP', 'PostgreSQL Server'],
    systemPrompt: `You are a Senior Software Engineer Agent. You operate on local files and write clean, robust, and highly production-ready code.
Your goals:
1. Always write unit or integration tests before editing code.
2. If an error is encountered during compilation, trace the variables and fix the root cause systematically.
3. Keep dependency lists lean and only use verified packages.`,
    configFile: JSON.stringify({
      name: "claude-senior-dev",
      type: "assistant",
      mcpServers: {
        filesystem: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-filesystem", "./src"]
        },
        github: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-github"]
        }
      },
      skills: ["systematic-debugging", "test-driven-development", "verification-before-completion"]
    }, null, 2)
  },
  {
    id: 'geo-seo-growth',
    name: 'SEO & Generative Engine Optimizer',
    role: 'AI Search Visibility Specialist',
    category: 'Marketing',
    description: 'An expert optimizer agent that audits website landing pages, scrapes competing docs, and writes schema markups to rank on Google and Gemini AI answers.',
    skillsRequired: ['Persuasive Copywriter', 'Text Conversational Humanizer'],
    mcpRequired: ['Firecrawl API Server', 'Brave Web Search', 'Fetch MCP'],
    systemPrompt: `You are an expert in GEO (Generative Engine Optimization) and Technical SEO.
Your tasks:
1. Crawl current web pages to discover keyword clusters.
2. Build JSON-LD schemas mapping software entities clearly.
3. Rewrite copy to have direct answers, perfect heading structures, and rich contextual entities.`,
    configFile: JSON.stringify({
      name: "geo-seo-growth",
      type: "marketing-optimizer",
      mcpServers: {
        firecrawl: {
          command: "npx",
          args: ["-y", "firecrawl-mcp"]
        },
        brave: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-brave-search"]
        }
      },
      skills: ["copywriting", "humanizer"]
    }, null, 2)
  },
  {
    id: 'infra-devops-copilot',
    name: 'Infra & DevOps Copilot',
    role: 'DevOps & Site Reliability Architect',
    category: 'Operations',
    description: 'An operations agent that manages Docker builds, configures GitHub Actions workflows, audits dependency packages, and ensures high uptime.',
    skillsRequired: ['Infrastructure Blueprinting', 'Semantic Commit Writer'],
    mcpRequired: ['Docker Orchestrator', 'Filesystem MCP'],
    systemPrompt: `You are a DevOps & SRE Copilot Agent.
Your responsibilities:
1. Manage container volumes, prune unused builds, and audit multi-stage Dockerfiles.
2. Implement semantic, standard commit messages and automate packages changelogs.
3. Validate CI/CD pipeline actions against environment scopes.`,
    configFile: JSON.stringify({
      name: "infra-devops-copilot",
      type: "devops-engineer",
      mcpServers: {
        docker: {
          command: "npx",
          args: ["-y", "docker-mcp-server"]
        },
        filesystem: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-filesystem", "."]
        }
      },
      skills: ["devops-infrastructure", "git-commit-writer"]
    }, null, 2)
  },
  {
    id: 'customer-data-insights',
    name: 'Data Insights Analyst',
    role: 'Autonomous BI and Database Analyst',
    category: 'Data',
    description: 'Processes csv streams, writes PostgreSQL metrics, and creates live analytical dashboards automatically.',
    skillsRequired: ['Exploratory Data Analyst'],
    mcpRequired: ['PostgreSQL Server', 'Supabase MCP'],
    systemPrompt: `You are an Autonomous Business Intelligence Analyst Agent.
Your workflows:
1. Pull schemas and execute safe PostgreSQL analytical queries.
2. Highlight user activity trends, signups metrics, and active retention rates.
3. Export reports in clean, structured markdown lists.`,
    configFile: JSON.stringify({
      name: "customer-data-insights",
      type: "bi-analyst",
      mcpServers: {
        postgres: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-postgres"]
        },
        supabase: {
          command: "npx",
          args: ["-y", "@supabase/mcp"]
        }
      },
      skills: ["data-analysis"]
    }, null, 2)
  },
  {
    id: 'outreach-copywriter',
    name: 'Outreach & Copywriter Agent',
    role: 'Sales Content & Outreach Specialist',
    category: 'Writing',
    description: 'Engages prospects, writes personalized cold emails, and constructs landing page copy utilizing copywriting frameworks.',
    skillsRequired: ['Cold Outreach Writer', 'Persuasive Copywriter', 'Text Conversational Humanizer'],
    mcpRequired: ['Brave Web Search', 'Memory MCP', 'Fetch MCP'],
    systemPrompt: `You are a high-performing Sales Outreach and Copywriting Agent.
Your goals:
1. Review target prospects using Brave search grounding.
2. Structure cold outreaches with AIDA/PAS frameworks for maximum conversions.
3. Personalize tone and strip out any generic AI-sounding words.`,
    configFile: JSON.stringify({
      name: "outreach-copywriter",
      type: "copywriter",
      mcpServers: {
        brave: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-brave-search"]
        },
        memory: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-memory"]
        }
      },
      skills: ["cold-email", "copywriting", "humanizer"]
    }, null, 2)
  }
];

export const SUBAGENTS_CATALOG: SubagentItem[] = [
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    category: 'Development',
    description: 'Automated code review with security focus. Checks for vulnerabilities, performance issues, and code quality.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Bash', 'Glob'],
    model: 'sonnet',
    tags: ['code-review', 'security', 'quality'],
    installCommand: 'npx skills add subagents/code-reviewer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'test-runner',
    name: 'Test Runner',
    category: 'Development',
    description: 'Run test suite and fix failures. Analyzes root causes and verifies fixes.',
    language: 'TypeScript',
    tools: ['Bash', 'Read', 'Edit', 'Grep'],
    model: 'haiku',
    tags: ['testing', 'debugging', 'quality'],
    installCommand: 'npx skills add subagents/test-runner',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'debugger',
    name: 'Debugger',
    category: 'Development',
    description: 'Debug errors and unexpected behavior. Reproduce, isolate, understand, fix, verify.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep', 'Glob'],
    model: 'opus',
    tags: ['debugging', 'error-handling', 'troubleshooting'],
    installCommand: 'npx skills add subagents/debugger',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'security-auditor',
    name: 'Security Auditor',
    category: 'Security',
    description: 'Security analysis for authentication, authorization, and data protection. OWASP Top 10 focused.',
    language: 'TypeScript',
    tools: ['Read', 'Grep', 'Bash', 'Glob'],
    model: 'opus',
    tags: ['security', 'audit', 'vulnerabilities'],
    installCommand: 'npx skills add subagents/security-auditor',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'planner',
    name: 'Planner',
    category: 'Productivity',
    description: 'Break down complex tasks into implementation plans. Creates atomic, testable tasks.',
    language: 'TypeScript',
    tools: ['Read', 'Grep', 'Glob', 'Bash'],
    model: 'sonnet',
    tags: ['planning', 'architecture', 'task-breakdown'],
    installCommand: 'npx skills add subagents/planner',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'doc-writer',
    name: 'Doc Writer',
    category: 'Content',
    description: 'Write and improve documentation. README, API docs, code comments, and guides.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Glob'],
    model: 'sonnet',
    tags: ['documentation', 'writing', 'api-docs'],
    installCommand: 'npx skills add subagents/doc-writer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'refactorer',
    name: 'Refactorer',
    category: 'Development',
    description: 'Improve code quality through refactoring. Extract, simplify, organize, modernize.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Glob', 'Bash'],
    model: 'sonnet',
    tags: ['refactoring', 'code-quality', 'cleanup'],
    installCommand: 'npx skills add subagents/refactorer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    category: 'Data',
    description: 'Analyze data and generate insights. Works with CSV, JSON, databases, and structured data.',
    language: 'TypeScript',
    tools: ['Read', 'Bash', 'Edit', 'Grep'],
    model: 'sonnet',
    tags: ['data-analysis', 'statistics', 'insights'],
    installCommand: 'npx skills add subagents/data-analyst',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'dependency-updater',
    name: 'Dependency Updater',
    category: 'DevOps',
    description: 'Update dependencies and manage versions. Security patches, compatibility checks.',
    language: 'TypeScript',
    tools: ['Bash', 'Read', 'Edit', 'Grep'],
    model: 'haiku',
    tags: ['dependencies', 'security', 'updates'],
    installCommand: 'npx skills add subagents/dependency-updater',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'performance-optimizer',
    name: 'Performance Optimizer',
    category: 'Development',
    description: 'Identify and fix performance bottlenecks. Profiling, optimization, verification.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep', 'Glob'],
    model: 'opus',
    tags: ['performance', 'optimization', 'profiling'],
    installCommand: 'npx skills add subagents/performance-optimizer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'frontend-developer',
    name: 'Frontend Developer',
    category: 'Development',
    description: 'Frontend specialist for React, Vue, Angular, CSS, responsive design, and component architecture.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Glob', 'Bash'],
    model: 'sonnet',
    tags: ['frontend', 'react', 'css', 'ui'],
    installCommand: 'npx skills add subagents/frontend-developer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'backend-developer',
    name: 'Backend Developer',
    category: 'Development',
    description: 'Backend specialist for APIs, databases, authentication, server architecture, and business logic.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Glob', 'Bash'],
    model: 'sonnet',
    tags: ['backend', 'api', 'database', 'server'],
    installCommand: 'npx skills add subagents/backend-developer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'database-expert',
    name: 'Database Expert',
    category: 'Data',
    description: 'Database design and optimization specialist. Schema design, queries, migrations, performance tuning.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep'],
    model: 'sonnet',
    tags: ['database', 'sql', 'schema', 'optimization'],
    installCommand: 'npx skills add subagents/database-expert',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'devops-engineer',
    name: 'DevOps Engineer',
    category: 'DevOps',
    description: 'DevOps specialist for Docker, Kubernetes, CI/CD, cloud deployment, and infrastructure automation.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep', 'Glob'],
    model: 'sonnet',
    tags: ['devops', 'docker', 'kubernetes', 'ci-cd'],
    installCommand: 'npx skills add subagents/devops-engineer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'test-writer',
    name: 'Test Writer',
    category: 'Development',
    description: 'Test writing specialist for unit, integration, and e2e tests. TDD, coverage, and test strategy.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep', 'Glob'],
    model: 'sonnet',
    tags: ['testing', 'tdd', 'coverage', 'quality'],
    installCommand: 'npx skills add subagents/test-writer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'api-designer',
    name: 'API Designer',
    category: 'Development',
    description: 'API design specialist for REST, GraphQL, OpenAPI specs, versioning, and API governance.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Glob'],
    model: 'sonnet',
    tags: ['api', 'rest', 'graphql', 'openapi'],
    installCommand: 'npx skills add subagents/api-designer',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'workflow-orchestrator',
    name: 'Workflow Orchestrator',
    category: 'Orchestration',
    description: 'Multi-agent workflow orchestration. Task delegation, parallel execution, and workflow management.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep'],
    model: 'opus',
    tags: ['orchestration', 'workflow', 'multi-agent'],
    installCommand: 'npx skills add subagents/workflow-orchestrator',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'research-analyst',
    name: 'Research Analyst',
    category: 'Research',
    description: 'Research and analysis specialist. Technology evaluation, competitive analysis, and documentation synthesis.',
    language: 'TypeScript',
    tools: ['Read', 'Grep', 'Glob', 'Bash', 'WebSearch'],
    model: 'opus',
    tags: ['research', 'analysis', 'evaluation'],
    installCommand: 'npx skills add subagents/research-analyst',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'migration-specialist',
    name: 'Migration Specialist',
    category: 'Development',
    description: 'Code and data migration specialist. Database migrations, API upgrades, framework migrations.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Bash', 'Grep', 'Glob'],
    model: 'opus',
    tags: ['migration', 'refactoring', 'upgrade'],
    installCommand: 'npx skills add subagents/migration-specialist',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  },
  {
    id: 'accessibility-expert',
    name: 'Accessibility Expert',
    category: 'Design',
    description: 'Accessibility specialist for WCAG compliance, screen reader testing, and inclusive design.',
    language: 'TypeScript',
    tools: ['Read', 'Edit', 'Grep', 'Glob', 'Bash'],
    model: 'sonnet',
    tags: ['accessibility', 'wcag', 'a11y', 'inclusive'],
    installCommand: 'npx skills add subagents/accessibility-expert',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools/tree/main/subagents'
  }
];

export const PLUGINS_CATALOG: PluginItem[] = [
  {
    id: 'claude-code-memory',
    name: 'Squish Memory',
    category: 'Cross-Tool',
    platform: 'Claude Code, OpenCode, Cursor',
    stars: 120,
    installs: '2.5K+',
    description: 'Persistent cross-session memory for AI agents. Remembers decisions, preferences, and context across tools.',
    githubUrl: 'https://github.com/squishplugin/mcp',
    websiteUrl: 'https://squishplugin.dev',
    installCommand: 'npx skills add squishplugin/mcp'
  },
  {
    id: 'claude-code-skills',
    name: 'Skills Manager',
    category: 'Claude Code',
    platform: 'Claude Code',
    stars: 85,
    description: 'Browse, install, and manage Claude Code skills from a curated directory. One-command skill loading.',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools',
    installCommand: 'npx skills add <org>/<repo>/skills/<skill-name>'
  },
  {
    id: 'cursor-rules',
    name: 'Cursor Rules Sync',
    category: 'Cursor',
    platform: 'Cursor',
    stars: 340,
    installs: '15K+',
    description: 'Synchronize .cursorrules across projects. Import rules from community templates and share team standards.',
    githubUrl: 'https://github.com/PatrickJS/awesome-cursorrules',
    websiteUrl: 'https://cursorrules.dev'
  },
  {
    id: 'copilot-instructions',
    name: 'Copilot Instructions',
    category: 'Copilot',
    platform: 'GitHub Copilot',
    stars: 210,
    installs: '50K+',
    description: 'Enhanced .github/copilot-instructions.md with community patterns, workflow templates, and code style guides.',
    githubUrl: 'https://github.com/github/copilot-docs'
  },
  {
    id: 'windsurf-rules',
    name: 'Windsurf Rules Pack',
    category: 'Windsurf',
    platform: 'Windsurf',
    stars: 95,
    installs: '3K+',
    description: 'Community-driven ruleset for Windsurf AI. Includes patterns for React, Vue, Python, Go, and Rust projects.',
    githubUrl: 'https://github.com/windsurf-ai/rules'
  },
  {
    id: 'aider-linter',
    name: 'Aider Linter Integration',
    category: 'Aider',
    platform: 'Aider',
    stars: 180,
    installs: '5K+',
    description: 'Automatic linting and formatting integration for Aider. Runs ruff, eslint, and prettier on every edit.',
    githubUrl: 'https://github.com/paul-gauthier/aider'
  },
  {
    id: 'vscode-prompt-library',
    name: 'VS Code Prompt Library',
    category: 'VS Code AI',
    platform: 'VS Code',
    stars: 420,
    installs: '25K+',
    description: 'Curated prompt library for VS Code AI extensions. Snippet-based prompts for code generation and refactoring.',
    githubUrl: 'https://github.com/microsoft/vscode-copilot'
  },
  {
    id: 'jetbrains-ai-rules',
    name: 'JetBrains AI Assistant Rules',
    category: 'JetBrains',
    platform: 'IntelliJ, WebStorm, PyCharm',
    stars: 150,
    installs: '8K+',
    description: 'Rule templates for JetBrains AI Assistant. Kotlin, Java, and Python optimized instruction patterns.',
    githubUrl: 'https://github.com/JetBrains/intellij-community'
  },
  {
    id: 'claude-code-testing',
    name: 'Test Harness',
    category: 'Claude Code',
    platform: 'Claude Code',
    stars: 65,
    description: 'Automated test generation and execution harness for Claude Code. Supports Jest, Vitest, pytest, and Go test.',
    githubUrl: 'https://github.com/michielhdoteth/awesome-ai-agent-tools'
  },
  {
    id: 'opencode-config',
    name: 'OpenCode Config Manager',
    category: 'OpenCode',
    platform: 'OpenCode',
    stars: 45,
    description: 'Manage OpenCode configurations across projects. Template sharing, team sync, and version-pinned configs.',
    githubUrl: 'https://github.com/opencode-ai/opencode'
  },
  {
    id: 'copilot-workspace',
    name: 'Copilot Workspace Tools',
    category: 'Copilot',
    platform: 'GitHub Copilot',
    stars: 280,
    installs: '30K+',
    description: 'Extended tooling for Copilot Workspace. Custom slash commands, review automation, and PR templates.',
    githubUrl: 'https://github.com/features/copilot'
  },
  {
    id: 'cursor-docs',
    name: 'Cursor Documentation RAG',
    category: 'Cursor',
    platform: 'Cursor',
    stars: 195,
    installs: '10K+',
    description: 'RAG-powered documentation search for Cursor. Indexes project docs, API references, and inline comments.',
    githubUrl: 'https://github.com/getcursor/cursor'
  },
  {
    id: 'cross-tool-formatter',
    name: 'Universal Formatter',
    category: 'Cross-Tool',
    platform: 'Claude Code, Cursor, Copilot, Windsurf',
    stars: 310,
    installs: '20K+',
    description: 'Cross-tool code formatter that applies consistent Prettier, Ruff, and gofmt rules across all AI editors.',
    githubUrl: 'https://github.com/prettier/prettier'
  },
  {
    id: 'windsurf-mcp',
    name: 'Windsurf MCP Bridge',
    category: 'Windsurf',
    platform: 'Windsurf',
    stars: 75,
    installs: '2K+',
    description: 'MCP server bridge for Windsurf. Connect any MCP tool to Windsurf AI with automatic schema generation.',
    githubUrl: 'https://github.com/modelcontextprotocol/servers'
  },
  {
    id: 'aider-git',
    name: 'Aider Git Workflow',
    category: 'Aider',
    platform: 'Aider',
    stars: 140,
    installs: '4K+',
    description: 'Enhanced git workflow for Aider. Auto-commit messages, branch management, and conflict resolution.',
    githubUrl: 'https://github.com/paul-gauthier/aider'
  },
  {
    id: 'jetbrains-completion',
    name: 'JetBrains Completion Boost',
    category: 'JetBrains',
    platform: 'IntelliJ, WebStorm, PyCharm',
    stars: 110,
    installs: '6K+',
    description: 'Boost JetBrains AI completions with project-aware context. Indexes tests, configs, and documentation.',
    githubUrl: 'https://github.com/JetBrains/intellij-community'
  },
  {
    id: 'vscode-agent-mode',
    name: 'VS Code Agent Mode',
    category: 'VS Code AI',
    platform: 'VS Code',
    stars: 520,
    installs: '40K+',
    description: 'Enhanced agent mode for VS Code. Multi-file editing, terminal integration, and automated testing.',
    githubUrl: 'https://github.com/microsoft/vscode'
  },
  {
    id: 'claude-code-security',
    name: 'Security Scanner',
    category: 'Claude Code',
    platform: 'Claude Code',
    stars: 90,
    description: 'Real-time security scanning during coding sessions. Detects secrets, vulnerable dependencies, and misconfigs.',
    githubUrl: 'https://github.com/trivy/trivy'
  }
];

