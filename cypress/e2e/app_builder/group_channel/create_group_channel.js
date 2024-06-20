const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

Given('I Login Dashboard', () => {
  cy.visit('https://sendbird-uikit-react.netlify.app/group_channel?appId=37C8DB25-8B44-435F-A528-5BA9B9965FD0&userId=user1&nickname=user_test');
  cy.wait(5000); // Wait for 5 seconds to ensure the page is fully loaded
});

When('I Add group channels and send messages', (dataTable) => {
    const data = dataTable.rawTable.slice(1);
    data.forEach((row) => {
      const messages = row[0];
      cy.get('.sendbird-channel-list__header > [data-testid="sendbird-ui-header"] > .sendbird-ui-header__right > .sendbird-iconbutton').click();
      cy.get('.sendbird-add-channel__rectangle').click();
      cy.get(':nth-child(3) > .sendbird-user-list-item__checkbox > .sendbird-checkbox > .sendbird-checkbox--checkmark').click();
      cy.get(':nth-child(4) > .sendbird-user-list-item__checkbox > .sendbird-checkbox > .sendbird-checkbox--checkmark').click();
      cy.get('.sendbird-button--primary').click();
      cy.wait(5000);
      cy.get('#sendbird-message-input-text-field').type(messages);
    });
  });

Then('I click send messages', () => {
  cy.get('[data-testid="sendbird-message-input-send-button"]')
    .should('be.visible')
    .click()
    .then(() => cy.log('Clicked send messages'));
});
