# CLI Tools

66 essential CLI tools and utilities that enhance AI coding agent capabilities. Install once, use everywhere.

## Quick Install

### All-in-one (macOS)
```bash
# Code analysis
brew install ripgrep fd bat fzf eza zoxide dust duf yazi

# Git utilities
brew install lazygit gh git-delta tig gitui

# Package managers
curl -fsSL https://bun.sh/install | bash
npm install -g pnpm
curl -LsSf https://astral.sh/uv/install.sh | sh

# Docker
brew install --cask docker podman lazydocker dive

# DevOps
brew install terraform kubectl k9s awscli

# Formatting & linting
npm install -g @biomejs/biome prettier eslint
pip install ruff

# Database CLIs
pip install pgcli mycli litecli
brew install usql

# Monitoring
brew install btop netdata

# Terminal
brew install starship tmux atuin
```

### All-in-one (Ubuntu/Debian)
```bash
# Code analysis
sudo apt install ripgrep fd-find bat fzf

# Git utilities
sudo apt install git-cola tig

# Package managers
curl -fsSL https://bun.sh/install | bash
sudo npm install -g pnpm

# DevOps
sudo apt install terraform kubectl

# Formatting & linting
sudo npm install -g @biomejs/biome prettier eslint
pip install ruff

# Database CLIs
pip install pgcli mycli litecli
```

---

## Browse by Category

### Code Analysis (9 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **ripgrep** | 65K | Line-oriented search, 10-100x faster than grep | `brew install ripgrep` |
| **fd** | 35K | Friendly, fast alternative to find | `brew install fd` |
| **bat** | 51K | Cat clone with syntax highlighting, line numbers, git integration | `brew install bat` |
| **fzf** | 68K | General-purpose fuzzy finder | `brew install fzf` |
| **eza** | 15K | Modern ls replacement with git integration, icons, tree view | `brew install eza` |
| **zoxide** | 25K | Smarter cd command that learns your habits | `brew install zoxide` |
| **dust** | 10K | Intuitive du replacement with visual bars | `brew install dust` |
| **duf** | 11K | Better df alternative with beautiful display | `brew install duf` |
| **Yazi** | 25K | Blazing fast terminal file manager written in Rust | `brew install yazi` |

### Git Utilities (6 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **lazygit** | 55K | Terminal UI for git with visual staging, stashing, rebasing | `brew install lazygit` |
| **GitHub CLI (gh)** | 38K | Official GitHub CLI for PRs, issues, actions, releases | `brew install gh` |
| **delta** | 25K | Syntax-highlighting pager for git, diff, and grep output | `brew install git-delta` |
| **tig** | 13K | Text-mode interface for git | `brew install tig` |
| **Gitui** | 10K | Blazing fast terminal-ui for git written in Rust | `brew install gitui` |
| **gh-dash** | 5K | GitHub CLI dashboard for visual PR/issue management | `gh extension install dlvhdr/gh-dash` |

### Package Managers (5 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Bun** | 77K | Incredibly fast JavaScript runtime, bundler, and package manager | `curl -fsSL https://bun.sh/install \| bash` |
| **pnpm** | 30K | Fast, disk-efficient package manager with strict dependency resolution | `npm install -g pnpm` |
| **uv** | 50K | Extremely fast Python package installer and resolver | `curl -LsSf https://astral.sh/uv/install.sh \| sh` |
| **Volta** | 11K | JavaScript tool manager - pin node/npm/yarn versions per project | `curl https://get.volta.sh \| bash` |
| **Corepack** | 3K | Zero-runtime-dependency Node.js package manager manager | `corepack enable` |

### Docker & Containers (5 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Docker** | 5K | Container platform for building, shipping, running applications | `brew install --cask docker` |
| **Podman** | 30K | Daemonless container engine, rootless Docker alternative | `brew install podman` |
| **lazydocker** | 40K | Terminal UI for docker and docker-compose | `brew install lazydocker` |
| **dive** | 49K | Tool for exploring each layer in a Docker image | `brew install dive` |
| **Docker Compose** | 35K | Define and run multi-container Docker applications | Included with Docker Desktop |

### Cloud & DevOps (6 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Terraform** | 44K | Infrastructure as Code tool for cloud provisioning | `brew install terraform` |
| **Ansible** | 64K | Agentless automation engine for configuration management | `pip install ansible` |
| **kubectl** | 12K | Kubernetes command-line tool | `brew install kubectl` |
| **K9s** | 28K | Terminal UI for Kubernetes with real-time cluster monitoring | `brew install k9s` |
| **AWS CLI** | 16K | Official AWS command-line interface | `brew install awscli` |
| **gcloud CLI** | 5K | Google Cloud command-line interface | `brew install --cask google-cloud-sdk` |

### AI Coding CLIs (11 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Ollama** | 120K | Run LLMs locally - Llama, Mistral, Phi, Gemma, and more | `brew install ollama` |
| **Gemini CLI** | 98K | Google's AI coding agent in the terminal | `npm install -g @anthropic-ai/gemini-cli` |
| **Claude Code** | 80K | Anthropic's agentic coding tool, terminal-native AI pair programmer | `npm install -g @anthropic-ai/claude-code` |
| **Aider** | 42K | AI pair programming in your terminal | `pip install aider-chat` |
| **Cursor** | 35K | AI-first code editor, fork of VS Code with AI superpowers | Download from cursor.com |
| **OpenCode** | 25K | Open-source AI coding agent with multi-model support | `npm install -g opencode` |
| **Continue** | 20K | Open-source AI code assistant for VS Code and JetBrains | Install from VS Code marketplace |
| **Codeium / Windsurf** | 8K | Free AI code completion and chat | Install from VS Code marketplace |
| **codex-profiles** | 49 | Named CODEX_HOME profiles and macOS ChatGPT windows | `npm install -g codex-profile` |
| **Calliope CLI** | - | Multi-backend AI agent CLI with ACP/fleet modes | `pip install calliope-cli` |

### Agent Memory (2 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Tree Ring Memory** | 2 | Local-first Rust CLI/TUI for AI-agent memory recall, forgetting, audit | `curl -fsSL https://raw.githubusercontent.com/TerminallyLazy/Tree-Ring-Memory/main/install.sh \| sh` |
| **Skills MCP Server** | 4 | Self-hostable, semantically-searchable agent skills registry over MCP | `pip install skills-mcp` |

### Formatting & Linting (6 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Prettier** | 51K | Opinionated code formatter supporting many languages | `npm install -g prettier` |
| **Ruff** | 35K | Python linter and formatter, replaces flake8, isort, black | `pip install ruff` |
| **ShellCheck** | 37K | Static analysis tool for shell scripts | `brew install shellcheck` |
| **ESLint** | 25K | Pluggable JavaScript linter | `npm install -g eslint` |
| **Biome** | 17K | One toolchain for JS/TS/JSON/CSS, 35x faster than Prettier | `npm install -g @biomejs/biome` |
| **ty (TypeScript)** | 5K | Extremely fast TypeScript type checker written in Rust | `pip install ty` |

### Database CLIs (5 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **pgcli** | 12.8K | PostgreSQL CLI with auto-completion and syntax highlighting | `pip install pgcli` |
| **mycli** | 11.7K | MySQL CLI with auto-completion and syntax highlighting | `pip install mycli` |
| **usql** | 9K | Universal command-line interface for SQL databases | `brew install usql` |
| **litecli** | 3K | SQLite CLI with auto-completion and syntax highlighting | `pip install litecli` |
| **Peppermint** | 2K | Modern database client with AI-powered query assistance | Download from GitHub releases |

### API Testing (5 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Hoppscotch** | 67K | Open-source API development ecosystem, web + desktop | Download from hoppscotch.io |
| **HTTPie** | 35K | User-friendly HTTP client, cURL for humans | `brew install httpie` |
| **curl** | 35K | Command-line tool for transferring data with URLs | Pre-installed on most systems |
| **Bruno** | 30K | Open-source API client, git-native Postman alternative | Download from usebruno.com |
| **xh** | 5K | Friendly and fast tool for sending HTTP requests, written in Rust | `brew install xh` |

### Monitoring (4 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Netdata** | 72K | Real-time performance and health monitoring | `brew install netdata` |
| **Glances** | 27K | System monitoring tool, web-based and terminal | `pip install glances` |
| **btop** | 25K | Resource monitor with beautiful UI and GPU monitoring | `brew install btop` |
| **dool** | 1.5K | Versatile resource statistics tool, vmstat/iostat/mpstat replacement | `brew install dool` |

### Terminal Enhancement (3 tools)

| Tool | Stars | Description | Install |
|------|-------|-------------|---------|
| **Starship** | 48K | Cross-shell prompt, minimal, fast, customizable | `brew install starship` |
| **tmux** | 35K | Terminal multiplexer with split panes, sessions, persistent workspaces | `brew install tmux` |
| **Atuin** | 23K | Magic shell history - search, sync, and share command history | `brew install atuin` |

---

## Top 10 by Stars

| Tool | Stars | Category |
|------|-------|----------|
| Ollama | 120K | AI Coding CLIs |
| Gemini CLI | 98K | AI Coding CLIs |
| fzf | 68K | Code Analysis |
| ripgrep | 65K | Code Analysis |
| Ansible | 64K | Cloud & DevOps |
| Hoppscotch | 67K | API Testing |
| lazygit | 55K | Git Utilities |
| Bun | 77K | Package Managers |
| uv | 50K | Package Managers |
| Netdata | 72K | Monitoring |

---

## Browse

- [catalog.json](catalog.json) - Full catalog with metadata

## Related

- [MCP Servers](../mcps/) -- Server-based tool integrations
- [Skills](../skills/) -- Agent instructions for using these tools
- [Hooks](../hooks/) -- Automate tool execution with Claude Code hooks
