
## Framework Setup
•	Clone the github repository from https://github.com/soumabasu/AMP_Soumadip.git

•	Open the folder in Visual Studio Code

•	Install all the npm packages listed in package.json using the below mentioned command

  npm i --force

## Environment Setup
•	Create a .env file inside your framework directory.

## Please add This below mentioned environment details in .env file to execute the test

ENVIRONMENT=deloitte

ENVIRONMENT=QA

SPEC_NAME=##Enter the path of the feature file to run the test

RUN_LIGHT_HOUSE_TEST=false

LOG_LEVEL=info ##Enter the log level details (e.g. info/error/debug)

CHROME_DRIVER=latest

FIREFOX_DRIVER=latest

MICROSOFT_EDGE_DRIVER=latest

REPORTS_DIR=testResults

RUN_LIGHT_HOUSE_TEST=false

LOG_FILE_DIR=testResults/logs

BROWSER_NAME=chrome ##Enter the browser name(e.g chrome/firefox)

EXECUTION_TYPE=--disable-gpu ##Add headless if non-headless mode execution required

DEVICE_NAME=Macbook Pro 15 ##Enter the system name(e.g Macbook Pro 15)

PLATFORM_NAME=iOS ##Enter the platform name (e.g Android/iOS)

ANDROID_VERSION=13 ##Enter the test device os version (e.g 13)

ANDROID_APK_PATH=##Enter the apk file path

ANDROID_DEVICE_NAME=Samsung Galaxy S21 Ultra 5G ##Enter the test device name (e.g Samsung G9)

ANDROID_DEVICE_ID=R5CT3286WBK ##Enter the test device id (e.g R5CT3286WBK)

APP_PACKAGE=##Enter the app package name

APP_ACTIVITY=##Enter the app activity name

IOS_DEVICE_NAME=iPhone 13 ##Enter the test device name (e.g iPhone 8)

IOS_VERSION=16.4 ##Enter the test device os version (e.g 16)

UDID=00008110-000C4CA8349A401E ##Enter the test device udid

WEBDRIVERAGENT_RUNNER=##Enter the webdriver agent runner path(e.g. /Users/username/WebDriverAgent/WebDriverAgent.xcodeproj)  

BASE_API_PATH=https://reqres.in/api

SINGLE_USER=users/2

CREATE_USER=users


