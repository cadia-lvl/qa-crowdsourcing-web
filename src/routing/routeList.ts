import { RouteInterface } from "./interface";
import * as Pages from "../pages";

export const ROUTE_LIST: RouteInterface[] = [
	{
		component: Pages.Games,
		path: "/spila",
	},
	{
		component: Pages.Prizes,
		path: "/vinningar",
	},
	{
		component: Pages.Invite,
		path: "/vinir",
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
		component: Pages.Cookies,
		path: "/vafrakokur",
		exact: true,
	},
	{
		component: Pages.Front,
		path: "(/|/heim)",
		exact: true,
	},
];
