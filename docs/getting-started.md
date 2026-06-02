# Getting Started with Claude Code

*Last updated: 2026-06-02*

**Getting started with Claude Code takes 5 minutes.** Install via npm, configure your environment, and start coding with AI assistance. This guide covers installation, setup, your first project, and core workflow patterns.

---

## Quick Answer

Claude Code is Anthropic's command-line tool for AI-assisted coding. Install it with `npm install -g @anthropic-ai/claude-code`, run `claude` in your project directory, and describe what you want to build in natural language.

---

## Frequently Asked Questions

### How do I install Claude Code?
Run `npm install -g @anthropic-ai/claude-code` to install globally. Then navigate to your project directory and run `claude` to start a session. Requires Node.js 18+ and an Anthropic API key.

### What are the system requirements?
Claude Code requires Node.js 18 or later, npm or yarn, and an Anthropic API key. Works on macOS, Linux, and Windows (via WSL recommended). IDE integrations available for VS Code, JetBrains, and Neovim.

### How do I configure Claude Code?
Run `claude config` for interactive setup. Set defaults with `claude config set -g verbose true` and `claude config set -g outputFormat text`. Configuration files live in `~/.claude/settings.json` (user) and `.claude/settings.json` (project).

### What is a CLAUDE.md file?
CLAUDE.md is a project configuration file that tells Claude about your codebase, tech stack, coding style, and conventions. Place it in your project root. Claude reads it automatically to understand context before generating code.

### How do I connect MCP servers?
Create a `.mcp.json` file in your project root with server configurations. Example: `{"mcpServers": {"github": {"command": "npx", "args": ["-y", "@anthropic/mcp-server-github"]}}}`. Claude Code discovers and connects to configured servers automatically.

### Can I use Claude Code with GitHub Copilot?
Yes. Claude Code and Copilot serve different purposes: Copilot provides inline code suggestions in your IDE, while Claude Code handles multi-step tasks from the command line. Many developers use both together for maximum productivity.

---

## 1. Understanding Claude Code

Claude Code is an AI-powered coding approach where Large Language Models generate, refine, and debug code from natural language prompts. The developer acts as a conductor, guiding the AI through conversational interactions rather than writing every line manually.

### Key Characteristics

- **Natural Language Interface:** Interact with AI using human language, reducing syntax and API cognitive load
- **Iterative Refinement:** Continuous loop of prompting, generation, review, and refinement
- **Contextual Awareness:** Claude understands your project structure, existing code, and constraints
- **Augmented Intelligence:** AI extends your capabilities with suggestions, pattern recognition, and automation
- **Focus on Intent:** Describe what you want; Claude translates intent into executable code

---

## 2. Setting Up Your Environment

### 2.1. Installing Claude Code

```bash
# Install via npm
npm install -g @anthropic-ai/claude-code

# Start Claude Code
claude
```

### 2.2. Initial Configuration

```bash
# Interactive setup
claude config

# Set defaults
claude config set -g verbose true
claude config set -g outputFormat text
```

### 2.3. IDE Integrations

- **VS Code:** Install Claude Code extension from Marketplace
- **JetBrains:** Install via JetBrains Marketplace
- **Neovim:** Use `nvim-claude` or similar plugins

### 2.4. Version Control

- **Git:** Industry standard for version control
- **GitHub/GitLab/Bitbucket:** Cloud platforms with AI integration support

---

## 3. The Claude Code Workflow

### 3.1. Define Your Goal

Before interacting with AI, have a clear understanding of what you want to achieve. Break complex tasks into smaller, manageable pieces.

### 3.2. Craft Your Initial Prompt

A well-crafted prompt sets the AI on the right path:

```markdown
Generate a Python function named `calculate_fibonacci` that takes an integer `n` as input and returns the nth Fibonacci number. Implement it using a recursive approach. Include a docstring.
```

### 3.3. AI Generation

Claude processes your prompt and generates code. Review the output carefully.

### 3.4. Review and Refine

- Read the code carefully
- Identify issues and provide targeted feedback
- Ask for alternatives or explanations

### 3.5. Test Thoroughly

- Unit Tests
- Integration Tests
- End-to-End Tests

### 3.6. Integrate and Document

- Add code to your project
- Commit with clear messages
- Update documentation

---

## 4. Your First Project: Building a Web Component

Build a custom HTML element `<claude-card>` that displays a title, description, and image.

### Step 1: Project Setup

```bash
mkdir claude-card-project
cd claude-card-project
claude
```

### Step 2: HTML Structure

**Prompt:**
```
Generate a basic HTML5 structure for index.html. Include a <head> with title "Claude Card Component" and a <body>. Link to style.css and claude-card.js.
```

### Step 3: Custom Element

**Prompt:**
```
Create a JavaScript custom element named `claude-card`. It should extend `HTMLElement`. Inside its constructor, attach a shadow DOM with styles and HTML structure.
```

### Step 4: Styling

**Prompt:**
```
Generate CSS for the `claude-card` custom element. Style it as a responsive card with border, padding, and box-shadow.
```

### Step 5: Testing

1. Open `index.html` in your browser
2. Inspect the shadow DOM
3. Test responsiveness

---

## 5. Advanced Techniques

- **Subagents:** Specialized AI agents for specific tasks (see [Subagents](../subagents/README.md))
- **Hooks:** Automated scripts for pre/post actions (see [Hooks](../hooks/README.md))
- **MCP Servers:** Connect to external tools and services (see [MCPs](../mcps/README.md))
- **Custom Commands:** Create reusable command templates (see [Commands](../commands/README.md))

---

## 6. Troubleshooting

- **AI Hallucinations:** When AI generates plausible but incorrect information -- verify outputs against documentation
- **Context Window Limitations:** Manage limited memory by using `/compact` to summarize conversations
- **Prompt Engineering Challenges:** When prompts don't yield results -- be more specific, provide examples, use structured format
- **Integration Problems:** Issues with connecting tools -- check MCP server status with `/mcp`

---

## 7. Next Steps

- Explore [Subagents](../subagents/README.md) for specialized AI tasks
- Learn about [Hooks](../hooks/README.md) for workflow automation
- Discover [Plugins](../plugins/README.md) for extended capabilities
- Create [Custom Commands](../commands/README.md) for your team
