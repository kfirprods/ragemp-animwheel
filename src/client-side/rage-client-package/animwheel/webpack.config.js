const path = require('path');

module.exports = {
  entry: './index.ts',
  devtool: 'inline-source-map',
  watch: false,
  mode: "production",
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
    filename: 'index.js',
    path: path.resolve(__dirname, '..', '..', '..', '..', 'dist', 'client_packages', 'animwheel'),
  },
};
