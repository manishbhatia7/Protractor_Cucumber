import { ElementFinder,element,by, ElementArrayFinder } from "protractor";

export class addemployee_initialpage
{
    public txtfirstName:ElementFinder;
    public txtlastName:ElementFinder;
    public txtemployeeId:ElementFinder;
    public ddLocation1:ElementFinder;
    public ddLocation2:ElementArrayFinder;
    public ddLocation3:ElementFinder;
    public chkLogin:ElementFinder;
    public txtuserName:ElementFinder;
    public txtPassword:ElementFinder;
    public txtconfirmPassword:ElementFinder;
    public btnNext:ElementFinder;
    public ddlRole1:ElementFinder;
    public ddlRole2:ElementFinder;
    public ddlRole3:ElementArrayFinder;
    public ddlRole4:ElementFinder; 
    public final_Text:ElementFinder;   


    constructor()
    {
        this.txtfirstName=element(by.id('firstName'));
        this.txtlastName=element(by.id('lastName'));
        this.txtemployeeId=element(by.id('employeeId'));
        this.ddLocation1=element(by.xpath("//div[@class='select-wrapper initialized']"));
        this.ddLocation2=this.ddLocation1.all(by.className('dropdown-content select-dropdown'));
        this.ddLocation3=element(by.xpath("//span[contains(text(),'Indian Development Center')]"));
        this.chkLogin=element(by.xpath("//label[contains(text(),'Create Login Details')]"));
        this.txtuserName=element(by.id('username'))
        this.txtPassword=element(by.id('password'));
        this.txtconfirmPassword= element(by.id('confirmPassword'));
        this.ddlRole1=element(by.id('adminRoleId_inputfileddiv'));
        this.ddlRole2=this.ddlRole1.element(by.className('select-wrapper initialized'));
        this.ddlRole3=this.ddlRole2.all(by.className('dropdown-content select-dropdown'));
        this.ddlRole4=element(by.xpath("//span[contains(text(),'Global Admin')]"));
        this.btnNext=element(by.id('systemUserSaveBtn'));
        this.final_Text=element(by.xpath("//label[contains(text(),'Marital Status')]"));     
    }



}