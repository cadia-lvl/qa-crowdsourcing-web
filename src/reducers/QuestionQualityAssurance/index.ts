import { QuestionQualityAssuranceState } from "./interface";
import { Actions } from "../../actions";

export const initialState: QuestionQualityAssuranceState = {
	_id: "",
	text: "",
};

export default (
	state: QuestionQualityAssuranceState = initialState,
	action: Actions
): QuestionQualityAssuranceState => {
	switch (action.type) {
		default:
			return state;
	}
};

export * from "./interface";
