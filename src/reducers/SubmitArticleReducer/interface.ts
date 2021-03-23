import {
	ArticleAnswer,
	ArticlePreview,
	Article,
} from "../../declerations";

export interface SubmitArticleState {
	text: string;
	url: string;
	articles: ArticlePreview[];
	previewArticle?: Article;
	answer?: ArticleAnswer;
	query: string;
}
