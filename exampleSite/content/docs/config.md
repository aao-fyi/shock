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
| `state` | bool | `false` | Toggle PostCSS for CSS removal. |

### Header

| `[header]` | Type | Default | Description |
| ---------- | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle header state. |
| `brandLogo` | bool | `false` | Toggle header brand logo. |
| `brandText` | bool | `true` | Toggle header brand text. |
| `fixedTop` | bool | `true` | Toggle header stick-state. |

### Sidebar

| `[sidebar]` | Type | Default | Description |
| ----------- | ---- | ------- | ----------- |
| `section` | bool | `false` | Sidebar state on section pages. |
| `single` | bool | `false` | Sidebar state on single pages. |

### Breadcrumb

| `[breadcrumb]` | Type | Default | Description |
| ----------- | ---- | ------- | ----------- |
| `home` | bool | `false` | Should breadcrumb include home page. |
| `homeIcon` | string | `'folder-root'` | Icon to use for home page, set to `''` to use title instead. |
| `section` | bool | `false` | Breadcrumb state on section pages. |
| `single` | bool | `false` | Breadcrumb state on single pages. |

### Footer

| `[footer]` | Type | Default | Description |
| ---------- | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle footer state. |

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

| `[manifest]` | Type | Default | Description |
| ------------ | ---- | ------- | ----------- |
| `state` | bool | `true` | Toggle manifest state. |
| `brandPNG` | string | `'#333'` | Set manifest background color. |
