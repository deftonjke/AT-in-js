import { When, Then, After } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

When('the user creates a new card named {string}', async function (cardName) {
    await $(`//h2[contains(text(), ${process.env.INITIAL_LIST_NAME})]/../../../..//button[@data-testid="list-add-card-button"]`).click()
    await $('form > textarea[data-testid="list-card-composer-textarea"]').setValue(cardName)
    await $('button[data-testid="list-card-composer-add-card-button"]').click()
})

Then('the {string} card should be displayed', async function (listName) {
    await expect($(`=${listName}`)).toBeDisplayed()
})

After({ tags: '@sixth' }, async function () {
    const card = $(`=${process.env.CARD_NAME}`);
    await browser.pause(400)
    await card.click()
    await browser.pause(400)
    await $('button[data-testid="card-back-archive-button"]').click()
    await $('button[data-testid="card-back-delete-card-button"]').click()
    await $('button[data-testid="popover-confirm-button"]').click()
})