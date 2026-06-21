---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Design before implementation - explore options and make decisions"
---

# /brainstorm

Explore design options before implementing.

## Usage

```
/brainstorm "Feature or problem to design"
```

## Protocol

### Phase 1: Understand

1. Clarify the problem statement
2. Identify constraints and requirements
3. List assumptions
4. Define success criteria

### Phase 2: Explore

<!-- checkpoint:MUST explore at least 3 approaches -->

Generate multiple approaches:

#### Approach A: [Name]
- **Pros:** [advantages]
- **Cons:** [disadvantages]
- **Complexity:** [LOW/MEDIUM/HIGH]
- **Time estimate:** [hours/days]

#### Approach B: [Name]
- **Pros:** [advantages]
- **Cons:** [disadvantages]
- **Complexity:** [LOW/MEDIUM/HIGH]
- **Time estimate:** [hours/days]

#### Approach C: [Name]
- **Pros:** [advantages]
- **Cons:** [disadvantages]
- **Complexity:** [LOW/MEDIUM/HIGH]
- **Time estimate:** [hours/days]

### Phase 3: Compare

| Criterion | Weight | Approach A | Approach B | Approach C |
|-----------|--------|------------|------------|------------|
| Simplicity | 30% | 8 | 6 | 9 |
| Performance | 25% | 7 | 9 | 6 |
| Maintainability | 25% | 8 | 7 | 8 |
| Scalability | 20% | 6 | 8 | 7 |
| **Weighted Score** | | **7.3** | **7.4** | **7.6** |

### Phase 4: Recommend

1. **Recommended:** [Approach] because [reason]
2. **Alternative:** [Approach] if [condition]
3. **Next Steps:** [concrete actions]

## Rules

- Don't implement during brainstorm
- Don't dismiss ideas without consideration
- Do challenge assumptions
- Do consider trade-offs explicitly
