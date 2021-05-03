import { IRoutine } from "./interface";
import * as Steps from "./Steps";

const routines: IRoutine[] = [
	{
		label: "Leiðarvísir",
		key: "guide",
		steps: [
			{
				label: "Fylgstu með þessum",
				description: [
					"Þetta er leiðarvísirinn. Á meðan þú spilar leikinn þá heldur hann sig neðst á skjánnum",
					"Hann verður þar til þess að hjálpa þér. Það er mjög mikilvægt að lesa ráðin hans þegar hann hefur einhvað að segja.",
				],
				key: "intro",
				Component: Steps.Guide.Intro,
			},
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
			{
				label: "",
				description: [],
				key: "highlights",
				Component: Steps.Guide.HighLights,
			},
			{
				label: "",
				description: [],
				key: "archive",
				Component: Steps.Guide.OpenArchived,
			},
		],
	},
	{
		label: "Spurningar",
		key: "questions",
		steps: [
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
		],
	},
	{
		label: "Svör",
		key: "answers",
		steps: [
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
		],
	},
	{
		label: "Leita",
		key: "search",
		steps: [
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
		],
	},
	{
		label: "Vinningar í boði",
		key: "prizes",
		steps: [
			{
				label: "",
				description: [],
				key: "close",
				Component: Steps.Guide.CloseBubble,
			},
		],
	},
];

export default routines;
