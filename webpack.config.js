const path = require('path');

module.exports = {
  entry: './client_packages/animwheel/assets/js/animwheel-ui.ts',
  devtool: 'inline-source-map',
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'animwheel-bundle.js',
    path: path.resolve(__dirname, 'client_packages', 'animwheel', 'assets', 'js'),
  },
};
