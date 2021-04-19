import React from "react";
import { ICON_LVL_1 } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import { Outer } from "./styles";

export const TutorialGuide = () => {
	return (
		<Outer>
			<UserAvatar src={ICON_LVL_1} />
		</Outer>
	);
};
