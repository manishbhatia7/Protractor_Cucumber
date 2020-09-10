"use strict";
exports.__esModule = true;
exports.addemployee_initialpage = void 0;
var protractor_1 = require("protractor");
var addemployee_initialpage = /** @class */ (function () {
    function addemployee_initialpage() {
        this.txtfirstName = protractor_1.element(protractor_1.by.id('firstName'));
        this.txtlastName = protractor_1.element(protractor_1.by.id('lastName'));
        this.txtemployeeId = protractor_1.element(protractor_1.by.id('employeeId'));
        this.ddLocation1 = protractor_1.element(protractor_1.by.xpath("//div[@class='select-wrapper initialized']"));
        this.ddLocation2 = this.ddLocation1.all(protractor_1.by.className('dropdown-content select-dropdown'));
        this.ddLocation3 = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Indian Development Center')]"));
        this.chkLogin = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Create Login Details')]"));
        this.txtuserName = protractor_1.element(protractor_1.by.id('username'));
        this.txtPassword = protractor_1.element(protractor_1.by.id('password'));
        this.txtconfirmPassword = protractor_1.element(protractor_1.by.id('confirmPassword'));
        this.ddlRole1 = protractor_1.element(protractor_1.by.id('adminRoleId_inputfileddiv'));
        this.ddlRole2 = this.ddlRole1.element(protractor_1.by.className('select-wrapper initialized'));
        this.ddlRole3 = this.ddlRole2.all(protractor_1.by.className('dropdown-content select-dropdown'));
        this.ddlRole4 = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Global Admin')]"));
        this.btnNext = protractor_1.element(protractor_1.by.id('systemUserSaveBtn'));
        this.final_Text = protractor_1.element(protractor_1.by.xpath("=//li[@class='current visited']//span[@class='tooltipped']"));
    }
    return addemployee_initialpage;
}());
exports.addemployee_initialpage = addemployee_initialpage;
