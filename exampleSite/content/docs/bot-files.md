---
title: "Bot Files"
description: "Files generated for bots and aggregators."
weight: 90
icon: bot
draft: false
---

## sitemap.xml
Hugo generates a `sitemap.xml` by default. The Shock theme adds the ability to exclude pages from the sitemap using a custom front-matter definition. Pages excluded from the sitemap will also be excluded from `llms.txt` and be disallowed in the `robots.txt`.

Exclude a page from the sitemap with the following front-matter definition.

```md
---
sitemap_exclude: true
---
```

## rss.xml
Hugo generates an RSS feed at `index.xml` for the home and section template layouts. Pages excluded with `sitemap_exclude` will be excluded from these RSS feeds as well.

## robots.txt
A `robots.txt` will be generated for the project as long as Hugo's `enableRobotsTXT` configuration is true. The generated `robots.txt` file will apply to all user agents, define the sitemap path, disallow error pages, and link to the `llms.txt` if enabled. The `robots.txt` is enabled by default.

The following configuration is required for the `robots.txt` file to be generated. Refer to the [Shock configuration documentation]({{< ref "/docs/configuration/" >}}) for information on configuring additional disallows and more information.

```toml
# config/_default/hugo.toml
enableRobotsTXT = true
```

## llms.txt
Optionally, generate an `llms.txt` file following the [llms-txt standard](https://llmstxt.org/) format. Any page excluded from the sitemap will also be excluded from the `llms.txt` file. The `llms.txt` is disabled by default.

The following configuration is required for the `llms.txt` file to be generated. Refer to the [Shock configuration documentation]({{< ref "/docs/configuration/" >}}) for more information.

```toml
# config/_default/hugo.toml
enableRobotsTXT = true
```

```toml
# config/_default/params.toml
[robots]
  llmsTXT = true
```
