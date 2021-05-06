import React from "react";
import { TutorialExplanations } from "../../..";
import { GameTypes } from "../../../../../declerations";
import { GameBullets } from "../GameBullets";

export const explainGameStepClosure = (
	step?: GameTypes
): TutorialExplanations[] => [
	{
		type: "jsx",
		payload: () => <GameBullets />,
		id: `GAME:STEP:${step ?? -1}:EXPLAIN:BULLETS`,
		highlight: false,
		dialog: [
			{
				text: "Loka",
			},
		],
	},
];
