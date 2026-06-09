---
title: "Carousel"
description: "Creates carousel of images."
icon: gallery-horizontal-end
draft: false
---

Pass images in as a dictionary. Modified version of the Bootstrap carousel, no longer requiring JavaScript to function.

Images are resized to 1920x, preserving aspect ratio, and compressed using `lanczos`.

Carousel partial accepts a dictionary of images; carousel shortcode accepts <= 21 image paths.

## Usage

### Partial
```html
{{ $carouselImages := resources.Match "images/example/*" }}
{{ partial "carousel" (dict "images" $carouselImages) }}
```

```html
{{ $carouselImages := slice (resources.Get "images/example/1.jpg") (resources.Get "img/exp/4.jpg") }}
{{ partial "carousel" (dict "images" $carouselImages) }}
```

### Shortcode
```md
{{</* carousel "images/example/1.jpg" "img/exp/4.jpg" */>}}
```

## Example
```html
{{ $carouselImages := resources.Match "/test/*.jpg" }}
{{ partial "carousel" (dict "images" $carouselImages) }}
```

```md
{{</* carousel "/test/01.jpg" "/test/02.jpg" "/test/03.jpg" */>}}
```

{{< carousel "/test/01.jpg" "/test/02.jpg" "/test/03.jpg" >}}

{{% references %}}
[^bootstrap-carousel]
{{% /references %}}
