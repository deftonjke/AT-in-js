import { When, Then, After, Given } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given('cards with different attributes were created', async function () {
    // 10 cards have already been created in TestFilters board
    // !!! Tests may fail if the cards are expired. !!!
})

Given('a user navigated to the TestFilters board page', async function () {
    await $(`.boards-page-board-section-list div[title="TestFilters"]`).click()
})

When('the user filters cards by {string}', async function (attrValueId) {
    await $('button[data-testid="filter-popover-button"]').click()
    await $('header h2').waitForDisplayed()
    await $$('[data-testid="clickable-checkbox"]')[attrValueId].click()
})

Then('the number of cards should be {string}', async function (numOfCards) {
    const cardCount = $('[data-testid="filter-popover-button-filter-count"] span');
    await cardCount.waitForDisplayed()
    await expect(cardCount).toHaveText(numOfCards)
})

After({ tags: '@eighth' }, async function () {
    await $('button[data-testid="filter-popover-button-x"]').waitForDisplayed()
    await $('button[data-testid="filter-popover-button-x"]').click()
})