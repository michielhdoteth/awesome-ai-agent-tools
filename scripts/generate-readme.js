#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPO = 'michielhdoteth/awesome-ai-agent-tools';
const REPO_URL = `https://github.com/${REPO}`;

// Extract an owner/repo slug from any catalog entry, handling every URL
// field naming convention used across the 8 catalogs:
//   skills/prompts/hooks -> source ("owner/repo")
//   mcps                 -> github ("https://github.com/owner/repo")
//   loops                -> sourceRepo ("owner/repo")
//   tools                -> url ("https://github.com/owner/repo")
//   plugins              -> websiteUrl (only when it points at github.com)
const SLUG_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const GH_URL_RE = /github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)/;

function repoOf(e) {
  const slugFields = ['source', 'sourceRepo', 'repo'];
  for (const f of slugFields) {
    const v = e[f];
    if (typeof v === 'string' && SLUG_RE.test(v.trim())) return v.trim();
  }
  const urlFields = ['github', 'githubUrl', 'url', 'sourceUrl', 'repository'];
  for (const f of urlFields) {
    const v = e[f];
    if (typeof v === 'string') {
      const m = v.match(GH_URL_RE);
      if (m) return m[1];
    }
  }
  // websiteUrl only counts when it actually links to a GitHub repo
  if (typeof e.websiteUrl === 'string') {
    const m = e.websiteUrl.match(GH_URL_RE);
    if (m) return m[1];
  }
  return '';
}

function displayName(e) {
  return e.title || e.name || e.id || '';
}

const CATALOGS = [
  {
    file: 'skills/catalog.json',
    key: 'skills',
    name: 'Skills',
    title: 'Skills Catalog',
    desc: 'Reusable AI agent skills following the SKILL.md standard',
    folder: 'skills',
    plural: 'skills',
  },
  {
    file: 'mcps/catalog.json',
    key: 'servers',
    name: 'MCPs',
    title: 'MCP Server Catalog',
    desc: 'Curated Model Context Protocol servers for AI-assisted development',
    folder: 'mcps',
    plural: 'mcps',
  },
  {
    file: 'loops/catalog.json',
    key: 'loops',
    name: 'Agent Loops',
    title: 'Loop Library Catalog',
    desc: 'Repeatable AI-agent workflows with feedback loops',
    folder: 'loops',
    plural: 'loops',
  },
  {
    file: 'subagents/catalog.json',
    key: 'subagents',
    name: 'Subagents',
    title: 'Subagents Catalog',
    desc: 'Specialized agent definitions with model routing',
    folder: 'subagents',
    plural: 'subagents',
  },
  {
    file: 'hooks/catalog.json',
    key: 'hooks',
    name: 'Hooks',
    title: 'Hooks Catalog',
    desc: 'Production-ready Claude Code hooks for security, automation, and quality',
    folder: 'hooks',
    plural: 'hooks',
  },
  {
    file: 'plugins/catalog.json',
    key: 'plugins',
    name: 'Plugins',
    title: 'Plugins Catalog',
    desc: 'Extensions for Claude Code, OpenCode, Cursor, and 6 more platforms',
    folder: 'plugins',
    plural: 'plugins',
  },
  {
    file: 'prompts/catalog.json',
    key: 'prompts',
    name: 'Prompts',
    title: 'Prompts Catalog',
    desc: 'Curated prompt collections and marketplaces for AI coding agents',
    folder: 'prompts',
    plural: 'prompts',
  },
  {
    file: 'tools/catalog.json',
    key: 'tools',
    name: 'Tools',
    title: 'Tools Catalog',
    desc: 'Essential CLI tools and utilities that enhance AI coding agent capabilities',
    folder: 'tools',
    plural: 'tools',
  },
];

function badges(repo) {
  if (!repo) return '';
  return `![Stars](https://img.shields.io/github/stars/${repo}?style=flat&label=Stars&color=gold) ![Last Commit](https://img.shields.io/github/last-commit/${repo}?style=flat)`;
}

// Markdown link to an entry's source. Prefers a GitHub repo slug, then falls
// back to any http(s) URL field (websiteUrl, or a full-URL `source`) so entries
// that live outside GitHub still render a clickable source.
//
// remark-lint:double-link forbids the same URL twice in one document, and a
// top-N table can easily surface five entries from one repo. The first
// occurrence links; later ones render as plain code so the source is still
// visible without a duplicate hyperlink.
const usedLinks = new Set();

function sourceLink(e) {
  const slug = repoOf(e);
  let url = slug ? `https://github.com/${slug}` : '';
  let label = slug;
  if (!url) {
    const urlFields = ['github', 'githubUrl', 'url', 'sourceUrl', 'repository',
      'websiteUrl', 'source', 'sourceRepo', 'repo'];
    for (const f of urlFields) {
      const v = e[f];
      if (typeof v === 'string' && /^https?:\/\//.test(v.trim())) {
        url = v.trim();
        try { label = new URL(url).hostname.replace(/^www\./, ''); } catch (_) { label = url; }
        break;
      }
    }
  }
  if (!url) return '';
  if (usedLinks.has(url)) return `\`${label}\``;
  usedLinks.add(url);
  return `[${label}](${url})`;
}

// Highest-starred entries first, one per distinct source repo, so a category's
// preview shows breadth instead of five rows from the same project.
// Entries without a star count keep catalog order.
function sourceKey(e) {
  const slug = repoOf(e);
  if (slug) return slug.toLowerCase();
  const urlFields = ['github', 'githubUrl', 'url', 'sourceUrl', 'repository',
    'websiteUrl', 'source', 'sourceRepo', 'repo'];
  for (const f of urlFields) {
    const v = e[f];
    if (typeof v === 'string' && /^https?:\/\//.test(v.trim())) return v.trim().toLowerCase();
  }
  return null;
}

function topEntries(items, n) {
  const seen = new Set();
  const out = [];
  const sorted = items
    .map((e, i) => ({ e, i, s: typeof e.stars === 'number' ? e.stars : -1 }))
    .sort((a, b) => (b.s - a.s) || (a.i - b.i));
  for (const { e } of sorted) {
    const k = sourceKey(e);
    if (k) {
      if (seen.has(k)) continue;
      seen.add(k);
    }
    out.push(e);
    if (out.length >= n) break;
  }
  return out;
}

function loadCatalog(cat) {
  const filePath = path.join(ROOT, cat.file);
  if (!fs.existsSync(filePath)) return { count: 0, categories: [], items: [] };
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const items = data[cat.key] || [];

  const actualCats = {};
  for (const item of items) {
    if (item.category) {
      actualCats[item.category] = (actualCats[item.category] || 0) + 1;
    }
  }

  const categories = Object.entries(actualCats)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return { count: items.length, categories, items };
}

function padCell(content, width) {
  return ` ${content.padEnd(width)} `;
}

// Build a pipe-aligned markdown table (required by remark-lint:awesome rules)
function mdTable(headers, rows) {
  // A literal pipe inside cell content (e.g. "curl|sh") would be parsed as a
  // column separator and corrupt the table, so escape it.
  const esc = (s) => String(s).replace(/\|/g, '\\|');
  const safeRows = rows.map((r) => r.map(esc));
  const safeHeaders = headers.map(esc);
  const widths = safeHeaders.map((h, i) => {
    let w = h.length;
    for (const r of safeRows) {
      if (String(r[i]).length > w) w = String(r[i]).length;
    }
    return w;
  });
  const fmtRow = (cells) => `|${cells.map((c, i) => padCell(String(c), widths[i])).join('|')}|`;
  const sep = `|${widths.map((w) => ` ${'-'.repeat(w)} `).join('|')}|`;
  return [fmtRow(safeHeaders), sep, ...safeRows.map(fmtRow)].join('\n');
}

function buildTable(items, cat) {
  const headers = ['Name', 'Category', 'Description', 'Source', 'Badges'];
  const rows = items.map((e) => [
    displayName(e),
    e.category || '',
    e.description || '',
    sourceLink(e),
    badges(repoOf(e)),
  ]);
  return mdTable(headers, rows);
}

function generateFolderReadme(cat, data) {
  const catLines = data.categories
    .map((c) => `- **${c.name}** (${c.count})`)
    .join('\n');

  const readme = `# ${cat.title}

${cat.desc}

**${data.count}** entries across **${data.categories.length}** categories.

## Categories

${catLines}

## All ${data.count} ${cat.plural}

${buildTable(data.items, cat)}

---

Machine-readable data: [catalog.json](catalog.json)`;

  const readmePath = path.join(ROOT, cat.folder, 'README.md');
  fs.writeFileSync(readmePath, readme, 'utf8');
}

function generateReadme() {
  const catalogs = CATALOGS.map((c) => ({ ...c, ...loadCatalog(c) }));
  const totalCount = catalogs.reduce((sum, c) => sum + c.count, 0);
  const categoryCount = catalogs.length;

  for (const cat of catalogs) {
    generateFolderReadme(cat, cat);
  }

  // Build TOC: anchors must match the "## Name" headings below exactly.
  // Contributing stays out per awesome-list convention (lint exempts it);
  // every other h2 must be listed or remark-lint:awesome-toc fails.
  const toc = catalogs
    .map((c) => `- [${c.name}](#${c.name.toLowerCase().replace(/\s+/g, '-')})`)
    .join('\n');

  // Category sections sit directly after Contents so each ToC item matches
  // its heading in document order (remark-lint:awesome-toc).
  // Each section lists its top entries so every category is reachable, then
  // links to the folder for the full catalog. Top 5 only: the full list lives
  // in the folder README, which keeps the root readme small as it grows.
  // Tables are used rather than bullets so the source column stays scannable.
  const TOP_N = 5;
  const categoryDetails = catalogs.map((c) => {
    const catLines = c.categories
      .sort((a, b) => b.count - a.count)
      .map((cat) => `${cat.name} (${cat.count})`)
      .join(' · ');
    const table = mdTable(
      ['Name', 'Description', 'Source'],
      topEntries(c.items, TOP_N).map((e) => [
        displayName(e),
        e.description || '',
        sourceLink(e),
      ]),
    );
    return `## ${c.name}

${c.count} ${c.plural} across ${c.categories.length} categories: ${catLines}

**[Browse all ${c.count} ${c.plural} in ${c.folder}/](${c.folder}/)** · [catalog.json](${c.folder}/catalog.json)

Top 5 shown:

${table}`;
  }).join('\n\n');

  const readme = `<div align="center">

# Awesome AI Agent Tools

<img src=".github/banner.jpg" alt="Awesome AI Agent Tools" width="800">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub Stars](https://img.shields.io/github/stars/${REPO}?style=flat-square&label=Stars&color=gold)](${REPO_URL}/stargazers)

</div>

Installable components for AI coding assistants - skills, MCP servers, agent loops, subagents, hooks, plugins, prompts, and CLI tools, each with a source link and an install command.

**${totalCount}** installable components across **${categoryCount}** categories. Every entry is sourced from a real open-source project. Works with Claude Code, OpenCode, Codex, Cursor, Gemini CLI, Copilot, and 30+ AI coding assistants.

## Contents

${toc}

${categoryDetails}

## Contributing

We welcome contributions. You can:

1. Manual PR - fork, add an entry to a \`catalog.json\` file, validate, and submit. See [contributing.md](contributing.md).
2. Agent-automated - give your AI agent the contributing.md guide and it handles everything.
3. Open an issue to suggest a tool we should add.

All data comes from \`catalog.json\` files in each folder. These catalogs are the single source of truth for programmatic discovery.
`;

  const readmePath = path.join(ROOT, 'readme.md');
  fs.writeFileSync(readmePath, readme, 'utf8');
  console.log(`Generated root readme + ${catalogs.length} folder READMEs (${totalCount} total components)`);
}

generateReadme();