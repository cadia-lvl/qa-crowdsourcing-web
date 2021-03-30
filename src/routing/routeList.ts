import { RouteInterface } from "./interface";
import * as Pages from "../pages";

export const ROUTE_LIST: RouteInterface[] = [
	{
		component: Pages.SignInPage,
		path: "/innskra",
	},
	{
		component: Pages.SignUpPage,
		path: "/nyr-notandi",
	},
	{
		component: Pages.GamePage,
		path: "/spila",
	},
	{
		component: Pages.TermsPage,
		path: "/skilmalar",
		exact: true,
	},
	{
		component: Pages.AboutUsPage,
		path: "/um-okkur",
		exact: true,
	},
	{
		component: Pages.FrontPage,
		path: "(/|/heim)?",
	},
];
