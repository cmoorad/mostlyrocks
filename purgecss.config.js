module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    /^spotlight\[data-align=".*"\]/, // Safelist all data-align rules
    /^spotlight\[data-align="[0-9]+%"\]/, // Safelist percentage-based alignments
  ],
};
