import { When, Then } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/PageFactory";

let articleTitle: string;

When("Click on a news article", async() => {
    articleTitle = await PageFactory.mainPage().getArticleTitle();
    await PageFactory.mainPage().openNewsArticle();
});

Then("I see the article", async() => {
    const newsArticlePage = PageFactory.newsArticlePage();

    const article = await newsArticlePage.getArticle();
    await expect(article).toBeDisplayed();

    const articleTilteOnArticlePage = await newsArticlePage.getArticleTitle();
    await expect(articleTilteOnArticlePage).toHaveText(articleTitle);
});


    