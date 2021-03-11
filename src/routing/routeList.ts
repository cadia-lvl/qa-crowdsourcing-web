import { RouteInterface } from "./interface";
import * as Pages from "../pages";

export const ROUTE_LIST: RouteInterface[] = [
	{
		component: Pages.FrontPage,
		exact: true,
		path: "/",
	},
	{
		component: Pages.GamePage,
		restrictFrom: ["guest"],
		path: "/spila",
		exact: true,
	},
	{
		component: Pages.NotFound,
		path: "*",
	},
];
