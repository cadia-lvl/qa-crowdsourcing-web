import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SpanSelector, TaskInfoBox } from "../GameUtils";
import {
	archiveAnswer,
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
	verifyAnswerSpan,
	verifyYesNoQuestion,
} from "../../../../actions";
import { TextPrompt, BaseButton } from "../../../";
import { ButtonContainer, TextPromptWrapper } from "./styles";

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";

export const VerifyAnswerSpanGame = () => {
	const state = useSelector((state: StoreState) => state);

	const dispatch = useDispatch();

	const {
		verifyAnswerLocation: {
			_id: answerId,
			text,
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

	return (
		<GameWrapper type={GameTypes.verifyAnswerSpan}>
			<TaskInfoBox title="Yfirferð á spurningu og svari frá öðrum notendum">
				<SpanSelector
					{...state.verifyAnswerLocation}
					firstWord={isYesOrNo ? -1 : firstWord}
					lastWord={isYesOrNo ? -1 : lastWord}
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
					immutable
				/>
			</TaskInfoBox>
			<TextPromptWrapper>
				{isYesOrNo ? (
					<TextPrompt>
						Þetta er <i>JÁ/NEI</i> spurning. Ef efnisgreinin
						svarar spurningunni með <i>JÁ</i> eða <i>NEI</i> þá
						segjum við að efnisgreinin innihaldi svarið. Ef
						þessi efnisgrein inniheldur ekki svarið við
						spurningunni, smelltu þá á rauða takkann.
					</TextPrompt>
				) : (
					<TextPrompt>
						Það er <i>mikilvægt</i> að svarið sem er merkt sé
						rétt svar við spurningunni. Einnig er mikilvægt að
						svarið sé í eins <i>fáum orðum</i> og mögulegt er
					</TextPrompt>
				)}
			</TextPromptWrapper>

			<ButtonContainer>
				{isYesOrNo ? (
					<React.Fragment>
						<BaseButton
							label="Þessi grein svarar ekki spurningunni"
							type="danger"
							onClick={() =>
								dispatch(
									archiveAnswer(gameRoundId, answerId)
								)
							}
						/>
						<BaseButton
							label="Svarið er nei samkvæmt greininni"
							type="highlight"
							onClick={() => handleVerifyYesOrNo(false)}
						/>
						<BaseButton
							label="Svarið er já samkvæmt greininni"
							type="success"
							onClick={() => handleVerifyYesOrNo(true)}
						/>
					</React.Fragment>
				) : (
					<React.Fragment>
						<BaseButton
							label="Svarið er ekki rétt merkt"
							type="danger"
							onClick={() =>
								dispatch(
									archiveAnswer(gameRoundId, answerId)
								)
							}
						/>
						<BaseButton
							label="Svarið er rétt, en gæti verið styttra"
							type="highlight"
							onClick={() => handleVerifyDispatch(true)}
						/>
						<BaseButton
							label="Þetta er rétt og hnitmiðað"
							type="success"
							onClick={() => handleVerifyDispatch(false)}
						/>
					</React.Fragment>
				)}
			</ButtonContainer>
		</GameWrapper>
	);
};
