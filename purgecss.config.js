module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    /spotlight\[data-align=".*"\]/, // Safelist all data-align rules (without anchor)
    /spotlight\[data-align="top"\]/,
    /spotlight\[data-align="center"\]/,
    /spotlight\[data-align="bottom"\]/,
    /spotlight\[data-align="10%"\]/,
    /spotlight\[data-align="20%"\]/,
    /spotlight\[data-align="30%"\]/,
    /spotlight\[data-align="40%"\]/,
    /spotlight\[data-align="50%"\]/,
    /spotlight\[data-align="60%"\]/,
    /spotlight\[data-align="70%"\]/,
    /spotlight\[data-align="80%"\]/,
    /spotlight\[data-align="90%"\]/,
  ],
};
