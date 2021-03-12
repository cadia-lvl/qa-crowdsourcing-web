import { WriteQuestionGame } from "../../declerations";
import { ActionTypes } from "../types";
import { WriteQuestionInGameAction } from "./interface";

export const writeQuestionInGame = (
	question: string
): WriteQuestionInGameAction => {
	return {
		type: ActionTypes.writeQuestionInGame,
		payload: question,
	};
};

export * from "./interface";
