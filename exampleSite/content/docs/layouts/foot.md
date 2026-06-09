---
title: "Foot"
description: "Foot configuration for all pages, includes JS builds."
icon: chevron-down
weight: 30
draft: false
---

HTML foot partial used to load Shock and custom site scripts. All loaded scripts include "sha384" file integrities. Loaded in the `baseof.html` layout by default.

## Usage

### Partial
```html
{{ partial "head" . }}
```

{{% references %}}
[^hugo-jsbuild]
[^mdn-sri]
{{% /references %}}
