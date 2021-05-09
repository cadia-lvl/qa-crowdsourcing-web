import { TutorialExplanations } from "../../Tutorial/interface";

export const userProgress: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Hér getur þú séð þinn árangur og hvaða Lvl þú ert komin/n á!",
		id: "FRONTPAGE:DASHBOARD:INTRO:PROGRESS",
		highlight: true,
		dialog: [
			{
				text: "Allt í góðu",
				item: {
					type: "str",
					payload:
						"Því fleiri verkefni sem þú klárar, því fleiri stigum safnarðu!",
					id: "FRONTPAGE:DASHBOARD:INTRO:PROGRESS:2",
					highlight: false,
					dialog: [
						{
							text: "Ég skil",
						},
					],
				},
			},
		],
	},
];

export const userTask: TutorialExplanations[] = [
	{
		type: "str",
		payload: "Hér getur þú smellt til þess að spila leikinn",
		id: "FRONTPAGE:DASHBOARD:INTRO:NEXTTASKBOX",
		dialog: [
			{
				text: "Allt í góðu",
				item: undefined,
			},
		],
		highlight: true,
	},
];

export const scorecard: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"... og hér munt þú sjá tölur um hversu mikið þú hefur lagt til þess að bjarga íslensku",
		id: "FRONTPAGE:DASHBOARD:INTRO:SCORECARD",
		dialog: [
			{
				text: "Allt í góðu",
				item: undefined,
			},
		],
		highlight: true,
	},
];

export const communityProgress: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Þetta línurit sýnir þér hversu nálægt samfélagið er 100.000 spurninga markmiðinu",
		id: "FRONTPAGE:DASHBOARD:INTRO:COMMUNITYPROGRESS",
		dialog: [
			{
				text: "Ég skil",
				item: undefined,
			},
		],
		highlight: true,
	},
];
