# Shock
Hugo framework for static sites.

## Dependencies

### Required
This Hugo theme requires [Hugo extended edition](https://gohugo.io/installation/) and [Go](https://go.dev/doc/install).

+ Hugo >= `0.110.0+extended`
+ Go >= `1.18.0`

### Optional
This project supports PostCSS and is pre-configured for PurgeCSS. These features are disabled by default, and have additional dependencies if enabled.

+ NodeJS >= `16.0.0`
+ NPM >= `7.0.0`

## Usage

### Hugo Module
The recommended usage method is via Hugo modules. Refer to the [Hugo Modules documentation](https://gohugo.io/hugo-modules/) for more information.

Initialize the project as a module, specifying the project repository.

```bash
hugo mod init gitlab.com/username/project
```

Add Shock to a project as a theme compontent in the Hugo configuration file. The project is mirrored to GitHub; if necessary, replace `gitlab.com` with `github.com`.

```toml
theme = 'gitlab.com/aao-fyi/shock'
```

Fetch project modules.

```bash
hugo mod get -u
```

### PostCSS / PurgeCSS
To utilize PostCSS and PurgeCSS functionality, install the required NPM packages before enabling the `postCSS` parameter. Refer to the [PurgeCSS documentation](https://purgecss.com/guides/hugo.html) for more information.

```bash
npm install postcss postcss-cli @fullhuman/postcss-purgecss
```

Enable the `postCSS` parameter to enable PostCSS and utilize the PurgeCSS feature.

```toml
[postCSS]
  state = true
```
