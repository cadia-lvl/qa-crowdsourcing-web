export enum GameTypes {
	writeQuestion,
	answerQualityAssurance,
	submitArticle,
	verifyAnswerLocation,
	questionQualityAssurance,
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
