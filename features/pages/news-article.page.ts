import { Page } from "./page"
import { browser } from "@wdio/globals"

export class NewsArticlePage extends Page {
    private get article() {return $(".now-p-block-info__big")}
    async isArticleVisible() {
        const article = await this.article;
        return browser.isElementDisplayed(article['element-6066-11e4-a52e-4f735466cecf']);        
    }

}