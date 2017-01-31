const webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

// Base

const karmaConfig = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: ['test/index.js'],
    preprocessors: {
      'test/index.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      mocha: {
        opts: '.mocharc',
      },
    },
    singleRun: true,
  })
}

// Module API

module.exports = karmaConfig
