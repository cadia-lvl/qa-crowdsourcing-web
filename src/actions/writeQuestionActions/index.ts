import { ActionTypes } from "../types";
import { WriteQuestionAction } from "./interface";

export const writeQuestion = (question: string): WriteQuestionAction => {
	return {
		type: ActionTypes.writeQuestion,
		payload: question,
	};
};

export * from "./interface";
