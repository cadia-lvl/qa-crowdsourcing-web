import { GameState } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: GameState = {
	type: GameTypes.loadingGame,
};

export default (
	state: GameState = initialState,
	action: Actions
): GameState => {
	if (state.type == GameTypes.writeQuestion)
		switch (action.type) {
			default:
				return state;
		}
	else if (state.type == GameTypes.submitArticle)
		switch (action.type) {
			default:
				return state;
		}
	else if (state.type == GameTypes.loadingGame)
		switch (action.type) {
			default:
				return state;
		}
	else return state;
};

export * from "./interface";
