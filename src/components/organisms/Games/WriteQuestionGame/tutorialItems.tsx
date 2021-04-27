import React from "react";
import { TutorialExplanations } from "../../Tutorial";
import { TutorialPara } from "./styles";

export const ideaWordsTutorialClosure = (
	words: string[]
): TutorialExplanations[] => [
	{
		type: "jsx",
		payload: () => (
			<React.Fragment>
				<h1 className="italic no-margin">HUGMYNDIR</h1>
				<TutorialPara>
					Mögulega nýtast þessi orð sem innblástur:{" "}
				</TutorialPara>
				<div>{words.join(", ")}</div>
			</React.Fragment>
		),
		id: "GAME:WRITEQUESTION:IDEAWORDS",
		highlight: false,
		dialog: [],
	},
];
