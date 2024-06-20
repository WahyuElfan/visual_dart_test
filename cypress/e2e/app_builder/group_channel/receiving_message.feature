Feature: Receiving message from group channel

  Scenario: Receiving message
    Given I logged in as the user who received the message
    When  I view the message and reply with "Hello"
    Then  I will see a success send a message