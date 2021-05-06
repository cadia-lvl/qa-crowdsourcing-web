import React from "react";
import { Explain, TutorialGuide } from "../../../../../components";
import { Outer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const CloseBubble = (props: SoubRoutineProps) => {
	return (
		<Outer>
			<Explain items={TUTORIAL.explainClose}> </Explain>
			<TutorialGuide />
		</Outer>
	);
};
