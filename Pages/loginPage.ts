import { by, ElementFinder, element } from "protractor";
export class loginPage
{
    public userName:ElementFinder;
    public password:ElementFinder;
    public submitBtn:ElementFinder;
    public dashboard:ElementFinder;

    constructor()
    {
        this.userName=element(by.id('txtUsername'));
        this.password=element(by.id('txtPassword'));
        this.submitBtn=element(by.id('btnLogin'));
        this.dashboard=element(by.xpath("//li[contains(text(),'Dashboard')]"));
        
    }
   
}
