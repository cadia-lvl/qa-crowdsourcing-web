import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseButton } from "../../..";
import {
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
	submitSpan,
	archiveAnswer,
} from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SpanSelector } from "../GameUtils";
import { ButtonContainer } from "./styles";

export const VerifyAnswerLocationGame = () => {
	const state = useSelector((state: StoreState) => state);

	const dispatch = useDispatch();

	const {
		verifyAnswerLocation: { _id: answerId, text, firstWord, lastWord },
		game: { _id: gameRoundId },
	} = state;

	const canUserProceed = !(
		firstWord === undefined || lastWord === undefined
	);

	return (
		<GameWrapper type={GameTypes.verifyAnswerLocation}>
			<SpanSelector
				{...state.verifyAnswerLocation}
				question={text}
				onClearRange={(word) =>
					dispatch(clearIndexRangeInParagraph(word))
				}
				onFirstWordChange={(index) =>
					dispatch(selectFirstWordIndexInParagraph(index))
				}
				onLastWordChange={(index) =>
					dispatch(selectSecondWordIndexInParagraph(index))
				}
			/>
			<ButtonContainer>
				<BaseButton
					label="Svarið er ekki í þessari efnisgrein"
					type="danger"
					onClick={() =>
						dispatch(archiveAnswer(gameRoundId, answerId))
					}
				/>
				<BaseButton
					label="Staðfesta svar"
					onClick={() =>
						dispatch(
							submitSpan(
								gameRoundId,
								answerId,
								firstWord ?? -1,
								lastWord ?? -1
							)
						)
					}
					type="highlight"
					isInactive={!canUserProceed}
				/>
			</ButtonContainer>
		</GameWrapper>
	);
};
