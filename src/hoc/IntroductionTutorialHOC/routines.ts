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
				key: "",
				Component: Steps.Guide.Intro,
			},
			{
				label: "",
				description: [],
				key: "",
				Component: Steps.Guide.CloseBubble,
			},
			{
				label: "",
				description: [],
				key: "",
				Component: Steps.Guide.HighLights,
			},
			{
				label: "",
				description: [],
				key: "",
				Component: Steps.Guide.OpenArchived,
			},
		],
	},
	{ label: "Spurningar", key: "answers", steps: [] },
	{ label: "Svör", key: "answers", steps: [] },
	{ label: "Leita", key: "answers", steps: [] },
	{ label: "Vinningar í boði", key: "answers", steps: [] },
];

export default routines;
