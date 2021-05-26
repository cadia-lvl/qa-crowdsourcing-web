import { Actions, ActionTypes } from "../../actions";
import { PrizeState } from "./interface";

export const initialState: PrizeState = {
	prizeCategories: [],
};

const reducer = (
	state: PrizeState = initialState,
	action: Actions
): PrizeState => {
	switch (action.type) {
		case ActionTypes.fetchPrizeCategories:
			return {
				...state,
				prizeCategories: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
