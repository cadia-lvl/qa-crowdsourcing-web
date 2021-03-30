import { WriteQuestionState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: WriteQuestionState = {
	ideaWords: [],
	questionType: "",
	question: "",
};

const reducer = (
	state: WriteQuestionState = initialState,
	action: Actions
): WriteQuestionState => {
	switch (action.type) {
		case ActionTypes.fetchMakeQuestion:
			const { questionType } = action.payload.taskInfo;
			return {
				...state,
				...action.payload.taskInfo,
				question: questionType === "Já/Nei" ? "" : questionType,
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
