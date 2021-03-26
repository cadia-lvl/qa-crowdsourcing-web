import { GameState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: GameState = {
	currentRound: 0,
	totalRounds: 10,
	_id: "",
};

const reducer = (
	state: GameState = initialState,
	action: Actions
): GameState => {
	switch (action.type) {
		case ActionTypes.setCurrentGameRound:
			return {
				...state,
				currentRound: action.payload,
			};
		case ActionTypes.fetchMakeQuestion:
			return {
				...state,
				...action.payload,
				current: GameTypes.writeQuestion,
			};
		case ActionTypes.fetchVerifyQuestion:
			return {
				...state,
				...action.payload,
				current: GameTypes.questionQualityAssurance,
			};
		case ActionTypes.findArticle:
			return {
				...state,
				...action.payload,
				current: GameTypes.submitArticle,
			};
		case ActionTypes.locateSpanInParagraph:
			return {
				...state,
				...action.payload,
				current: GameTypes.verifyAnswerLocation,
			};
		case ActionTypes.verifySpanInAnswer:
			return {
				...state,
				...action.payload,
				current: GameTypes.verifyAnswerSpan,
			};
		case ActionTypes.completeRound: {
			return {
				...state,
				current: GameTypes.completed,
			};
		}
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
