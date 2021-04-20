import React, { useEffect } from "react";
import { IProps } from "./interface";
import { Outer, ChildWrapper } from "./styles";
import * as TutorialUtils from "../utils";
import { StoreState } from "../../../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { queueTutorialItems } from "../../../../actions";

export const Explain = ({ children, items }: IProps) => {
	const state = useSelector((state: StoreState) => state.tutorial);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			queueTutorialItems(
				items.filter((item) => !TutorialUtils.hasFinished(item))
			)
		);
	}, []);

	const shouldHighlight = TutorialUtils.toIDArray(items).includes(
		state.queue[0]?.id
	);

	return (
		<Outer>
			{shouldHighlight ? <ChildWrapper></ChildWrapper> : null}

			{children}
		</Outer>
	);
};
