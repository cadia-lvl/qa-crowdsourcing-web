import { RouteInterface } from "./interface";
import * as Pages from "../pages";

export const ROUTE_LIST: RouteInterface[] = [
	{
		component: Pages.FrontPage,
		exact: true,
		path: "/",
	},
	{
		component: Pages.NotFound,
		path: "*",
	},
];
