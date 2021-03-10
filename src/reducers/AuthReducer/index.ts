import { AuthState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: AuthState = {
	username: "",
	email: "",
	type: "loading",
	_id: "",
};

export default (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	switch (action.type) {
		case ActionTypes.logOutUser:
			return initialState;
		case ActionTypes.fetchUserFromToken:
			console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
};

export * from "./interface";
