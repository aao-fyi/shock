---
title: "Header"
description: "Renders the site header, including navigation bar and main menu."
icon: panel-top
weight: 40
draft: false
---

Loads the "main" menu (`.Site.Menus.main`), copyright statement, and theme controls. Includes toggle for sidebar for pages with sidebar enabled. Loaded in the `baseof.html` layout.

## Usage

### Partial
```html
{{ partial "header" . }}
```

## Configuration
Can be configured in the `params.toml` file.

| `[header]` | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle header state. |
| `brandLogo` | bool | `false` | Toggles brand logo for site from logo path. |
| `brandText` | bool | `true` | Toggles brand text for site, uses `.Site.Title`. |
| `fixedTop` | bool | `true` | Toggles if the header should stick to the top when the page is scrolled down. |
| `shadow` | bool | `true` | Toggles shadows for header partial. |

{{% references %}}
[^hugo-menus]
{{% /references %}}
