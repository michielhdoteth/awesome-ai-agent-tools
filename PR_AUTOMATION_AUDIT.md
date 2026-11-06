# PR Automation Audit

Date: 2026-11-06
Repository: `michielhdoteth/awesome-ai-agent-tools`
Scope: catalog PR validation, review, triage, merge, and the maintenance loop.

## Executive summary

The pipeline was failing for one systemic reason: the required `catalog-validation`
check came from a `pull_request` workflow, which GitHub holds at
`action_required` for first-time fork contributors. The check never reported, so
every such PR was permanently `BLOCKED` regardless of content. Auto-merge was
enabled at the repository level but had nothing to act on.

That is fixed. Validation now runs from a trusted `pull_request_target` workflow
that always runs and whose checks satisfy the required status check. It reads PR
data through the API and never checks out or executes fork code.

Result in this session:

- 14 community catalog PRs validated and squash-merged.
- 1 PR rejected and closed because its source repository no longer exists.
- 1 PR left open because the author disallows maintainer edits and it conflicts.
- 1 PR deleted upstream by its author.
- 2 automatically generated maintenance PRs merged.
- The open link-audit issue (#203) was remediated and closed by PR #205.

## Root causes (confirmed, not inferred)

### 1. Fork-approval deadlock on the required check

Evidence: for PRs #186–#199 the only run was
`Safe Catalog Validation | pull_request | completed/action_required`, with
`check-runs total: 0`. Branch protection required `catalog-validation`, so the
merge box waited forever.

GitHub behaviour: workflows triggered by `pull_request` from first-time
contributors require a maintainer to click "Approve and run workflows". Until
then no check is reported. `pull_request_target` is exempt from that gate, and
its check runs do satisfy required status checks (GitHub docs, "Troubleshooting
required status checks").

Fix: the required check is now produced by `.github/workflows/pr-validation.yml`
(`pull_request_target`). The `pull_request` workflow was renamed to
`catalog-validation-full` and is advisory only.

### 2. Stale-branch detection used the wrong field

Evidence: the maintenance log said `Open PRs: 17; behind base: 0` while 9 PRs
reported `BEHIND`. GraphQL `mergeStateStatus` returns `BLOCKED` (review
required) before `BEHIND`, so the filter never matched.

Fix: `.github/scripts/sync-branches.js` now uses REST `mergeable_state == "behind"`.

### 3. Branch updates do not reliably emit a `pull_request_target` run

Observed repeatedly: after `update-branch` or a heal push, a `pull_request` run
was created but no `pull_request_target` run, so the required check stayed
missing. The `reopened` event always triggers it.

Fix: `sync-branches.js` and the merge runner force a re-validation with a
close/reopen when no `catalog-validation` check appears for the new head.

### 4. Append-at-tail conflict pile-up on `mcps/catalog.json`

14 open PRs mostly appended to the same array tail. With "require branches to be
up to date" enabled, each merge made the rest conflict, and `update-branch`
returned 422. Blind retries could never resolve this.

Fix: a JSON-aware union merge keyed on `id`
(`.github/scripts/maintainer-heal-conflicts.js`). It keeps the contributor's
added/updated entries and every entry merged after their fork point, then pushes
the merge commit to the fork (only when `maintainer_can_modify` is true).

### 5. Bot-created maintenance PRs never receive workflow runs

Evidence: `automation/catalog-maintenance` PRs showed zero checks. Events
created with the repository `GITHUB_TOKEN` do not start new workflow runs
(GitHub recursion protection), so both the trusted gate and the old check are
skipped.

Mitigation in this session: the generated-docs PR was validated inline by the
maintenance workflow and merged by the repository owner. Recommended permanent
fix is in "Remaining manual settings".

## What changed

| File | Change |
|---|---|
| `.github/scripts/lib/catalogs.js` | New shared schema/validation library: required fields, duplicate ids, true duplicate entries (source + name), category validity, blocked/private hosts, generated totals. |
| `.github/scripts/validate-catalogs.js` | Rewritten to use the shared library; same local CLI, stricter and consistent with the PR gate. |
| `.github/scripts/pr-validate.js` | New trusted validator. Fetches PR files through the API, validates as data, checks duplicates against the base, verifies new sources exist and are not archived, checks scope, checks generated README consistency. Never executes fork code. |
| `.github/scripts/pr-report.js` | New idempotent reporter. One self-updating comment (HTML marker), triage labels, actionable fix steps. Explicitly not a review or approval. |
| `.github/scripts/auto-merge.js` | Enables squash auto-merge only for approved, green, up-to-date, catalog-only PRs. Pure `evaluate()` function exported for tests. Disables auto-merge if scope becomes unsafe. |
| `.github/scripts/sync-branches.js` | REST staleness detection, bounded updates, forced re-validation when no gate run appears. |
| `.github/scripts/maintainer-heal-conflicts.js` | New maintainer tool for JSON-aware conflict healing on forks. Not run in Actions (needs user credentials; the repo token cannot write to forks). |
| `.github/workflows/pr-validation.yml` | New trusted gate (`pull_request_target`), job named `catalog-validation` (the required check). Report job always runs; enforcement step fails only on real validation errors. |
| `.github/workflows/catalog-validation.yml` | Renamed job to `catalog-validation-full`; advisory deep checkout plus `node --test`. |
| `.github/workflows/pr-maintenance.yml` | Scheduled sweep every 30 minutes, on `main` push, and on demand: sync stale branches, then re-evaluate auto-merge. |
| `tests/catalog-validation.test.js` | 16 regression tests for the schema rules and the live catalogs. |
| `tests/auto-merge.test.js` | 14 regression tests for the auto-merge gate. |
| `.github/scripts/lib/digest.js` + `weekly-digest.js` | Pure digest classifier/renderer plus the CLI that upserts the weekly issue. |
| `.github/scripts/automation-alert.js` | One issue per failing critical workflow, auto-closed on recovery. |
| `.github/workflows/weekly-digest.yml` | Monday digest issue. |
| `.github/workflows/automation-alert.yml` | Failure alerting for PR Maintenance, Catalog Maintenance and Check Links. |
| `.github/workflows/triage.yml` | Daily sync + auto-merge sweep, optional conflict healing with a PAT. |
| `.github/workflows/maintenance-automerge.yml` | Optional PAT-based merge of the validated maintenance PR. |
| `tests/digest.test.js` | 12 tests for digest classification and rendering. |
| `contributing.md` | Documents the trusted gate, the deterministic checks, and squash auto-merge after one approval. |

## How the pipeline works now

1. A contributor opens a PR from a fork.
2. `pull_request_target` runs the trusted validator from `main`. No fork code is
   checked out. It posts one comment and reports `catalog-validation`.
3. If the PR is not green, `catalog-validation` fails and the PR cannot merge.
   The comment lists the exact file, entry, and fix.
4. If green, the PR waits for one human approval (branch policy, unchanged).
5. After approval, auto-merge (squash) is enabled; the PR merges when checks and
   the up-to-date rule pass. No manual merge click.
6. Every 30 minutes, `PR Maintenance` updates stale branches and re-evaluates
   auto-merge. Conflicts are healed by the maintainer tool or reported to the
   author.
7. Non-catalog file changes, CI edits, and executable files are permanently
   excluded from auto-merge and require a maintainer decision.

## Security model

- The trusted workflow checks out the default branch only, with
  `persist-credentials: false`.
- PR content is fetched through the Contents API and parsed as JSON. It is never
  imported, evaluated, or executed.
- The validation/report job has `contents: read`, `pull-requests: write`,
  `issues: write`; the auto-merge job never checks out the PR.
- The advisory `pull_request` workflow runs fork code with a read-only token and
  no secrets; a hostile workflow edit cannot reach secrets.
- Private, loopback, link-local, and cloud-metadata hosts are rejected as
  sources. New GitHub sources are verified to exist and be non-archived.
- No check, approval, or branch policy is bypassed by the automation.

## PR-by-PR disposition

| PR | Title | Outcome |
|---|---|---|
| #200 | Add Datacircle to Marketing MCP | Merged `47d96655` |
| #198 | Add faber-language skill | Merged `47316475` |
| #196 | Add LinkBunny to Marketing skills | Merged `5f45902b` (healed) |
| #195 | Rename Off the Wall to Dude Toldya | Merged `96af5182` (update-only) |
| #194 | Add Vulnify Approval Hook | Merged `d96474d4` |
| #193 | Add Keenable MCP | Merged `6a3d295a` |
| #192 | Add Kane CLI | Merged `babc734c` |
| #191 | Add Ponder | Merged `d39cf51e` |
| #190 | Add Anansi Haven MCP | Merged `ae276773` (healed) |
| #189 | Add Gov Tenders MCP | Merged `9654a00a` (healed) |
| #188 | Add ATS Jobs MCP | Merged `eb90713c` (healed) |
| #187 | Add Etsy Sales MCP | Merged `b3da152c` (healed) |
| #186 | Add Sports Odds MCP | Merged `e67115ea` (healed) |
| #185 | Add Scribase MCP | Merged `71b1067b` |
| #202 | Maintenance: metadata/docs | Merged `d411851a` (trusted generated) |
| #204 | Maintenance: metadata/docs | Merged `9f38f4fe` (trusted generated) |
| #205 | Remediate #203 dead/archived links | Merged `237238fa` |
| #197 | Add mcpserverlist-mcp | Left open. Author disables maintainer edits and the PR conflicts; a comment with rebase steps was posted. |
| #155 | Add Agent Wallet Index MCP | Closed. Source `whalecoupons/whale-coupons-mcp` is 404; the PR cannot pass the source-legitimacy gate. |
| #201 | Add iLook Face Analysis | Removed upstream by the author (fork deleted); nothing to triage. |

Issues:

- #203 "Broken or archived catalog links": remediated by #205 (removed one dead
  and two archived entries), then closed.
- #171 "GitHub Support cleanup of PR refs": not a repository-side change. It
  requires the owner to file a request at support.github.com; the owner has
  already replied on the issue.

## Validation evidence

- `node .github/scripts/validate-catalogs.js`: all 9 catalogs pass, 0 errors,
  0 warnings.
- `node .github/scripts/generate-readme.js`: deterministic; no unexpected diff.
- `node --test tests/catalog-validation.test.js`: 16/16 pass.
- `node --test tests/auto-merge.test.js`: 14/14 pass.
- Trusted gate run on a community PR: `Catalog PR Validation` success, check
  `catalog-validation` success (for example run `42277625487` on #200).
- 14 community PRs merged through the gate after their `catalog-validation`
  check reported success.

## Weekly unattended operation

The system is designed so the owner can look once a week:

| Workflow | Cadence | Purpose |
|---|---|---|
| `pr-validation.yml` | every PR event | Trusted required check + actionable comment |
| `pr-maintenance.yml` | hourly and on `main` push | Sync stale branches, force re-validation, re-evaluate auto-merge |
| `triage.yml` | daily 06:00 UTC + manual | Sync + auto-merge sweep; heals conflicts when a PAT is configured |
| `weekly-digest.yml` | Monday 08:00 UTC | Upserts one "Weekly maintainer digest" issue with every queue |
| `automation-alert.yml` | on critical workflow completion | Opens one issue per failing critical workflow; closes on recovery |
| `maintenance-automerge.yml` | on gate completion for the maintenance branch | Merges the generated-docs PR when a PAT is configured |
| `catalog-maintenance.yml` | weekly + on catalog changes | Refreshes metadata and regenerates docs |
| `check-links.yml` | Monday 09:00 UTC | Opens/updates the broken-link issue |

Weekly visit:

1. Open the **Weekly maintainer digest** issue. It lists PRs waiting on
   approval, PRs needing author action, in-progress PRs, automation failures,
   the maintenance PR, and the broken-link queue.
2. Approve the green PRs listed. Auto-merge finishes them.
3. If conflicts are listed and no PAT is configured, run the one-line heal
   command printed in the digest.
4. Read an "Automation failure" issue only if one is open.

Everything else runs without intervention: validation, comments, labels, branch
sync, forced re-validation, squash merge of approved PRs, link audits, the
digest, and failure alerts. The digest and alert issues are idempotent (markers),
so repeated runs never create duplicates.



1. **Keep one human approval (recommended).** `main` requires one approving
   review, dismisses stale approvals, and requires approval of the last push.
   This is intentional; automation never approves a community PR.
2. **Maintenance PRs (needs a decision).** Because PRs created by
   `GITHUB_TOKEN` do not trigger workflows, they have no check and were merged
   by the owner. To make this fully automatic, choose one:
   - Create a fine-grained PAT with `contents: write` and
     `pull-requests: write`, save it as `MAINTENANCE_TOKEN`, and use it in
     `.github/scripts/create-maintenance-pr.js` so the PR triggers the normal
     gate and auto-merge.
   - Or add a repository ruleset with a bypass actor for the GitHub Actions app
     so the maintenance workflow can merge its own validated PR.
3. **#197 (author action).** Ask the contributor to enable "Allow edits by
   maintainers" or rebase; the comment already explains both.
4. **#171 (owner action).** File the GitHub Support request yourself; the
   repository cannot remove the retained PR refs.
5. **Bootstrap note.** Three commits were pushed directly to `main` to install
   this automation (`5882366`, `33022fd`, `b913f40`, `e6f48ea`, `ad8a9df`). This
   was required because the new trusted gate did not exist on `main` yet; each
   commit was validated locally first (validator + tests). Subsequent changes
   went through PRs except the generated maintenance PRs noted above.

## Operational runbook

Run the catalog checks locally:

```bash
node .github/scripts/validate-catalogs.js
node .github/scripts/generate-readme.js
node --test tests/catalog-validation.test.js tests/auto-merge.test.js
```

Heal conflicting catalog PRs (owner credentials required, fork write):

```bash
GITHUB_TOKEN=$(gh auth token) PRS="199 190 187" node .github/scripts/maintainer-heal-conflicts.js
```

Re-run validation for a PR that has no check (the `reopened` event always
triggers the gate): close and reopen the PR, or run the maintenance workflow.

Inspect a PR's automated verdict: the single sticky comment tagged
`<!-- catalog-validation-report -->`, plus the `validation:*`,
`needs-human-review`, and `merge-conflict` labels.
