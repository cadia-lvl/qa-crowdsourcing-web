import React, { useEffect, useMemo } from "react";
import { Explain, TutorialGuide } from "../../../../../../";
import { SoubRoutineProps } from "../../../interface";
import { Outer, ExplainThese, Example } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const HighLights = ({
	onShowButton,
	onHideButton,
}: SoubRoutineProps) => {
	useEffect(() => {
		onHideButton();
	}, []);

	const items = useMemo(
		() => TUTORIAL.explain3Closure(onShowButton),
		[]
	);
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
					<Explain items={items}>
						<span>Dæmi 3</span>
					</Explain>
				</Example>{" "}
			</ExplainThese>
			<TutorialGuide />
		</Outer>
	);
};
