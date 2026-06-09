---
title: "Menu"
description: "Render the main Hugo menu as a Bootstrap offcanvas element."
icon: menu
weight: 60
draft: false
---

Included with the `header` partial by default.

## Usage

### Partial
```html
{{ partial "menu" . }}
```

## Configuration
Menu items can be added by including `menu: main` on a page's frontmatter, or by defining menu items in the `hugo.toml` file.

```toml
[menu]
  [[menu.main]]
    identifier = 'example'
    name = 'Example'
    weight = '10'
    url = 'https://example.com/'
```


{{% references %}}
[^hugo-menus]
{{% /references %}}
