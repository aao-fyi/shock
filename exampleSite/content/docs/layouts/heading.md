---
title: "Heading"
description: "Renders page heading with title, description, and last edit date."
icon: panel-top-open
weight: 80
draft: false
---

## Usage

### Partial
```html
{{ partial "heading" . }}
```

## Configuration
Can be configured in the `params.toml` file.

| `[heading]` | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Toggle heading on home page. |
| `section` | bool | `false` | Toggles heading on section pages. |
| `single` | bool | `true` | Toggles heading on single pages. |
| `description` | bool | `false` | Toggle page description below title. |

{{% references %}}
[^hugo-sections]
{{% /references %}}
