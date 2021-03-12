import { GameState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";
import { Action } from "history";

export const initialState: GameState = {
	current: GameTypes.submitArticle,
	writeQuestion: {
		ideaWords: [],
		firstWord: "Hvenær",
		question: "",
	},
	submitArticle: {
		question: "",
		url: "",
	},
	tasksCompleted: 6,
	totalTasks: 10,
};

export default (
	state: GameState = initialState,
	action: Actions
): GameState => {
	switch (action.type) {
		case ActionTypes.writeQuestionInGame:
			return {
				...state,
				writeQuestion: {
					...state.writeQuestion,
					question: action.payload,
				},
			};
		default:
			return state;
	}
};

export * from "./interface";
