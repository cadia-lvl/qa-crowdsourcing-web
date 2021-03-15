import { ArticleAnswer } from "../../declerations";
import { ActionTypes } from "../types";

export interface WriteQuestionInGameAction {
	type: ActionTypes.writeQuestionInGame;
	payload: string;
}

export interface PreviewArticleToSubmitInGameAction {
	type: ActionTypes.previewArticleToSubmitInGame;
	payload: string | number;
}

export interface ClosePreviewArticleToSubmitInGameAction {
	type: ActionTypes.closePreviewArticleToSubmitInGame;
}

export interface SubmitArticleAnswerInGameAction {
	type: ActionTypes.submitArticleAnswerInGame;
	payload: ArticleAnswer;
}
