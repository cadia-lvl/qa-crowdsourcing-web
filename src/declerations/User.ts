export interface User {
	username: string;
	email: string;
	_id: string;
	type: "user" | "admin" | "loading" | "guest";
}
