import React from "react";
import { TutorialBox, TutorialParagraph } from "./styles";
import { TutorialExplanations } from "../../Tutorial";

export const tooLongExample: TutorialExplanations[] = [
	{
		type: "jsx",
		payload: () => (
			<TutorialBox>
				<h1 className="italic">DÆMI</h1>
				<TutorialParagraph>
					Það er mikilvægt að svarið sé rétt merkt, stutt og
					hnitmiðað
				</TutorialParagraph>
				<TutorialParagraph>
					Hver á heimsmetið í 100m hlaupi?
				</TutorialParagraph>
				<TutorialParagraph>
					„Usain Bolt er heimsmeistari í 100m hlaupi.“ er{" "}
					<span className="danger bold">of langt</span>
				</TutorialParagraph>
				<TutorialParagraph>
					„Usain Bolt“ er{" "}
					<span className="success bold">hnitmiðað</span>
				</TutorialParagraph>
			</TutorialBox>
		),
		id: "GAME:VERIFYANSWRELOC:TOOLONGEXAMPLE",
		highlight: false,
		dialog: [
			{
				text: "Fela",
			},
		],
	},
];
