import { ActionTypes } from "../types";
import {
	FetchUserFromTokenAction,
	LogOutUserAction,
	FetchScoreCardAction,
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
			const res = await Api.get<ScoreCard>(
				"/api/v1/users/current/score_card"
			);

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
		} catch (error) {}
	};
};

export * from "./interface";
