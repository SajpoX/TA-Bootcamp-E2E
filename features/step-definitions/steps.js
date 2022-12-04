const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the newegg page and the promo baner is closed if it appears", async () => {
    await browser.url(`https://www.newegg.com/`);
    try {
        await $('#modal-Website > div.modal-dialog.modal-dialog-centered').waitForDisplayed({ timeout: 3000 })
        await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button').click();
    } catch (error) {
        console.log('Promo banner is not displayed.');
    }
});

When("I enter {string} in the search bar and click on search button", async (input) => {
    const commonSelector = "#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex";
    await $(`${commonSelector} > form > div > div.header2021-search-box.auto-flex`).click();
    await $(`${commonSelector}.is-active > form > div > div.header2021-search-box.auto-flex > input[type=search]`).setValue(input);
    await $(`${commonSelector}.is-active > form > div > div.header2021-search-button > button`).click();
});

Then("I see at leasts one item is searched", async () => {
    browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 3000,
            timeoutMsg: 'The page has not loaded for 3 seconds'
        }
    );
    const list = await $('#app > div.page-content > section > div > div > div.row-body > div > div > div > div.row-body > div.row-body-inner > div.list-wrap > div:nth-child(3)');
    await expect(list).toBeDisplayed({ message: "No results were displayed" });
});

When("I click on the to 'Today's Best Deals' tab and then I click on the Internet shop logo", async () => {
    await $('#trendingBanner_720202').click();
    browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 3000,
            timeoutMsg: 'The page has not loaded for 3 seconds'
        }
    );
    const url = await browser.getUrl();
    await expect(url).toContain("https://www.newegg.com/todays-deals");
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo').click();
});

Then("I see the shop main page opened", async () => {
    const url = await browser.getUrl();
    await expect(url).toBe("https://www.newegg.com/");
});