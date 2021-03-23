import { ActionTypes } from "../types";
import {
	FetchQuestionRoundFromAPIAction,
	VerifyQuestionRoundFromAPIAction,
	SetCurrentGameRoundAction,
	FindArticleRoundFromAPIAction,
} from "./interface";
import {
	FindArticleRoundFromAPI,
	MakeQuestionRoundFromAPI,
	TaskFromBackend,
	VerifyQuestionRoundFromAPI,
} from "../../declerations";
import { Dispatch } from "redux";
import Api from "../../api";
import store from "../../store";

const __handleUpdateTask = (data: TaskFromBackend) => {
	switch (data.taskInfo.type) {
		case "make-question":
			store.dispatch<FetchQuestionRoundFromAPIAction>({
				type: ActionTypes.fetchMakeQuestion,
				payload: data as MakeQuestionRoundFromAPI,
			});
			break;
		case "verify-question":
			store.dispatch<VerifyQuestionRoundFromAPIAction>({
				type: ActionTypes.fetchVerifyQuestion,
				payload: data as VerifyQuestionRoundFromAPI,
			});
			break;
		case "find-article":
			store.dispatch<FindArticleRoundFromAPIAction>({
				type: ActionTypes.findArticle,
				payload: data as FindArticleRoundFromAPI,
			});
			break;
		default:
			throw new Error("Unreachable statement in __handleUpdateTask");
	}

	store.dispatch<SetCurrentGameRoundAction>({
		type: ActionTypes.setCurrentGameRound,
		payload: data.currentRound,
	});
};

export const fetchCurrentGameRound = () => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.get<TaskFromBackend>(
				"/api/v1/game_rounds/current"
			);
			__handleUpdateTask(data);
		} catch (error) {
			console.log(error);
		}
	};
};

export const submitQuestion = (
	gameRoundId: string,
	questionText: string
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "make-question",
					text: questionText,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			console.log(error);
		}
	};
};

export const submitVerifyQuestion = (
	gameRoundId: string,
	questionId: string,
	isGood: boolean
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "verify-question",
					questionId,
					archive: !isGood,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			console.log(error);
		}
	};
};

export * from "./interface";
