exports.command = function(cb) {
  if (!process.env.TRAVIS) return

  const SauceLabs = require('saucelabs')
  const saucelabs = new SauceLabs({
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  })

  const sessionid = this.client.capabilities['webdriver.remote.sessionid'];
  const jobName = this.client.currentTest.name

  saucelabs.updateJob(sessionid, {
    passed: this.client.currentTest.results.failed === 0,
    name: jobName
  }, cb)
}
