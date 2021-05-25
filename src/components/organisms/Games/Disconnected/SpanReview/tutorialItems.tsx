import React from "react";
import { TutorialExplanations } from "../../../Tutorial";
import { ExplainPurpleImg, TutorialParagraph, TutorialBox } from "./styles";

export const answerIsPurple: TutorialExplanations[] = [
	{
		type: "jsx",
		payload: () => (
			<TutorialBox>
				<h1 className="italic">DÆMI</h1>
				<ExplainPurpleImg />
				<span>
					Í þessu skrefi þá eru svörin merkt með fjólubláum stöfum. Textinn í kring er
					aðeins til þess að gefa svarinu samhengi.
				</span>
			</TutorialBox>
		),
		id: "GAME:VERIFYSPAN:ANSWERISPURPLE",
		highlight: false,
		dialog: [
			{
				text: "Fela",
			},
		],
	},
];

export const tooLongExample: TutorialExplanations[] = [
	{
		type: "jsx",
		payload: () => (
			<TutorialBox>
				<h1 className="italic">DÆMI</h1>
				<TutorialParagraph>Hver á heimsmetið í 100m hlaupi?</TutorialParagraph>
				<TutorialParagraph>
					„Usain Bolt er heimsmeistari í 100m hlaupi.“ er{" "}
					<span className="danger bold">of langt</span>
				</TutorialParagraph>
				<TutorialParagraph>
					„Usain Bolt“ er <span className="success bold">hnitmiðað</span>
				</TutorialParagraph>
			</TutorialBox>
		),
		id: "GAME:VERIFYSPAN:TOOLONGEXAMPLE",
		highlight: false,
		dialog: [
			{
				text: "Fela",
			},
		],
	},
];
