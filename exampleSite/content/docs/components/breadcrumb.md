---
title: "Breadcrumb"
description: "Renders a breadcrumb trail of the page ancestors."
icon: ellipsis
draft: false
---

Hugo ancestor method is used to create breadcrumb trail, Bootstrap classes are used to format content.

## Usage

### Partial
```html
{{ partial "breadcrumb" . }}
```

### Shortcode
```md
{{</* breadcrumb */>}}
```

## Example
```html
{{ partial "breadcrumb" . }}
```

```md
{{</* breadcrumb */>}}
```

{{< breadcrumb >}}

## Configuration
Breadcrumb trail can be configured in the site's `params.toml` file.

| `[breadcrumb]` | Type | Default | Description |
| -------------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Should breadcrumb include home page link. |
| `homeIcon` | string | `'folder-root'` | Icon to use for home page link, set to `''` to use title instead. Uses Lucide icon pack to select icon. |
| `section` | bool | `false` | Toggle breadcrumb on section pages. |
| `single` | bool | `false` | Toggle breadcrumb on single pages. |

{{% references %}}
[^bootstrap-breadcrumb]
[^hugo-ancestors]
[^hugo-sections]
{{% /references %}}
