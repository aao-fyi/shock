---
title: "Configuration"
description: "Configure Shock."
weight: 15
icon: cog
draft: false
---

Shock makes use of Hugo's `config` directory.

## hugo.toml
Refer to the [Hugo configuration documentation](https://gohugo.io/getting-started/configuration/) for project setup. For a working example, refer to [Shock's exampleSite `config/hugo.toml` file](https://codeberg.org/aao-fyi/shock/src/branch/main/exampleSite/config/_default/hugo.toml).

## params.toml

### Bootstrap

| `[bootstrap]` | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| `javascript` | bool | `true` | Toggle Bootstrap JavaScript. |

### PostCSS

| `[postCSS]` | Type | Default | Description |
| ----------- | ---- | ------- | ----------- |
| `state` | bool | `false` | Toggle PostCSS for CSS removal. Requires `wrieStats` to be enabled in Hugo configuration, `hugo.toml`. |

### Header

| `[header]` | Type | Default | Description |
| ---------- | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle header state. |
| `brandLogo` | bool | `false` | Toggle header brand logo. |
| `brandText` | bool | `true` | Toggle header brand text. |
| `fixedTop` | bool | `true` | Toggle header stick-state. |

### Banner

| `[banner]` | Type | Default | Description |
| ---------- | ---- | ------- | ----------- |
| `home` | bool | `true` | Toggle banner on home page. |
| `section` | bool | `true` | Toggle banner on section pages. |
| `single` | bool | `false` | Toggle banner on single pages. |

### Sidebar

| `[sidebar]` | Type | Default | Description |
| ----------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Toggle sidebar on home page.
| `section` | bool | `false` | Toggle sidebar on section pages. |
| `single` | bool | `false` | Toggle sidebar on single pages. |
| `tableofcontentsID` | string | `sidebar-tableofcontents` | ID to assign table of contents wrapper. |

### Breadcrumb

| `[breadcrumb]` | Type | Default | Description |
| -------------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Should breadcrumb include home page link. |
| `homeIcon` | string | `'folder-root'` | Icon to use for home page link, set to `''` to use title instead. Uses Lucide icon pack to select icon. |
| `section` | bool | `false` | Toggle breadcrumb on section pages. |
| `single` | bool | `false` | Toggle breadcrumb on single pages. |

### Heading

| `[heading]` | Type | Default | Description |
| ----------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Toggle heading on home page. |
| `section` | bool | `false` | Toggle heading on section pages. |
| `single` | bool | `true` | Toggle heading on single pages. |

### Footer

| `[footer]` | Type | Default | Description |
| ---------- | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle footer state. |
| `stick` | bool | `true` | If footer should stick to the bottom of the page when there is not enough content to fill the page. |

### Copyright

| `[copyright]` | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| `name` | string | `''` | Copyright name, will override `.Site.Copyright`. |
| `link` | string | `''` | Link to apply to copyright name. |
| `year` | string | `''` | Copyright start year. |

### Logo

| `[logo]` | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `mainPNG` | string | `'img/logo/logo.png'` | Path to primary logo image. |
| `brandPNG` | string | `'img/logo/brand.png'` | Path to logo image used in header/nav. |

### Manifest
Configuration for generating the `manifest.json` file.

| `[manifest]` | Type | Default | Description |
| ------------ | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle manifest state. |
| `brandPNG` | string | `'#333'` | Set manifest background color. |
