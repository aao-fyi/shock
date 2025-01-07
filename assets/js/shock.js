"use strict";

// Shock Highlight Copy //
var shockHighlightCopy = {
    // Lucide Icons - `copy` && `check-square`
    copyIcon: '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></span>',
    copiedIcon: '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></span>',

    // Copy Button - Create
    // Create copy buttons with listener
    copyButtonCreate: function(highlightDiv) {
        const button = document.createElement("button");
        button.className = "highlight-copy";
        button.innerHTML = this.copyIcon;
        button.title = "Copy";
        button.addEventListener("click", () =>
        this.copyButtonClipboard(button, highlightDiv)
        );
        this.copyButtonInsert(button, highlightDiv);
    },

    // Copy Button - Clipboard
    // Copy highlight text content to clipboard
    copyButtonClipboard: function(button, highlightDiv) {
        const highlightCode = highlightDiv.querySelector("code").textContent.trim();
        navigator.clipboard.writeText(highlightCode);
        this.copyButtonVisual(button);
    },

    // Copy Button - Visual
    // Indicate copy action with icon
    copyButtonVisual: function(button) {
        button.blur();
        button.innerHTML = shockHighlightCopy.copiedIcon;
        button.title = "Copied";
        setTimeout(function () {
            button.innerHTML = shockHighlightCopy.copyIcon;
            button.title = "Copy";
        }, 3000);
    },

    // Copy Button - Insert
    // Insert copy buttons in the document
    copyButtonInsert: function(button, highlightDiv) {
        highlightDiv.insertBefore(button, highlightDiv.firstChild.nextSibling);
        const highlightWrapper = document.createElement("div");
        highlightWrapper.className = "highlight-wrapper";
        highlightDiv.parentNode.insertBefore(highlightWrapper, highlightDiv);
        highlightWrapper.appendChild(highlightDiv);
    },
}

// Apply copy button to highlight blocks
document.querySelectorAll(".highlight").forEach((highlightDiv) => shockHighlightCopy.copyButtonCreate(highlightDiv));
