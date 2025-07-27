import { Given, When } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/PageFactory";
import {logger as loggerHelper} from '../../utils/log4js'

Given("I am on main page", async () => {
    loggerHelper.info('I am going to be on the main page');     
    await PageFactory.mainPage().open();
    loggerHelper.debug('I am on the main page');        
});

When("I accept cookies", async() => {
    try{
        await PageFactory.mainPage().acceptCookies();
    } catch(err) {
        loggerHelper.error('Error found:', (err as Error).message);   
    }
    
});