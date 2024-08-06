const {logger} = require('../../logger/log4js');
const { getElement } = require('../common-actions/find-element');
const platform = process.env.PLATFORM_NAME

module.exports = {
  click: async (locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.click();
      logger.info(`Clicked on ${locatorName}`);
    } catch (err) {
      logger.trace(`Clicking on the ${locatorName} element failed - ${err}`);
      throw new Error(`Clicking on the ${locatorName} failed - ${err}`);
    }
  },

  launchSettings: async () => {
    try {
      switch(platform){
      case 'android':
      await browser.startActivity('com.android.settings', 'com.android.settings.Settings')
      logger.info('Pass : Device setting lauched successfully');
      break;

      case 'iOS':
      await browser.execute('mobile: launchApp', { bundleId: 'com.apple.Preferences' })
      logger.info('Pass : Device setting lauched successfully');
      break;

      default:
      logger.fatal('platform specified doesnt match with ios or android');
      break;
    }}catch (error) {
      console.error('Error launching settings:', error);
    } 
  }
  
}  