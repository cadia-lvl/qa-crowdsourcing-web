import { IRoutine } from "./interface";
import * as Steps from "./Steps";

const routines: IRoutine[] = [
	{
		label: "Leiðarvísir",
		key: "guide",
		steps: [
			{
				label: "",
				description: [],
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
