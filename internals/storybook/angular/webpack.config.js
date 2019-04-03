const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      loaders: ["to-string-loader", "style-loader", "css-loader"],
      include: path.resolve(__dirname, "../../../node_modules/@descco/ui-core/lib/css/")
    }]
  }
};
