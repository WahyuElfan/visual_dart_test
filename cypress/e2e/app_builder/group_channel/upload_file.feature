Feature: Upload files in chat

  Scenario: Upload files
    Given I Select chat and Select file to Upload
    When  I upload a file 'image.PNG'
    Then  I should see the upload success message