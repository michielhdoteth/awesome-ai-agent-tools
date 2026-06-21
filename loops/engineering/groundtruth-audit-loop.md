# The Groundtruth Audit Loop

**Category:** Engineering | **Author:** Mohamed (@aivibecode)
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/groundtruth-audit-loop/

## Use When

You need a comprehensive audit of a project from its actual code, not framework assumptions.

## Prompt

> Audit [project] from its actual code and configuration, not framework assumptions. For architecture, platform compatibility, security, privileged areas, performance, deployment, jobs, business logic, and code quality, record proved, no issue, weak, or N/A with direct evidence; verify external limits from current primary sources and calculate numbers. Ask before changing code. Stop when every area is logged with severity, or return unverified areas as blocked. Finish with a plain-language overview and area-to-evidence table.

## Verification

- **Title:** Every audit area has a current evidence-backed outcome and severity.
- **Detail:** No silent gaps.

## Steps

1. Discover the real language, framework, hosting platform, privileged surfaces, scheduled jobs.
2. Inspect each required area, tie conclusions to code or configuration.
3. Record an outcome, evidence, and severity for every area.
4. Deliver the plain-language project overview and area-to-evidence table.

## Why

Broad audits fail when they inherit framework defaults. Fixed evidence table forces proof.

## Keywords

audit, groundtruth, security, performance, architecture

## Related Loops

- [full-product-evaluation-loop](../evaluation/full-product-evaluation-loop.md)
- [promise-to-proof-loop](../evaluation/promise-to-proof-loop.md)
