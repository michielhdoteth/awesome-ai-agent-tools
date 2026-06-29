# Contribute Skill

Automate contributions to the Awesome AI Agent Tools directory. Your agent forks the repo, adds entries, validates, and submits a PR.

## When to Use

- User wants to add a skill, MCP server, loop, subagent, or plugin to the directory
- User says "add [item] to the catalog" or "contribute [item]"
- User shares a GitHub repo URL and wants it added

## Instructions

### Step 1: Identify the Item

Determine what the user wants to add:

1. **Ask for the GitHub URL** if not provided
2. **Fetch the repo metadata** -- name, description, stars, topics
3. **Determine the catalog** -- skills, mcps, loops, subagents, or plugins
4. **Determine the category** within that catalog

```bash
# Get repo info
curl -s https://api.github.com/repos/OWNER/REPO | jq '{name, description, stargazers_count, topics, html_url}'
```

### Step 2: Fork the Repository

```bash
# Fork via GitHub CLI
gh repo fork michielhdoteth/awesome-ai-agent-tools --clone=false

# Or if already forked
gh repo sync YOUR_FORK/awesome-ai-agent-tools
```

### Step 3: Create a Branch

```bash
# Create descriptive branch
git checkout -b add/ITEM-NAME-to-CATEGORY
```

### Step 4: Add the Entry

Read the existing catalog to understand the format:

```bash
# Read the target catalog
cat skills/catalog.json | jq '.skills[0]'  # See example entry
cat mcps/catalog.json | jq '.servers[0]'
cat loops/catalog.json | jq '.loops[0]'
cat subagents/catalog.json | jq '.subagents[0]'
cat plugins/catalog.json | jq '.plugins[0]'
```

Add the new entry to the appropriate array. Use this template:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Human Readable Name",
  "category": "Category Name",
  "description": "Clear one-line description",
  "githubUrl": "https://github.com/owner/repo",
  "installCommand": "npx skills add owner/repo",
  "stars": 12345,
  "tags": ["relevant", "tags"],
  "source": "github",
  "sourceType": "official",
  "lastUpdated": "YYYY-MM-DD"
}
```

**Required fields:**
- `id` -- Unique, kebab-case, no duplicates
- `name` -- Human-readable
- `category` -- Must match existing category
- `description` -- Clear, no marketing fluff
- `githubUrl` -- Valid GitHub link
- `source` -- Where found: `github`, `reddit`, `blog`, `official-docs`
- `sourceType` -- `official`, `community`, or `registry`

**Optional fields:**
- `installCommand` -- How to install
- `stars` -- Current GitHub stars
- `tags` -- Searchable tags
- `npmPackage` -- If available on npm
- `website` -- Project website
- `license` -- License type

### Step 5: Update Metadata

Update the catalog metadata:

```json
{
  "totalSkills": INCREMENT_BY_ONE,
  "lastUpdated": "TODAYS_DATE"
}
```

Update the category count in the `categories` array.

### Step 6: Validate

```bash
# Validate JSON
cat skills/catalog.json | jq . > /dev/null && echo "Valid JSON"

# Check for duplicate IDs
cat skills/catalog.json | jq '[.skills[].id] | group_by(.) | map(select(length > 1))'

# Verify count matches
cat skills/catalog.json | jq '.skills | length'
```

### Step 7: Commit and Push

```bash
git add .
git commit -m "Add [ITEM_NAME] to [CATEGORY] catalog

- Added [ITEM_NAME] ([GitHub URL])
- Stars: [NUMBER]
- Category: [CATEGORY]
- Source: [SOURCE]"

git push origin add/ITEM-NAME-to-CATEGORY
```

### Step 8: Create PR

```bash
gh pr create \
  --title "Add [ITEM_NAME] to [CATEGORY] catalog" \
  --body "## What
Adds [ITEM_NAME] to the [CATEGORY] catalog.

## Why
[ITEM_NAME] is a [brief description] with [X] stars.

## Changes
- Added entry to [catalog].json
- Updated category count
- Updated total count

## Validation
- [x] JSON valid
- [x] No duplicate IDs
- [x] GitHub URL accessible
- [x] Star count accurate" \
  --label "catalog-update"
```

## Error Handling

- **Duplicate ID**: Modify the ID to be unique (add suffix or use repo name)
- **Invalid JSON**: Use `jq` to validate and fix syntax
- **Missing category**: Add the category first, then the entry
- **Fork already exists**: Sync with upstream before creating branch
- **PR already exists**: Update the existing branch instead

## Tips

- Use `jq` for all JSON operations (never manual string editing)
- Keep descriptions under 100 characters
- Use the actual GitHub star count, not rounded
- Set `lastUpdated` to today's date
- If the item has an npm package, include `installCommand`
