'use strict';

const _ = require('lodash');

const defaultEnv = {
  algolia: {
    apiKey: '64e32793e082b12bedf1f52b3d45b862'
    appId: 'KR32CWUHI3',
    indexName: 'dev_lexicon',
  },
};

const environments = {
  development: {
  },
  production: {
  },
  staging: {
  },
};

module.exports = _.defaultsDeep(environments[process.env.ENV], defaultEnv);
