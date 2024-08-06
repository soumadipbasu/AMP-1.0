const verifyElementIsDisplayed = require('./mob-element-status')
const click = require('./mob-click')
const swipeScree = require('./screen-swipe')
const enterText = require('./mob-entertext')
const click_coordinates = require('./mob-click_coordinates')
const page_actions = require('./mob-page-actions')

module.exports = {
  ...verifyElementIsDisplayed,
  ...click,
  ...swipeScree,
  ...enterText,
  ...click_coordinates,
  ...page_actions
  
  
};

