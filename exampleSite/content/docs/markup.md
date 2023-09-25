---
title: "Markup"
description: "Markup rendering when using Shock."
weight: 36
icon: arrow-up-square
draft: false
---

## Codeblocks

### Syntax Highlighting
Shock codeblocks utilize [Chroma syntax highlighting](https://gohugo.io/content-management/syntax-highlighting/), included with Hugo. Codeblock highlighting and rendering does **not** require JavaScript to function.

````text
```bash
echo "Hello World!"
```
````

```bash
echo "Hello World!"
```

### Attributes

`dist`: Comment prepended to the codeblock, meant to specify distribution or language variances.
+ `{ dist=debian }`
  ```bash { dist=debian }
  apt install hugo
  ```
+ `{ dist=fedora }`
  ```bash { dist=fedora }
  dnf install hugo
  ```

## Links
Links will render as expected in Hugo, but will open in a new tab (`_blank`) if detected to be an external link.

+ [Local link example, this page]({{< ref "/docs/markup.md" >}}).
+ [Remote link example, Hugo website](https://gohugo.io/).
