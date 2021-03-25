import React from "react";
import { useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";

export const VerifyAnswerSpanGame = () => {
	const state = useSelector((state: StoreState) => state);

	const {
		verifyAnswerLocation: { _id: answerId, text, firstWord, lastWord },
		game: { _id: gameRoundId },
	} = state;

	return (
		<GameWrapper type={GameTypes.verifyAnswerSpan}>
			<SpanSelector
				{...state.verifyAnswerLocation}
				question={text}
				onClearRange={(_word) => null}
				onFirstWordChange={(_word) => null}
				onLastWordChange={(_word) => null}
			/>
		</GameWrapper>
	);
};
