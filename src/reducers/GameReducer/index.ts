import { GameState } from "./interface";
import { Actions } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: GameState = {
	current: GameTypes.verifyAnswerLocation,

	tasksCompleted: 8,
	totalTasks: 10,
};

export default (
	state: GameState = initialState,
	action: Actions
): GameState => {
	switch (action.type) {
		default:
			return state;
	}
};

export * from "./interface";
