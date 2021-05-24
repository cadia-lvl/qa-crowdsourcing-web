import { CancelTokenSource } from "axios";
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
	SetIsPerformingSearch,
	SetIsLoadingArticle,
} from "./interface";

export const previewArticleToSubmit = (
	sourceIdentifier: string,
	articleKey: string
) => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetIsLoadingArticle>({
				type: ActionTypes.setIsLoadingArticle,
				payload: true,
			});
			const { data } = await Api.get<Article>(
				`/api/v1/article_sources/${sourceIdentifier}/article/${articleKey.replace(
					/\//g,
					"%2F"
				)}`
			);
			dispatch<PreviewArticleToSubmitAction>({
				type: ActionTypes.previewArticleToSubmit,
				payload: data,
			});
		} catch (error) {
			console.log(`error`, error);
			dispatch<PreviewArticleToSubmitAction>({
				type: ActionTypes.previewArticleToSubmit,
				payload: undefined,
			});
		} finally {
			dispatch<SetIsLoadingArticle>({
				type: ActionTypes.setIsLoadingArticle,
				payload: false,
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

export const fetchArticlesQuery = (cancelToken?: CancelTokenSource) => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetIsPerformingSearch>({
				type: ActionTypes.setIsPerformingSearch,
				payload: true,
			});
			const { data } = await Api.get<ArticlePreview[]>(
				`/api/v1/articles?query=${
					store.getState().submitArticle.query
				}`,
				{
					cancelToken: cancelToken?.token,
				}
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
