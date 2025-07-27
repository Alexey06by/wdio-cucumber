Feature: Issuing a card of Alfabank

@solution_package
Scenario: As a user I can find information about issuing a card from solution package

    Given I am on main page
    When I accept cookies
    And I click Become a client button
    And I click Get card in Solution package section
    Then I see steps to get a card
    And I see request for my phone number on Package Solution Cards Page 

@solution_package
Scenario: As a user I can start issuing the Red credit card

    Given I am on main page
    When I click Become a client button
    And I click Get card in the Red card section
    Then I see Online application to get the Red card    

Scenario: As a user I can start issuing the 100 days credit card

    Given I am on main page
    When I click Become a client button
    And I click Get card in the 100 days card section
    Then I see Online application to get the 100 days card    