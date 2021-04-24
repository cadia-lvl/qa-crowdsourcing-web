import React, { useState } from "react";
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

	return (
		<GameWrapper type={GameTypes.verifyAnswerLocation}>
			<TaskInfoBox title="Merkja svar í efnisgrein">
				<p>
					Spurningin er{" "}
					<span className="query">
						„{text.charAt(0).toLocaleLowerCase()}
						{text.substring(1)}“
					</span>
					.
				</p>
				<SpanSelector
					{...state.verifyAnswerLocation}
					question={text}
					onClearRange={() =>
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
				{!isSelectingSpan ? (
					<ButtonContainer>
						<BaseButton
							label="Ég sé ekki svarið"
							type="danger"
							onClick={() =>
								dispatch(
									archiveAnswer(gameRoundId, answerId)
								)
							}
						/>
						<BaseButton
							label="Ég sé svarið"
							onClick={() => setIsSelectingSpan(true)}
							type="highlight"
						/>
					</ButtonContainer>
				) : (
					<ButtonContainer>
						<BaseButton
							label="til baka"
							type="danger"
							onClick={() => {
								setIsSelectingSpan(false);
								dispatch(clearIndexRangeInParagraph());
							}}
						/>
						<BaseButton
							label="Áfram"
							onClick={() =>
								dispatch(
									submitSpan(
										gameRoundId,
										answerId,
										firstWord!,
										lastWord!
									)
								)
							}
							isInactive={
								firstWord === undefined ||
								lastWord === undefined
							}
							type="highlight"
						/>{" "}
					</ButtonContainer>
				)}
			</TaskInfoBox>
		</GameWrapper>
	);
};
