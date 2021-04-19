import React from "react";
import { ICON_LVL_1 } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import { Outer, Inner } from "./styles";
import TutorialBubble from "../TutorialBubble";

export const TutorialGuide = () => {
	return (
		<Outer>
			<Inner>
				<TutorialBubble>
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo consequat.
				</TutorialBubble>
				<UserAvatar src={ICON_LVL_1} />
			</Inner>
		</Outer>
	);
};
