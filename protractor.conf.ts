import {Config, browser} from "protractor";
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";
const path = require('path');

exports.config = {
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            path.resolve(process.cwd(), 'steps/*.js')
        ],
        format: 'json:.tmp/results.json',     
        strict: true
    },

    specs: [
        'features/*.feature'
    ],

    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: ['disable-infobars']
        }
    }],
    onPrepare()
    {
        browser.driver.manage().window().maximize();
        const chai = require('chai');
 const chaiAsPromised = require('chai-as-promised');

 // Load chai-as-promised support
 chai.use(chaiAsPromised);

 // Initialise should API (attaches as a property on Object)
 chai.should();

    },
    // Here the magic happens
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport:true,
            openReportInBrowser:true,            
        }
    }]

};