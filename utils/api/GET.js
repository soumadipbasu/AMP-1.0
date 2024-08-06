const { logger } = require("../../logger/log4js");
const fetch = require("node-fetch");
const _ = require("lodash");
const { apiResponse } = require("../../test-data/api_response-data");

const baseAPIpath = process.env.BASE_API_PATH;
const singleUser = process.env.SINGLE_USER;

module.exports = {
  singleUser: async () => {
    try {
      const apiUrl = `${baseAPIpath}/${singleUser}`;
      const response = await fetch(apiUrl,{ method: "GET"});
      const responseData = await response.json();

      if (
        _.isObject(responseData) &&
        _.isObject(responseData.data) &&
        _.isObject(responseData.support)
      ) {
        logger.info("Response structure is correct.");
      }

      if (
        responseData.data.id === apiResponse.singleUser.data.id &&
        responseData.data.email === apiResponse.singleUser.data.email &&
        responseData.data.first_name ===
          apiResponse.singleUser.data.first_name &&
        responseData.data.last_name === apiResponse.singleUser.data.last_name &&
        responseData.data.avatar === apiResponse.singleUser.data.avatar
      ) {
        logger.info("Response data is correct.");
      } else {
        logger.error("Response data is incorrect.");
      }
    } catch (error) {
      logger.trace("Error fetching API:", error);
      throw new Error(`Error fetching API: ${error}`);
    }
  },
};
