import { ActionTypes } from "../types";

export interface WriteQuestionInGameAction {
	type: ActionTypes.writeQuestionInGame;
	payload: string;
}

export interface PreviewArticleToSubmitInGameAction {
	type: ActionTypes.previewArticleToSubmitInGame;
	payload: string | number;
}
