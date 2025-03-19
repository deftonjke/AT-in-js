import { When, Then, After } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

When('the user creates a new list named {string}', async function (listName) {
    await $('button[data-testid="list-composer-button"]').click()
    await $('form > textarea[data-testid="list-name-textarea"]').setValue(listName)
    await $('button[data-testid="list-composer-add-list-button"]').click()
})

Then('the {string} list should be displayed', async function (listName) {
    await expect($(`h2=${listName}`)).toBeDisplayed()
})

After({ tags: '@fifth' }, async function () {
    await browser.pause(500)
    await $(`//h2[contains(text(), 'MyNewList')]/../..//button[@data-testid="list-edit-menu-button"]`).click()
    await browser.pause(500)
    const archiveButton = $('button[data-testid="list-actions-archive-list-button"]');
    await archiveButton.waitForDisplayed()
    await archiveButton.click()
})