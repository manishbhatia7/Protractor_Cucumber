"use strict";
exports.__esModule = true;
exports.loginPage = void 0;
var protractor_1 = require("protractor");
var loginPage = /** @class */ (function () {
    function loginPage() {
        this.userName = protractor_1.element(protractor_1.by.id('txtUsername'));
        this.password = protractor_1.element(protractor_1.by.id('txtPassword'));
        this.submitBtn = protractor_1.element(protractor_1.by.id('btnLogin'));
        this.dashboard = protractor_1.element(protractor_1.by.xpath("//li[contains(text(),'Dashboard')]"));
    }
    return loginPage;
}());
exports.loginPage = loginPage;
