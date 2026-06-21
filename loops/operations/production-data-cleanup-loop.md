# The Production Data Cleanup Loop

**Category:** Operations | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/production-data-cleanup-loop/

## Use When

Production records contain data that does not meet the allowed definition.

## Prompt

> Review production records, remove anything that does not meet the allowed definition, improve the classification logic, and verify the remaining data.

## Verification

- **Title:** Every remaining record meets the allowed definition.
- **Detail:** Representative classification tests prove validity.

## Steps

1. Write the allowed definition as explicit inclusion, exclusion, and edge-case rules.
2. Audit production records, preserve a recoverable record of proposed removals.
3. Remove confirmed invalid records and improve the classifier with regression examples.
4. Rerun classification tests and audit until every record meets the definition.

## Why

Fixing both existing records and classifier closes immediate problem and reduces recurrence.

## Keywords

data-cleanup, classification, records, validation, production

## Related Loops

- [full-product-evaluation-loop](../evaluation/full-product-evaluation-loop.md)
- [exhaustive-logging-coverage-loop](../engineering/exhaustive-logging-coverage-loop.md)
