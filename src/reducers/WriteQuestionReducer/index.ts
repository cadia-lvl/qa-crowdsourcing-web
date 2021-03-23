import { WriteQuestionState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: WriteQuestionState = {
	ideaWords: [],
	firstWord: "Hvenær",
	question: "",
};

const reducer = (
	state: WriteQuestionState = initialState,
	action: Actions
): WriteQuestionState => {
	switch (action.type) {
		case ActionTypes.fetchMakeQuestion:
			return {
				...state,
				...action.payload.taskInfo,
				question: "",
			};
		case ActionTypes.writeQuestion:
			return {
				...state,
				question: action.payload,
			};

		default:
			return state;
	}
};
export default reducer;
export * from "./interface";
