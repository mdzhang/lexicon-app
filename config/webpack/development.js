'use strict';

const webpack = require('webpack');
const config = require('./base.js');

config.devtool = 'eval-source-map';
config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    debug: true,
  })
);

module.exports = config;
