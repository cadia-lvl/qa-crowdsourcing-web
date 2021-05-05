import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SpanSelector, TaskInfoBox } from "../GameUtils";
import {
	archiveAnswer,
	verifyAnswerSpan,
	verifyYesNoQuestion,
} from "../../../../actions";
import { BaseButton, FlexLoader } from "../../../";
import { ButtonContainer } from "./styles";
import SelectionStage from "./SelectionStage";
import * as TUTORIAL from "./tutorialItems";
import { Explain } from "../../Tutorial";

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";

export const VerifyAnswerSpanGame = () => {
	const [selectionStage, setSelectionStage] = useState<SelectionStage>(
		SelectionStage.seeIfAnswerIsPresent
	);

	const [isLoadingButtons, setIsLoadingButtons] = useState(true);

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

	const handleArchive = () => {
		dispatch(archiveAnswer(gameRoundId, answerId));
	};

	const handleVerifyAnswerIsPresent = () => {
		setIsLoadingButtons(true);
		if (isYesOrNo)
			setSelectionStage(SelectionStage.getAnswerForYesOrNo);
		else setSelectionStage(SelectionStage.critisizeAnswerLength);
	};

	const handleResetSelectionStage = () => {
		setIsLoadingButtons(true);
		setSelectionStage(SelectionStage.seeIfAnswerIsPresent);
	};

	/**
	 * sets loading as false after
	 * a set time
	 */
	useEffect(() => {
		const TIMEOUT = 1000;
		if (isLoadingButtons) {
			const t = setTimeout(
				() => setIsLoadingButtons(false),
				TIMEOUT
			);
			return () => {
				clearTimeout(t);
			};
		}
	}, [selectionStage]);

	return (
		<GameWrapper type={GameTypes.verifyAnswerSpan}>
			<TaskInfoBox title="Yfirferð á spurningu og svari frá öðrum notendum">
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
					firstWord={isYesOrNo ? -1 : firstWord}
					lastWord={isYesOrNo ? -1 : lastWord}
					question={text}
					immutable
				/>
				<ButtonContainer>
					{isLoadingButtons ? (
						<FlexLoader size={40} />
					) : selectionStage ===
					  SelectionStage.seeIfAnswerIsPresent ? (
						isYesOrNo ? (
							// Buttons if it is a yes or no question
							// and user is verifying if the answer is present
							<React.Fragment>
								<BaseButton
									type="danger"
									label="Svarið er ekki hér"
									onClick={handleArchive}
								/>
								<BaseButton
									type="success"
									label="Svarið er hér"
									onClick={handleVerifyAnswerIsPresent}
								/>
							</React.Fragment>
						) : (
							// Buttons if it is NOT a yes or no question
							// and user is verifying if the answer is present
							<React.Fragment>
								<BaseButton
									type="danger"
									label="Ég held að svarið sé rangt"
									onClick={handleArchive}
								/>

								<Explain items={TUTORIAL.answerIsPurple}>
									<BaseButton
										type="success"
										label="Ég held að svarið sé rétt"
										onClick={
											handleVerifyAnswerIsPresent
										}
									/>
								</Explain>
							</React.Fragment>
						)
					) : selectionStage ===
					  SelectionStage.critisizeAnswerLength ? (
						// Buttons if user has said that the answer
						// is present and we want to check if the asnwer can be shortened
						// TODO: add tutorial to explain what shorter means
						<React.Fragment>
							<BaseButton
								type="highlight"
								label="Til baka"
								onClick={handleResetSelectionStage}
							/>
							<BaseButton
								type="danger"
								label="Svarið gæti verið styttra"
								onClick={() => handleVerifyDispatch(true)}
							/>
							<Explain items={TUTORIAL.tooLongExample}>
								<BaseButton
									type="success"
									label="Svarið er hnitmiðað"
									onClick={() =>
										handleVerifyDispatch(false)
									}
								/>
							</Explain>
						</React.Fragment>
					) : selectionStage ===
					  SelectionStage.getAnswerForYesOrNo ? (
						// Buttons to ask user to evaluate the yes/no answer
						// to a yes/no question according to the paragraph
						<React.Fragment>
							<BaseButton
								type="highlight"
								label="Til baka"
								onClick={handleResetSelectionStage}
							/>
							<BaseButton
								type="danger"
								label="Svarið er nei samkvæmt greininni"
								onClick={() => handleVerifyYesOrNo(false)}
							/>
							<BaseButton
								type="success"
								label="Svarið er já samkvæmt greininni"
								onClick={() => handleVerifyYesOrNo(true)}
							/>
						</React.Fragment>
					) : null}
				</ButtonContainer>
			</TaskInfoBox>
		</GameWrapper>
	);
};
