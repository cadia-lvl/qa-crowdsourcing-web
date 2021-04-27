import { User } from "../../declerations";

export interface AuthState extends User {
	isAuthCodeSubmissionLoading: boolean;
	isAuthCodeRegenerationLoading: boolean;
	authCodeErrorMessage: string;
}
