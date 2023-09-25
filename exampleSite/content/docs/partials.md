---
title: "Partials"
description: "Partials included in the Shock theme."
weight: 33
icon: puzzle
draft: false
---

## Banner
Banner is 'hero' type partial, applied to sections by default. This partial will use the page title as a level 1 header (`h1`), and renders the page description.

## Connect
Connect renders the "connect" menu (`.Site.Menus.Connect`) in an unordered list with the "nav" class. Will use link, title, icon, and color information as configured.

## Foot
Foot partial used to load Bootstrap, Shock, and custom site scripts. All loaded scripts include "sha384" file integrities.

## Footer
Loads the "footer" menu (`.Site.Menus.Footer`), copyright statement, and "connect" menu (`.Site.Menus.Connect`) by default.

## Head
HTML `<head>` configuration for all pages, includes SCSS loading. Loaded CSS stylesheets will include "sha384" file integrities.

## Header
Main header and navigation bar.

## Icon
Load specified icon from Lucide icon pack.

### Shortcode
The `icon` partial has a matching shortcode.

+ `{{</* icon "globe" */>}}`
+ {{< icon "globe" >}}

## Icon Brand
Load specified brand icon from Simple Icons icon pack.

### Shortcode
The `icon-brand` partial has a matching shortcode.

+ `{{</* icon-brand "hugo" */>}}`
+ {{< icon "hugo" >}}

## Last Mod
Last modified date for given context.

### Shortcode
The `lastmod` partial has a matching shortcode.

+ `{{%/* lastmod */%}}`
+ {{% lastmod %}}

## Title
Page title, with appended site name on non-home pages.
