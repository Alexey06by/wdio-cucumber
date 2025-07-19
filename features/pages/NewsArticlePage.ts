import { Page } from "./BasePage"
import { $ } from "@wdio/globals"

export class NewsArticlePage extends Page {
    private get article() {return $(".now-p-block-info__big")}
    private get articleTitle() {return $("h1.title-page")}

    async getArticle() {
        return this.article;   
    }

    async getArticleTitle() {
        return this.articleTitle;   
    }    
}