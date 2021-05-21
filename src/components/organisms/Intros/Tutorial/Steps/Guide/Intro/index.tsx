import React from "react";
import { TutorialGuide } from "../../../../../../";
import { SoubRoutineProps } from "../../../interface";
import { Outer } from "./styles";

export const Intro = (props: SoubRoutineProps) => {
	return (
		<Outer>
			<TutorialGuide />
		</Outer>
	);
};
