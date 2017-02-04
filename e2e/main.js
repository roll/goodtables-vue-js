export default {
  'home': (browser) => {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('.goodtables-vue-report', 5000)
      .assert.containsText('h1', 'Report')
      .end();
  },
};
