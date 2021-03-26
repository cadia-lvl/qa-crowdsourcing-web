import { QuestionQualityAssuranceState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: QuestionQualityAssuranceState = {
	_id: "",
	text: "Hvenær fæddist Vigdís Finnbogadóttir?",
	isYesOrNo: false,
};

const reducer = (
	state: QuestionQualityAssuranceState = initialState,
	action: Actions
): QuestionQualityAssuranceState => {
	switch (action.type) {
		case ActionTypes.fetchVerifyQuestion:
			return {
				...state,
				...action.payload.taskInfo,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
