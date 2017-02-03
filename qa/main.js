export default {
  'home': (browser) => {
    browser
      .url(browser.globals.devServerUrl)
      .waitForElementVisible('.goodtables-vue-report', 5000)
      .assert.containsText('h1', 'Report')
      .end();
  },
};
