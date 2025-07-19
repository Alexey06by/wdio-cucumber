import { MainPage } from "./MainPage";
import { NewsArticlePage } from "./NewsArticlePage";
import { InvestmentPage } from "./InvestmentsPage";
import { CardsPage } from "./CardsPage";
import { PackageSolutionCardPage } from "./PackageSolutionCardsPage";
import { RedCardPage } from "./RedCardPage";
import { HundredDaysCardPage } from "./HundredDaysCardPage";

export class PageFactory {
    static mainPage() {
        return new MainPage();
    }

    static newsArticlePage() {
        return new NewsArticlePage();
    }
   
    static investmentPage() {
        return new InvestmentPage();
    }  

    static cardsPage() {
        return new CardsPage();
    }  
    
    static packageSolutionCardPage() {
        return new PackageSolutionCardPage();
    }     
    
    static redCardPage() {
        return new RedCardPage();
    }       

    static hundredDaysCardPage() {
        return new HundredDaysCardPage();
    }         
}