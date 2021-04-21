import React from "react";
import { ICON_AGENT } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import { Outer, Inner, BubbleContainer } from "./styles";
import TutorialBubble from "../TutorialBubble";
import { StoreState } from "../../../../reducers";
import { useSelector } from "react-redux";

export const TutorialGuide = () => {
	const state = useSelector((state: StoreState) => state.tutorial);

	const firstItem = state.queue[0];

	return (
		<Outer>
			<Inner>
				<BubbleContainer>
					<TutorialBubble explain={firstItem} />
					{state.persistant.map((item) => (
						<TutorialBubble explain={item} />
					))}
				</BubbleContainer>
				<UserAvatar src={ICON_AGENT} />
			</Inner>
		</Outer>
	);
};
