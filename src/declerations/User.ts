export interface User {
	username: string;
	email: string;
	_id: string;
	type: UserType;
}

export type UserType = "user" | "admin" | "loading" | "guest";
