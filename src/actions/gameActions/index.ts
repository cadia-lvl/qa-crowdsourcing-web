import { ActionTypes } from "../types";
import {
	FetchQuestionRoundFromAPIAction,
	VerifyQuestionRoundFromAPIAction,
	SetCurrentGameRoundAction,
	FindArticleRoundFromAPIAction,
	LocateSpanRoundFromAPIAction,
	VerifySpanRoundFromAPIAction,
	CompleteRoundFromAPIAction,
	SetGameLoadingStateAction,
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
import { AxiosResponse } from "axios";

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

export const setShowAvatarInHeader = (shouldShow: boolean) => {
	return {
		type: ActionTypes.setShowAvatarInHeader,
		payload: shouldShow,
	};
};

export const fetchCurrentGameRound = () => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: true,
			});
			const { data } = await Api.get<TaskFromBackend>(
				"/api/v1/game_rounds/current"
			);
			__handleUpdateTask(data);
		} catch (error) {
			//
		} finally {
			dispatch<SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: false,
			});
		}
	};
};

export const gameActionWrapperFunc = (
	cb: (d: Dispatch) => Promise<AxiosResponse<TaskFromBackend>>
) => {
	return async function (_dispatch: Dispatch) {
		try {
			_dispatch<SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: true,
			});
			const { data } = await cb(_dispatch);
			__handleUpdateTask(data);
		} catch (e) {
			// @ts-ignore
			store.dispatch(fetchCurrentGameRound());
		} finally {
			// release loading in both cases
			_dispatch<SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: false,
			});
		}
	};
};

export const submitQuestion = (
	gameRoundId: string,
	questionText: string,
	isYesOrNo: boolean
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "make-question",
			text: questionText,
			isYesOrNo,
		})
	);

export const submitVerifyQuestion = (
	gameRoundId: string,
	questionId: string,
	isGood: boolean
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "verify-question",
			questionId,
			archive: !isGood,
		})
	);

export const submitArticleAndParagraph = (
	gameRoundId: string,
	identifier: string,
	key: string,
	questionId: string,
	paragraphIndex: number
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "find-article",
			identifier,
			questionId,
			key,
			paragraphIndex,
		})
	);

export const archiveAnswer = (gameRoundId: string, answerId: string) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "archive-answer",
			answerId,
		})
	);

export const submitSpan = (
	gameRoundId: string,
	answerId: string,
	firstWord: number,
	lastWord: number
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "locate-span",
			answerId,
			firstWord,
			lastWord,
		})
	);

export const verifyAnswerSpan = (
	gameRoundId: string,
	answerId: string,
	canBeShortened?: boolean
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "verify-span",
			_id: answerId,
			canBeShortened,
		})
	);

export const markQuestionAsImpossible = (
	gameRoundId: string,
	questionId: string
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "mark-question-impossible",
			questionId,
		})
	);

export const verifyYesNoQuestion = (
	gameRoundId: string,
	answerId: string,
	answer: boolean
) =>
	gameActionWrapperFunc((_dispatch: Dispatch) =>
		Api.post<TaskFromBackend>(`/api/v1/game_rounds/${gameRoundId}/advance`, {
			type: "verify-yes-no-answer-paragraph",
			answerId,
			answer,
		})
	);

export * from "./interface";
