const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: ["to-string-loader", "style-loader", "css-loader"],
      include: path.resolve(__dirname, "../../../node_modules/@togakure/styles/lib/css/")
    }]
  }
};
