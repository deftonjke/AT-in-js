import { When, Then, After } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

When('the user creates a new board with valid data', async function (dataTable) {
    const createButton = $('[data-testid="header-create-menu-button"]');
    await createButton.waitForDisplayed()
    await createButton.click()
    await $('[data-testid="header-create-board-button"]').click()
    await $('[data-testid="create-board-title-input"]').setValue(`${dataTable.hashes()[0].boardName + Date.now()}`)
    await $('[data-testid="create-board-submit-button"]').waitForClickable()
    await $('[data-testid="create-board-submit-button"]').click()
})

Then('the user should be redirected to their {string} page', async function (boardName) {
    await $('[data-testid="board-name-display"]').waitForDisplayed()
    await expect(browser).toHaveUrl(expect.stringContaining(boardName.toLowerCase()))
})

After({ tags: '@third' }, async function () {
    await $('div.board-header span[data-testid="OverflowMenuHorizontalIcon"]').click()
    await $('//div[@data-testid="board-menu-current-panel"]/ul/li[17]').click()
    await $('[data-testid="popover-close-board-confirm"]').click()
    await $('[data-testid="close-board-delete-board-button"]').click()
    await $('[data-testid="close-board-delete-board-confirm-button"]').click()
})