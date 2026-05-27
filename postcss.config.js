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
      'highlight', 'highlight-copy', 'highlight-wrapper',
      'bottom-0',
      'd-block', 'd-flex', 'd-inline',
      'end-0',
      'fade',
      'hide', 'hiding',
      'opacity-0', 'opacity-50', 'opacity-100', 'overflow-hidden',
      'position-absolute', 'position-fixed', 'position-relative', 'position-sticky',
      'rounded', 'rounded-top',
      'show', 'showing',
      'start-50',
      'top-0', 'top-50'
    ],
    deep: []
  },
  dynamicAttributes: [
    'data-bs-theme',
    'role'
  ]
});

module.exports = {
  plugins: [
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
  ],
};
