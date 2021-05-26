import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import {
	archiveAnswer,
	verifyAnswerSpan,
	verifyYesNoQuestion,
} from "../../../../../actions";
import { Disconnected } from "../../";
import { ModalWithTitle } from "../../../../";

// export type SelectionStates =
// 	| "select-first"
// 	| "select-last"
// 	| "clear-selection";

export const SpanReview = () => {
	const state = useSelector((state: StoreState) => state);
	const [showArchiveModal, setShowArchiveModal] = useState(false);

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
		setShowArchiveModal(true);
	};

	return (
		<React.Fragment>
			<ModalWithTitle
				title="Ertu viss?"
				buttons={[
					{
						type: "highlight",
						label: "Nei",
						onClick: () => setShowArchiveModal(false),
					},
					{
						type: "highlight",
						label: "Já",
						onClick: () =>
							dispatch(archiveAnswer(gameRoundId, answerId)),
					},
				]}
				open={showArchiveModal}
				onClose={() => setShowArchiveModal(false)}
			>
				Við munum eyða þessu svari.
			</ModalWithTitle>
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
		</React.Fragment>
	);
};
