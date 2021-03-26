import React from "react";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";

export const RoundCompletedGame = () => {
	return (
		<GameWrapper type={GameTypes.completed}>
			<div />
		</GameWrapper>
	);
};
