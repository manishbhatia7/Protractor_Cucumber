import {Given, Then, When} from "cucumber";
import { browser, element,by } from "protractor";
import {dashboardPage} from "../Pages/dashboardPage";
var {setDefaultTimeout} = require('cucumber');
var expect = require('chai').expect;
setDefaultTimeout(60 * 1000);
var dash=new dashboardPage();

When('i click on dashboard links to reach add employee page', async function () 
{   
    await browser.waitForAngularEnabled(true);
    await dash.lnkPIM.click();
    await dash.lnkEmployeelist.click(); 
 
});

 When('on reaching Employee list page', async function () {
     await expect(dash.lblHeader.isDisplayed()).to.eventually.equal(true);             
  });

When('I click on add employee link', async function () {
await dash.addEmployeeButton.click();
            
});

Then('add employee page should open', async function () {
    await expect(dash.lbladdEmployee.isDisplayed()).to.eventually.equal(true);
               
});

