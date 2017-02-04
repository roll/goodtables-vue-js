exports.command = function(cb) {
  if (!process.env.TRAVIS) return

  const SauceLabs = require('saucelabs')
  const saucelabs = new SauceLabs({
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  })

  const sessionid = this.capabilities['webdriver.remote.sessionid'];
  const jobName = this.currentTest.name

  saucelabs.updateJob(sessionid, {
    passed: this.currentTest.results.failed === 0,
    name: jobName
  }, cb)
}
