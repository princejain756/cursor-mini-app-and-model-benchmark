# Cursor Mini App & Multi-Model Benchmark Suite

Built for **MLH Global Hack Week: Builders Week** Cursor challenges:

1. **Challenge 1 (Build a Mini App with Cursor)**: Interactive single-page Bill Split & Tip Calculator mini-app with dark/light mode toggle and reactive calculations (`src/server.mjs`).
2. **Challenge 2 (Benchmark Cursor's Models)**: Controlled 3-model benchmark executing the identical Unicode grapheme-safe string reversal prompt across **Grok 4.7**, **Composer 2.5**, and **Claude Sonnet 4.5**, comparing latency, output tokens, edge-case accuracy, pros, and cons.

## Quick Start

```bash
# Print benchmark JSON results in terminal
npm run benchmark

# Launch live mini-app and benchmark UI on http://localhost:4580
npm start
```
