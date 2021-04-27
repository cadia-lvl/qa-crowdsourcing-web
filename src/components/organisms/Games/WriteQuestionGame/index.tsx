import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestion, writeQuestion } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { BaseButton, Explain, FilledAlert } from "../../../";
import { QuestionInput, ButtonContainer, AlertsContainer } from "./styles";
import { TaskInfoBox } from "../GameUtils";
import { ideaWordsTutorialClosure } from "./tutorialItems";

export const WriteQuestionGame = () => {
	const state = useSelector((state: StoreState) => state);
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();

	const MIN_QUESTION_LENGTH = 13;

	const {
		writeQuestion: { question, questionType, ideaWords },
		game: { _id: gameRoundId },
	} = state;

	const isYesNoQuestion = questionType === "Já/Nei";

	const handleSubmit = () => {
		try {
			if (question.length < MIN_QUESTION_LENGTH)
				throw new Error(`Spurningin er ekki nógu löng`);
			if (question.slice(-1) !== "?")
				throw new Error(
					`Spurningin verður að enda á spurningarmerki`
				);
			setErrorMessage("");
			dispatch(
				submitQuestion(gameRoundId, question, isYesNoQuestion)
			);
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	useEffect(() => {
		setErrorMessage("");
	}, [question]);

	const hasError = !!errorMessage;

	return (
		<GameWrapper type={GameTypes.writeQuestion}>
			<TaskInfoBox title="Búa til spurningu">
				<AlertsContainer>
					{hasError ? (
						<FilledAlert label={errorMessage} type="danger" />
					) : null}
					{isYesNoQuestion ? (
						<FilledAlert
							label="Búðu til Já/nei spurningu"
							type="success"
						/>
					) : null}
				</AlertsContainer>
				<QuestionInput
					type="text"
					placeholder={`Skrifaðu spurningu sem samfélagið getur fundið svarið við`}
					onChange={(e) =>
						dispatch(writeQuestion(e.target.value))
					}
					value={question}
				/>
				<Explain
					items={[]}
					persist={ideaWordsTutorialClosure(ideaWords)}
				>
					<ButtonContainer>
						<BaseButton
							label="Áfram"
							onClick={handleSubmit}
							isInactive={hasError}
							type="highlight"
						/>
					</ButtonContainer>
				</Explain>
			</TaskInfoBox>
		</GameWrapper>
	);
};
