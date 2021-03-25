import { AnswerTypes } from "./interface";

export type ReviewActionsTypes = "answer-question" | "reset-state";

export interface State<T> {
	finished: T[];
	currentQuestion: number;
	questionIsBad: boolean;
}

export interface AnswerQuestionAction {
	type: "answer-question";
	payload: AnswerTypes;
}

export interface RestartAction {
	type: "reset-state";
}

export type ReviewActions = AnswerQuestionAction | RestartAction;
