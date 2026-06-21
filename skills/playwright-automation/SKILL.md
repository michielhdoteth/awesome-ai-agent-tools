# Playwright Automation

Automate browser interactions, test web pages, and extract data using Playwright MCP. The de facto standard for browser automation in 2026 with 34K+ GitHub stars.

## When to Use

- Testing web applications end-to-end
- Scraping dynamic websites that require JavaScript
- Automating repetitive browser workflows
- Taking screenshots or generating PDFs
- Filling forms, clicking buttons, navigating pages

## MCP Server Setup

### Official Playwright MCP

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-playwright@latest"],
      "env": {
        "HEADLESS": "true"
      }
    }
  }
}
```

### Alternative: Chrome DevTools MCP

For performance profiling and Core Web Vitals:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["@anthropic-ai/mcp-chrome-devtools@latest"]
    }
  }
}
```

## Core Tools

### Navigation

```
browser_navigate(url)     - Go to a URL
browser_go_back()         - Navigate back
browser_go_forward()      - Navigate forward
browser_refresh()         - Reload page
```

### Interaction

```
browser_click(selector)   - Click an element
browser_fill(selector, value) - Fill a form field
browser_select(selector, value) - Select dropdown option
browser_hover(selector)   - Hover over element
browser_press_key(key)    - Press keyboard key
```

### Extraction

```
browser_snapshot()        - Get accessibility tree (preferred)
browser_screenshot()      - Get visual screenshot
browser_get_text(selector) - Get text content
browser_get_attribute(selector, attr) - Get element attribute
```

### Tab Management

```
browser_tab_list()        - List open tabs
browser_tab_new(url)      - Open new tab
browser_tab_select(id)    - Switch to tab
browser_tab_close(id)     - Close tab
```

## Accessibility Tree vs Screenshot

**Use accessibility tree (preferred) for:**
- Form interactions
- Clicking buttons/links
- Reading text content
- Checking element state

**Use screenshot for:**
- Visual verification
- Layout checks
- Taking screenshots for documentation

```markdown
GOOD: Use browser_snapshot() for interaction - it's faster and more reliable
BAD: Use browser_screenshot() for everything - it's slower and OCR is unreliable
```

## Common Workflows

### Form Submission

```
1. browser_navigate("https://example.com/form")
2. browser_snapshot() - Identify form fields
3. browser_fill("#name", "John Doe")
4. browser_fill("#email", "john@example.com")
5. browser_select("#country", "US")
6. browser_click("button[type=submit]")
7. browser_snapshot() - Verify success message
```

### Data Extraction

```
1. browser_navigate("https://example.com/data")
2. browser_snapshot() - Get page structure
3. browser_get_text(".result-list") - Extract data
4. browser_click(".next-page") - Navigate
5. Repeat extraction
```

### Visual Testing

```
1. browser_navigate("https://example.com/page")
2. browser_screenshot() - Capture baseline
3. Make changes
4. browser_screenshot() - Capture after
5. Compare images
```

## Best Practices

### Reliability

- Always use `browser_snapshot()` before interacting - identify elements first
- Use specific selectors (ID > class > attribute > text)
- Wait for page load after navigation
- Handle dynamic content with retries

### Performance

- Use headless mode (`HEADLESS=true`) for automation
- Reuse browser instances across multiple operations
- Minimize screenshots - use accessibility tree when possible
- Close tabs when done

### Security

- Never automate login with credentials in code
- Use environment variables for sensitive data
- Be aware of rate limiting on target sites
- Respect robots.txt

## Error Handling

| Error | Cause | Fix |
|-------|-------|-----|
| Element not found | Selector wrong or page not loaded | Use `browser_snapshot()` to verify page state |
| Timeout | Page too slow or never loads | Increase timeout, check network |
| Navigation blocked | Popup or redirect intercepted | Handle popup first |
| Selector ambiguous | Multiple elements match | Use more specific selector |

## Anti-Patterns

```markdown
BAD: Hardcoded sleep() - fragile, slow
GOOD: Wait for specific element or condition

BAD: Screenshot everything - slow, unreliable OCR
GOOD: Use accessibility tree for text/interaction

BAD: Single browser instance for all tasks
GOOD: Separate instances for isolated workflows

BAD: Ignoring robots.txt and rate limits
GOOD: Respect site policies, add delays
```

## Integration with Testing Frameworks

### Playwright Test (Recommended)

```typescript
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  await expect(page.locator('h1')).toBeVisible();
});
```

### MCP + Test Framework

```
1. Use MCP for exploration and debugging
2. Use Playwright Test for automated test suites
3. Use MCP screenshots for visual regression baselines
```

## References

- Playwright MCP: https://github.com/microsoft/playwright-mcp (34K+ stars)
- Playwright Documentation: https://playwright.dev
- Chrome DevTools MCP: For performance profiling
- Accessibility tree docs: https://playwright.dev/docs/accessibility-testing
