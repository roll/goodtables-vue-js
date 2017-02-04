export default {
  home: (client) => {
    client
      .url(client.launch_url)
      .waitForElementVisible('.goodtables-vue-report', 5000)
      .assert.containsText('h1', 'Report')
      .click('h3.error')
      .waitForElementVisible('table.error', 1000)
      .end();
  },
  afterEach: (client, done) => {
     client.report(done);
  },
};
