import { Dispatch } from "redux";
import Api from "../../api";
import { ArticlePreview, Article } from "../../declerations";
import store from "../../store";
import { ActionTypes } from "../types";
import {
	PreviewArticleToSubmitAction,
	ClosePreviewArticleToSubmitAction,
	SelectParagraphInArticleAction,
	WriteArticleSearchQueryAction,
	FetchArticlesQueryAction,
	SetGoogleSearchErrorAction,
} from "./interface";

export const previewArticleToSubmit = (
	sourceIdentifier: string,
	articleKey: string
) => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Article>(
				`/api/v1/article_sources/${sourceIdentifier}/article/${articleKey}`
			);
			dispatch<PreviewArticleToSubmitAction>({
				type: ActionTypes.previewArticleToSubmit,
				payload: data,
			});
		} catch (error) {
			dispatch<PreviewArticleToSubmitAction>({
				type: ActionTypes.previewArticleToSubmit,
				payload: undefined,
			});
		}
	};
};

export const closePreviewArticleToSubmit = (): ClosePreviewArticleToSubmitAction => {
	return {
		type: ActionTypes.closePreviewArticleToSubmit,
	};
};

export const selectParagraphToPreview = (
	paragraphId?: number
): SelectParagraphInArticleAction => {
	return {
		type: ActionTypes.selectParagraphInArticle,
		payload: paragraphId,
	};
};

export const writeArticleSearchQuery = (
	query: string
): WriteArticleSearchQueryAction => {
	return {
		type: ActionTypes.writeArticleSearchQuery,
		payload: query,
	};
};

export const fetchArticlesQuery = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<ArticlePreview[]>(
				`/api/v1/articles?query=${
					store.getState().submitArticle.query
				}`
			);

			dispatch<FetchArticlesQueryAction>({
				type: ActionTypes.fetchArticlesQuery,
				payload: data.filter((item) => !!item.source),
			});
		} catch (error) {
			dispatch<SetGoogleSearchErrorAction>({
				type: ActionTypes.setGoogleSearchError,
			});
		}
	};
};
export * from "./interface";
