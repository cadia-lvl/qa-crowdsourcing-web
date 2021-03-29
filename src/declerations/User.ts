export interface User {
	username: string;
	email: string;
	_id: string;
	type: UserType;
	scoreCard: {
		questions: number;
		answers: number;
		answerVerifications: number;
		questionVerifications: number;
		articles: number;
	};
}

export type UserType = "user" | "admin" | "loading" | "guest";
