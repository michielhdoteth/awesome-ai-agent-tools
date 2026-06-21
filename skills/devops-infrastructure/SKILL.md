# DevOps Infrastructure

Manage containers, orchestration, CI/CD, and cloud infrastructure using MCP servers. Covers Docker, Kubernetes, and cloud provider integrations.

## When to Use

- Managing Docker containers and compose stacks
- Deploying to Kubernetes clusters
- Configuring CI/CD pipelines
- Managing cloud resources (AWS, GCP, Azure)
- Monitoring infrastructure health
- Infrastructure as Code (IaC)

## MCP Servers

### Docker MCP

```json
{
  "mcpServers": {
    "docker": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-docker@latest"]
    }
  }
}
```

**Capabilities:**
- Container lifecycle (start, stop, restart, remove)
- Image management (build, pull, push)
- Network management
- Volume management
- Docker Compose operations
- Log streaming

### Kubernetes MCP

```json
{
  "mcpServers": {
    "kubernetes": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-kubernetes@latest"]
    }
  }
}
```

**Capabilities:**
- Pod management
- Deployment operations
- Service configuration
- ConfigMap/Secret management
- Namespace operations
- Resource monitoring

### Cloud Provider MCPs

```json
{
  "mcpServers": {
    "aws": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-aws@latest"]
    }
  }
}
```

## Docker Workflows

### Container Management

```
1. List running containers
2. Check container logs
3. Inspect container configuration
4. Execute commands in container
5. Manage resource limits
```

### Image Building

```
1. Review Dockerfile
2. Build image with tags
3. Run security scan
4. Push to registry
5. Update deployment configs
```

### Docker Compose

```
1. Review compose file
2. Validate configuration
3. Pull latest images
4. Recreate services
5. Verify health checks
```

## Kubernetes Workflows

### Deployment

```
1. Review deployment manifest
2. Apply configuration
3. Monitor rollout status
4. Verify pod health
5. Check service endpoints
```

### Scaling

```
1. Check current replica count
2. Review resource utilization
3. Adjust replica count
4. Monitor scaling events
5. Verify load distribution
```

### Troubleshooting

```
1. Check pod status and events
2. Review container logs
3. Inspect resource limits
4. Check network policies
5. Verify DNS resolution
```

## CI/CD Patterns

### Pipeline Stages

```
1. Source: Code commit triggers pipeline
2. Build: Compile, bundle, create artifacts
3. Test: Unit, integration, E2E tests
4. Security: SAST, DAST, dependency scanning
5. Deploy: Staged rollout (dev -> staging -> prod)
6. Verify: Health checks, smoke tests
7. Monitor: Alerts, logging, metrics
```

### Deployment Strategies

| Strategy | Risk | Speed | Use Case |
|----------|------|-------|----------|
| Rolling | Medium | Medium | Default for most apps |
| Blue-Green | Low | Fast | Critical services |
| Canary | Low | Slow | High-traffic services |
| Recreate | High | Fast | Non-critical, simple apps |

## Infrastructure as Code

### Terraform Patterns

```hcl
# Module structure
module "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
}

module "eks" {
  source       = "./modules/eks"
  vpc_id       = module.vpc.vpc_id
  cluster_name = "my-cluster"
}
```

### Best Practices

- Version lock providers and modules
- Use remote state with locking
- Implement state locking
- Use workspaces for environments
- Review plans before apply
- Tag all resources

## Security Checklist

### Container Security

- [ ] Use minimal base images (alpine, distroless)
- [ ] Scan images for vulnerabilities
- [ ] Don't run as root
- [ ] Use read-only filesystems where possible
- [ ] Set resource limits (CPU, memory)
- [ ] Use secrets management (not env vars)

### Kubernetes Security

- [ ] Enable RBAC
- [ ] Use Network Policies
- [ ] Pod Security Standards/Admission
- [ ] Secret encryption at rest
- [ ] Audit logging enabled
- [ ] Regular security audits

### CI/CD Security

- [ ] Secrets stored in vault, not repo
- [ ] Signed commits and images
- [ ] Branch protection rules
- [ ] Required reviews
- [ ] Automated security scanning
- [ ] Immutable artifacts

## Monitoring & Observability

### Key Metrics (RED Method)

- **Rate**: Requests per second
- **Errors**: Error rate
- **Duration**: Latency (p50, p95, p99)

### Key Metrics (USE Method)

- **Utilization**: CPU, memory, disk usage
- **Saturation**: Queue depth, waiting requests
- **Errors**: Error counts, failed health checks

### Alerting Rules

```markdown
Critical: Service down, error rate > 5%, latency p99 > 5s
Warning: Error rate > 1%, latency p95 > 2s, disk > 80%
Info: Deployment completed, scaling event, config change
```

## Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Container OOMKilled | Memory limit too low | Increase memory limit |
| Pod CrashLoopBackOff | App error or misconfig | Check logs, verify config |
| Service unreachable | Network policy or selector | Check endpoints, policies |
| Pipeline failing | Test failure or env issue | Check logs, verify env vars |
| Deploy stuck | Health check failing | Verify app starts correctly |

## References

- Docker MCP: https://github.com/anthropics/mcp-docker
- Kubernetes MCP: https://github.com/anthropics/mcp-kubernetes
- Docker best practices: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
- Kubernetes security: https://kubernetes.io/docs/concepts/security/
- Terraform: https://www.terraform.io/docs
