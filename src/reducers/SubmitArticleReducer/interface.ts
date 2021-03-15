import { ArticleAnswer, ArticlePreview } from "../../declerations";

export interface SubmitArticleState {
	question: string;
	url: string;
	articles: ArticlePreview[];
	previewArticle?: string | number;
	answer?: ArticleAnswer;
}
