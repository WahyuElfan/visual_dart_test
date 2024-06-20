Feature: Create channels for messages

  Scenario: create group channels and send messages
    Given I Login Dashboard
    When  I Add group channels and send messages 
    |messages|
    |Hello friends|
    |How are you?|
    Then  I click send messages