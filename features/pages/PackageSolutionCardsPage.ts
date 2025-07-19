import { Page } from "./BasePage"
import { $, $$ } from "@wdio/globals"

export class PackageSolutionCardPage extends Page {
    private get stepsTitle() {return $(".section__negative-inside:nth-child(2) .section__title")}
    private get steps() {return $$(".step-instruction__item")}
    private get requestPhoneTitle() {return $(".order-name")}
    private get phoneInput() {return $('[name="MOBILE_PHONE"]')}


    async getStepsTitle() {
        return this.stepsTitle;   
    }

    async getSteps() {
        return this.steps;   
    }    

    async getRequestPhoneTitle() {
        return this.requestPhoneTitle;   
    } 

    async getPhoneInput() {
        return this.phoneInput;   
    }            
}