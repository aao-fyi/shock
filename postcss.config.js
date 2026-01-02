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
  sourceMap: false,
  safelist: {
    standard: [
      'bottom-0',
      'd-block', 'd-flex',
      'end-0',
      'fade',
      'flex-column', 'fs-lg', 'fs-sm', 'fs-xl', 'fs-xs', 'fst-italic',
      'hide', 'hiding',
      'list-unstyled',
      'offcanvas-backdrop',
      'opacity-0', 'opacity-50', 'opacity-100', 'overflow-hidden',
      'position-absolute', 'position-fixed', 'position-relative', 'position-sticky',
      'rounded', 'rounded-top',
      'show', 'showing',
      'start-50',
      'text-nowrap', 'text-pre-wrap', 'text-uppercase', 'text-white', 'top-0', 'top-50',
      'user-select-all',
      'was-validated'
    ],
    deep: [
      /^highlight$/,
      /^highlight-copy$/,
      /^highlight-wrapper$/
    ]
  },
  dynamicAttributes: [
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
