---
title: "Footer"
description: "Renders the site footer, including footer menus and copyright information."
icon: panel-bottom
weight: 50
draft: false
---

Loads the "footer" menu (`.Site.Menus.Footer`), copyright statement, and "connect" menu (`.Site.Menus.Connect`) by default. Loaded in the `baseof.html` layout.

## Usage

### Partial
```html
{{ partial "footer" . }}
```

## Configuration
Can be configured in the `params.toml` file.

| `[footer]` | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle footer state. |
| `stick` | bool | `true` | Toggles if the footer should stick to the bottom of the page when the document content is too short to fill the page. |
| `shadow` | bool | `true` | Toggles shadows for footer partial. |

{{% references %}}
[^hugo-copyright]
[^hugo-menus]
{{% /references %}}
