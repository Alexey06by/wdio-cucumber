Feature: Digital Investment of Alfabank

@invest
Scenario: As a user I can find information about Digital Investment 

    Given I am on main page
    When I accept cookies
    And I click on the fries menu icon
    And I click Digital financial assets link
    Then I see steps to start investment
    And I see request for my phone number