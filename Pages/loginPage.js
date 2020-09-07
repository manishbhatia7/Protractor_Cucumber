"use strict";
exports.__esModule = true;
exports.loginPage = void 0;
var protractor_1 = require("protractor");
var expect = require('chai').expect;
var loginPage = /** @class */ (function () {
    function loginPage() {
    }
    loginPage.prototype.setUserName = function (uname) {
        protractor_1.element(protractor_1.by.id('txtUsername')).clear();
        protractor_1.element(protractor_1.by.id('txtUsername')).sendKeys(uname);
    };
    loginPage.prototype.setPassword = function (pwd) {
        protractor_1.element(protractor_1.by.id('txtPassword')).clear();
        protractor_1.element(protractor_1.by.id('txtPassword')).sendKeys(pwd);
    };
    loginPage.prototype.clickOnLoginBtn = function () {
        protractor_1.element(protractor_1.by.id('btnLogin')).click();
    };
    loginPage.prototype.assertLogin = function () {
        //var title=element(by.xpath("//li[contains(text(),'Dashboard')]"));
        //expect(title.isDisplayed()).to.eventually.equal(true);
    };
    return loginPage;
}());
exports.loginPage = loginPage;
