# Loop Init CLI

**Category:** Engineering | **Author:** Cobus Greyling
**Published:** 2026-06-21 | **Source:** https://github.com/cobusgreyling/loop-engineering/tree/main/tools/loop-init

## Use When

You need to scaffold a new loop with budget and run-log structure.

## Prompt

> Initialize a new loop from a starter template. Set the pattern type, tool preference, and budget constraints. Create the loop structure with run-log tracking.

## Verification

- **Title:** A properly scaffolded loop directory is created with all required files.
- **Detail:** The loop includes budget tracking and run-log structure.

## Steps

1. Run `npx @cobusgreyling/loop-init . --pattern daily-triage --tool grok` with desired parameters.
2. Review the generated loop structure.
3. Customize the prompt, verification, and steps for the specific use case.
4. Validate the new loop with the audit tool.

## Why

Scaffolding prevents missing required fields and ensures consistent loop structure.

## Keywords

scaffold, init, template, setup, CLI

## Related Loops

- [loop-audit](loop-audit.md)
- [loop-cost](loop-cost.md)
