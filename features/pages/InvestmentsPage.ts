import { Page } from "./BasePage"
import { $, $$ } from "@wdio/globals"

export class InvestmentPage extends Page {
    private get stepsTitle() {return $(".section__title")}
    private get steps() {return $$(".step-instruction__item")}
    private get requestTitle() {return $(".form-group__header-title")}
    private get phoneInput() {return $('[name="phone"]')}


    async getStepsTitle() {
        return this.stepsTitle;   
    }

    async getSteps() {
        return this.steps;   
    }    

    async getRequestTitle() {
        return this.requestTitle;   
    } 

    async getPhoneInput() {
        return this.phoneInput;   
    }            
}