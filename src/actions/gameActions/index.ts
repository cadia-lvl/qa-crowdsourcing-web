import { ActionTypes } from "../types";
import {
	FetchQuestionRoundFromAPIAction,
	VerifyQuestionRoundFromAPIAction,
	SetCurrentGameRoundAction,
	FindArticleRoundFromAPIAction,
	LocateSpanRoundFromAPIAction,
	VerifySpanRoundFromAPIAction,
	CompleteRoundFromAPIAction,
} from "./interface";
import {
	FindArticleRoundFromAPI,
	LocateSpanRoundFromAPI,
	MakeQuestionRoundFromAPI,
	TaskFromBackend,
	VerifyQuestionRoundFromAPI,
	VerifySpanRoundFromAPI,
} from "../../declerations";
import { Dispatch } from "redux";
import Api from "../../api";
import store from "../../store";

const __handleUpdateTask = (data: TaskFromBackend) => {
	console.log(data);
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
		case "locate-span":
			store.dispatch<LocateSpanRoundFromAPIAction>({
				type: ActionTypes.locateSpanInParagraph,
				payload: data as LocateSpanRoundFromAPI,
			});
			break;
		case "verify-span":
			store.dispatch<VerifySpanRoundFromAPIAction>({
				type: ActionTypes.verifySpanInAnswer,
				payload: data as VerifySpanRoundFromAPI,
			});
			break;
		case "completed":
			store.dispatch<CompleteRoundFromAPIAction>({
				type: ActionTypes.completeRound,
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
			//
		}
	};
};

export const submitQuestion = (
	gameRoundId: string,
	questionText: string,
	isYesOrNo: boolean
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "make-question",
					text: questionText,
					isYesOrNo,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			//
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
			//
		}
	};
};

export const submitArticleAndParagraph = (
	gameRoundId: string,
	identifier: string,
	key: string,
	questionId: string,
	paragraphIndex: number
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "find-article",
					identifier,
					questionId,
					key,
					paragraphIndex,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			//
		}
	};
};

export const archiveAnswer = (gameRoundId: string, answerId: string) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "archive-answer",
					answerId,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			//
		}
	};
};

export const submitSpan = (
	gameRoundId: string,
	answerId: string,
	firstWord: number,
	lastWord: number
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "locate-span",
					answerId,
					firstWord,
					lastWord,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			//
		}
	};
};

export const verifyAnswerSpan = (
	gameRoundId: string,
	answerId: string,
	canBeShortened?: boolean
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "verify-span",
					_id: answerId,
					canBeShortened,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			console.log(error);
		}
	};
};

export const markQuestionAsImpossible = (
	gameRoundId: string,
	questionId: string
) => {
	return async function (_dispatch: Dispatch) {
		try {
			const { data } = await Api.post<TaskFromBackend>(
				`/api/v1/game_rounds/${gameRoundId}/advance`,
				{
					type: "mark-question-impossible",
					questionId,
				}
			);
			__handleUpdateTask(data);
		} catch (error) {
			console.log(error);
		}
	};
};

export * from "./interface";
