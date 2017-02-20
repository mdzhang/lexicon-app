'use strict';

const deployEnvConfig = require('./config/deploy.env');

module.exports = (grunt) => {
  grunt.initConfig({
    deploy: {
      env: deployEnvConfig,
    },
    localBuildPath: 'dist/',
    env: process.env.ENV,
  });

  grunt.loadTasks('./config/grunt/tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webpack');
};
