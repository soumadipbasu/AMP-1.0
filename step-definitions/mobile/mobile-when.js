const { When } = require('@cucumber/cucumber');
const  elementActions  = require('../../utils/mobile-actions/mob-index')

When(/^I click on "([^"]*)"/, { timeout: 2 * 60000 }, async function (locatorName) {
  await elementActions.click(locatorName)
});

When(/^I launch device settings/, { timeout: 2 * 60000 }, async function () {
  await elementActions.launchSettings()
});