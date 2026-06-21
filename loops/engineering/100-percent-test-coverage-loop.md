# The 100% Test Coverage Loop

**Category:** Engineering | **Author:** Matthew Berman
**Published:** 2026-06-21 | **Source:** https://signals.forwardfuture.ai/loop-library/loops/100-percent-test-coverage-loop/

## Use When

Test coverage is below target and you need to systematically close gaps.

## Prompt

> Add tests until we have 100% test coverage.

## Verification

- **Title:** The full test suite passes at 100% coverage.
- **Detail:** Use the project's coverage report as the source of truth.

## Steps

1. Run the complete test suite with coverage and save the baseline report.
2. Prioritize uncovered branches and behavior by risk instead of file order.
3. Add tests that assert meaningful outcomes, failure paths, and boundary conditions.
4. Repeat until the full suite passes and the configured coverage report reaches 100%.

## Why

Concrete target gives measurable stopping condition. Risk-first ordering keeps work focused.

## Keywords

testing, coverage, TDD, regression, quality

## Related Loops

- [architecture-satisfaction-loop](architecture-satisfaction-loop.md)
- [production-error-sweep](production-error-sweep.md)
