require('babel-register')
const chromedriver = require('chromedriver')

// Base

const nightwatchConfig = {
  src_folders: ['e2e/'],
  output_folder: false,
  selenium: {
    start_process: true,
    server_path: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerUrl: 'http://localhost:9090'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
  }
}

// Module API

module.exports = nightwatchConfig
