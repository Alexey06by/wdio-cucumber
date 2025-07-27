Feature: News of Alfabank

    @news
    Scenario: As a user I can see news

        Given I am on main page
        When I accept cookies
        And Click on a news article
        Then I see the article
