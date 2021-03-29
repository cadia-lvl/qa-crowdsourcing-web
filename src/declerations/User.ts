export interface User {
	username: string;
	email: string;
	_id: string;
	type: UserType;
	scoreCard: ScoreCard;
}

export interface ScoreCard {
	questions: number;
	answers: number;
	answerVerifications: number;
	questionVerifications: number;
	articles: number;
}

export type UserType = "user" | "admin" | "loading" | "guest";
