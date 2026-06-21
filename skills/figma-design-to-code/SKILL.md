# Figma Design-to-Code

Bridge design and development using the Figma MCP server. Extract design context, generate code, and maintain design-dev alignment. 23K+ monthly searches for "Figma MCP".

## When to Use

- Converting Figma designs to code
- Extracting design tokens (colors, spacing, typography)
- Generating components from designs
- Maintaining design system consistency
- Reviewing implementation against designs

## MCP Server Setup

### Official Figma MCP

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["figma-developer-mcp", "--stdio"],
      "env": {
        "FIGMA_API_KEY": "your-figma-personal-access-token"
      }
    }
  }
}
```

### Authentication

1. Go to Figma > Settings > Personal Access Tokens
2. Generate a new token with file read access
3. Add to your MCP config as `FIGMA_API_KEY`

## Core Tools

### File Access

```
get_figma_data(fileKey, nodeIds?) - Get design data for a file or specific nodes
get_figma_file(fileKey)           - Get entire file structure
```

### Design Extraction

```
get_figma_data extracts:
- Layout (position, size, constraints)
- Colors (fills, strokes, opacity)
- Typography (font, size, weight, line height)
- Spacing (padding, margin, gap)
- Border radius, shadows, blur
- Component properties and variants
```

## Workflows

### 1. Design to Component

```
1. Get Figma file URL or node ID
2. Call get_figma_data with the node
3. Review extracted design tokens
4. Generate component code using extracted values
5. Verify against design
```

### 2. Design System Extraction

```
1. Navigate to Figma design system file
2. Extract color palette
3. Extract typography scale
4. Extract spacing system
5. Generate CSS variables or Tailwind config
6. Generate design token JSON
```

### 3. Implementation Review

```
1. Get Figma design for a component
2. Read current implementation code
3. Compare design values vs implementation
4. Flag discrepancies (wrong colors, spacing, etc.)
5. Generate fix recommendations
```

## Design Token Extraction

### Colors

```
Figma data provides:
- hex values
- RGBA values
- opacity
- gradient stops

Convert to CSS:
  --color-primary: #hex;
  --color-primary-rgb: r, g, b;
```

### Typography

```
Figma data provides:
- font family
- font size
- font weight
- line height
- letter spacing
- text decoration

Convert to CSS:
  --text-heading: 700 2rem/1.2 'Inter';
```

### Spacing

```
Figma data provides:
- padding (top, right, bottom, left)
- gap
- margin

Convert to CSS:
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
```

## Code Generation Patterns

### React Component

```jsx
// From Figma node data
function Button({ variant = 'primary', children }) {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}
```

### Tailwind Config

```javascript
// From extracted design tokens
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#6B7280',
      },
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
    },
  },
};
```

### CSS Variables

```css
:root {
  --color-primary: #0066FF;
  --color-secondary: #6B7280;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --text-heading: 700 2rem/1.2 'Inter';
  --text-body: 400 1rem/1.5 'Inter';
}
```

## Best Practices

### Design-Dev Alignment

- Use Figma MCP to extract exact values, don't eyeball
- Generate design tokens from Figma, not manual entry
- Review implementation against Figma before merging
- Keep Figma and code in sync via token generation

### Component Architecture

- Extract component boundaries from Figma auto-layout
- Use Figma variants to inform component props
- Map Figma component properties to React props
- Generate Storybook stories from Figma data

### Performance

- Cache Figma data for static designs
- Only extract changed nodes, not entire files
- Use node IDs for precise extraction
- Batch multiple node extractions

## Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Missing nodes | Token lacks file access | Check Figma API key permissions |
| Incomplete data | Node too complex | Break into smaller nodes |
| Color mismatch | Figma uses different color space | Convert Figma colors to sRGB |
| Font not found | Custom font not in system | Use web-safe fallbacks |

## Integration with Design Systems

### Storybook Integration

```
1. Extract component from Figma
2. Generate React component
3. Generate Storybook story with Figma args
4. Add visual regression test comparing Figma vs rendered
```

### Tailwind Integration

```
1. Extract design tokens from Figma
2. Generate Tailwind config
3. Use tokens in components
4. Verify generated CSS matches Figma
```

## References

- Figma Developer MCP: https://github.com/figma/figma-mcp
- Figma API Documentation: https://www.figma.com/developers/api
- Design Tokens Format: https://design-tokens.github.io/community-group/format/
- Figma Dev Mode: https://www.figma.com/dev-mode/
