---
title: "Setup"
description: "Get started with Shock."
weight: 10
icon: folder-cog
draft: false
---

## Install Hugo
Hugo Extended edition is required for this theme. Refer to [Hugo's installation documentation](https://gohugo.io/installation/).

## Download
Download the Shock Example Site to use as your project template. This section details this process with Git or Tar, either method will achieve the following:

1. Download the Shock project using Git or Tar.
2. Extract the `exampleSite` directory from the project.
3. Cleanup files, rename `exampleSite` to `your-project.example.com`.

### Git
Download the latest version of Shock via Git `clone`.

```bash
git clone --depth 1 https://gitlab.com/aao-fyi/shock.git shock
```

Seperate the `exampleSite` directory and delete the `shock` repository.

```bash
mv ./shock/exampleSite ./your-project.example.com
rm -r ./shock
```

### Tar
Download and extract the latest Tar bundle of Shock.

```bash
wget https://gitlab.com/aao-fyi/shock/-/archive/main/shock-main.tar.gz
tar -xvf shock-main.tar.gz
```

Move the `exampleSite` directory to your-project-name and delete the `shock-main` files.

```bash
mv ./shock-main/exampleSite ./your-project.example.com
rm -r ./shock-main.tar.gz ./shock-main
```

## Configure
Modify the following files in the `exampleSite` project to reflect your project's information.

### go.mod
Modify the module path in `go.mod` to match your project URL.

```go
module gitlab.com/username/example.com
```

### package.json
Modify the project name in the `package.json` file.

```json
"name": "@npmcli/example-project",
```

### config/_default/hugo.toml
Configure site info in the `hugo.toml` file.

```toml
# Info
baseURL = 'https://example.com/'
languageCode = 'en-us'
title = 'Example'
copyright = 'Example'

# If you are not using Git: Set enableGitInfo to false.
enableGitInfo = true
```

### config/_default/params.toml
Set a site description and add other parameters in the `params.toml` file.

```toml
description = 'Your site description here.'
```

## Run

### Update
```bash
hugo mod get -u && hugo mod clean
```

```bash
npm update
```

### Start
Navigate to `your-project.example.com` and start the [Hugo server](https://gohugo.io/commands/hugo_server/).

```bash
cd ./your-project.example.com
hugo server
```
