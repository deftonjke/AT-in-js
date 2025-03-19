import { Given } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'

Given('a user is logged into their account', async function () {
    await browser.url(process.env.LOGIN_PAGE);
    const hasNotToken = !(await browser.getCookies(['cloud.session.token'])).length;

    if (hasNotToken) {
        await $('[data-testid="username"]').setValue(process.env.TEST_EMAIL)
        await $('#login-submit').click()
        const passwordInput = $('[data-testid="password"]')
        await passwordInput.waitForClickable()
        await passwordInput.setValue(process.env.TEST_PASSWORD)
        await $('#login-submit').click()
    }
})

Given('a board named {string} was created', async function (boardName) {
    await $(`.boards-page-board-section-list div[title="${boardName}"]`).waitForExist()
})

Given('a user navigated to the Sudoku board page', async function () {
    await $(`.boards-page-board-section-list div[title="${process.env.BOARD_NAME}"]`).click()
})