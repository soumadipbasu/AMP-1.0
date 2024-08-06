const { logger } = require("../../logger/log4js");
const fetch = require("node-fetch");
const _ = require("lodash");
const { body: apiRequest } = require("../../test-data/api_request-data");
const { apiResponse } = require("../../test-data/api_response-data");

const baseAPIpath = process.env.BASE_API_PATH;
const createuser = process.env.CREATE_USER;

module.exports = {
  createUser: async () => {
    try {
        const apiUrl = `${baseAPIpath}/${createuser}`;
        const requestBody = apiRequest.createUser;
  
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
  
        const responseData = await response.json();
  
        if (response.ok) {
          logger.info("User created successfully.");
        } else {
          logger.error("Error creating user:", responseData.error);
        }
      } catch (error) {
        logger.trace("Error creating user:", error);
        throw new Error(`Error creating user: ${error}`);
      }
    
  },
};
