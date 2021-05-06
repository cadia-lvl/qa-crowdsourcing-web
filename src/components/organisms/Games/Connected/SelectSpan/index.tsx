import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
	submitSpan,
	archiveAnswer,
} from "../../../../../actions";
import { StoreState } from "../../../../../reducers";
import { Disconnected } from "../../";

export const SelectSpan = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	const {
		verifyAnswerLocation: {
			_id: answerId,
			text: question,
			firstWord,
			lastWord,
			paragraph,
		},
		game: { _id: gameRoundId },
	} = state;

	const handleArchive = () => {
		dispatch(archiveAnswer(gameRoundId, answerId));
	};

	const handleSubmit = (start?: number, end?: number) => {
		// forcing value with ! is ok because api will reject the
		// request if request is malformed
		submitSpan(gameRoundId, answerId, start!, end!);
	};

	return (
		<Disconnected.SelectSpan
			question={question}
			paragraph={paragraph}
			onFirstWordChange={(index) =>
				dispatch(selectFirstWordIndexInParagraph(index))
			}
			onLastWordChange={(index) =>
				dispatch(selectSecondWordIndexInParagraph(index))
			}
			onClearRange={() => dispatch(clearIndexRangeInParagraph())}
			onArchive={handleArchive}
			onSubmitSpan={handleSubmit}
			firstWord={firstWord}
			lastWord={lastWord}
		/>
	);
};
