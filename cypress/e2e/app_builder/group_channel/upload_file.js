const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import 'cypress-file-upload';

Given('I Select chat and Select file to Upload', () => {
  cy.visit('https://sendbird-uikit-react.netlify.app/group_channel?appId=37C8DB25-8B44-435F-A528-5BA9B9965FD0&userId=user1&nickname=user_test');
  cy.wait(5000);
  cy.get('[tabindex="4"] > .sendbird-channel-preview__content > .sendbird-channel-preview__content__upper').click();
//   cy.get('.sendbird-message-input--attach').click();
});

When('I upload a file {string}', (fileName) => {
    cy.get('.sendbird-message-input--attach').attachFile(fileName, 'image.PNG')
});

Then('I should see the upload success message', () => {
  cy.log('I should see the upload success message');
});
