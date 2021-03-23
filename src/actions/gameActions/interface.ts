import { ActionTypes } from "../types";
import {
	FindArticleRoundFromAPI,
	MakeQuestionRoundFromAPI,
	VerifyQuestionRoundFromAPI,
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

export interface SetCurrentGameRoundAction {
	type: ActionTypes.setCurrentGameRound;
	payload: number;
}
