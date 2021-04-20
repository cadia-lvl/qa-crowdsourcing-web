import React from "react";
import { ICON_LVL_1 } from "../../../../static";
import { UserAvatar } from "../../../atoms";
import { Outer, Inner, DialogContainer } from "./styles";
import TutorialBubble from "../TutorialBubble";
import { StoreState } from "../../../../reducers";
import { useSelector, useDispatch } from "react-redux";
import { TutorialDialogItem } from "../interface";
import {
	removeTutorialItemIDs,
	replaceFirstInQueue,
} from "../../../../actions";
import * as TutorialUtils from "../utils";

export const TutorialGuide = () => {
	const state = useSelector((state: StoreState) => state.tutorial);
	const dispatch = useDispatch();

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

	const handleDialogClick = (action: TutorialDialogItem) => {
		if (action.item === undefined)
			dispatch(removeTutorialItemIDs([firstItem?.id]));
		else dispatch(replaceFirstInQueue(action.item));
		if (!!firstItem) TutorialUtils.markAsFinished(firstItem);
	};

	return (
		<Outer>
			<Inner>
				{isExplaining ? (
					<TutorialBubble>
						{bubbleChild}
						<DialogContainer>
							{firstItem.dialog.map((item) => (
								<span
									onClick={() => handleDialogClick(item)}
								>
									<i className="fas fa-chevron-right" />{" "}
									{item.text}
								</span>
							))}
						</DialogContainer>
					</TutorialBubble>
				) : null}

				<UserAvatar src={ICON_LVL_1} />
			</Inner>
		</Outer>
	);
};
