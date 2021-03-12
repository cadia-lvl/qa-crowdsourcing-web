import { WriteQuestion } from "../components";

export enum GameTypes {
	writeQuestion,
	rateQuestion,
	submitArticle,
	locateAnswer,
	verifyAnswerLocation,
	loadingGame,
}

export interface WriteQuestionGame {
	type: GameTypes.writeQuestion;
	ideaWords: string[];
	firstWord: string;
	question: string;
}

export interface SubmitArticleGame {
	type: GameTypes.submitArticle;
	ideaWords: string[];
	firstWord: string;
	question: string;
}

export interface LoadingGame {
	type: GameTypes.loadingGame;
}

export type Game = WriteQuestionGame | SubmitArticleGame | LoadingGame;
