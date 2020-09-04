"use strict";
exports.__esModule = true;
exports.config = void 0;
var protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        tags: "",
        require: 'steps/*.js'
    },
    specs: ['features/*.feature'],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().pageLoadTimeout(35000);
    }
    // Options to be passed to Jasmine-node.
};
