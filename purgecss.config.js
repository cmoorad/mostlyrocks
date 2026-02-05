module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    // Safelist all data-align selectors for both .spotlight and a.spotlight
    /spotlight\[data-align/,
    /object-position/,
  ],
};
