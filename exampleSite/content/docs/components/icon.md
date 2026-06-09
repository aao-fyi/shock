---
title: "Icon"
description: "Load inline SVG icons from the Lucide icon pack."
icon: lucide
draft: false
---

Load specified icon from Lucide icon pack. If it does not find a matching icon, it will attempt to use an icon from Simple Icons with the `icon-brand` component.

## Usage

### Partial
```html
{{ partial "icon" "globe" }}
```

### Shortcode
```md
{{</* icon "globe" */>}}
```

## Example
```html
{{ partial "icon" "globe" }}
```

```md
{{</* icon "globe" */>}}
{{</* icon "lucide" */>}}
{{</* icon "feather" */>}}
{{</* icon "hugo" */>}}
```

| Icon | Output | Notes |
| ---- | ------ | ----- |
| `globe` | {{< icon "globe" >}} | Icon from Lucide. |
| `lucide` | {{< icon "lucide" >}} | Icon from Lucide. |
| `feather` | {{< icon "feather" >}} | Icon from Lucide. |
| `hugo` | {{< icon "hugo" >}} | Icon from Simple Icons. |

{{% references %}}
[^lucide-git]
[^simple-icons-git]
{{% /references %}}
