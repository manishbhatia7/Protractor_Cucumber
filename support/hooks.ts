import {browser} from "protractor";
const {defineSupportCode} = require('cucumber');


defineSupportCode(function ({After}) {

    After(function (scenario) {
        var world = this;
        if (scenario.isFailed()) {
            return browser.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            });
        }
    });
});