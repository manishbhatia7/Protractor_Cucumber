import {addemployee_initialpage} from "../Pages/addemployee_initialpage";
import {Given,When,Then} from "cucumber";
import { browser } from "protractor";
var expect = require('chai').expect;
var add=new addemployee_initialpage();

When('i add {string} in firstName textbox', async function (uname) {
    await browser.sleep(3000);
    await add.txtfirstName.sendKeys(uname);
  });

  When('i add {string}  in lastName  textbox.', async function (lname) {
    await add.txtlastName.sendKeys(lname);
  });

  When('i add {string} in employee id textbox', async function (empid) {
    await add.txtemployeeId.clear();
    await add.txtemployeeId.sendKeys(empid);
  });

  When('i select workplace dropdown', async function () {
    await add.ddLocation1.click();
    await add.ddLocation2.each(async function()
    {
        await browser.driver.sleep(500);
        await add.ddLocation3.click();
        await browser.driver.sleep(500);
    })

});

Then('i assert that login checkbox is unchecked', async function () {
  await expect(add.chkLogin.isSelected()).to.eventually.equal(false);
 
});


Then('i select the login checkbox', async function () 
{
await add.chkLogin.click();
});

Then('i enter the {string} in username textbox.', async function (username) {
   await add.txtuserName.sendKeys(username); 
});


Then('i enter the {string} in password textbox', async function (password) {
  await add.txtPassword.sendKeys(password);
});

Then('i enter the {string} in confirm password textbox', async function (password) {
  await add.txtconfirmPassword.sendKeys(password);
});

Then('i select the Roleid dropdown.', async function () {
  await add.ddlRole2.click();
  await add.ddlRole3.each(async function(){
  await browser.driver.sleep(500);
  await add.ddlRole4.click();
  await browser.driver.sleep(500);
  })
});

Then('i click on Next button', async function () {
  await browser.actions().mouseMove(add.btnNext).perform();
  await add.btnNext.click();
});


Then('Add Employee Personal Wizard details should be shown.', async function () {
  await expect(add.final_Text.isDisplayed(),10000).to.eventually.equal(true);
  
});










