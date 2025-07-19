import { Page } from "./BasePage"
import { $ } from "@wdio/globals"

export class RedCardPage extends Page {
    private get pageTitle() {return $("div.mainScreenHeader")}
    private get submitButton() {return $("button.submitAction")}

    async getPageTitle() {
        return this.pageTitle;   
    }

    async getSubmitButton() {
        return this.submitButton;   
    }      
}