import { Given, When, Then, After } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

Given('a user navigated to the workspace page', async function () {
    await $('button[data-testid="workspace-switcher"]').click()
    await $('[data-testid="workspace-list"] a').click()
})

When('the user updates fields in workspace', async function (dataTable) {
    const fieldValues = dataTable.hashes()
    await $('[data-testid="EditIcon"]').click()

    for (const { fieldName, value } of fieldValues) {
        await $(`#${fieldName}`).setValue(value)
    }

    await $('button[type="submit"]').click()
})

Then('the updated field should be correct in workspace', async function (dataTable) {
    const fieldValues = dataTable.hashes()
    const fieldCheckers = new Map([
        ["displayName", (value) => expect($(`h2=${value}`)).toBeDisplayed()],
        ["name", (value) => expect(browser).toHaveUrl(expect.stringContaining(value.toLowerCase()))],
        ["website", (value) => expect($(`=${value}`)).toBeDisplayed()],
        ["desc", (value) => expect($(`p=${value}`)).toBeDisplayed()]
    ]);

    for (const { fieldName, value } of fieldValues) {
        if (fieldCheckers.has(fieldName)) {
            await fieldCheckers.get(fieldName)(value);
        } else {
            throw new Error(`Unknown field: ${fieldName}`);
        }
    }
})

After({ tags: '@seventh' }, async function () {
    const initialFieldValues = [
        { fieldName: "displayName", value: `${process.env.INITIAL_WS_NAME}` },
        { fieldName: "name", value: `${process.env.INITIAL_WS_SHORT_NAME}` },
        { fieldName: "website", value: `${process.env.INITIAL_WS_WEBSITE}` },
        { fieldName: "desc", value: `${process.env.INITIAL_WS_DESC}` }
    ]
    const editButton = $('[data-testid="EditIcon"]');
    await editButton.waitForDisplayed()
    await editButton.click()

    for (const { fieldName, value } of initialFieldValues) {
        await $(`#${fieldName}`).setValue(value)
    }

    await $('button[type="submit"]').click()

})