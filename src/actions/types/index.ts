import * as AuthActions from "../authActions";

export enum ActionTypes {
	fetchUserFromToken,
	logOutUser,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction;
