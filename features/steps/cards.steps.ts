import { When, Then } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/PageFactory";

When("I click Become a client button", async() => {
    await PageFactory.mainPage().becomeAClient();
});

When("I click Get card in Solution package section", async() => {
    await PageFactory.cardsPage().getPackageSolutionCard();
});

Then("I see steps to get a card", async() => {
    const packageSolutionCardPage = PageFactory.packageSolutionCardPage();

    const stepsTitle= await packageSolutionCardPage.getStepsTitle();
    await expect(stepsTitle).toHaveText(
        'Скачайте мобильное приложение INSNC, оформите карты в Пакете решений и сразу пользуйтесь'
    );    

    const issueCardSteps = await packageSolutionCardPage.getSteps();
    for (let i = 0; i < await issueCardSteps.length; i++){
        await expect(issueCardSteps[i]).toBeDisplayed();
    }
});

Then("I see request for my phone number on Package Solution Cards Page", async() => {
    const packageSolutionCardPage = PageFactory.packageSolutionCardPage();

    const requestPhoneTitle= await packageSolutionCardPage.getRequestPhoneTitle();
    await expect(requestPhoneTitle).toHaveText(
        'Оставьте ваш номер телефона и мы подберем Пакет решений под ваши запросы'
    );    

    const phoneInputField = await packageSolutionCardPage.getPhoneInput();
    await expect(phoneInputField).toBeDisplayed();   
});

When("I click Get card in the Red card section", async() => {
    await PageFactory.cardsPage().getRedCard();
});

Then("I see Online application to get the Red card", async() => {
    const redCardPage = PageFactory.redCardPage();

    const pageTitle= await redCardPage.getPageTitle();
    await expect(pageTitle).toHaveText('Онлайн-заявка «Красная карта 2.0»');    

    const submitButton = await redCardPage.getSubmitButton();
    await expect(submitButton).toBeDisplayed();   
});

When("I click Get card in the 100 days card section", async() => {
    await PageFactory.cardsPage().getHundredDaysCard();
});

Then("I see Online application to get the 100 days card", async() => {
    const hundredDaysCardPage = PageFactory.hundredDaysCardPage();

    const pageTitle= await hundredDaysCardPage.getPageTitle();
    await expect(pageTitle).toHaveText('Условия по «Карта 100 дней»');    

    const submitButton = await hundredDaysCardPage.getSubmitButton();
    await expect(submitButton).toBeDisplayed();   
});
