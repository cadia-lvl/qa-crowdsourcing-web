import { QuestionQualityAssuranceState } from "./interface";
import { Actions } from "../../actions";

export const initialState: QuestionQualityAssuranceState = {
	_id: "",
	text: "Hvenær fæddist Vigdís Finnbogadóttir?",
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
