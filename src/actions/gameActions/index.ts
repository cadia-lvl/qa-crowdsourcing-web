import { ActionTypes } from "../types";
import {
	FetchQuestionRoundFromAPIAction,
	VerifyQuestionRoundFromAPIAction,
	SetCurrentGameRoundAction,
} from "./interface";
import {
	MakeQuestionRoundFromAPI,
	TaskFromBackend,
	VerifyQuestionRoundFromAPI,
} from "../../declerations";
import { Dispatch } from "redux";
import Api from "../../api";

export const fetchCurrentGameRound = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<TaskFromBackend>(
				"/api/v1/game_rounds/current"
			);
			switch (data.taskInfo.type) {
				case "make-question":
					dispatch<FetchQuestionRoundFromAPIAction>({
						type: ActionTypes.fetchMakeQuestion,
						payload: data as MakeQuestionRoundFromAPI,
					});
					break;
				case "verify-question":
					dispatch<VerifyQuestionRoundFromAPIAction>({
						type: ActionTypes.fetchVerifyQuestion,
						payload: data as VerifyQuestionRoundFromAPI,
					});
					break;
				default:
					throw new Error(
						"Unreachable statement in fetchCurrentGameRound"
					);
			}

			dispatch<SetCurrentGameRoundAction>({
				type: ActionTypes.setCurrentGameRound,
				payload: data.currentRound,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export * from "./interface";
