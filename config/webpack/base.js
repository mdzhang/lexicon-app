'use strict';

const webpack = require('webpack');
const path = require('path');

const env = require('../build.env');

const dir = path.resolve(__dirname, '../../');

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './src/index',
  ],

  output: {
    path: path.join(dir, 'dist', process.env.ENV),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(dir),
      path.join(dir, 'node_modules'),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      AppConfig: JSON.stringify(env),
      // for React optimizations
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: dir,
      },
    }),
  ],

  module: {
    rules: [
      {
        test: 'react',
        use: [
          {
            loader: 'imports',
            options: {
              shim: 'es5-shim/es5-shim',
              sham: 'es5-shim/es5-sham',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
