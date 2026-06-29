# Plugins Catalog

Reference directory linking to external plugins, extensions, and rules for AI coding agents.

## Overview

This catalog tracks **45 plugins** across **9 categories** for all major AI coding tools:

| Category | Count | Tools |
|----------|-------|-------|
| Claude Code | 8 | Official marketplace, superpowers, frontend-design, context7, serena, greptile, extensions, multi-runtime |
| OpenCode | 8 | Plugin system, helicone-session, wakatime, type-inject, codex-auth, gemini-auth, daytona, browser |
| Cursor | 6 | cursor.directory, awesome-cursorrules, cursorrules-collection, cursor-rules-toolkit, cursing-rulez, cursor-rules-dynamic |
| Copilot | 5 | awesome-copilot, custom-instructions, extensions-ga, awesome-copilot-vscode, context-matic |
| Windsurf | 4 | vscode-plugin, visual-studio, neovim, chrome-extension |
| Aider | 4 | aider-composer, aider-chat, aider-fish, aider-neovim |
| VS Code AI | 5 | kilo-code, cline, roo-code, continue, cody |
| JetBrains | 3 | ai-assistant, acp, skills-manager |
| Cross-Tool | 2 | load-rules, awesome-ai-rules |

## Schema

Each plugin entry follows this structure:

```json
{
  "id": "kebab-case-identifier",
  "name": "Display Name",
  "category": "Category Name",
  "platform": "Target Agent/IDE",
  "stars": 12345,
  "installs": "100K installs",
  "description": "Brief description of the plugin",
  "githubUrl": "https://github.com/owner/repo",
  "websiteUrl": "https://example.com",
  "installCommand": "Installation command",
  "license": "MIT"
}
```

## Usage

Reference this catalog when:

- Discovering plugins for a specific AI coding tool
- Comparing plugin ecosystems across tools
- Finding install commands for popular extensions
- Building cross-tool integrations

## Data Sources

- GitHub repositories and stars
- VS Code Marketplace install counts
- Chrome Web Store statistics
- Official documentation sites
- Community curated lists

## Maintenance

- **Last Updated**: 2026-06-28
- **Version**: 2026.06
- Update entries quarterly or when significant changes occur
- Validate JSON schema before committing