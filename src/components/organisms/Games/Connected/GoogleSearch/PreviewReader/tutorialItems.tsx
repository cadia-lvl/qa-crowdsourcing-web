import { TutorialExplanations } from "../../../..";
import React from "react";
import { ExplainAnswerIsHereImg, ExpalinConfirmAnswer } from "./styles";

export const explainFindParagraph: TutorialExplanations[] = [
	{
		type: "jsx",
		payload: () => (
			<React.Fragment>
				<ExplainAnswerIsHereImg />
				<span>
					Til þess að staðsetja svarið þá rennirðu músinni yfir
					efnisgreinina og smelli á hana
				</span>
			</React.Fragment>
		),
		id: "GAME:SEARCH:EXPLIANFINDPARAGRAPH",
		highlight: false,
		dialog: [
			{
				text: "Fela",
			},
		],
	},
];

export const explainConfirmParagraph: TutorialExplanations[] = [
	{
		type: "jsx",
		payload: () => (
			<React.Fragment>
				<ExpalinConfirmAnswer />
				<span>
					Ef þú sérð svarið við spurningunni í efnisgreininni sem
					þú hefur valið þá ýtir þú á staðfesta til þess að halda
					áfram.
				</span>
			</React.Fragment>
		),
		id: "GAME:SEARCH:EXPLIANFINDPARAGRAPH",
		highlight: false,
		dialog: [
			{
				text: "Fela",
			},
		],
	},
];
