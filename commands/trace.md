---
allowed-tools: "Read(*)|Glob(*)|Grep(*)|Bash(*)"
description: "Execution tracing and data flow analysis"
---

# /trace

Trace code execution paths and data flow.

## Usage

```
/trace [entry-point] [target-function|target-file]
```

## Protocol

### Phase 1: Map

1. Identify the entry point
2. Find all call paths to the target
3. Map the call graph
4. Identify data transformations

### Phase 2: Trace

For each execution path:

1. Document the call sequence:
   ```
   Entry -> middleware -> controller -> service -> repository -> database
   ```

2. Track data transformations:
   ```
   Request body -> validated DTO -> domain model -> persistence model -> DB row
   ```

3. Identify side effects:
   - File I/O
   - Network calls
   - Database mutations
   - Cache updates
   - Event emissions

### Phase 3: Report

```markdown
## Execution Trace

**Entry:** POST /api/users
**Target:** createUser function

### Call Graph
```
POST /api/users
  -> authMiddleware.verify()
  -> userController.create()
    -> userService.createUser()
      -> userRepository.save()
      -> eventEmitter.emit('user.created')
      -> emailService.sendWelcome()
```

### Data Flow
```
Request.body -> CreateUserDto -> User domain model -> UserRow -> DB INSERT
```

### Side Effects
1. Redis cache write (user:{id})
2. SendGrid email (welcome)
3. Analytics event (user_created)

### Observations
- [Bottleneck, risk, or optimization opportunity]
```
