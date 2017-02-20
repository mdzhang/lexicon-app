'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    // Clean out build directory
    clean: {
      dist: {
        src: '<%= localBuildPath %>',
      },
    },
  });
};
