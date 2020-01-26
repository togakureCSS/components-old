const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules(?!\/@storybook\/addon-info)/,
      use: ["to-string-loader", "style-loader", "css-loader"],
      include: path.resolve(__dirname, "../../../node_modules/@togakure/styles/lib/css/"),
    }]
  }
};
