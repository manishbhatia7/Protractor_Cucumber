import { ElementFinder,element,by } from "protractor";

export class dashboardPage
{
    public lnkPIM:ElementFinder;
    public lnkEmployeelist:ElementFinder;
    public lblHeader:ElementFinder;
    public addEmployeeButton:ElementFinder;
    public lbladdEmployee:ElementFinder;
    constructor()
    {
        this.lnkPIM=element(by.xpath("//span[contains(text(),'PIM')]"));
        this.lnkEmployeelist=element(by.xpath("//span[contains(text(),'Employee List')]"));
        this.lblHeader=element(by.xpath("//li[contains(text(),'Employee List')]"));
        this.addEmployeeButton=element(by.id('addEmployeeButton'));
        this.lbladdEmployee=element(by.xpath("//h4[contains(text(),'Add Employee')]"));
    }
}