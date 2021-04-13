import React, { useState, useEffect } from "react";
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
import { SpanSelector, TaskInfoBox } from "../GameUtils";
import { ButtonContainer } from "./styles";

export const VerifyAnswerLocationGame = () => {
	const state = useSelector((state: StoreState) => state);
	const [isSelectingSpan, setIsSelectingSpan] = useState(false);

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
			<TaskInfoBox title="Finna svar í grein sem notandi hefur sent inn">
				<SpanSelector
					{...state.verifyAnswerLocation}
					question={text}
					onClearRange={(word) =>
						dispatch(clearIndexRangeInParagraph())
					}
					onFirstWordChange={(index) =>
						dispatch(selectFirstWordIndexInParagraph(index))
					}
					onLastWordChange={(index) =>
						dispatch(selectSecondWordIndexInParagraph(index))
					}
					immutable={!isSelectingSpan}
				/>
				<ButtonContainer>
					{isSelectingSpan ? (
						<React.Fragment>
							<BaseButton
								label="Til baka"
								type="danger"
								onClick={() => {
									setIsSelectingSpan(false);
									dispatch(clearIndexRangeInParagraph());
								}}
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
						</React.Fragment>
					) : (
						<React.Fragment>
							<BaseButton
								label="Svarið er ekki í þessari efnisgrein"
								type="danger"
								onClick={() =>
									dispatch(
										archiveAnswer(
											gameRoundId,
											answerId
										)
									)
								}
							/>
							<BaseButton
								label="Svarið er í þessari efnisgrein"
								onClick={() => setIsSelectingSpan(true)}
								type="highlight"
							/>
						</React.Fragment>
					)}
				</ButtonContainer>
			</TaskInfoBox>
		</GameWrapper>
	);
};
