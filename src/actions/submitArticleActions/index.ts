import { ArticlePreview, ArticleAnswer } from "../../declerations";
import { ActionTypes } from "../types";
import {
	PreviewArticleToSubmitAction,
	ClosePreviewArticleToSubmitAction,
	SelectParagraphInArticleAction,
} from "./interface";

export const previewArticleToSubmit = (
	article: ArticlePreview
): PreviewArticleToSubmitAction => {
	return {
		type: ActionTypes.previewArticleToSubmit,
		payload: article._id,
	};
};

export const closePreviewArticleToSubmit = (): ClosePreviewArticleToSubmitAction => {
	return {
		type: ActionTypes.closePreviewArticleToSubmit,
	};
};

export const submitArticleAnswerInGame = (
	answer: ArticleAnswer
): SelectParagraphInArticleAction => {
	return {
		type: ActionTypes.selectParagraphInArticle,
		payload: answer,
	};
};

export * from "./interface";
