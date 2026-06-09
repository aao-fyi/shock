---
title: "Button"
description: "Creates a button with a link."
icon: square-chevron-right
draft: false
---

Parameters can be passed directly or from a variable.

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `url` | string | ` ` | Button target link. |
| `title` | string | ` ` | Button text. Exclusive with icon / brand. |
| `icon` | string | ` ` | Button icon.  Exclusive with title / brand. |
| `icon` | string | ` ` | Button brand.  Exclusive with title / icon. |
| `type` | string | `secondary` | Bootstrap color scheme for button. |

## Usage

### Partial
```html
{{ partial "button" (dict
  "url" "https://example.com/"
  "title" "Visit Example"
  "icon" "globe"
  "brand" "hugo"
  "type" "primary"
) }}
```

### Shortcode
```md
{{</* button url="https://example.com/" title="Visit Example" icon="globe" brand="hugo" type="primary" */>}}
```

## Example

```html
{{ partial "button" (dict
  "url" "./"
  "title" "This Page"
  "type" "primary"
) }}
```

```md
{{</* button url="./" title="This Page" type="primary" */>}}
{{</* button url="./" title="This Page" type="secondary" */>}}
{{</* button url="./" title="This Page" type="success" */>}}
```

{{< button url="./" title="This Page" type="primary" >}}
{{< button url="./" title="This Page" type="secondary" >}}
{{< button url="./" title="This Page" type="success" >}}

***

```html
{{ $buttonProps := dict
  "url" "https://example.com/"
  "title" "Visit Example"
  "type" "primary"
}}

{{ partial "button" $buttonProps }}
```

```md
{{</* button url="https://example.com/" title="Visit Example" type="danger" */>}}
{{</* button url="https://example.com/" title="Visit Example" type="warning" */>}}
{{</* button url="https://example.com/" title="Visit Example" type="info" */>}}
```

{{< button url="https://example.com/" title="Visit Example" type="danger" >}}
{{< button url="https://example.com/" title="Visit Example" type="warning" >}}
{{< button url="https://example.com/" title="Visit Example" type="info" >}}

***

```html
{{ partial "button" (dict
  "url" "/"
  "icon" "server-crash"
  "type" "primary"
) }}
```

```md
{{</* button url="/" icon="server-crash" type="primary" */>}}
{{</* button url="/" icon="server-crash" type="dark" */>}}
{{</* button url="/" icon="server-crash" type="light" */>}}
```

{{< button url="/" icon="server-crash" type="primary" >}}
{{< button url="/" icon="server-crash" type="dark" >}}
{{< button url="/" icon="server-crash" type="light" >}}

***

```html
{{ partial "button" (dict
  "url" "https://gohugo.io/"
  "brand" "hugo"
  "type" "primary"
) }}
```

```md
{{</* button url="https://gohugo.io/" brand="hugo" type="primary" */>}}
{{</* button url="https://getbootstrap.com/" brand="bootstrap" type="primary" */>}}
{{</* button url="https://codeberg.org/" brand="codeberg" type="primary" */>}}
```

{{< button url="https://gohugo.io/" brand="hugo" type="primary" >}}
{{< button url="https://getbootstrap.com/" brand="bootstrap" type="primary" >}}
{{< button url="https://codeberg.org/" brand="codeberg" type="primary" >}}

{{% references %}}
[^bootstrap-buttons]
{{% /references %}}
