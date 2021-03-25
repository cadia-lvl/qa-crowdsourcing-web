import { VerifyAnswerLocationState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: VerifyAnswerLocationState = {
	text: "",
	paragraph: "",
	firstWord: undefined,
	lastWord: undefined,
	_id: "",
};

const reducer = (
	state: VerifyAnswerLocationState = initialState,
	action: Actions
): VerifyAnswerLocationState => {
	switch (action.type) {
		case ActionTypes.locateSpanInParagraph:
			return {
				...state,
				...action.payload.taskInfo,
				firstWord: undefined,
				lastWord: undefined,
			};
		case ActionTypes.selectFirstWordIndexInParagraph:
			return {
				...state,
				firstWord: action.payload,
			};
		case ActionTypes.selectSecondWordIndexInParagraph:
			return {
				...state,
				lastWord: action.payload,
			};
		case ActionTypes.clearIndexRangeInParagraph:
			return {
				...state,
				firstWord: undefined,
				lastWord: undefined,
			};
		case ActionTypes.verifySpanInAnswer:
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
