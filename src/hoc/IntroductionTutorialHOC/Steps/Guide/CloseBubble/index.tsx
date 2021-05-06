import React, { useEffect } from "react";
import { Explain, TutorialGuide } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";
import { Outer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const CloseBubble = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	useEffect(() => {
		onHideButton();
	}, []);

	const items = TUTORIAL.explainCloseClosure(onShowButton);
	return (
		<Outer>
			<Explain items={[]} persist={items}>
				{" "}
			</Explain>
			<TutorialGuide />
		</Outer>
	);
};
