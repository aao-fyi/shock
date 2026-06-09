---
title: "Banner"
description: "Renders hero style section with page title and description."
icon: panel-top-open
weight: 80
draft: false
---

Banner is 'hero' type partial, applied to sections by default. This partial will use the page title as a level 1 header (`h1`), and renders the page description.

## Usage

### Partial
```html
{{ partial "banner" . }}
```

## Configuration
Can be configured in the `params.toml` file.

| `[banner]` | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `home` | bool | `true` | Toggle banner on home page. |
| `section` | bool | `true` | Toggles banner on section pages. |
| `single` | bool | `false` | Toggles banner on single pages. |
| `shadow` | bool | `true` | Toggles shadows for banner partial. |


{{% references %}}
[^hugo-sections]
{{% /references %}}
