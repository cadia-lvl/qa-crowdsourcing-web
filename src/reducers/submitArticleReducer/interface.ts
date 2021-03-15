import { ArticleAnswer, ArticlePreview } from "../../declerations";

export interface SubmitArticleReducer {
	question: string;
	url: string;
	articles: ArticlePreview[];
	previewArticle?: string | number;
	answer?: ArticleAnswer;
}
