import { Dispatch } from "redux";
import Api from "../../api";
import {
	ArticlePreview,
	ArticleAnswer,
	Article,
} from "../../declerations";
import store from "../../store";
import { ActionTypes } from "../types";
import {
	PreviewArticleToSubmitAction,
	ClosePreviewArticleToSubmitAction,
	SelectParagraphInArticleAction,
	WriteArticleSearchQueryAction,
	FetchArticlesQueryAction,
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
			console.log(error);
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

export const submitArticleAnswer = (
	answer: ArticleAnswer
): SelectParagraphInArticleAction => {
	return {
		type: ActionTypes.selectParagraphInArticle,
		payload: answer,
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
			console.log(data);
			dispatch<FetchArticlesQueryAction>({
				type: ActionTypes.fetchArticlesQuery,
				payload: data,
			});
		} catch (error) {
			console.log(error);
			dispatch<FetchArticlesQueryAction>({
				type: ActionTypes.fetchArticlesQuery,
				payload: [],
			});
		}
	};
};
export * from "./interface";
