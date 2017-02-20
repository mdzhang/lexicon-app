'use strict';

const webpack = require('webpack');
const config = require('./base.js');

config.devtool = 'source-map';
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  })
);

module.exports = config;
