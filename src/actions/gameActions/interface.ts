import { ActionTypes } from "../types";
import {
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

export interface SetCurrentGameRoundAction {
	type: ActionTypes.setCurrentGameRound;
	payload: number;
}
