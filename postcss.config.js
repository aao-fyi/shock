const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ['./themes/**/*.html', './**/*.html', './**/*.js'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    greedy: [/popper$/],
  },
});

module.exports = {
  plugins: [
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
  ],
};
