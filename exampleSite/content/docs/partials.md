---
title: "Partials"
description: "Partials included in the Shock theme."
weight: 33
icon: puzzle
draft: false
---

## Banner
Banner is 'hero' type partial, applied to sections by default. This partial will use the page title as a level 1 header (`h1`), and renders the page description.

```html
{{ partial "banner" . }}
```

## Breadcrumb
Renders a breadcrumb trail of the page ancestors, as defined by Hugo. Utilizes bootstrap breadcrumb classes. Configurable in [parameters file](/docs/config/).

```html
{{ partial "breadcrumb" . }}
```

## Button
Creates a button with a link. Parameters can be passed directly or from a variable.

| Parameter | Description |
| --------- | ----------- |
| `url` | Button target link. |
| `title` | Button text. |
| `type` | Bootstrap color scheme for button. |

```html
{{ partial "button" (dict
  "url" "https://example.com/"
  "title" "Visit Example"
  "type" "primary"
) }}
```

```bash
{{ $buttonProps := dict
  "url" "https://example.com/"
  "title" "Visit Example"
  "type" "primary"
}}

{{ partial "button" $buttonProps }}
```

## Card
Creates a card. Parameters can be passed directly or from a variable. All values are optional.

| Parameter | Description |
| --------- | ----------- |
| `title` | Card title. |
| `icon` | Icon to put next to title. |
| `description` | Card body text. |
| `url` | Button with link in card footer. |
| `urltext` | Button text for `url`, text is "View" by default. |
| `urllist` | URL list for multiple buttons in card footer. |

```html
{{ partial "card" (dict 
  "title" "Example Card"
  "icon" "globe"
  "description" "Example card with example text."
  "url" "https://example.com/"
) }}
```

```html
{{ $cardProps := dict 
  "title" "Example Card"
  "icon" "globe"
  "description" "Example card with example text."
  "url" "https://example.com/"
}}

{{ partial "card" $cardProps }}
```

## Card Tree
Creates navigation cards for a given context. On the `home` page, creates cards for sections only. On `section` and `page` pages, creates cards for all pages. Includes a page counter when multiple pages are nested. Uses card partial to create cards.

```html
{{ partial "card-tree" . }}
```

## Carousel
Creates carousel of images. Pass images in as a dictionary. Uses `carousel-image` partial to process images for output.

```html
{{ $projectImages := resources.Match "images/example/*" }}
{{ partial "carousel" (dict "images" $projectImages) }}
```

```html
{{ $projectImages := slice "images/example/1.jpg" "img/exp/4.jpg" }}
{{ partial "carousel" (dict "images" $projectImages) }}
```

## Carousel Image
Processing partial for images loaded in the `carousel` partial. Resizes the images to 1920x, preserving aspect ratio, and compresses the image using `lanczos`.

```html
{{ range $projectImages }}
  {{ partial "carousel-image" . }}
{{ end }}
```

## Connect
Connect renders the "connect" menu (`.Site.Menus.Connect`) in an unordered list with the `nav` class. Will use link, title, icon, and color information as configured.

```html
{{ partial "connect" . }}
```

## Foot
Foot partial used to load Bootstrap, Shock, and custom site scripts. All loaded scripts include "sha384" file integrities.

```html
{{ partial "foot" . }}
```

## Footer
Loads the "footer" menu (`.Site.Menus.Footer`), copyright statement, and "connect" menu (`.Site.Menus.Connect`) by default.

```html
{{ partial "footer" . }}
```

## Head
HTML `<head>` configuration for all pages, includes SCSS loading. Loaded CSS stylesheets will include "sha384" file integrities.

```html
{{ partial "head" . }}
```

### manifest.json
The head can generate a `manifest.json` file for the site. This is **enabled** by default and can be configured in site parameters.

## Header
Main header and navigation bar.

```html
{{ partial "header" . }}
```

## Heading
Render document heading include `h1` with page title and togglable last modified date.

```html
{{ partial "heading" . }}
```

## Icon
Load specified icon from Lucide icon pack. If it does not find a matching icon, it will attempt to use an icon from Simple Icons with `icon-brand`.

```html
{{ partial "icon" "globe" }}
```

### Shortcode
The `icon` partial has a matching shortcode.

```md
{{</* icon "globe" */>}}
```

| Shortcode Example | Output | Notes |
| ----------------- | ------ | ----- |
| `{{</* icon "globe" */>}}` | {{< icon "globe" >}} | Icon from Lucide. |
| `{{</* icon "hugo" */>}}` | {{< icon "hugo" >}} | Icon from Simple Icons. |

## Icon Brand
Load specified brand icon from Simple Icons icon pack.

```html
{{ partial "icon-brand" "hugo" }}
```

### Shortcode
The `icon-brand` partial has a matching shortcode.

```md
{{</* icon-brand "hugo" */>}}
```

| Shortcode Example | Output | Notes |
| ----------------- | ------ | ----- |
| `{{</* icon-brand "hugo" */>}}` | {{< icon-brand "hugo" >}} | Icon from Simple Icons. |
| `{{</* icon-brand "codeberg" */>}}` | {{< icon-brand "codeberg" >}} | Icon from Simple Icons. |

## Include
Include a the content of any file. Does not markdownify it.

```html
{{ partial "include" . }}
```

## Include Markdown
Include a markdown file and markdownify it.

```html
{{ partial "include-md" . }}
```

### Shortcode
The `include-md` partial has a matching shortcode.

```md
{{</* include-md "path/to/file.md" */>}}
```

## Last Mod
Last modified date for given context.

```html
{{ partial "lastmod" . }}
```

### Shortcode
The `lastmod` partial has a matching shortcode.

```md
{{</* lastmod */>}}
```

| Shortcode Example | Output | Notes |
| ----------------- | ------ | ----- |
| `{{</* lastmod */>}}` | {{< lastmod >}} | Works as markdown or HTML shortcode. Only HTML variant will integrate with document formatting, as seen here. |

## Menu
Render the `main` Hugo menu as a Bootstrap offcanvas element.

```html
{{ partial "menu" . }}
```

## Sidebar
Render sidebar on page as a Bootstrap offcanvas element. For home and section pages this will include links and sub-links to section content. For single pages this will include a table of contents of the page.

```html
{{ partial "sidebar" . }}
```

## Title
Page title, with appended site name on non-home pages.

```html
{{ partial "title" . }}
```
