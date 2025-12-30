"use strict";

// Bootstrap imports
import Collapse from './bootstrap/collapse.js'
import Offcanvas from './bootstrap/offcanvas.js'
import ScrollSpy from './bootstrap/scrollspy.js'

document.addEventListener("DOMContentLoaded", function() {
    // Check namespace
    window.Shock = window.Shock || {};

    Shock.Highlight = {
        // Lucide Icons - `copy` && `check-square`
        // Copy button SVGs to be inserted
        copyIcon: '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></span>',
        copiedIcon: '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></span>',

        // Copy Button - Create
        // Create copy buttons with listener
        copyButtonCreate: function(highlightDiv) {
            const button = document.createElement("button");
            button.className = "highlight-copy";
            button.innerHTML = Shock.Highlight.copyIcon;
            button.title = "Copy";
            button.addEventListener("click", () =>
            Shock.Highlight.copyButtonClipboard(button, highlightDiv)
            );
            Shock.Highlight.copyButtonInsert(button, highlightDiv);
        },

        // Copy Button - Clipboard
        // Copy highlight text content to clipboard
        copyButtonClipboard: function(button, highlightDiv) {
            const highlightCode = highlightDiv.querySelector("code").textContent.trim();
            navigator.clipboard.writeText(highlightCode);
            Shock.Highlight.copyButtonVisual(button);
        },

        // Copy Button - Visual
        // Indicate copy action with icon
        copyButtonVisual: function(button) {
            button.blur();
            button.innerHTML = Shock.Highlight.copiedIcon;
            button.title = "Copied";
            setTimeout(function () {
                button.innerHTML = Shock.Highlight.copyIcon;
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

        // Init
        // Add copy button to highlight blocks
        init: function(highlightClass) {
            document.querySelectorAll(`.${highlightClass}`).forEach((highlightDiv) =>
                Shock.Highlight.copyButtonCreate(highlightDiv)
            );
        }
    },

    // Shock Theme
    // Theme control logic
    Shock.Theme = {
        states: [
            { value: 'auto', selector: '.theme-auto' },
            { value: 'light', selector: '.theme-light' },
            { value: 'dark',  selector: '.theme-dark' }
        ],

        stateIndex: 0,

        applyTheme: function(themeButton) {
            const currentState = Shock.Theme.states[Shock.Theme.stateIndex];

            localStorage.setItem('shock-theme-state', currentState.value);

            document.documentElement.setAttribute('data-bs-theme', currentState.value);

            Shock.Theme.states.forEach((state, stateIndex) => {
                const themeSpan = themeButton.querySelector(state.selector);
                if (themeSpan) {
                    themeSpan.style.display = (stateIndex === Shock.Theme.stateIndex) ? 'inline' : 'none';
                }
            });
        },

        init: function(themeToggleID) {
            const themeButton = document.getElementById(themeToggleID);
            if (!themeButton) return;

            const shockThemeState = localStorage.getItem('shock-theme-state') || 'auto';
            const initialIndex = Shock.Theme.states.findIndex(state => state.value === shockThemeState);
            Shock.Theme.stateIndex = initialIndex >= 0 ? initialIndex : 0;

            Shock.Theme.applyTheme(themeButton);

            themeButton.addEventListener('click', () => {
                Shock.Theme.stateIndex = (Shock.Theme.stateIndex + 1) % Shock.Theme.states.length;
                Shock.Theme.applyTheme(themeButton);
            });
        }
    },

    Shock.Offcanvas = {
        // Add Dismiss Attributes
        // Accepts element as input
        addDismissAttributes: function(offcanvasDiv) {
            if (!offcanvasDiv || !(offcanvasDiv instanceof Element)) {
                console.error("Offcanvas input invalid or not an element.");
                return;
            }

            const offcanvasDivID = offcanvasDiv.id;
            if (!(offcanvasDivID)) {
                console.error("Offcanvas element does not have ID.");
                return;
            }

            const offcanvasDivLinks = offcanvasDiv.querySelectorAll("a");
            offcanvasDivLinks.forEach(offcanvasDivLink => {
               offcanvasDivLink.setAttribute('data-bs-dismiss', 'offcanvas');
               offcanvasDivLink.setAttribute('data-bs-target', `#${offcanvasDivID}`);
            });
        },

        // Init
        // Make all offcanvas dismissable
        init: function(offcanvasClass) {
            document.querySelectorAll(`.${offcanvasClass}`).forEach((offcanvasDiv) =>
                Shock.Offcanvas.addDismissAttributes(offcanvasDiv)
            );
        }
    }

    // Initialize
    Shock.Theme.init("shock-theme-toggle");
    Shock.Highlight.init("highlight");
    Shock.Offcanvas.init("offcanvas-dismiss-js");
});
