const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    video:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth"
  },
});
