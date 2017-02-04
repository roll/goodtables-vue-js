require('babel-register')

// Base

const nightwatchConfig = {
  src_folders: ['e2e'],
  output_folder: false,
  custom_commands_path : ['e2e/commands'],
  selenium: {
    start_process: false,
    server_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': '',
      'webdriver.ie.driver': '',
    }
  },
  test_workers: {
    enabled: true,
    workers: 'auto',
  },
  test_settings: {
    default: {
      silent: true,
      exclude: ['commands'],
      launch_url: 'http://localhost:9090',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      username : process.env.SAUCE_USERNAME,
      access_key : process.env.SAUCE_ACCESS_KEY,
      desiredCapabilities: {
        build: `build-${process.env.TRAVIS_JOB_NUMBER}`,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        javascriptEnabled: true,
        acceptSslCerts: true
      },
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
