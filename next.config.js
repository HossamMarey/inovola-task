const { i18n } = require("./next-i18next.config");
const withLess = require("next-with-less");

module.exports = withLess({
  i18n,
  lessLoaderOptions: {},
});
