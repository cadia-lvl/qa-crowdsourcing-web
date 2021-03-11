import { UserType } from "../declerations";

export interface RouteInterface {
	path: string;
	component: any;
	exact?: boolean;
	allowOnly?: UserType[];
	restrictFrom?: UserType[];
}
