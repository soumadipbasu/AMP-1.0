const { Given } = require('@cucumber/cucumber');
const elementActions = require('../../utils/web-actions/index');
const apigetCall = require('../../utils/api/GET')
const apipostCall = require('../../utils/api/POST')

Given(/^I launch the url "([^"]*)"/, { timeout: 2 * 60000 }, async (url) => {
  await elementActions.navigate(url);
});

Given(/^I send get request and verify the response for single user/, { timeout: 2 * 60000 }, async () => {
      await apigetCall.singleUser()       
});

Given(/^I send post request and verify the response for create user/, { timeout: 2 * 60000 }, async () => {
  await apipostCall.createUser()       
});




