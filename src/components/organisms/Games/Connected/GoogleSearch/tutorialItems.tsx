import { TutorialExplanations } from "../../..";
import React from "react";
import { ContinueSpanPara } from "./styles";
import { TutorialItemClickEvent } from "../../../Tutorial";

export const explainGoogle: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Þessi Google leitarvél birtir niðurstöðurnar á þessari síðu. Hún leitar aðeins á íslensku Wikipediu, Vísindavefnum, mbl.is og vísir.is.",
		id: "GAME:SEARCH:EXPLAINGOOGLE",
		highlight: false,
		dialog: [
			{
				text: "Ég skil",
			},
		],
	},
];

export const explainResults: TutorialExplanations[] = [
	{
		type: "str",
		payload:
			"Þessar niðurstöður fengust frá Google. Þú getur opnað þær síður sem þér þykja líklegar til að innihalda svarið.",
		id: "GAME:SEARCH:EXPLAINRESULTS",
		highlight: false,
		dialog: [
			{
				text: "Ég skil",
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
					Ef þú finnur ekki svarið innan 2-3 mínútna, þá er í lagi að halda áfram.
				</ContinueSpanPara>
				<ContinueSpanPara>
					Þá merkjum við spurninguna sem <i>erfiða</i> og þú færð annað verkefni í
					staðinn.
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
