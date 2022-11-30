# TA-Bootcamp-E2E
## Description
Simple project which presents my work in E2E tests hometask during Automation QA Bootcamp in Evolution.
The main goal was to develop E2E automated JS tests for https://www.newegg.com.

## Scenarios of the tests
Scenario: Search bar
1. Open the home page
2. Close the promo banner if it appears
3. Entry the word "Windows" in the search bar (top middle)
4. Click the search
5. Check that at least one item appears

Scenario: Internet shop logo button
1. Open the home page
2. Close the promo banner if it appears
3. Open "Today's Best Deals" tab
4. Click on the Internet shop logo (top right corner)
5. Check that the main page opened

## Running the tests
- run the command `yarn install` in the root path of the repository package.
- run the command `yarn run wdio` in the root path of the repository package.
