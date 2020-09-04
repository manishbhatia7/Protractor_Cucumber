"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var path = require('path');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            path.resolve(process.cwd(), 'steps/*.js')
        ],
        // Tell CucumberJS to save the JSON report
        format: 'json:.tmp/results.json',
        strict: true
    },
    specs: [
        'features/*.feature'
    ],
    multiCapabilities: [{
            browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 2,
            chromeOptions: {
                args: ['disable-infobars']
            }
        }],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
    },
    // Here the magic happens
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
            // read the options part
            }
        }]
};
