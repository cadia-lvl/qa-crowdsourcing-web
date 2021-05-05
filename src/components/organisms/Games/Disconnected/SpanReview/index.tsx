import React, { useEffect, useState } from "react";
import { Utils } from "../../";
import { BaseButton, Explain, FlexLoader } from "../../../..";
import { IProps, SelectionStage } from "./interface";
import { ButtonContainer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";

export const SpanReview = ({
	firstWord,
	lastWord,
	text,
	question,
	isYesOrNo,
	onArchive,
	onVerification,
	onYesNoVerification,
}: IProps) => {
	const [selectionStage, setSelectionStage] = useState<SelectionStage>(
		SelectionStage.seeIfAnswerIsPresent
	);
	const [isLoadingButtons, setIsLoadingButtons] = useState(true);

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

	return (
		<React.Fragment>
			<Utils.QuestionIs question={question} />
			<Utils.SpanSelector
				firstWord={isYesOrNo ? -1 : firstWord}
				lastWord={lastWord ? -1 : lastWord}
				paragraph={text}
				question={question}
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
								onClick={onArchive}
							/>

							<Explain items={TUTORIAL.answerIsPurple}>
								<BaseButton
									type="success"
									label="Ég held að svarið sé rétt"
									onClick={handleVerifyAnswerIsPresent}
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
							onClick={() => onVerification(true)}
						/>
						<Explain items={TUTORIAL.tooLongExample}>
							<BaseButton
								type="success"
								label="Svarið er hnitmiðað"
								onClick={() => onVerification(false)}
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
							onClick={() => onYesNoVerification(false)}
						/>
						<BaseButton
							type="success"
							label="Svarið er já samkvæmt greininni"
							onClick={() => onYesNoVerification(true)}
						/>
					</React.Fragment>
				) : null}
			</ButtonContainer>
		</React.Fragment>
	);
};
