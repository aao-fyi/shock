---
title: "Connect"
description: "Render connect menu for associated external sites."
icon: link
draft: false
---

Connect renders the "connect" menu (`.Site.Menus.Connect`) in an unordered list with the `nav` class. Will use link, title, icon, and color information as configured.

## Usage

### Partial
```html
{{ partial "connect" . }}
```

### Shortcode
```md
{{</* connect */>}}
```

## Example
```html
{{ partial "connect" . }}
```

```md
{{</* connect */>}}
```

{{< connect >}}

## Configuration
Connect can be configured in the site's `params.toml` file.

| `[connect]` | Type | Default | Description |
| -------------- | ---- | ------- | ----------- |
| `fediverse` | string | ` ` | Fediverse handle to use for site verifcation. |

Configure connect links in the `hugo.toml` configuration file.

```toml
[menu]
  [[menu.connect]]
    identifier = 'codeberg'
    name = 'Codeberg'
    weight = '10'
    color = '#2185d0'
    url = 'https://codeberg.org/aao-fyi/shock'
  [[menu.connect]]
    identifier = 'github'
    name = 'GitHub'
    weight = '20'
    color = '#4078c0'
    url = 'https://github.com/aao-fyi/shock'
  [[menu.connect]]
    identifier = 'gitlab'
    name = 'GitLab'
    weight = '15'
    color = '#fc6d26'
    url = 'https://gitlab.com/aao-fyi/shock'
```

{{% references %}}
[^hugo-menus]
{{% /references %}}
