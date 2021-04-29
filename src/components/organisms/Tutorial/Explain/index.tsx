import React, { useEffect } from "react";
import { IProps } from "./interface";
import { Outer, ChildWrapper } from "./styles";
import * as TutorialUtils from "../utils";
import { StoreState } from "../../../../reducers";
import { useDispatch, useSelector } from "react-redux";
import {
	addPersistantTutorialItems,
	queueTutorialItems,
	removeTutorialItemIDs,
	setTutorialItemsToFronts,
	replaceQueue,
} from "../../../../actions";

export const Explain = ({
	children,
	items,
	persist,
	priority,
}: IProps) => {
	const state = useSelector((state: StoreState) => state.tutorial);
	const user = useSelector((state: StoreState) => state.auth);

	const dispatch = useDispatch();

	const action = (() => {
		switch (priority) {
			case "add-to-front":
				return setTutorialItemsToFronts;
			case "clear-others":
				return replaceQueue;
			default:
				return queueTutorialItems;
		}
	})();

	useEffect(() => {
		dispatch(
			action(
				items.filter((item) => !TutorialUtils.hasFinished(item))
			)
		);
		dispatch(
			addPersistantTutorialItems(
				(persist ?? []).filter(
					(item) => !TutorialUtils.hasFinished(item)
				)
			)
		);
		// cleanup
		return () => {
			dispatch(
				removeTutorialItemIDs(TutorialUtils.toIDArray(items))
			);
			dispatch(
				removeTutorialItemIDs(
					TutorialUtils.toIDArray(persist ?? [])
				)
			);
		};
	}, []);

	const shouldHighlight =
		TutorialUtils.toIDArray(items).includes(state.queue[0]?.id) &&
		state.queue[0]?.highlight;

	if (["guest", "loading"].includes(user.type))
		return <React.Fragment>{children}</React.Fragment>;
	return (
		<Outer>
			{shouldHighlight ? <ChildWrapper></ChildWrapper> : null}

			{children}
		</Outer>
	);
};
