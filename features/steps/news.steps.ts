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
    const isArticleVisible = await PageFactory.newsArticlePage().isArticleVisible();
    console.log(isArticleVisible);
    // await expect(isArticleVisible).toHaveValue('true');
})


    