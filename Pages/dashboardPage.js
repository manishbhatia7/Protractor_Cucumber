"use strict";
exports.__esModule = true;
exports.dashboardPage = void 0;
var protractor_1 = require("protractor");
var dashboardPage = /** @class */ (function () {
    function dashboardPage() {
        this.lnkPIM = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'PIM')]"));
        this.lnkEmployeelist = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Employee List')]"));
        this.lblHeader = protractor_1.element(protractor_1.by.xpath("//li[contains(text(),'Employee List')]"));
        this.addEmployeeButton = protractor_1.element(protractor_1.by.id('addEmployeeButton'));
        this.lbladdEmployee = protractor_1.element(protractor_1.by.xpath("//h4[contains(text(),'Add Employee')]"));
    }
    return dashboardPage;
}());
exports.dashboardPage = dashboardPage;
