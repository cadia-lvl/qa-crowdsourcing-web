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

export interface SetIsWaitingForNewAuthCodeAction {
	type: ActionTypes.setIsWaitingForNewAuthCode;
	payload: boolean;
}

export interface SetIsWaitingForVerificationAction {
	type: ActionTypes.setIsWaitingForVerification;
	payload: boolean;
}
export interface SetAuthCodeErrorMessageAction {
	type: ActionTypes.setAuthCodeErrorMessage;
	payload: string;
}

export interface SetIsWaitingForCompletingTutorialAction {
	type: ActionTypes.setIsWaitingForCompletingTutorial;
	payload: boolean;
}

export interface CompleteTutorialAction {
	type: ActionTypes.completeTutorial;
}

export interface FetchInvitesAction {
	type: ActionTypes.fetchInvites;
	payload: User[];
}
