# A2A Protocol (Agent-to-Agent)

Implement multi-agent coordination using the Agent-to-Agent protocol. A2A complements MCP: MCP connects agents to tools, A2A connects agents to agents. Both are now under Linux Foundation governance.

## When to Use

- Coordinating multiple AI agents on a complex task
- Building agent teams with specialized roles
- Implementing agent discovery and capability negotiation
- Managing long-running agent tasks with delegation
- Building agent-to-agent communication patterns

## A2A vs MCP

| Aspect | MCP | A2A |
|--------|-----|-----|
| **Purpose** | Agent-to-tool | Agent-to-agent |
| **Pattern** | Agent calls tool, gets result | Agent delegates to agent, gets result |
| **Discovery** | Tool schemas in config | Agent Cards (`.well-known/agent.json`) |
| **State** | Usually stateless | Stateful (tasks with lifecycle) |
| **Transport** | stdio, Streamable HTTP | HTTP + JSON-RPC |
| **Governance** | Linux Foundation (Agentic AI) | Linux Foundation (alongside MCP) |

## Core Concepts

### Agent Card

Every A2A-compliant agent publishes an Agent Card at `/.well-known/agent.json`:

```json
{
  "name": "Code Reviewer",
  "description": "Reviews code for security, logic, and performance issues",
  "url": "https://reviewer.example.com",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true,
    "pushNotifications": false,
    "stateTransitionHistory": true
  },
  "authentication": {
    "schemes": ["OAuth2"]
  },
  "skills": [
    {
      "id": "security-review",
      "name": "Security Review",
      "description": "Identifies security vulnerabilities in code",
      "tags": ["security", "code-review"]
    }
  ]
}
```

### Task Lifecycle

```
submitted -> working -> input-required -> working -> completed
                                     \-> failed
                                     \-> canceled
```

### Message Exchange

```json
{
  "jsonrpc": "2.0",
  "method": "tasks/send",
  "params": {
    "id": "task-123",
    "message": {
      "role": "user",
      "parts": [
        {
          "type": "text",
          "text": "Review this PR for security issues"
        }
      ]
    }
  }
}
```

## Implementation Patterns

### Pattern 1: Orchestrator Agent

One agent delegates to specialized agents:

```
Orchestrator
  |-- Planner Agent (breaks down tasks)
  |-- Coder Agent (implements code)
  |-- Reviewer Agent (reviews code)
  |-- Tester Agent (writes and runs tests)
```

**When to use:** Complex projects with clear role separation.

### Pattern 2: Peer-to-Peer

Agents discover and communicate directly:

```
Agent A <---> Agent B
  ^               ^
  |               |
Agent C <---> Agent D
```

**When to use:** Distributed systems where agents have overlapping capabilities.

### Pattern 3: Pipeline

Agents process sequentially:

```
Input -> Agent 1 (Research) -> Agent 2 (Plan) -> Agent 3 (Implement) -> Output
```

**When to use:** Linear workflows where each stage transforms the output.

## A2A + MCP Integration

```markdown
Multi-Agent System
  A2A Layer: Agent Communication (discovery, negotiation, tasks)
  MCP Layer: Tool Integration (tools, resources, prompts)
```

Example workflow:
1. Orchestrator receives task via A2A
2. Orchestrator delegates to Coder Agent via A2A
3. Coder Agent uses MCP to access filesystem, git, tests
4. Coder Agent returns result via A2A
5. Orchestrator delegates to Reviewer Agent via A2A
6. Reviewer Agent uses MCP to access code, linters
7. Reviewer Agent returns findings via A2A

## Agent Discovery

### Static Discovery

Configure known agents in your config:

```json
{
  "a2a": {
    "agents": [
      {
        "name": "reviewer",
        "url": "https://reviewer.internal.com"
      }
    ]
  }
}
```

### Dynamic Discovery

Query agent directories or use DNS-based discovery:

1. Agent publishes Agent Card at `/.well-known/agent.json`
2. Client fetches Agent Card to discover capabilities
3. Client initiates task based on matched skills

## Security Considerations

- **Authentication**: Use OAuth 2.1 for agent-to-agent auth
- **Authorization**: Each agent should only access what it needs
- **Audit**: Log all inter-agent communications
- **Sandboxing**: Run agents in isolated environments
- **Rate Limiting**: Prevent agent abuse loops
- **Trust**: Verify Agent Cards before delegating sensitive tasks

## Task Management

### Creating Tasks

```json
{
  "method": "tasks/send",
  "params": {
    "id": "unique-task-id",
    "message": {
      "role": "user",
      "parts": [{"type": "text", "text": "Task description"}]
    },
    "metadata": {
      "priority": "high",
      "deadline": "2026-06-22T00:00:00Z"
    }
  }
}
```

### Streaming Results

```json
{
  "method": "tasks/sendSubscribe",
  "params": {
    "id": "task-123",
    "message": { ... }
  }
}
```

Events:
- `task-status-update` - Agent working, needs input, completed
- `task-artifact-update` - Partial results

### Cancellation

```json
{
  "method": "tasks/cancel",
  "params": {
    "id": "task-123"
  }
}
```

## Common Pitfalls

1. **Over-engineering**: Start with MCP for tool access, add A2A only when you need agent coordination
2. **Infinite loops**: Agent A delegates to B, B delegates back to A. Set max delegation depth.
3. **Context loss**: Each agent gets fresh context. Pass all necessary info in the task message.
4. **No timeout**: Long-running tasks need deadlines and cancellation.
5. **Trust too much**: Verify Agent Cards, authenticate all agents, audit communications.

## References

- A2A Protocol Specification: https://github.com/google/A2A
- Linux Foundation Agentic AI Foundation
- Google A2A announcement and reference implementations
- MCP + A2A complementary architecture patterns
