---
title: "Lastmod"
description: "Render the last modified date for given page or context."
icon: clock
draft: false
---

## Usage

### Partial
```html
{{ partial "lastmod" . }}
```

### Shortcode
```md
{{</* lastmod */>}}
```

## Example
```html
{{ partial "lastmod" . }}
```

```md
{{</* lastmod */>}}
```

{{< lastmod >}}

{{% references %}}
[^hugo-lastmod]
[^wikipedia-iso-8601]
{{% /references %}}
