import { Given, When, Then } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/page-factory";

Given("I am on main page", async () => {
    await PageFactory.mainPage().open();    
});

When("I accept cookies", async() => {
    await PageFactory.mainPage().acceptCookies();
});

When("Click on a news article", async() => {
    await PageFactory.mainPage().openNewsArticle();
});

Then("I see the article", async() => {
    const article = await PageFactory.newsArticlePage().getArticle();
    console.log(isArticleVisible);
    await expect(article).toBeDisplayed();
    // await expect(isArticleVisible).toHaveValue('true');
})


    