import {Config, browser} from "protractor";


export let config:Config={
    // The address of a running selenium server.
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        tags:"",
        require: '../steps/*.js'},
  
    specs: ['../features/*.feature'],
    onPrepare()
    {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(35000);
    }

    // Options to be passed to Jasmine-node.

};