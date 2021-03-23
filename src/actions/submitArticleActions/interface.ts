import {
	ArticleAnswer,
	ArticlePreview,
	Article,
} from "../../declerations";
import { ActionTypes } from "../types";

export interface PreviewArticleToSubmitAction {
	type: ActionTypes.previewArticleToSubmit;
	payload?: Article;
}

export interface ClosePreviewArticleToSubmitAction {
	type: ActionTypes.closePreviewArticleToSubmit;
}

export interface SelectParagraphInArticleAction {
	type: ActionTypes.selectParagraphInArticle;
	payload: ArticleAnswer;
}

export interface WriteArticleSearchQueryAction {
	type: ActionTypes.writeArticleSearchQuery;
	payload: string;
}

export interface FetchArticlesQueryAction {
	type: ActionTypes.fetchArticlesQuery;
	payload: ArticlePreview[];
}
