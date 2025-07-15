import { Page } from "./page"

export class MainPage extends Page {
    private get newsArticle() {return $(".slide--first a.sm")}
    private get acceptCookiesButton() {return $("span=Принять")}

    async open() {
        await super.open('https://www.alfabank.by/');        
    }

    async openNewsArticle(){
        await this.newsArticle.click();
    }

    async acceptCookies(){
        await this.acceptCookiesButton.click();
    }
}