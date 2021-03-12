import { ActionTypes } from "../types";

export interface WriteQuestionInGameAction {
	type: ActionTypes.writeQuestionInGame;
	payload: string;
}
