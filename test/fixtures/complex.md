---
source: testing/path.md
testing: 123
---

# Complex Data

## File Metadata

- SOURCE: ${this.source}
- NAME: ${this.name}
- SIZE: ${this.size}

## Other data

The variable: ${this.testing}. I want to include a message:

> ${this.include('test/fixtures/partial.md')}
