export enum GameTypes {
	writeQuestion,
	answerQualityAssurance,
	submitArticle,
	verifyAnswerLocation,
	questionQualityAssurance,
}

export interface MakeQuestionRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		ideaWords: string[];
		type: "make-question";
		questionType: string;
	};
}

export interface VerifyQuestionRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "verify-question";
	};
}

export type TaskFromBackend =
	| MakeQuestionRoundFromAPI
	| VerifyQuestionRoundFromAPI;

export interface ArticleAnswer {
	paragrahNumber: number;
	articleId: string | number;
}

export interface ArticlePreview {
	source: Source;
	extract: string;
	_id: string;
	title: string;
}

interface Source {
	logo: string;
	name: string;
	baseUrl: string;
}

export interface LoadingGame {}
