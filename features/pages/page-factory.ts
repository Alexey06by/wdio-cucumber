import { MainPage } from "./main.page";
import { NewsArticlePage } from "./news-article.page";

export class PageFactory {
    static mainPage() {
        return new MainPage();
    }

    static newsArticlePage() {
        return new NewsArticlePage();
    }
    
}