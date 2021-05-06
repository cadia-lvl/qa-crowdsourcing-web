import React from "react";
import { Explain, TutorialGuide } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";
import { Outer, ExplainThese, Example } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const HighLights = (props: SoubRoutineProps) => {
	return (
		<Outer>
			<ExplainThese>
				<Example>
					<Explain items={TUTORIAL.explain1}>
						<span>Dæmi 1</span>
					</Explain>
				</Example>
				<Example>
					<Explain items={TUTORIAL.explain2}>
						<span>Dæmi 2</span>
					</Explain>
				</Example>{" "}
				<Example>
					<Explain items={TUTORIAL.explain3}>
						<span>Dæmi 3</span>
					</Explain>
				</Example>{" "}
			</ExplainThese>
			<TutorialGuide />
		</Outer>
	);
};
