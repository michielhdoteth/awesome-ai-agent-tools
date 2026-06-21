---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "API reference documentation generation from code"
---

# /api-docs

Generate API reference documentation from source code.

## Usage

```
/api-docs [file | directory]
```

## Protocol

### Phase 1: Scan

1. Identify all exported functions, classes, and types
2. Extract JSDoc/TSDoc comments
3. Identify parameter types and return types
4. Check for existing documentation

### Phase 2: Generate

For each API surface, generate:

```markdown
## `functionName(params)`

**Description:** [from JSDoc or inferred]

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| param1 | string | Yes | Description |
| param2 | number | No | Description (default: 0) |

**Returns:** `ReturnType` - Description

**Example:**
\`\`\`typescript
const result = functionName('input', 42);
\`\`\`
```

### Phase 3: Validate

1. All documented APIs exist in code
2. Parameter types match implementation
3. Examples are runnable
4. No undocumented public APIs

## Output

Save to `docs/api.md` or update existing API documentation.
