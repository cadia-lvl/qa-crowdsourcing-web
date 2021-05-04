import React from "react";
import { Explain, TutorialGuide } from "../../../../../components";
import { Outer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const HideBubbles = () => {
	return (
		<Outer>
			<Explain items={TUTORIAL.explainHide}>
				{" "}
				<div />
			</Explain>
			<TutorialGuide />
		</Outer>
	);
};
