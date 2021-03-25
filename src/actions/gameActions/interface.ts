import { ActionTypes } from "../types";
import {
	FindArticleRoundFromAPI,
	LocateSpanRoundFromAPI,
	MakeQuestionRoundFromAPI,
	VerifyQuestionRoundFromAPI,
	VerifySpanRoundFromAPI,
} from "../../declerations";

export interface FetchQuestionRoundFromAPIAction {
	type: ActionTypes.fetchMakeQuestion;
	payload: MakeQuestionRoundFromAPI;
}

export interface VerifyQuestionRoundFromAPIAction {
	type: ActionTypes.fetchVerifyQuestion;
	payload: VerifyQuestionRoundFromAPI;
}

export interface FindArticleRoundFromAPIAction {
	type: ActionTypes.findArticle;
	payload: FindArticleRoundFromAPI;
}

export interface LocateSpanRoundFromAPIAction {
	type: ActionTypes.locateSpanInParagraph;
	payload: LocateSpanRoundFromAPI;
}

export interface VerifySpanRoundFromAPIAction {
	type: ActionTypes.verifySpanInAnswer;
	payload: VerifySpanRoundFromAPI;
}

export interface SetCurrentGameRoundAction {
	type: ActionTypes.setCurrentGameRound;
	payload: number;
}
