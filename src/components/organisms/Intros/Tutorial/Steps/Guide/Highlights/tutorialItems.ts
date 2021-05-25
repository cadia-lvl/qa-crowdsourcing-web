import { TutorialExplanations } from "../../../../../../../components";

/**
 * ID is given as name just to make sure taht
 * it can be shown again if user quits mid way throug
 */
export const explain1: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Stundum blikkar rauður rammi á skjánum. Þá er ég að reyna að sýna þér eitthvað nýtt.",
		id: new Date().toISOString() + "1",
		highlight: true,
		dialog: [
			{
				text: "Ég skil",
			},
		],
	},
];

export const explain2: TutorialExplanations[] = [
	{
		type: "str",
		payload: "Nú er ég að reyna að sýna þér dæmi númer 2.",
		id: new Date().toISOString() + "2",
		highlight: true,
		dialog: [
			{
				text: "Ég skil",
			},
		],
	},
];

export const explain3Closure = (cb: () => void): TutorialExplanations[] => [
	{
		type: "str",
		payload: "Svona heldur þetta áfram. Nú er ég að sýna þér dæmi 3.",
		id: new Date().toISOString() + "3",
		highlight: true,
		dialog: [
			{
				text: "Ég skil",
				onClick: cb,
			},
		],
	},
];
