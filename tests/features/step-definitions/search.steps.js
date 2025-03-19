import { When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

When('the user searches {string} board', async function (boardName) {
    const searchInput = $('input[data-testid="cross-product-search-input-skeleton"]');
    await searchInput.waitForDisplayed()
    await searchInput.setValue(boardName)
})

Then('the {string} board should be displayed in search results', async function (boardName) {
    await expect($(`//div[@data-testid="trello-hover-preview-popper-container"]//span[contains(text(), ${boardName})]`)).toBeDisplayed()
})