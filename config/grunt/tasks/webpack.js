'use strict';

module.exports = (grunt) => {
  const env = grunt.config.get('env');

  grunt.config.merge({
    webpack: {
      dist: require(`../../webpack/${env}.js`),
    },
  });
};
