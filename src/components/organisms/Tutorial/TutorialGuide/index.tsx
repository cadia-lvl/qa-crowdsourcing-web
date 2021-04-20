import React from "react";
import { ICON_LVL_1 } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import { Outer, Inner } from "./styles";
import TutorialBubble from "../TutorialBubble";
import { StoreState } from "../../../../reducers";
import { useSelector } from "react-redux";

export const TutorialGuide = () => {
	const state = useSelector((state: StoreState) => state.tutorial);

	const firstItem = state.queue[0];
	let bubbleChild;

	switch (firstItem?.type) {
		case "jsx":
			bubbleChild = <firstItem.payload />;
			break;
		case "str":
			bubbleChild = firstItem.payload;
			break;
		default:
			bubbleChild = null;
	}

	const isExplaining = !!bubbleChild;

	return (
		<Outer>
			<Inner>
				{isExplaining ? (
					<TutorialBubble>{bubbleChild}</TutorialBubble>
				) : null}

				<UserAvatar src={ICON_LVL_1} />
			</Inner>
		</Outer>
	);
};
