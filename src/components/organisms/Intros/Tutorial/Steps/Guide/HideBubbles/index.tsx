import React, { useEffect } from "react";
import { Explain, TutorialGuide } from "../../../../../../";
import { SoubRoutineProps } from "../../../interface";
import { Outer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const HideBubbles = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	useEffect(() => {
		onHideButton();
	}, []);
	return (
		<Outer>
			<Explain items={TUTORIAL.explainHide}>
				<div />
			</Explain>
			<TutorialGuide onHideMessages={onShowButton} />
		</Outer>
	);
};
