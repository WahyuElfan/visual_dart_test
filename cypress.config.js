const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'e89uz9',
  e2e: {
    async setupNodeEvents(on, config) {
      // Implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    experimentalRunAllSpecs: false,
    specPattern: ["**/*.feature",  "cypress/e2e/app_builder/*/*.cy.{js,ts}"],
    supportFile: false
  }
});
