import { TutorialExplanations } from "../../../../../../../components";

export const explainCloseClosure = (cb: () => void): TutorialExplanations[] => [
	{
		type: "str",
		payload: "Prufaðu að loka þessum skilaboðum!",
		id: new Date().toISOString(),
		highlight: false,
		dialog: [
			{
				text: "Ég skil",
				onClick: cb,
			},
		],
	},
];
