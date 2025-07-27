import { When, Then } from "@wdio/cucumber-framework";
import { PageFactory } from "../pages/PageFactory";
import {logger as loggerHelper} from '../../utils/winston'

let articleTitle: string;

When("Click on a news article", async() => {
    try{
        loggerHelper.debug('I am going to save article title to articleTitle variable');          
        articleTitle = await PageFactory.mainPage().getArticleTitle();
        loggerHelper.info('Article title is saved to articleTitle variable');   
        loggerHelper.silly('Test');   
        loggerHelper.warn('Expect error below');              
        await PageFactory.mainPage().openNewsArticle();
    } catch(err) {
        loggerHelper.error('Error found:', err);        
    }
});

Then("I see the article", async() => {
    const newsArticlePage = PageFactory.newsArticlePage();

    const article = await newsArticlePage.getArticle();
    await expect(article).toBeDisplayed();

    const articleTilteOnArticlePage = await newsArticlePage.getArticleTitle();
    await expect(articleTilteOnArticlePage).toHaveText(articleTitle);
});


    