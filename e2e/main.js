export default {
  home: (client) => {
    client
      .url(client.launch_url)
      .waitForElementVisible('.goodtables-vue-report', 5000)
      .assert.containsText('a', 'data/invalid.csv')
      .end();
  },
  afterEach: (client, done) => {
     client.globals.report(client, done);
  },
};
