---
title: "Head"
description: "Head configuration for all pages, includes SCSS builds and manifest."
icon: chevron-up
weight: 20
draft: false
---

HTML `<head>` configuration for all pages, includes SCSS loading. Loaded CSS stylesheets will include "sha384" file integrities. Loaded in the `baseof.html` layout by default.

The head can generate a `manifest.json` file for the site. This is enabled by default and can be configured in site parameters.

## Usage

### Partial
```html
{{ partial "head" . }}
```

## Configuration
Can be configured in the `params.toml` file.

| `[head]` | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `responseHeaders` | bool | `false` | Toggle `_headers` file defining HTTP response headers. For use with Cloudflare Pages or Netlify. |
| `manifestState` | bool | `true` | Toggle `manifest.json` file for the site. |
| `manifestColor` | string | `#333` | Define background color of manifest. |

{{% references %}}
[^hugo-scss]
[^mdn-manifest]
[^mdn-sri]
{{% /references %}}
