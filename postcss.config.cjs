// Enables the `@import-normalize` at-rule used in src/index.css (this is the
// same plugin Create React App used under the hood). Reads browser targets from
// the "browserslist" field in package.json.
module.exports = {
  plugins: [require("postcss-normalize")()],
};
