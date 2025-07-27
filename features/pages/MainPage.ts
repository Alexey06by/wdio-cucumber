import { Page } from "./BasePage"
import { browser, $ } from "@wdio/globals"
import dotenv  from 'dotenv'
dotenv.config();

export class MainPage extends Page {
    private get newsArticle() {return $(".slide--first a.sm")}
    private get acceptCookiesButton() {return $("span=Принять")}
    private get friesMenu() {return $('[aria-label="Main Menu"]')}
    private get digitalFinancialAssets() {return $('li>[href="/investments/dfa/"]')}  
    private get becomeAClientButton() {
        return $("//div[@class='main-banner__extended']//span[contains(text(),'Стать клиентом')]")
    }

    async open() {
        await super.open(process.env.BASE_URL || "");        
    }

    async openNewsArticle(){
        await this.newsArticle.waitForClickable({timeout: 3000});
        await this.newsArticle.click();
    }
    
    async openFriesMenu(){
        await this.friesMenu.click();
    }    

    async openDigitalFinancialAssets(){
        await this.digitalFinancialAssets.waitForClickable({timeout: 3000});
        await this.digitalFinancialAssets.click();
    }    

    async becomeAClient(){
        await $('.main-banner__element:last-child').moveTo();
        await this.becomeAClientButton.click();
    }        

    async getArticleTitle(){
        const articleTilte = await $(".slide--first .slide__header");
        return await browser.getElementText(articleTilte['element-6066-11e4-a52e-4f735466cecf']);    
    }    

    async acceptCookies(){
        await this.acceptCookiesButton.click();
    }
}