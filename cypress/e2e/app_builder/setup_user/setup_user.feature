Feature: Sendbird Dashboard

  Scenario: Input appId, userId, and nickname
    Given I Navigate to the Dashboard Sendbird
    When  I input appId "37C8DB25-8B44-435F-A528-5BA9B9965FD0", userId "user1" and nickname "user_test"
    Then  I click the copy button
