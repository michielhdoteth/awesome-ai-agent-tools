# Data Analysis

Analyze data using MCP servers for CSV, Excel, databases, and visualization. Covers the data analysis tool ecosystem including 102-tool data science pipelines and 69-tool Excel processors.

## When to Use

- Analyzing CSV, Excel, or JSON data files
- Running SQL queries against databases
- Creating charts and visualizations
- Cleaning and transforming datasets
- Generating data reports and summaries

## MCP Servers

### Data Science Pipeline

```json
{
  "mcpServers": {
    "data-science": {
      "command": "npx",
      "args": ["mcp-data-science@latest"]
    }
  }
}
```

**102 tools covering:**
- CSV/Excel/JSON read and write
- Statistical analysis (mean, median, std dev, correlations)
- Data cleaning (missing values, duplicates, outliers)
- Visualization (charts, graphs, dashboards)
- Machine learning basics (regression, classification)

### Excel Processor

```json
{
  "mcpServers": {
    "excel": {
      "command": "npx",
      "args": ["excel-mcp@latest"]
    }
  }
}
```

**69 tools covering:**
- Read/write Excel files (.xlsx, .xls)
- Cell-level operations
- Sheet management
- Formula evaluation
- Formatting and styling

## Core Workflows

### 1. Data Exploration

```
1. Load data file
2. Get schema (columns, types, counts)
3. Preview first N rows
4. Get summary statistics
5. Check for missing values
6. Identify data quality issues
```

### 2. Data Cleaning

```
1. Identify missing values
2. Decide strategy (drop, fill, interpolate)
3. Remove duplicates
4. Fix data types
5. Handle outliers
6. Validate cleaned data
```

### 3. Analysis

```
1. Define questions/hypotheses
2. Filter and group data
3. Calculate statistics
4. Identify patterns and correlations
5. Generate visualizations
6. Summarize findings
```

### 4. Reporting

```
1. Create summary table
2. Generate charts
3. Write narrative
4. Export to format (HTML, PDF, Excel)
5. Share with stakeholders
```

## Data Cleaning Patterns

### Missing Values

```markdown
Strategy selection:
- < 5% missing: Drop rows
- 5-25% missing: Fill with mean/median/mode
- > 25% missing: Consider dropping column or advanced imputation
- Time series: Forward fill or interpolate
```

### Duplicates

```markdown
Exact duplicates: Drop entirely
Near duplicates: Define matching criteria, keep best
Fuzzy matches: Use similarity scoring
```

### Outliers

```markdown
Detection methods:
- IQR method: Beyond 1.5 * IQR from Q1/Q3
- Z-score: Beyond 3 standard deviations
- Domain knowledge: Flag known invalid values

Treatment:
- Remove if clearly errors
- Cap/floor if within reasonable range
- Keep if genuine extreme values
```

## Visualization Guide

### Chart Selection

| Data Type | Recommended Chart | Use Case |
|-----------|------------------|----------|
| Comparison | Bar chart | Compare categories |
| Trend | Line chart | Show change over time |
| Distribution | Histogram | Show frequency distribution |
| Relationship | Scatter plot | Show correlation between variables |
| Composition | Pie/Donut chart | Show parts of whole (few categories) |
| Composition | Stacked bar | Show parts of whole (many categories) |
| Geographic | Map | Location-based data |
| Hierarchy | Treemap | Nested proportions |

### Best Practices

- Title every chart
- Label axes
- Use consistent colors
- Start Y-axis at zero for bar charts
- Limit categories to 7-10 max
- Use annotations for key insights

## SQL Analysis Patterns

### Common Queries

```sql
-- Summary statistics
SELECT 
  COUNT(*) as total,
  AVG(value) as mean,
  STDDEV(value) as std_dev,
  MIN(value) as min_val,
  MAX(value) as max_val
FROM data;

-- Group by analysis
SELECT 
  category,
  COUNT(*) as count,
  AVG(value) as mean
FROM data
GROUP BY category
ORDER BY mean DESC;

-- Time series
SELECT 
  DATE_TRUNC('day', created_at) as day,
  COUNT(*) as count
FROM data
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY day
ORDER BY day;
```

### Performance Tips

- Add indexes on frequently filtered columns
- Use EXPLAIN ANALYZE for slow queries
- Limit result sets during exploration
- Use CTEs for complex multi-step analysis

## Data Quality Checklist

Before analysis, verify:

- [ ] **Completeness**: Missing value percentage acceptable
- [ ] **Consistency**: Same format across all rows
- [ ] **Accuracy**: Values within expected ranges
- [ ] **Timeliness**: Data is recent enough
- [ ] **Uniqueness**: No unintended duplicates
- [ ] **Validity**: Data types match expected schema

## Common Pitfalls

```markdown
BAD: Analyzing without understanding the data first
GOOD: Explore schema, preview rows, understand context

BAD: Ignoring missing values
GOOD: Document missingness, choose appropriate strategy

BAD: Correlation implies causation
GOOD: Consider confounding variables, design experiments

BAD: Cherry-picking metrics that support your hypothesis
GOOD: Report all relevant metrics, including null results

BAD: Presenting raw numbers without context
GOOD: Compare to baselines, show trends, add annotations
```

## Integration Patterns

### With Databases

```
1. Connect to database via MCP
2. Explore schema (tables, columns, relationships)
3. Write analytical queries
4. Export results to CSV/Excel
5. Create visualizations
```

### With Spreadsheets

```
1. Read Excel/CSV via MCP
2. Clean and transform data
3. Run calculations
4. Generate charts
5. Write back to Excel with formatting
```

### With Notebooks

```
1. Use MCP to load data
2. Generate Python/R code for analysis
3. Run code in notebook
4. Capture outputs
5. Export report
```

## References

- mcp-data-science: https://github.com/anthropics/mcp-data-science
- excel-mcp: https://github.com/anthropics/excel-mcp
- Pandas documentation: https://pandas.pydata.org/docs/
- Matplotlib/Seaborn: https://matplotlib.org/ / https://seaborn.pydata.org/
