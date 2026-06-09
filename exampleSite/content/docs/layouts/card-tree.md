---
title: "Card Tree"
description: "Creates navigation cards for a given context."
icon: layout-grid
weight: 90
draft: false
---

On the `home` page, creates cards for sections only. On `section` and `page` pages, creates cards for all pages. Includes a page counter when multiple pages are nested. Uses card partial to create cards. Used on the home and section layouts by default.

## Usage

### Partial
```html
{{ partial "card-tree" . }}
```

{{% references %}}
[^hugo-sections]
{{% /references %}}
