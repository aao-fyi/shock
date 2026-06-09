---
title: "Sidebar"
description: "Render sidebar on page as a Bootstrap offcanvas element."
icon: panel-top-open
weight: 70
draft: false
---

For home and section pages this will include links and sub-links to section content. For single pages this will include a table of contents of the page.

## Usage

### Partial
```html
{{ partial "sidebar" . }}
```

## Configuration
Can be configured in the `params.toml` file.

| `[sidebar]` | Type | Default | Description |
| ----------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Toggle sidebar on home page.
| `section` | bool | `false` | Toggle sidebar on section pages. |
| `single` | bool | `false` | Toggle sidebar on single pages. |
| `tableofcontentsID` | string | `sb-toc` | ID to assign table of contents wrapper. |


{{% references %}}
[^hugo-sections]
[^hugo-toc]
{{% /references %}}
