const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    defaultCommandTimeout: 30000,
    video: false,
    hideXHR: true,
    numTestsKeptInMemory: 10,
    watchForFileChanges: false,
    retries: {
      runMode: 1,
      openMode: 1,
    },
    env: {
      password: 'MiPassword**',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
