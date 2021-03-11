import { UserType } from "../declerations";

export interface RouteInterface {
	path: string;
	component: any;
	exact?: boolean;
	allowOnly?: UserTypeRestrict;
	restrictFrom?: UserTypeRestrict;
}

interface UserTypeRestrict {
	userTypes: UserType[];
	fallbackUrl: string;
}
