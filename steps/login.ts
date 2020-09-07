
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
  When('i enter {string} in username', function (username) {
    login.setUserName(username);   
  });
  When('i enter {string} in password', async function (password) {
    await login.setPassword(password);
  });
    
  When('i click on submit button', async function () {
    await login.clickOnLoginBtn();    
  });

  Then('login should be successful', async function () {
    await login.assertLogin();
       
  });




  