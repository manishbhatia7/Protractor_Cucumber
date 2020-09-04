"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var defineSupportCode = require('cucumber').defineSupportCode;
defineSupportCode(function (_a) {
    var After = _a.After;
    After(function (scenario) {
        var world = this;
        if (scenario.isFailed()) {
            return protractor_1.browser.takeScreenshot().then(function (screenShot) {
                // screenShot is a base-64 encoded PNG
                world.attach(screenShot, 'image/png');
            });
        }
    });
});
