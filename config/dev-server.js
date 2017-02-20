'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack/base');

const baseDir = path.resolve(__dirname, '../');
const compiler = webpack(webpackConfig);
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '3000';

const server = new WebpackDevServer(compiler, {
  clientLogLevel: 'info',
  compress: true,
  contentBase: path.join(baseDir, 'public'),
  historyApiFallback: false,
  hot: true,
  publicPath: '/assets/',
  stats: { colors: true },
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
