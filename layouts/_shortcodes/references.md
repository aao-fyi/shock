{{ $pageReferences := (findRE `\[\^([^\]]+)\]` .Page.RawContent) }}
{{ $referencesDirectory := resources.Match "references/*.md" }}
{{ $matchedReferences := slice }}

{{/* Conditional */}}
{{ if and $pageReferences $referencesDirectory }}

{{/* Loop through references directory */}}
{{ range $referencesDirectory }}

  {{/* Split current reference file into lines */}}
  {{ $referenceFile := .Content }}
  {{ $referenceLines := (split $referenceFile "\n") }}

  {{/* Loop through page references on current reference file lines */}}
  {{ range $pageReferences }}
    {{ $pageReference := . }}

    {{/* Loop through current file lines for current page reference */}}
    {{ range $referenceLines }}
      {{ $referenceLine := . }}

      {{ if (hasPrefix $referenceLine $pageReference) }}
        {{ $matchedReferences = $matchedReferences | append $referenceLine }}
      {{ end }}
    {{ end }}

  {{ end }}

{{ end }}


{{/* Output */}}
## References

{{ .Inner | safeHTML }}

{{ range $matchedIndex, $matchedValue := $matchedReferences }}
  {{ index $matchedReferences $matchedIndex }}
{{ end }}

{{ end }}
{{/* /Conditional */}}
