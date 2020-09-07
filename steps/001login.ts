
import {Given, Then, When} from "cucumber";
import { browser, element,by } from "protractor";
import {loginPage} from "../Pages/loginPage";
var {setDefaultTimeout} = require('cucumber');
var expect = require('chai').expect;
setDefaultTimeout(60 * 1000);
var login=new loginPage();


Given('i login in into {string}', async function (url) {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
  });
  When('i enter {string} in username', async function (username) {
    await login.userName.clear();
    await login.userName.sendKeys(username);

  });
  When('i enter {string} in password', async function (password) {
    await login.password.clear();
    await login.password.sendKeys(password);
  });
    
  When('i click on submit button', async function () {
    await login.submitBtn.click();    
  });

  Then('login should be successful', async function () {
    await expect(login.dashboard.isDisplayed()).to.eventually.equal(true);
       
  });

  




  