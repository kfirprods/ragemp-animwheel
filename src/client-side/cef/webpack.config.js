const path = require('path');

module.exports = {
  entry: './js/animwheel-ui.ts',
  devtool: 'inline-source-map',
  watch: false,
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
    path: path.resolve(__dirname, '..', '..', '..', 'dist', 'client_packages', 'animwheel', 'cef'),
  },
};
