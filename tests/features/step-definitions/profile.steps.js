import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

Given('a user navigated to the profile page', async function () {
    $('[data-testid="header-member-menu-button"]').waitForDisplayed()
    $('[data-testid="header-member-menu-button"]').click()
    $('[data-testid="account-menu-profile"]').click()
})

When('the user changes {string} to {string}', async function (fieldName, value) {
    await $(`#${fieldName}`).setValue(value + Date.now())
    await $('button[type="submit"]').click()
})

Then('the updated {string} should be {string}', async function (fieldName, value) {
    await $('[data-testid="CheckCircleIcon"]').waitForDisplayed()
    await expect($(`#${fieldName}`)).toHaveValue(expect.stringContaining(value))
})

After({ tags: '@second' }, async function () {
    await browser.url('/');
    await $('[data-testid="header-member-menu-button"]').click()
    await $('[data-testid="account-menu-profile"]').click()
    await $(`#username`).setValue(process.env.TEST_INITIAL_USERNAME)
    await $(`#bio`).setValue(process.env.TEST_INITIAL_BIO)
    await $('button[type="submit"]').click()
})