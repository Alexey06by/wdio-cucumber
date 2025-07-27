import { When, Then } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/PageFactory";

When("I click on the fries menu icon", async() => {
    await PageFactory.mainPage().openFriesMenu();
});

When("I click Digital financial assets link", async() => {
    await PageFactory.mainPage().openDigitalFinancialAssets();
});

Then("I see steps to start investment", async() => {
    const investmentPage = PageFactory.investmentPage();

    const stepsTitle = await investmentPage.getStepsTitle();
    await expect(stepsTitle).toHaveText("Как начать инвестировать");

    const investmentSteps = await investmentPage.getSteps();
    for (let i = 0; i < await investmentSteps.length; i++){
        await expect(investmentSteps[i]).toBeDisplayed();
    }
});

Then("I see request for my phone number", async() => {
    const investmentPage = PageFactory.investmentPage();

    const requestTitle = await investmentPage.getRequestTitle();
    await expect(requestTitle).toHaveText("Начните инвестировать в ЦФА");

    const phoneInput = await investmentPage.getPhoneInput();
    await expect(phoneInput).toBeDisplayed();
});