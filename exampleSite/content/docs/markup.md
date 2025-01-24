---
title: "Markup"
description: "Markup rendering when using Shock."
weight: 36
icon: square-arrow-up
draft: false
---

## Codeblocks

### Syntax Highlighting
Shock codeblocks utilize [Chroma syntax highlighting](https://gohugo.io/content-management/syntax-highlighting/), included with Hugo. Codeblock highlighting and rendering **doesn't require JavaScript** to function.

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

````text
```bash { dist=debian }
apt install hugo
```
````

```bash { dist=debian }
apt install hugo
```

## Images
Images will render as expected in Hugo, but include the `img-fluid` Bootstrap class.

## Links
Links will render as expected in Hugo, but will open in a new tab (`_blank`) if detected to be an external link.

+ [Local link example, Shock Docs page]({{< ref "/docs/" >}}).
+ [Remote link example, Hugo website](https://gohugo.io/).

## Tables
Tables will render as expected, but include Bootstrap classes to make them responsive.

| Example | Table | Here | Dude |
| ------- | ----- | ---- | ---- |
| Linux | is | the | best |
| Hugo | 5 | ever | amirite |
| Floss | your | teeth | please |
