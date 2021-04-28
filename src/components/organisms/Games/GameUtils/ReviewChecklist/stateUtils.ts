import { AnswerTypes } from "./interface";

export type ReviewActionsTypes = "answer-question" | "reset-state";

export interface State<T> {
	finished: { key: T; goodAnswer: boolean }[];
	currentQuestion: number;
	isLoading: boolean;
}

export interface AnswerQuestionAction {
	type: "answer-question";
	payload: {
		answer: AnswerTypes;
		questionNumber: number;
	};
}

export interface SetLoadingAction {
	type: "set-loading";
	payload: boolean;
}

export interface RestartAction {
	type: "reset-state";
}

export type ReviewActions =
	| AnswerQuestionAction
	| RestartAction
	| SetLoadingAction;
