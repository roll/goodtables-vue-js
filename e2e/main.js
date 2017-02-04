export default {
  home: (client) => {
    client
      .url(client.launch_url)
      .waitForElementVisible('.goodtables-vue-report', 5000)
      .assert.containsText('h1', 'Report')
      .end();
  },
  afterEach: function(client, done) {
     client.register(done);
  },
};
