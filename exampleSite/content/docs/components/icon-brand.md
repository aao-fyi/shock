---
title: "Icon Brand"
description: "Load inline SVG icons from the Simple Icons icon pack."
icon: simpleicons
draft: false
---

## Usage

### Partial
```html
{{ partial "icon-brand" "hugo" }}
```

### Shortcode
```md
{{</* icon-brand "hugo" */>}}
```

## Example
```html
{{ partial "icon" "hugo" }}
```

```md
{{</* icon "hugo" */>}}
{{</* icon "codeberg" */>}}
{{</* icon "gitlab" */>}}
{{</* icon "bootstrap" */>}}
```

| Icon | Output | Notes |
| ---- | ------ | ----- |
| `hugo` | {{< icon "hugo" >}} | Icon from Simple Icons. |
| `codeberg` | {{< icon "codeberg" >}} | Icon from Simple Icons. |
| `gitlab` | {{< icon "gitlab" >}} | Icon from Simple Icons. |
| `bootstrap` | {{< icon "bootstrap" >}} | Icon from Simple Icons. |

{{% references %}}
[^simple-icons-git]
{{% /references %}}
