import { Actions } from "../../actions";
import { ChartDataState } from "./interface";

export const initialState: ChartDataState = {
	answersPerDay: [],
};

const reducer = (
	state: ChartDataState = initialState,
	action: Actions
): ChartDataState => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
