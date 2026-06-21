# MCP Security

Audit, harden, and securely configure Model Context Protocol servers and connections. 66% of scanned MCP servers have security findings. This skill enforces defense-in-depth.

## When to Use

- Setting up a new MCP server
- Auditing existing MCP configurations
- Reviewing MCP server code for vulnerabilities
- Configuring authentication and access control
- Investigating MCP-related security incidents

## Threat Model

### Common MCP Vulnerabilities

| Vulnerability | Prevalence | Impact |
|---------------|------------|--------|
| SSRF (Server-Side Request Forgery) | 36.7% of servers | Data exfiltration, internal network access |
| No Authentication | 41% of servers | Unauthorized access, data leaks |
| Static API Keys Only | 53% of authenticated | Key leakage, no rotation |
| Prompt Injection via Tool Output | 36% of skills | Agent manipulation, data exfiltration |
| Path Traversal | 82% of scanned | Arbitrary file read/write |
| SQL Injection | Common in DB MCPs | Data destruction, exfiltration |

### Attack Vectors

1. **Malicious Tool Output**: MCP server returns crafted output containing prompt injection to override agent instructions
2. **Tool Shadowing**: Attacker registers a tool with the same name as a legitimate tool but different behavior
3. **SSRF via Tool Parameters**: Agent passes user-controlled URLs to tools that make internal requests
4. **Supply Chain**: Compromised MCP package in npm/PyPI
5. **Token Leakage**: MCP server logs or exposes API keys in error messages

## Security Checklist

### Before Installing Any MCP Server

- [ ] Verify the source (official vendor > verified maintainer > community)
- [ ] Check GitHub stars, last commit date, open security issues
- [ ] Review the server's authentication mechanism
- [ ] Check if it supports OAuth 2.1 (preferred) vs static API keys
- [ ] Verify it runs in sandbox/container, not bare on host
- [ ] Review what tools/resources it exposes

### Authentication Configuration

**Preferred (in order):**
1. OAuth 2.1 with PKCE flow
2. Short-lived API keys with rotation policy
3. Static API keys (minimum viable)

**Never:**
- Hardcoded credentials in config files
- Shared API keys across environments
- No authentication at all

### Access Control

```markdown
GOOD: MCP server runs with read-only database access
BAD: MCP server has full read-write-delete database access

GOOD: MCP server scoped to specific repository
BAD: MCP server has access to entire GitHub account

GOOD: MCP server runs in container with network restrictions
BAD: MCP server runs bare on host with full network access
```

### Transport Security

- Use Streamable HTTP (not legacy SSE) for remote servers
- Enforce HTTPS for all remote MCP connections
- Verify TLS certificates (no `--insecure` flags)
- Use static IPs with IP allowlisting where available

## Audit Procedure

### Step 1: Inventory

List all configured MCP servers:
- Check `opencode.json` or equivalent config
- Document: name, transport type, auth method, tools exposed
- Flag any servers without authentication

### Step 2: Tool Review

For each MCP server's tools:
- List all tool names and descriptions
- Check for tools that accept URLs, file paths, or SQL
- Verify parameter validation is server-side
- Check for tools that can modify state (write, delete, execute)

### Step 3: Output Sanitization

- Verify tool outputs are treated as untrusted data
- Check for prompt injection patterns in tool descriptions
- Ensure tool outputs are not directly injected into agent prompts without sanitization

### Step 4: Network Analysis

- What network access does each MCP server require?
- Can it reach internal services?
- Are there firewall rules or network policies?

### Step 5: Logging and Monitoring

- Are MCP tool calls logged?
- Are failed authentication attempts tracked?
- Is there alerting for anomalous tool usage?

## Hardening Patterns

### Defense in Depth for Database MCPs

```markdown
Layer 1: Dedicated database role with minimal privileges
Layer 2: Read-only mode (default for production)
Layer 3: SQL statement allowlist or AST-level guard
Layer 4: Parameterized queries only (no string concatenation)
Layer 5: Connection destruction between queries (no recycling)
Layer 6: Audit logging of all queries
```

### Container Isolation

```markdown
GOOD: MCP server runs in Docker with:
  - Read-only filesystem (except /tmp)
  - No network access (or restricted to specific hosts)
  - Dropped ALL capabilities
  - Non-root user
  - Resource limits (CPU, memory)

BAD: MCP server runs on host with:
  - Full filesystem access
  - Unrestricted network
  - Root privileges
  - No resource limits
```

### Credential Management

```markdown
GOOD: API keys stored in environment variables, loaded at runtime
BAD: API keys in config files committed to git

GOOD: Short-lived tokens with auto-rotation
BAD: Long-lived tokens with no rotation

GOOD: Per-environment credentials (dev, staging, prod)
BAD: Same credentials across all environments
```

## Red Flags

Immediately investigate if you see:
- MCP server accepting connections from `0.0.0.0`
- Database MCP with `DROP`, `DELETE`, or `TRUNCATE` permissions
- Filesystem MCP with access to `/`, `~`, or sensitive directories
- Any MCP server without authentication
- Tool descriptions that include "execute", "run", or "eval"
- MCP server logging sensitive data (tokens, passwords, PII)

## Recommended Security Tools

| Tool | Purpose |
|------|---------|
| **MCPKernel** | Security gateway with taint tracking, DLP, sandboxing |
| **Docker MCP Gateway** | Hardened shim with per-invocation rootless containers |
| **Kubernetes MCP Guard** | Human-in-the-loop approval for K8s mutations |
| **Glama TDQS** | Tool Definition Quality Score for MCP tool descriptions |

## References

- BlueRock Security MCP analysis (2026): 7,000+ servers scanned
- Snyk ToxicSkills study: Prompt injection in marketplace skills
- Datadog SQL injection case study: PostgreSQL MCP server vulnerability
- Anthropic archived servers: Why 13 servers were deprecated
