/* Reference
 * https://purgecss.com/
 * https://gohugo.io/hugo-pipes/postprocess/
 * https://github.com/razonyang/hugo-theme-bootstrap/blob/master/purgecss.config.js
 */
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json', './site_stats.json' ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
  safelist: {
    standard: [
      'active',
      'badge',
      'bg-primary', 'bg-secondary',
      'bottom-0',
      'btn-link', 'btn-primary', 'btn-outline-primary',
      'collapse', 'collapsing',
      'col-xxl-10',
      'd-block', 'd-flex',
      'end-0',
      'fade',
      'flex-column', 'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs', 'fst-italic',
      'justify-content-center',
      'm-1', 'm-2', 'mb-0', 'mb-1', 'my-1', 'my-2', 'mx-2', 'mb-2',
      'list-unstyled',
      'offcanvas-backdrop',
      'opacity-0', 'opacity-50', 'opacity-100', 'overflow-hidden',
      'p-1', 'pb-0', 'pe-3', 'pt-0', 'pt-1', 'px-2', 'py-1', 'px-3', 'py-2', 'p-2',
      'position-absolute', 'position-fixed', 'position-relative', 'position-sticky',
      'rounded', 'rounded-top',
      'show', 'showing',
      'start-50',
      'text-nowrap', 'text-pre-wrap', 'text-uppercase', 'text-white', 'top-0', 'top-50',
      'text-bg-secondary', 'text-success', 'text-truncate',
      'user-select-all',
      'w-100',
      'was-validated'
    ]
  },
  dynamicAttributes: [
    'data-bs-popper',
    'data-bs-target',
    'data-bs-theme',
    'data-lang',
    'data-palette',
    'role'
  ]
});

module.exports = {
  plugins: [
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
  ],
};
