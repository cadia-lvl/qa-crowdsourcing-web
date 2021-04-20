import React, { useEffect } from "react";
import { IProps } from "./interface";
import { Outer, ChildWrapper } from "./styles";
import * as TutorialUtils from "../utils";
import { StoreState } from "../../../../reducers";
import { useDispatch, useSelector } from "react-redux";
import {
	queueTutorialItems,
	removeTutorialItemIDs,
} from "../../../../actions";

export const Explain = ({ children, items }: IProps) => {
	const state = useSelector((state: StoreState) => state.tutorial);
	const dispatch = useDispatch();

	// @ts-ignore || strange type error for return type of useEffect hook
	useEffect(() => {
		dispatch(
			queueTutorialItems(
				items.filter((item) => !TutorialUtils.hasFinished(item))
			)
		);
		return () =>
			dispatch(
				removeTutorialItemIDs(TutorialUtils.toIDArray(items))
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
