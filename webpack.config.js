const fs = require('fs');

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x=>['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)

module.exports = {
  mode: 'development',
  entry: './app/server.ts',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        'bill-splitter': `${__dirname}/node_modules/bill-splitter/src`,
      }
  },

  target: 'node',

  node: {
    fs: 'empty',
    http: 'empty',
    net: 'empty',
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};
