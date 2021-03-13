import ArticlePreview from "../../components/organisms/Games/SubmitArticleGame/ArticlePreview";
import { Article, WriteQuestionGame } from "../../declerations";
import { ActionTypes } from "../types";
import {
	WriteQuestionInGameAction,
	PreviewArticleToSubmitInGameAction,
} from "./interface";

export const writeQuestionInGame = (
	question: string
): WriteQuestionInGameAction => {
	return {
		type: ActionTypes.writeQuestionInGame,
		payload: question,
	};
};

export const previewArticleToSubmitInGame = (
	article: Article
): PreviewArticleToSubmitInGameAction => {
	return {
		type: ActionTypes.previewArticleToSubmitInGame,
		payload: article._id,
	};
};

export * from "./interface";
