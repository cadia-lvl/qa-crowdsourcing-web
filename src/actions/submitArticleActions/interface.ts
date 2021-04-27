import { ArticlePreview, Article } from "../../declerations";
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
	payload?: number;
}

export interface WriteArticleSearchQueryAction {
	type: ActionTypes.writeArticleSearchQuery;
	payload: string;
}

export interface FetchArticlesQueryAction {
	type: ActionTypes.fetchArticlesQuery;
	payload: ArticlePreview[];
}

export interface SetGoogleSearchErrorAction {
	type: ActionTypes.setGoogleSearchError;
}

export interface SetIsPerformingSearch {
	type: ActionTypes.setIsPerformingSearch;
	payload: boolean;
}
