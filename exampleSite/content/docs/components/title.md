---
title: "Title"
description: "Render page title with site title."
icon: baseline
draft: false
---

Includes only the title on the home page, includes page title followed by site title on all other pages. Used primarily in the `head` partial to load HTML title element.

## Usage

### Partial
```html
{{ partial "title" . }}
```

### Shortcode
```md
{{</* title */>}}
```

## Example
```html
{{ partial "title" . }}
```

```md
{{</* title */>}}
```

{{< title >}}

{{% references %}}
[^hugo-title]
{{% /references %}}
