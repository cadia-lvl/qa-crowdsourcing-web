import { GameState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: GameState = {
	current: GameTypes.writeQuestion,
	writeQuestion: {
		ideaWords: [],
		firstWord: "",
		question: "",
	},
	submitArticle: {
		question: "",
		url: "",
	},
};

export default (
	state: GameState = initialState,
	action: Actions
): GameState => {
	return state;
};

export * from "./interface";
