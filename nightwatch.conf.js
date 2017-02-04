require('babel-register')
const chromedriver = require('chromedriver')

// Base

let nightwatchConfig = {
  src_folders: ['e2e'],
  output_folder: false,
  custom_commands_path : ['e2e/commands'],
}

// Local

if (!process.env.TRAVIS) {

  nightwatchConfig = Object.assign({}, nightwatchConfig, {
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
        exclude: ['commands'],
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
  })

// Remote

} else {

  nightwatchConfig = Object.assign({}, nightwatchConfig, {
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
          platform: 'Linux',
          version: 'latest',
        },
      },
      safari: {
        desiredCapabilities: {
          browserName: 'safari',
          platform: 'Mac 10.11',
        },
      },
      edge: {
        desiredCapabilities: {
          browserName: 'microsoftedge',
        },
      },
    }
  })

}

// Module API

module.exports = nightwatchConfig
