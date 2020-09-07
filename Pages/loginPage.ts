import {browser,by,element} from "protractor";
var expect = require('chai').expect;
export class loginPage
{
setUserName(uname) {
    element(by.id('txtUsername')).clear();
    element(by.id('txtUsername')).sendKeys(uname);
}

setPassword(pwd) {
    element(by.id('txtPassword')).clear();
    element(by.id('txtPassword')).sendKeys(pwd);
}

clickOnLoginBtn()
{
    element(by.id('btnLogin')).click(); 
}
assertLogin()
{
    //var title=element(by.xpath("//li[contains(text(),'Dashboard')]"));
    //expect(title.isDisplayed()).to.eventually.equal(true);
}
}
