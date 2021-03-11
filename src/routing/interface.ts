import { UserType } from "../declerations";

export interface RouteInterface {
	path: string;
	component: any;
	exact?: boolean;
}

interface UserTypeRestrict {
	userTypes: UserType[];
	fallbackUrl: string;
}
