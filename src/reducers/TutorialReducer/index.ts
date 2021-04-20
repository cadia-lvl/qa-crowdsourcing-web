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
		case ActionTypes.queueTutorialItems:
			return {
				...state,
				queue: [...state.queue, ...action.payload],
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
