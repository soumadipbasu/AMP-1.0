@GET_SingleUser
#Author: Soumadip Basu
Feature: Web API | Single User
  This is to perform an automated flow to verify the response of the single user api in reqres.in website

  Scenario Outline: Web API | Send GET request and verify response
  Given I send get request and verify the response for single user
  And I send post request and verify the response for create user
