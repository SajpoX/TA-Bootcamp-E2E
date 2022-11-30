Feature: Bootcamp E2E
    Background:
        Given I am on the newegg page and the promo baner is closed if it appears
    Scenario: Search bar
        When I enter "Windows" in the search bar and click on search button
        Then I see at leasts one item is searched
    Scenario: Internet shop logo button
        When I click on the to 'Today's Best Deals' tab and then I click on the Internet shop logo
        Then I see the shop main page opened