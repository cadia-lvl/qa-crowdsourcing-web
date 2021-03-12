export enum GameTypes {
	writeQuestion,
	rateQuestion,
	submitArticle,
	locateAnswer,
	verifyAnswerLocation,
	loadingGame,
}

export interface WriteQuestionGame {
	ideaWords: string[];
	firstWord: string;
	question: string;
}

export interface SubmitArticleGame {
	question: string;
	url: string;
}

export interface LoadingGame {}

export type Game = WriteQuestionGame | SubmitArticleGame | LoadingGame;
