'use strict';

const _ = require('lodash');

const defaultEnv = {};

const environments = {
  development: {
  },
  production: {
  },
  staging: {
  },
};

module.exports = _.defaultsDeep(environments[process.env.ENV], defaultEnv);
