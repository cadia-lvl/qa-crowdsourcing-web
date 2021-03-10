import { ActionTypes } from "../types";
import { User } from "../../declerations";

export interface FetchUserFromTokenAction {
	type: ActionTypes.fetchUserFromToken;
	payload: User;
}

export interface LogOutUserAction {
	type: ActionTypes.logOutUser;
}
