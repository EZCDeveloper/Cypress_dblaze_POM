const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/todo',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
