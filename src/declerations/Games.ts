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
