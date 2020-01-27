const path = require("path");

module.exports = {
  stories: ['../../../source/angular/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-knobs',
    '@storybook/addon-options',
    '@storybook/addon-backgrounds',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,
      exclude: /node_modules(?!\/@storybook\/addon-info)/,
      use: ["to-string-loader", "style-loader", "css-loader"],
      include: path.resolve(__dirname, "../../../node_modules/@togakure/styles/lib/css/"),
    });

    // Return the altered config
    return config;
  }
};
