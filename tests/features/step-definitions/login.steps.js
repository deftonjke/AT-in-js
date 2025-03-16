import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

Given('a user navigated to the home page', async function () {
    await browser.url(process.env.HOME_PAGE);
})

When('the user logs in with valid credentials', async function () {
    await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
    await $('[data-testid="username"]').setValue(process.env.TEST_EMAIL)
    await $('#login-submit').click()
    await $('[data-testid="password"]').setValue(process.env.TEST_PASSWORD)
    await $('#login-submit').click()
})

Then('the user should be redirected to their board page', async function () {
    await $('h3.boards-page-section-header-name').waitForDisplayed();
    await expect(browser).toHaveUrl(expect.stringContaining(process.env.BOARD_PAGE))
})