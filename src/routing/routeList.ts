import { RouteInterface } from "./interface";
import * as Pages from "../pages";

export const ROUTE_LIST: RouteInterface[] = [
	{
		component: Pages.FrontPage,
		exact: true,
		path: "/",
	},
	{
		component: Pages.SignInPage,
		exact: true,
		path: "/innskra",
	},
	{
		component: Pages.SignUpPage,
		exact: true,
		path: "/nyr-notandi",
	},
	{
		component: Pages.GamePage,
		restrictFrom: {
			userTypes: ["guest"],
			fallbackUrl: "/innskra",
		},
		path: "/spila",
	},
	{
		component: Pages.NotFound,
		path: "*",
	},
];
