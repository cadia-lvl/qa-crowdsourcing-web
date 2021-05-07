import { RouteInterface } from "./interface";
import * as Pages from "../pages";

export const ROUTE_LIST: RouteInterface[] = [
	{
		component: Pages.SignIn,
		path: "/innskra",
	},
	{
		component: Pages.SignUp,
		path: "/nyr-notandi",
	},
	{
		component: Pages.Games,
		path: "/spila",
	},
	{
		component: Pages.Terms,
		path: "/skilmalar",
		exact: true,
	},
	{
		component: Pages.AboutUs,
		path: "/um-okkur",
		exact: true,
	},
	{
		component: Pages.Front,
		path: "(/|/heim)?",
	},
];
