
import {Given, Then, When} from "cucumber";
import { browser, element,by } from "protractor";
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('i login in into {string}', async function (url) {

    await browser.waitForAngularEnabled(false);
    await browser.get(url);
   
  });
When('i enter {string} in username', async function (username) {
    
    await element(by.id('txtUsername')).clear();
    await element(by.id('txtUsername')).sendKeys(username);  
    
  }); 

  When('i enter {string} in password', async function (password) {
    await element(by.id('txtPassword')).clear();
    await element(by.id('txtPassword')).sendKeys(password);  
  }); 
  
  When('i click on submit button', async function () {
   await element(by.id('btnLogin')).click();   
  }); 


  