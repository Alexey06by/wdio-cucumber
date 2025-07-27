import { Given, When } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/PageFactory";

Given("I am on main page", async () => {
    await PageFactory.mainPage().open();    
});

When("I accept cookies", async() => {
    await PageFactory.mainPage().acceptCookies();
});