const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

Given('I logged in as the user who received the message', () => {
  cy.visit('https://sendbird-uikit-react.netlify.app/group_channel?appId=37C8DB25-8B44-435F-A528-5BA9B9965FD0.&userId=us2&nickname=us2');
  cy.wait(5000); // Wait for 5 seconds to ensure the page is fully loaded
});

When('I view message and replied {string}',(message) => {
    cy.get('[tabindex="4"] > .sendbird-channel-preview__content > .sendbird-channel-preview__content__upper').click();
    cy.get('#sendbird-message-input-text-field').type(message);
});

Then('I will see a success send a message', () => {
    cy.get('[data-testid="sendbird-message-input-send-button"]')
      .should('be.visible')
      .click()
      .then(() => cy.log('Clicked send messages'));
  });