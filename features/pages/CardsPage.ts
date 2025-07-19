import { Page } from "./BasePage"
import { $ } from "@wdio/globals"

export class CardsPage extends Page {
    private get packageSolutionCard() {return $(".product-item:first-child .button__content")}
    private get redCard() {return $(".product-item:nth-child(3) .button__content")}
    private get hundredDaysCard() {return $(".product-item:nth-child(5) .button__content")}

    async getPackageSolutionCard() {
        await this.packageSolutionCard.moveTo();
        await this.packageSolutionCard.click();   
    }

    async getRedCard() {
        await this.redCard.moveTo();
        await this.redCard.click();           
    }   

    async getHundredDaysCard() {
        await this.hundredDaysCard.moveTo();
        await this.hundredDaysCard.click();     
    }    
}