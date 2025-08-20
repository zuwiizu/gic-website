# MCP Refractor Tool Usage

## Always Use MCP Refractor For Code Changes

When making repetitive code changes across files, ALWAYS use the MCP refractor tools instead of manual editing:

### Available MCP Refractor Tools:
1. `mcp__refractor__code_search` - Search for code patterns using regex
2. `mcp__refractor__code_refactor` - Replace search patterns with new code using regex

### Benefits:
- Much faster than manual editing
- Can make changes across multiple files simultaneously
- More reliable for repetitive changes
- Better for pattern-based modifications

### Usage Examples:
```
// Search for patterns first
mcp__refractor__code_search with search_pattern and file_pattern

// Then refactor/replace
mcp__refractor__code_refactor with search_pattern, replace_pattern, and file_pattern
```

### When to Use:
- Simplifying layouts across multiple pages
- Removing visual clutter (colors, gradients, excessive styling)
- Standardizing component structures
- Making consistent changes to similar sections
- Any repetitive find-and-replace operations

### Remember:
- Always use MCP refractor before falling back to manual edits
- It's especially useful for cleaning up excessive styling and visual elements
- Can target specific file patterns to limit scope