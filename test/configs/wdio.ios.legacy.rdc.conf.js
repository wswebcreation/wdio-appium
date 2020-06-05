const {config} = require('./wdio.shared.sauce.conf');
const testName = `iOS Legacy RDC: ${new Date().getTime()}`;

// =================
// Service Providers
// =================
// These are not needed and need to be removed, else the test will fail. We want to re-use properties
delete config.user;
delete config.key;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    // iOS 13
    {
        // Give a phone with iOS 13
        platformName: 'iOS',
        platformVersion: '13',
        phoneOnly: true,
        automationName: 'XCUITEST',
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
        // The name of the test for in the cloud
        testobject_test_name: testName,
        // This is needed if we want to keep the device between tests
        cacheId: new Date().getTime(),
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        idleTimeout: 180,
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
    }
];

exports.config = config;
