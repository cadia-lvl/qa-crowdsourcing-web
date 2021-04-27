import { ActionTypes } from "../types";
import { ScoreCard, User } from "../../declerations";

export interface FetchUserFromTokenAction {
	type: ActionTypes.fetchUserFromToken;
	payload: User;
}

export interface RegisterUserAction {
	type: ActionTypes.registerUser;
	payload: User;
}

export interface LogOutUserAction {
	type: ActionTypes.logOutUser;
}

export interface FetchScoreCardAction {
	type: ActionTypes.fetchScoreCard;
	payload: ScoreCard;
}

export interface VerifyUserAction {
	type: ActionTypes.verifyUser;
	payload: User;
}
