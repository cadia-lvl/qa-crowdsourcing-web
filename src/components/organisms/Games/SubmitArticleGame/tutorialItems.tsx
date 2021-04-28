import { TutorialExplanations } from "../../..";
import React from "react";
import { ContinueSpanPara, ContinueClick } from "./styles";
import { TutorialItemClickEvent } from "../../Tutorial";

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
	handleGoToNext: () => any,
	handleClose: (e: TutorialItemClickEvent) => any
): TutorialExplanations[] => [
	{
		type: "jsx",
		payload: () => (
			<React.Fragment>
				<ContinueSpanPara>
					Ef þú finnur ekki svarið innan 2-3 mínútna, þá er í
					lagi að halda áfram
				</ContinueSpanPara>
				<ContinueSpanPara>
					þá merkjum við spurninguna sem erfiða og þú færð annað
					verkefni
				</ContinueSpanPara>
				{/* <ContinueClick onClick={dispatchCB}>
					Halda áfram <i className="fas fa-arrow-right" />{" "}
				</ContinueClick> */}
			</React.Fragment>
		),
		id: "GAME:SEARCH:EXPLAINNOTANSWERABLE",
		highlight: false,
		dialog: [
			{
				text: "Næsta verkefni",
				onClick: (event) => {
					event.preventDefault();
					handleGoToNext();
				},
			},
			{
				text: "Loka",
				onClick: (event) => {
					event.preventDefault();
					handleClose(event);
				},
			},
		],
	},
];
