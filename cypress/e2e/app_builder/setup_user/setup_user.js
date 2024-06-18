const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

Given('I Navigate to the Dashboard Sendbird', () => {
  cy.visit('https://sendbird-uikit-react.netlify.app/url-builder');
  cy.wait(5000); // Wait for 5 seconds to ensure the page is fully loaded
});

When('I input appId {string}, userId {string} and nickname {string}', (appId, userId, nickname) => {
  cy.get('div > #builder > div:nth-child(2) > label > input')
    .should('be.visible')
    .type(appId)
    .then(() => cy.log(`Entered appId: ${appId}`));

  cy.get('div > #builder > div:nth-child(3) > label > input')
    .should('be.visible')
    .type(userId)
    .then(() => cy.log(`Entered userId: ${userId}`));

  cy.get('div > #builder > div:nth-child(4) > label > input')
    .should('be.visible')
    .type(nickname)
    .then(() => cy.log(`Entered nickname: ${nickname}`));
});

Then('I click the copy button', () => {
  cy.get('body > #root > div > div > .sticky-bottom-button')
    .should('be.visible')
    .click()
    .then(() => cy.log('Clicked the copy button'));
});
