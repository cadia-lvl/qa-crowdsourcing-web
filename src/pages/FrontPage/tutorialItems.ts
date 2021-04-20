import { TutorialExplanations } from "../../components/organisms/Tutorial/interface";

const items: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Hér getur þú séð þinn árangur og hvaða Lvl þú ert komin/n á!",
		id: "FRONTPAGE:DASHBOARD:INTRO:PROGRESS",
		highlight: false,
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

export default items;
