import { TutorialState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: TutorialState = {
	queue: [],
};

const reducer = (
	state: TutorialState = initialState,
	action: Actions
): TutorialState => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
