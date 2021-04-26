import { ArticlePreview, Article } from "../../declerations";

export interface SubmitArticleState {
	text: string;
	url: string;
	articles: ArticlePreview[];
	previewArticle?: Article;
	previewParagraphIndex?: number;
	query: string;
	_id: string;
	previewOpenCount: number;
	searchError: boolean;
	noResults: boolean;
}
