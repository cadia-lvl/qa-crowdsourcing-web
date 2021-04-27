import React from "react";
import { IProps } from "./interface";
import { Outer, ArrowDown, DialogContainer } from "./styles";
import { TutorialDialogItem } from "../interface";
import {
	removeTutorialItemIDs,
	replaceFirstInQueue,
} from "../../../../actions";
import * as TutorialUtils from "../utils";
import { useDispatch } from "react-redux";

const TutorialBubble = ({ explain }: IProps) => {
	const dispatch = useDispatch();

	let bubbleChild;

	if (!explain) return null;

	switch (explain?.type) {
		case "jsx":
			bubbleChild = <explain.payload />;
			break;
		case "str":
			bubbleChild = explain.payload;
			break;
		default:
			bubbleChild = null;
	}

	const handleDialogClick = (action: TutorialDialogItem) => {
		if (action.item === undefined)
			dispatch(removeTutorialItemIDs([explain.id]));
		else dispatch(replaceFirstInQueue(action.item));
		TutorialUtils.markAsFinished(explain);
	};

	return (
		<Outer>
			{bubbleChild}
			<DialogContainer>
				{explain.dialog.length > 0
					? explain.dialog.map((item) => (
							<span onClick={() => handleDialogClick(item)}>
								<i className="fas fa-chevron-right" />{" "}
								{item.text}
							</span>
					  ))
					: null}
			</DialogContainer>
			<ArrowDown />
		</Outer>
	);
};

export default TutorialBubble;
