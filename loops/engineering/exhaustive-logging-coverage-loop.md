# The Logging Coverage Loop

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/exhaustive-logging-coverage-loop/

## Use When

Important code paths lack structured logging and you need tested coverage.

## Prompt

> Review the system's logging and add missing coverage until every important path produces useful, tested logs.

## Verification

- **Title:** Every important path emits useful, tested logs.
- **Detail:** Representative success and failure tests prove coverage without exposing sensitive data.

## Steps

1. Inventory the important paths and define the event, outcome, severity, correlation context, and fields each one should emit.
2. Add structured logs to uncovered paths without duplicating events or adding low-value noise.
3. Add tests for successful and failed outcomes, then inspect representative emitted logs for useful context.
4. Verify redaction and repeat until every important path has tested coverage or a documented reason not to log.

## Why

Treats logging as testable coverage. Inspecting emitted events catches gaps source review misses.

## Keywords

logging, observability, structured-logs, testing, redaction

## Related Loops

- [production-error-sweep](production-error-sweep.md)
- [100-percent-test-coverage-loop](100-percent-test-coverage-loop.md)
