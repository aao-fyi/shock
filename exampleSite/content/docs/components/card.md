---
title: "Card"
description: "Render a card component."
icon: dock
draft: false
---

Creates a card. Parameters can be passed directly or from a variable. All values are optional.

| Parameter | Description |
| --------- | ----------- |
| `title` | Card title. |
| `icon` | Icon to put next to title. |
| `description` | Card body text. |
| `url` | Button with link in card footer. |
| `urltext` | Button text for `url`, text is "View" by default. |
| `urllist` | URL list for multiple buttons in card footer. |

## Usage

### Partial
```html
{{ partial "card" (dict 
  "title" "Example Card"
  "icon" "globe"
  "description" "Example card with example text."
  "url" "./"
  "urllist" ""
  "urltext" "Vist Example"
) }}
```

### Shortcode
```md
{{</* card title="Example Card" icon="globe" description="Example card with example text." url="./" urllist="" urltext="Vist Example" */>}}
```

## Example
```html
{{ $cardProps := dict 
  "title" "Example Card"
  "icon" "globe"
  "description" "Example card with example text."
  "url" "./"
  "urllist" ""
  "urltext" "Vist Example"
}}

{{ partial "card" $cardProps }}
```

```md
{{</* card title="Example Card" icon="globe" description="Example card with example text." url="./" urllist="" urltext="Vist Example" */>}}
```

{{< card title="Example Card" icon="globe" description="Example card with example text." url="./" urllist="" urltext="Vist Example" >}}

{{% references %}}
[^bootstrap-card]
{{% /references %}}
