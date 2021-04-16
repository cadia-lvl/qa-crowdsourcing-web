export interface User {
	username: string;
	email: string;
	_id: string;
	type: UserType;
	scoreCard: ScoreCard;
	level: number;
}

export interface ScoreCard {
	questions: number;
	answers: number;
	answerVerifications: number;
	questionVerifications: number;
	articles: number;
	hiscoreRank: number;
}

export type UserType = "user" | "admin" | "loading" | "guest";
