---
title: "References"
description: "Reference features in the Shock theme."
weight: 39
icon: receipt-text
draft: false
---

## Hugo Default
By default, Hugo can create references using standard markdown syntax. This default usage will continue to work, and is not impacted by this theme. Only pages using the `references` shortcode will utilize the Shock theme reference functionality.

```md
### Example Reference Line
"Linux is a family of open-source Unix-like operating systems based on the Linux kernel."[^wikipedia-linux]

### Example Reference Citation
[^wikipedia-linux]: Wikipedia. "[Linux](https://wikipedia.org/wiki/Linux)." 2025.
```

"Linux is a family of open-source Unix-like operating systems based on the Linux kernel."[^wikipedia-linux]

## Assets
The references functionality in this theme uses the `assets` directory to store references at a single location. This allows easy management and prevents duplicated references.

Store references in markdown files within the `assets/references` directory. Some example paths are as follows, names of the markdown files are not important.

+ `assets/references/example.md`
+ `assets/references/linux.md`
+ `assets/references/random-words.md`

A reference file should have one entry per line, formatted as a default Hugo reference. Refer to the following example.

```txt
<!-- assets/references/example.md -->
<!-- Can have HTML style comments -->
[^example-1]: Valid reference. "[Example 1](https://gohugo.io)." 2025.
[^example-2]: Valid reference example 2. https://gohugo.io.
[^example-3]: Another reference example number three.
```

## Shortcode
Use the `references` shortcode at the end of the page. The shortcode will check for any references within the document and find the matching citation from the assets directory. The shortcode will create an `h2` heading and list all used references.

```md
{{%/* references */%}}
{{%/* /references */%}}
```

Additional page-specific references should be included within the shortcode so they show up below the heading, alongside the references pulled from the assets directory.

The following shortcode is what this page uses to render its references. Only `[^wikipedia-linux]` is actually cited on this page, all others ([^bootstrap-git] [^chroma-git] [^hugo-git] [^lucide-git] [^postcss-git] [^purgecss-git] [^simple-icons-git]) are pulled from `assets/references/shock.md`.

```md
{{%/* references */%}}
[^wikipedia-linux]: Wikipedia. "[Linux](https://wikipedia.org/wiki/Linux)." 2025.
{{%/* /references */%}}
```

{{% references %}}
[^wikipedia-linux]: Wikipedia. "[Linux](https://wikipedia.org/wiki/Linux)." 2025.
{{% /references %}}
