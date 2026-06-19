# Awesome Model Context Protocols (MCPs)

This is a curated and comprehensive list of Model Context Protocols (MCPs) that significantly enhance AI-assisted development and Vibe Coding workflows. MCPs are at the forefront of enabling more intelligent, context-aware, and capable AI assistants by providing structured access to external information and functionalities.

## What are Model Context Protocols (MCPs)?

Model Context Protocols (MCPs) are open standards and frameworks designed to standardize communication between AI applications (particularly Large Language Models or LLMs) and external services, tools, databases, and dynamic data sources. They act as a universal interface, allowing AI models to transcend their inherent training data limitations and access up-to-date, relevant, and domain-specific context in real-time. This structured access to external information is crucial for enabling LLMs to generate more accurate, relevant, and useful outputs, reducing "hallucinations," and performing complex tasks that require external knowledge or interaction.

### The Core Problem MCPs Solve:

Traditional LLMs operate within a fixed "context window" (their working memory, measured in tokens). Once information leaves this window, the model "forgets" it. Furthermore, LLMs are trained on static datasets, meaning their knowledge is always a snapshot of the past. MCPs address these fundamental limitations by:

1.  **Extending Context:** Providing a mechanism for LLMs to dynamically pull in relevant information from external sources as needed, effectively extending their operational context beyond their internal memory.
2.  **Real-time Data Access:** Enabling LLMs to access current, live data from databases, APIs, and other dynamic systems.
3.  **Tool Integration:** Allowing LLMs to interact with and utilize external tools (e.g., code interpreters, web browsers, task managers) to perform actions and retrieve results.
4.  **Structured Information Retrieval:** Defining clear schemas and methods for how AI models request and receive specific types of information, ensuring consistency and reliability.

## Featured MCPs: Real-World Implementations and Concepts

This section highlights existing and conceptual MCPs, categorized by their primary application areas. Each entry provides a brief description, key features, and relevant links.

### 🚀 General Purpose MCPs

These MCPs provide broad contextual capabilities, often focusing on code, documentation, or project management.

*   **Context7:**
    *   **Description:** An MCP server specifically designed to provide up-to-date code documentation to Large Language Models (LLMs) and AI coding assistants. It directly addresses the problem of AI models generating code based on outdated training data by fetching the latest, version-specific documentation and code examples directly from source repositories. This significantly reduces AI "hallucinations" related to API usage and library versions.
    *   **Key Features:**
        *   **Up-to-date Documentation:** Ensures AI has access to the most current API specifications, function signatures, and usage examples.
        *   **Eliminates Hallucinations:** By providing accurate, real-time context, it minimizes instances of AI models suggesting non-existent or deprecated APIs.
        *   **Enhances Coding Efficiency:** Developers receive more reliable and relevant code suggestions, leading to faster and more accurate development.
        *   **Broad Integration:** Designed to integrate seamlessly with various AI coding environments (e.g., GitHub Copilot, Cursor, Windsurf, Claude).
    *   **Installation & Usage:** Can typically be installed via `npx @upstash/context7-mcp@latest` or Docker. Users often activate its functionality by appending specific directives like "use context7" to their prompts within compatible AI coding assistants.
    *   **Official GitHub:** [github.com/upstash/context7](https://github.com/upstash/context7)

*   **Taskmaster:**
    *   **Description:** A context-aware task management system that leverages "Tagged Lists" to enable sophisticated multi-context task management for AI-assisted workflows. It allows developers and AI to manage tasks across different projects, contexts, and priorities, supporting parallel development and team collaboration by providing the AI with a structured view of ongoing work.
    *   **Key Features:**
        *   **Multi-context Task Management:** Organizes tasks using flexible "Tagged Lists" that can span various project contexts.
        *   **Supports Parallel Workflows:** Enables AI to understand and assist with multiple concurrent development streams.
        *   **Team Collaboration:** Facilitates AI-assisted collaboration by providing shared, context-rich task views.
        *   **AI Coding Environment Integration:** Designed to work with popular AI coding environments (e.g., Cursor, Lovable, Windsurf, Roo) to provide task context directly to the AI.
    *   **Official GitHub:** [github.com/eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master)

*   **Wrinkl:**
    *   **Description:** A system for formalizing patterns and processes for effective AI-assisted development. Wrinkl introduces a `.ai/` directory within projects, which serves as a dedicated space for AI-specific context files. This includes pattern documentation, feature ledgers, architectural decisions, and other project-specific knowledge that guides AI assistants to align with project goals, established patterns, and constraints.
    *   **Key Features:**
        *   **Formalizes AI Context:** Provides a structured way to define and manage context for AI assistants.
        *   **Guides Development with Project-Specific Patterns:** Ensures AI-generated code adheres to the project's unique coding styles, architectural choices, and best practices.
        *   **Improves AI Alignment with Project Goals:** Helps prevent AI from generating code that deviates from the intended design or functionality.
        *   **Centralized AI Knowledge Base:** The `.ai/` directory acts as a single source of truth for AI-relevant project information.
    *   **Official GitHub:** [github.com/WrinklAI/wrinkl](https://github.com/WrinklAI/wrinkl)

### 🔧 Official Reference MCPs (Anthropic / Steering Group)

These are maintained by the MCP steering group as reference implementations. They serve as canonical examples for building MCP servers.

*   **Filesystem:**
    *   **Description:** Secure file operations with configurable access controls. Enables AI to read, write, and search files within allowed directories.
    *   **Key Features:** Configurable allowed dirs whitelist, read/write/search operations, file metadata retrieval.
    *   **Install:** `npx -y @modelcontextprotocol/server-filesystem`
    *   **Official GitHub:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

*   **Fetch:**
    *   **Description:** Web content fetching and conversion optimized for LLM consumption. Fetches URLs and converts HTML to markdown.
    *   **Key Features:** HTML-to-markdown conversion, configurable max length limits, efficient content extraction.
    *   **Install:** `uvx mcp-server-fetch`
    *   **Official GitHub:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

*   **Memory (Knowledge Graph):**
    *   **Description:** Persistent memory system using a knowledge graph. Stores entities, their relationships, and supports semantic recall across sessions.
    *   **Key Features:** Entity extraction and storage, relationship management, semantic memory queries.
    *   **Install:** `npx -y @modelcontextprotocol/server-memory`
    *   **Official GitHub:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

*   **Sequential Thinking:**
    *   **Description:** Dynamic and reflective problem-solving through structured thought sequences. Allows AI to maintain a chain of reasoning with revision and branching.
    *   **Key Features:** Thought chain management, revision and branching support, structured reasoning output.
    *   **Install:** `npx -y @modelcontextprotocol/server-sequential-thinking`
    *   **Official GitHub:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

*   **Git:**
    *   **Description:** Tools to read, search, and manipulate Git repositories programmatically.
    *   **Key Features:** Diff viewing, log queries, blame analysis, branch management.
    *   **Install:** `uvx mcp-server-git`
    *   **Official GitHub:** [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

*   **Brave Search:**
    *   **Description:** Official Brave Search API server for web and local search results.
    *   **Key Features:** Web search with Brave index, local search results, news integration.
    *   **Install:** `npx -y @anthropic-ai/brave-search-mcp-server`
    *   **Official GitHub:** [brave/brave-search-mcp-server](https://github.com/brave/brave-search-mcp-server)

*   **Cloudflare:**
    *   **Description:** Official Cloudflare MCP server providing 14 domain-specific server configurations for Cloudflare services (Workers, KV, R2, D1, AI, Durable Objects, etc.).
    *   **Key Features:** Access to Cloudflare API, Workers deployment, KV/R2 storage operations, AI model inference, DNS management.
    *   **Install:** `npx @cloudflare/mcp-server`
    *   **Official GitHub:** [cloudflare/mcp-server](https://github.com/cloudflare/mcp-server-cloudflare)

### 🛠️ AI Tool Orchestration MCPs

These MCPs focus on enabling AI models to effectively select, utilize, and orchestrate various external tools to achieve complex objectives.

*   **lunarcrush_mcp:**
    *   **Description:** An AI-powered trading terminal that exemplifies the application of the Model Context Protocol (MCP) for AI tool orchestration. It transforms social intelligence (e.g., sentiment from social media) into actionable trading insights by allowing an AI to orchestrate various data retrieval and analysis tools. Built with Remix, TypeScript, and Google Gemini AI, it serves as a practical demonstration of how MCPs can facilitate complex, multi-tool AI workflows.
    *   **Key Features:**
        *   **AI-Powered Trading:** Leverages AI to analyze market data and social sentiment for trading decisions.
        *   **Social Intelligence Integration:** Incorporates real-time social data as a critical context for AI analysis.
        *   **Demonstrates AI Tool Orchestration with MCP:** Provides a concrete example of how an AI can use MCP to interact with multiple external tools (e.g., data APIs, analytical models) to achieve a complex goal.
        *   **Built with Modern Web Technologies:** Showcases MCP integration within a contemporary web application stack.
    *   **Official GitHub:** [github.com/danilobatson/lunarcrush_mcp](https://github.com/danilobatson/lunarcrush_mcp)

*   **MCP-Codex:**
    *   **Description:** A conceptual or emerging Model Context Protocol Tool Orchestration MCP Server. While specific public details might be limited, such a server would be designed to act as a central hub for AI models to discover, understand the capabilities of, and invoke various external tools. It would manage the tool registry, handle tool execution, and return structured results to the AI, facilitating complex, multi-step AI workflows that require interaction with diverse external systems.
    *   **Key Features:**
        *   **MCP Server for Tool Orchestration:** Provides a standardized interface for AI to interact with a suite of tools.
        *   **Facilitates Complex AI Workflows:** Enables AI to break down large problems into sub-problems solvable by specific tools.
        *   **Tool Discovery and Management:** Allows AI to dynamically identify and select the most appropriate tool for a given task.
        *   **Structured Tool Output:** Ensures that results from external tools are returned to the AI in a consistent and parsable format.
    *   **Official GitHub:** (No direct GitHub link found in search, but related to mcp.so, which is a hub for MCP-related projects and discussions. This suggests it might be a foundational component or a reference implementation within the broader MCP ecosystem.)


*   **NotFair (~2.9k stars):**
    *   **Description:** Open-source Claude Code skills for SEO, GEO, Google Ads, and Meta Ads. NotFair provides three skill areas — SEO (site analysis, keyword research, meta tags, schema markup, GEO optimization, content writing), Google Ads (audits, wasted-spend detection, search-term cleanup, keyword and bid management), and Meta Ads (ROAS analysis, creative fatigue, audience overlap). It connects to live data through the Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP.
    *   **Key Features:**
        *   **SEO Skills:** Site analysis, keyword research, meta tags, schema markup, GEO optimization, and content writing via [seo/](https://github.com/nowork-studio/NotFair/tree/main/seo) folder.
        *   **Google Ads Skills:** Audits, wasted-spend detection, search-term cleanup, keyword and bid management via [google-ads/](https://github.com/nowork-studio/NotFair/tree/main/google-ads) folder.
        *   **Meta Ads Skills:** ROAS analysis, creative fatigue detection, audience overlap analysis via [meta-ads/](https://github.com/nowork-studio/NotFair/tree/main/meta-ads) folder.
        *   **Live Data via MCPs:** Connects to Google Ads MCP, Meta Ads MCP, Google Search Console MCP, and Google Analytics (GA4) MCP for real-time account data.
    *   **Official GitHub:** [github.com/nowork-studio/NotFair](https://github.com/nowork-studio/NotFair)
    *   **Official Link:** [notfair.co](https://notfair.co/)

*   **Squish (4M Labs):**
    *   **Description:** Connect once. Remember everywhere. Squish gives ChatGPT, Claude Code, and every AI agent one shared memory through OAuth. Stop re-explaining your project, decisions, and context to every tool.
    *   **Key Features:**
        *   **Works Everywhere:** OAuth connector for ChatGPT. MCP server for Claude Code, Cursor, VS Code, OpenClaw. CLI for local agents. One memory layer across all tools.
        *   **Zero Setup Memory:** Auto-captures decisions, fixes, and context from agent sessions. No prompt engineering needed.
        *   **Smart Retrieval:** Hybrid search (semantic + keyword + graph). Finds what matters without manual tagging.
        *   **Cloud Sync:** OAuth 2.1 Authorization Code + PKCE. Connect once and your memory follows you between tools.
        *   **Memory Lifecycle:** Hot/warm/cold tier system with automatic decay, expiration, and consolidation.
    *   **Installation:** `npm install -g squish-memory && squish cloud login`
    *   **Official GitHub:** [github.com/michielhdoteth/squish](https://github.com/michielhdoteth/squish)
    *   **Landing Page:** [squishplugin.dev](https://squishplugin.dev)

### 📊 Data Integration MCPs (Conceptual)

These MCPs would focus on providing AI models with structured access to various data sources, enabling data-driven decision-making and analysis.

*   **Database Query MCP:**
    *   **Description:** An MCP designed to allow LLMs to generate and execute database queries (SQL, NoSQL) against structured data sources. The MCP would handle schema introspection, query validation, and secure execution, returning structured results to the AI.
    *   **Use Cases:** Data analysis, report generation, dynamic content retrieval for applications, data migration assistance.

*   **API Integration MCP:**
    *   **Description:** An MCP that enables LLMs to discover, understand, and interact with external RESTful or GraphQL APIs. It would provide API schemas, authentication mechanisms, and handle request/response parsing, allowing AI to fetch or send data to web services.
    *   **Use Cases:** Building integrations, automating web tasks, fetching real-time information (weather, stock prices), interacting with SaaS platforms.

### 🎨 UI Generation MCPs (Conceptual)

These MCPs would empower AI models to generate user interface components and layouts based on natural language descriptions or design specifications.

*   **Component Library MCP:**
    *   **Description:** An MCP that exposes a library of UI components (e.g., React components, Vue components, Web Components) to an LLM. The AI could then select, configure, and compose these components to build user interfaces based on design prompts.
    *   **Use Cases:** Rapid UI prototyping, automated front-end development, design system adherence, responsive layout generation.

*   **Design System MCP:**
    *   **Description:** An MCP that provides an LLM with access to a project's design system (tokens, styles, guidelines). The AI could then generate UI code that strictly adheres to the established brand and visual language.
    *   **Use Cases:** Ensuring design consistency, automating design-to-code workflows, maintaining brand identity across applications.

### 🔒 Security & Compliance MCPs (Conceptual)

These MCPs would focus on providing AI models with context related to security policies, compliance regulations, and vulnerability databases.

*   **Security Policy MCP:**
    *   **Description:** An MCP that allows LLMs to query and understand an organization's security policies and best practices. The AI could then generate code that is inherently more secure and compliant.
    *   **Use Cases:** Automated security reviews, secure code generation, compliance checking, vulnerability remediation suggestions.

*   **Vulnerability Database MCP:**
    *   **Description:** An MCP that provides LLMs with real-time access to known vulnerability databases (e.g., CVEs). The AI could then identify potential vulnerabilities in generated code or suggest patches for existing code.
    *   **Use Cases:** Proactive security, automated vulnerability scanning, patch generation, security auditing.

## Understanding LLM Context Windows: The Foundation of MCPs

The concept of the "LLM context window" is fundamental to understanding the necessity and power of Model Context Protocols. The context window refers to the maximum amount of text (measured in tokens) that a Large Language Model (LLM) can process or "remember" at any one time. This is essentially the LLM's working memory, and its size directly impacts the model's ability to maintain coherence, understand complex instructions, and generate relevant responses over extended interactions.

### Key Aspects of LLM Context Windows:

*   **Tokens:** The basic unit of information an LLM processes. A token can be a character, part of a word, a whole word, or even a short phrase. For English, a general rule of thumb is that one word equates to roughly 1.5 tokens.
*   **Impact on Performance:** A larger context window generally allows an LLM to:
    *   Process longer inputs (e.g., entire codebases, extensive documentation).
    *   Incorporate more information into its output, leading to richer and more detailed responses.
    *   Maintain coherence and consistency over extended conversations or complex tasks.
    *   Reduce "hallucinations" by having more relevant information at its disposal.
*   **Limitations:** Despite increasing context window sizes in modern LLMs (e.g., GPT-4-turbo, Claude 3, Gemini 1.5), they still have finite limits. When a prompt, conversation, or document exceeds this limit, the information must be truncated or summarized. This means the model may "forget" earlier parts of the conversation or miss crucial details, leading to:
    *   **Loss of Coherence:** The AI might lose track of previous instructions or context.
    *   **Reduced Accuracy:** Important details might be omitted, leading to less precise outputs.
    *   **Increased Hallucinations:** Without full context, the AI might generate plausible but incorrect information.
*   **Trade-offs:** Larger context windows often come with increased computational costs and latency. There's also a challenge in ensuring the AI effectively utilizes all the information within a very large context window, as models can sometimes struggle to retrieve relevant information from the middle of long inputs.

### How MCPs Extend and Manage Context:

This is where MCPs become indispensable. They are not designed to *replace* the LLM's internal context window but to *augment* and *manage* the external context available to it. MCPs achieve this by:

1.  **Dynamic Retrieval:** Instead of cramming all possible information into the LLM's context window upfront, MCPs allow the AI to dynamically query and retrieve specific, relevant pieces of information from external sources *only when needed*. This is akin to giving the AI a highly efficient research assistant.
2.  **Structured Information:** MCPs define clear schemas for how external information is presented to the AI. This structured format makes it easier for the LLM to parse, understand, and utilize the retrieved context effectively.
3.  **Tool Use:** MCPs enable the AI to use external tools to generate new context (e.g., running a code interpreter to get execution results, querying a database for specific data). This allows the AI to perform actions and incorporate the results back into its reasoning process.
4.  **Long-Term Memory:** While LLMs have limited short-term memory (the context window), MCPs can facilitate integration with external knowledge bases or vector databases, providing a form of long-term memory that the AI can access on demand.
5.  **Version Control for Context:** As seen with Context7, MCPs can ensure the AI always accesses the most current version of documentation or code, preventing issues arising from outdated information.

By abstracting away the complexities of external data access and tool interaction, MCPs allow LLMs to operate with a far richer and more dynamic understanding of the world, pushing the boundaries of what AI-assisted development can achieve.

## Contributing to the Awesome MCPs List

We welcome and encourage contributions to this Awesome Model Context Protocols list! Your insights and knowledge of new or existing MCPs are invaluable in making this a comprehensive resource for the Vibe Coding community. Please follow these guidelines to ensure a smooth and effective contribution process:

### General Guidelines:

*   **Relevance:** Ensure the MCP or concept you are proposing is directly related to Model Context Protocols and their application in AI-assisted development.
*   **Clarity and Conciseness:** Provide clear, concise, and accurate descriptions. Avoid jargon where possible, or explain it if necessary.
*   **Accuracy:** Double-check all links and information for correctness.
*   **Categorization:** Place your proposed MCP in the most appropriate existing category. If a new category is warranted, please suggest it with a brief justification.
*   **No Self-Promotion (unless relevant):** While we encourage contributions from developers of MCPs, the primary goal is to provide value to the community. Focus on the MCP's features and benefits rather than promotional language.

### How to Contribute:

1.  **Fork the Repository:** Start by forking the `VibeCoding-Bible` repository to your GitHub account.

2.  **Clone Your Fork:** Clone your forked repository to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/VibeCoding-Bible.git
    cd VibeCoding-Bible
    ```

3.  **Create a New Branch:** Create a new branch for your changes. Use a descriptive name (e.g., `add-new-mcp-name`, `update-context7-info`):
    ```bash
    git checkout -b add-your-mcp-name
    ```

4.  **Edit `mcps/README.md`:** Open the `mcps/README.md` file in your preferred text editor.
    *   **Add Your MCP:** Insert your MCP entry into the relevant section. Follow the existing formatting and include:
        *   **Name:** The name of the MCP.
        *   **Description:** A concise overview of what it does and its primary purpose.
        *   **Key Features:** A bulleted list of its most important functionalities.
        *   **Official Link(s):** Link to its GitHub repository, official documentation, or project website.
    *   **Review Existing Content:** If you are updating an existing entry, ensure your changes are accurate and enhance the information without removing valuable context.

5.  **Commit Your Changes:** Stage and commit your changes with a clear and descriptive commit message:
    ```bash
    git add mcps/README.md
    git commit -m "feat: Add [Your MCP Name] to Awesome MCPs list"
    ```
    (Use `fix:` for corrections, `docs:` for documentation updates, etc.)

6.  **Push to Your Fork:** Push your new branch to your forked repository on GitHub:
    ```bash
    git push origin add-your-mcp-name
    ```

7.  **Create a Pull Request (PR):**
    *   Go to your forked repository on GitHub.
    *   You should see a prompt to create a pull request from your new branch to the `main` branch of the original `VibeCoding-Bible` repository.
    *   Provide a clear title and description for your PR, explaining the changes you've made.
    *   Reference any relevant issues if applicable.

### What Happens Next?

*   The maintainers will review your pull request.
*   They may provide feedback or request changes.
*   Once approved, your contribution will be merged into the main repository.

Thank you for helping us build the ultimate VibeCoding Bible!

## The Future of MCPs: Expanding the AI's Horizon

The Model Context Protocol is still in its nascent stages, but its potential to revolutionize AI-assisted development is immense. As LLMs become more sophisticated and their applications more diverse, MCPs will play an increasingly critical role in:

*   **Hyper-Personalized AI Assistants:** MCPs will enable AI assistants to have an even deeper understanding of individual developer preferences, project histories, and unique coding styles, leading to truly personalized coding experiences.
*   **Autonomous AI Agents:** By providing structured access to tools and real-time data, MCPs are a key enabler for the development of more autonomous AI agents that can perform complex development tasks with minimal human intervention.
*   **Cross-Domain AI Collaboration:** MCPs could facilitate seamless collaboration between AI models specialized in different domains (e.g., a design AI collaborating with a code generation AI via a shared MCP).
*   **Enhanced Security and Compliance:** Future MCPs will likely incorporate more robust mechanisms for securely accessing sensitive data and ensuring AI-generated code adheres to stringent security and compliance standards.
*   **Standardization and Interoperability:** As more MCPs emerge, there will be a greater push for standardization, allowing different AI tools and services to communicate and interoperate effortlessly.

The evolution of MCPs will directly correlate with the advancement of AI capabilities, creating a future where AI-assisted development is not just a productivity boost, but a fundamentally new way of building software.