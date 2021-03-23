import { GameState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: GameState = {
	current: GameTypes.submitArticle,
	currentRound: 0,
	totalRounds: 10,
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
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
