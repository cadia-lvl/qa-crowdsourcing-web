import { HeaderItem } from "./interface";

export const headerItems: HeaderItem[] = [
	{
		text: "Heim",
		path: "/",
	},
	{
		text: "Um okkur",
		path: "/um-okkur",
	},
	{
		text: "Skilmálar",
		path: "/skilmalar",
	},
];

export const authItems: HeaderItem[] = [
	{
		text: "Spila",
		path: "/spila",
		faClass: "fas fa-puzzle-piece",
	},
	{
		text: "Mælaborð",
		path: "/heim",
		faClass: "fas fa-tachometer-alt",
	},
	{
		text: "Vinningar",
		path: "/vinningar",
		faClass: "fas fa-trophy",
	},
];
