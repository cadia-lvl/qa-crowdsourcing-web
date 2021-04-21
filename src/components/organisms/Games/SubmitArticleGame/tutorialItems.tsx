import { TutorialExplanations } from "../../..";
import React from "react";
import { ContinueSpanText, ContinueClick } from "./styles";

export const explainGoogle: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Þessi Google leitarvél birtir niðurstöðurnar inn á þessari síðu.",
		id: "GAME:SEARCH:EXPLAINGOOGLE",
		highlight: false,
		dialog: [
			{
				text: "Allt í góðu",
			},
		],
	},
];

export const explainResults: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Þessar niðurstöður fengum við frá Google. Þú getur opnað síður sem þér þykir líklegar til að innihalda svarið.",
		id: "GAME:SEARCH:EXPLAINRESULTS",
		highlight: false,
		dialog: [
			{
				text: "Allt í góðu",
			},
		],
	},
];

export const markasNotAnswerableClosure = (
	dispatchCB: () => any
): TutorialExplanations[] => [
	{
		type: "jsx",
		payload: () => (
			<React.Fragment>
				<ContinueSpanText>
					Ef þú finnur ekki svarið innan 2-3 mínútna, þá er í
					lagi að halda áfram
				</ContinueSpanText>
				<ContinueClick onClick={dispatchCB}>
					Halda áfram <i className="fas fa-arrow-right" />{" "}
				</ContinueClick>
			</React.Fragment>
		),
		id: "GAME:SEARCH:EXPLAINNOTANSWERABLE",
		highlight: false,
		dialog: [],
	},
];
