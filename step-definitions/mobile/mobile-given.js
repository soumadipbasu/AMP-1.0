const { Given } = require('@cucumber/cucumber');
const  elementActions  = require('../../utils/mobile-actions/mob-index')

Given(/^I launch the application in my mobile device$/, { timeout: 2 * 60000 }, async function () {
  await driver.pause(2000);

});

