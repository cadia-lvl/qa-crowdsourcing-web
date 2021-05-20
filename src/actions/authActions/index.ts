import { ActionTypes } from "../types";
import {
	FetchUserFromTokenAction,
	LogOutUserAction,
	FetchScoreCardAction,
	SetIsWaitingForNewAuthCodeAction,
	SetIsWaitingForVerificationAction,
	SetAuthCodeErrorMessageAction,
	CompleteTutorialAction,
	SetIsWaitingForCompletingTutorialAction,
	FetchInvitesAction,
} from "./interface";
import { ScoreCard, User } from "../../declerations";
import { Dispatch } from "redux";
import Api from "../../api";

export const fetchUserFromToken = () => {
	return async function (dispatch: Dispatch) {
		try {
			const res = await Api.get<User>("/api/v1/users/current");
			dispatch<FetchUserFromTokenAction>({
				type: ActionTypes.fetchUserFromToken,
				payload: res.data,
			});
		} catch (error) {
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
			});
		}
	};
};

export const registerUser = (user: User) => {
	return {
		type: ActionTypes.registerUser,
		payload: user,
	};
};

export const fetchScoreCard = () => {
	return async function (dispatch: Dispatch) {
		try {
			const res = await Api.get<ScoreCard>("/api/v1/users/current/score_card");

			dispatch<FetchScoreCardAction>({
				type: ActionTypes.fetchScoreCard,
				payload: res.data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export const logOutUser = () => {
	return async function (dispatch: Dispatch) {
		try {
			await Api.delete("/api/v1/users/current/auth_token");
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
			});
		} catch (error) {
			//
		}
	};
};

export const verifyUser = (verificationCode: string) => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetIsWaitingForVerificationAction>({
				type: ActionTypes.setIsWaitingForVerification,
				payload: true,
			});
			const { data: user } = await Api.post<User>(
				"/api/v1/users/verification_code",
				{
					verificationCode,
				}
			);
			// reuse action
			dispatch<FetchUserFromTokenAction>({
				type: ActionTypes.fetchUserFromToken,
				payload: user,
			});
		} catch (error) {
			// set error message on error
			dispatch<SetAuthCodeErrorMessageAction>({
				type: ActionTypes.setAuthCodeErrorMessage,
				payload: error.response?.data.message ?? "Unknown error",
			});
		} finally {
			// remove loading after timeout
			const TIMEOUT_MS = 1250;
			setTimeout(
				() =>
					dispatch<SetIsWaitingForVerificationAction>({
						type: ActionTypes.setIsWaitingForVerification,
						payload: false,
					}),
				TIMEOUT_MS
			);
		}
	};
};

export const requestNewVerificationCode = () => {
	return async function (dispatch: Dispatch) {
		try {
			// reuse action
			dispatch<SetIsWaitingForNewAuthCodeAction>({
				type: ActionTypes.setIsWaitingForNewAuthCode,
				payload: true,
			});
			// request code
			await Api.get<User>("/api/v1/users/verification_code/generate");
		} catch (error) {
			// set error message on error
			dispatch<SetAuthCodeErrorMessageAction>({
				type: ActionTypes.setAuthCodeErrorMessage,
				payload: error.response?.data.message ?? "Unknown error",
			});
		} finally {
			// remove loading after timeout
			const TIMEOUT_MS = 1250;
			setTimeout(
				() =>
					dispatch<SetIsWaitingForNewAuthCodeAction>({
						type: ActionTypes.setIsWaitingForNewAuthCode,
						payload: false,
					}),
				TIMEOUT_MS
			);
		}
	};
};

export const completeTutorial = () => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetIsWaitingForCompletingTutorialAction>({
				type: ActionTypes.setIsWaitingForCompletingTutorial,
				payload: true,
			});
			await Api.patch("/api/v1/users/complete_tutorial");
			dispatch<CompleteTutorialAction>({
				type: ActionTypes.completeTutorial,
			});
		} catch (error) {
			//
		} finally {
			dispatch<SetIsWaitingForCompletingTutorialAction>({
				type: ActionTypes.setIsWaitingForCompletingTutorial,
				payload: false,
			});
		}
	};
};

export const fetchInvites = () => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<FetchInvitesAction>({
				type: ActionTypes.fetchInvites,
				payload: [],
			});
			const { data } = await Api.get<User[]>("/api/v1/users/current/invites");
			dispatch<FetchInvitesAction>({
				type: ActionTypes.fetchInvites,
				payload: data,
			});
		} catch (error) {
			//
		}
	};
};

export * from "./interface";
