---
title: "Include"
description: "Include raw file contents on a page."
icon: file-input
draft: false
---

Include the contents of a file. Will markdownify it if detected to be a markdown file.

## Usage

### Partial
```html
{{ partial "include" "/example.txt" }}
```

### Shortcode
```md
{{</* include "/example.txt" */>}}
```

## Example
```html
{{ partial "include" "/example.txt" }}
```

```md
{{</* include "/test/test.txt" */>}}
```

{{< include "/test/test.txt" >}}


***

```html
{{ partial "include" "/example.md" }}
```

```md
{{</* include "/test/test.md" */>}}
```

{{< include "/test/test.md" >}}

{{% references %}}
[^hugo-content]
[^hugo-path]
[^hugo-transform]
{{% /references %}}
