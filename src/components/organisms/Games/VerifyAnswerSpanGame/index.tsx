import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import {
	archiveAnswer,
	verifyAnswerSpan,
	verifyYesNoQuestion,
} from "../../../../actions";
import { Disconnected } from "../";

// export type SelectionStates =
// 	| "select-first"
// 	| "select-last"
// 	| "clear-selection";

export const VerifyAnswerSpanGame = () => {
	const state = useSelector((state: StoreState) => state);

	const dispatch = useDispatch();

	const {
		verifyAnswerLocation: {
			_id: answerId,
			text: question,
			paragraph: text,
			isYesOrNo,
			firstWord,
			lastWord,
		},
		game: { _id: gameRoundId },
	} = state;

	const handleVerifyDispatch = (canBeShortened: boolean) => {
		dispatch(verifyAnswerSpan(gameRoundId, answerId, canBeShortened));
	};

	const handleVerifyYesOrNo = (answer: boolean) => {
		dispatch(verifyYesNoQuestion(gameRoundId, answerId, answer));
	};

	const handleArchive = () => {
		dispatch(archiveAnswer(gameRoundId, answerId));
	};

	return (
		<Disconnected.SpanReview
			question={question}
			text={text}
			onArchive={handleArchive}
			onVerification={handleVerifyDispatch}
			onYesNoVerification={handleVerifyYesOrNo}
			isYesOrNo={isYesOrNo}
			firstWord={firstWord}
			lastWord={lastWord}
		/>
	);
};
