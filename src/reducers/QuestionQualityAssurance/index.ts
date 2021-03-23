import { QuestionQualityAssuranceState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: QuestionQualityAssuranceState = {
	_id: "",
	text: "Hvenær fæddist Vigdís Finnbogadóttir?",
};

const reducer = (
	state: QuestionQualityAssuranceState = initialState,
	action: Actions
): QuestionQualityAssuranceState => {
	switch (action.type) {
		case ActionTypes.fetchVerifyQuestion:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
