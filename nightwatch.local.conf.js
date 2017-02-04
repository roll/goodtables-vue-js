require('babel-register')
const chromedriver = require('chromedriver')

// Base

const nightwatchConfig = {
  src_folders: ['e2e'],
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
      silent: true,
      launch_url: 'http://localhost:9090',
      selenium_port: 4444,
      selenium_host: 'localhost',
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      }
    },
  }
}

// Module API

module.exports = nightwatchConfig
