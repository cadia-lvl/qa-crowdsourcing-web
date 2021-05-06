import { TutorialExplanations } from "../../../../../components";

export const explainCloseClosure = (
	cb: () => void
): TutorialExplanations[] => [
	{
		type: "str",
		payload: "Prufa að loka þessu skilaboði!",
		id: new Date().toISOString(),
		highlight: false,
		dialog: [
			{
				text: "Ókei",
				onClick: cb,
			},
		],
	},
];
