import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { WhiteBoxWithTitle } from "../../../../atoms";
import { Explain } from "../../../Tutorial";
import { IProps } from "./interface";
import { explainGameStepClosure } from "./tutorialItems";

export const TaskInfoBox = ({ children, title }: IProps) => {
	const current = useSelector((state: StoreState) => state.game.current);
	const tutorialItems = explainGameStepClosure(current);
	return (
		<WhiteBoxWithTitle title={title}>
			<Explain items={tutorialItems}>{children}</Explain>
		</WhiteBoxWithTitle>
	);
};
