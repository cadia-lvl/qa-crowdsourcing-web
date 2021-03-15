import { WriteQuestionState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { Action } from "history";

export const initialState: WriteQuestionState = {
	ideaWords: [],
	firstWord: "Hvenær",
	question: "",
};

export default (
	state: WriteQuestionState = initialState,
	action: Actions
): WriteQuestionState => {
	switch (action.type) {
		case ActionTypes.writeQuestion:
			return {
				...state,
				question: action.payload,
			};

		default:
			return state;
	}
};

export * from "./interface";
