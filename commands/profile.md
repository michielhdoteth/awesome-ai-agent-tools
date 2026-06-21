---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Performance profiling and bottleneck identification"
---

# /profile

Analyze performance and identify bottlenecks.

## Usage

```
/profile [command | endpoint | function]
```

## Protocol

### Phase 1: Baseline

1. Run the target with timing:
   ```bash
   time [command]
   ```
2. Record execution time, memory usage
3. Check for obvious inefficiencies

### Phase 2: Profile

1. **CPU Profiling**: Identify hot paths
2. **Memory Profiling**: Check for leaks, excessive allocation
3. **I/O Profiling**: Identify slow queries, network calls
4. **Bundle Analysis**: Check for large dependencies (web projects)

### Phase 3: Analyze

1. Identify top 3 bottlenecks
2. Estimate impact of each
3. Propose optimization strategies

### Phase 4: Optimize

1. Implement highest-impact optimization
2. Re-profile to verify improvement
3. Check for regressions in functionality

## Common Bottlenecks

- N+1 database queries
- Missing indexes
- Unoptimized loops/algorithms
- Large bundle sizes
- Memory leaks
- Synchronous I/O
- Redundant computations

## Output

```markdown
## Profile Report

**Target:** [command/endpoint]
**Baseline:** [time/memory]

### Bottlenecks

| # | Location | Impact | Type | Recommendation |
|---|----------|--------|------|----------------|
| 1 | db.query() | 45% of time | I/O | Add index on users.email |

### Optimizations Applied

1. [optimization] - Result: [improvement]
```
