---
title: "Configuration"
description: "Setup and configure Shock."
weight: 10
icon: cog
draft: false
---

## Install Hugo
Hugo Extended edition is required for this theme. Refer to [Hugo's installation documentation](https://gohugo.io/installation/).

Create a new hugo project. Refer to [Hugo's quick start guide](https://gohugo.io/getting-started/quick-start/).

Verify the project has been initliazed as a git repository.

```bash
git init --initial-branch=main
```

## hugo.toml
To use the Shock theme, add a theme configuraton to the `hugo.toml` file.

```toml
theme = 'codeberg.org/aao-fyi/shock'
```

Configure site info in the `hugo.toml` file. Refer to the [Hugo configuration documentation](https://gohugo.io/getting-started/configuration/) for project setup. For a working example, refer to [Shock's exampleSite `config/hugo.toml` file](https://codeberg.org/aao-fyi/shock/src/branch/main/exampleSite/config/_default/hugo.toml).

```toml
# Info
baseURL = 'https://example.com/'
languageCode = 'en-us'
title = 'Example'
copyright = 'Example'

# If you are not using Git: Set enableGitInfo to false.
enableGitInfo = true
```

## params.toml
Set a site description and add other parameters in the `params.toml` file. Layouts and other components have additional configuration options detailed in their corresponding documentation.

```toml
description = 'Your site description here.'
```

## Update
Update Hugo and the NPM modules.

```bash
hugo mod get -u && hugo mod clean
```

```bash
npm update
```

## Start
Navigate to `your-project.example.com` and start the [Hugo server](https://gohugo.io/commands/hugo_server/).

```bash
hugo server
```
