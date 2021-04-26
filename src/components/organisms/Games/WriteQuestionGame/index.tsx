import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestion, writeQuestion } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SubmitButton, TextTag } from "../../../";
import {
	InputContainer,
	QuestionInput,
	ButtonContainer,
	ErrorLabel,
	IdeaBoxInner,
} from "./styles";
import { TaskInfoBox } from "../GameUtils";

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

	useEffect(() => {
		try {
			if (
				question.split(" ")[0] !== questionType &&
				!isYesNoQuestion
			)
				throw new Error(
					`Spurningin verður að hefjast á ${questionType}`
				);
			if (question.length < MIN_QUESTION_LENGTH)
				throw new Error(`Spurningin er ekki nógu löng`);
			if (question.slice(-1) !== "?")
				throw new Error(
					`Spurningin verður að enda á spurningarmerki`
				);
			setErrorMessage("");
		} catch (e) {
			setErrorMessage(e.message);
		}
	}, [question, questionType, isYesNoQuestion]);

	return (
		<GameWrapper type={GameTypes.writeQuestion}>
			<TaskInfoBox title="Búa til spurningu">
				<IdeaBoxInner>
					{ideaWords.map((word) => (
						<TextTag key={word}>{word}</TextTag>
					))}
				</IdeaBoxInner>
				<InputContainer>
					<QuestionInput
						type="text"
						placeholder={`${questionType} ?`}
						onChange={(e) =>
							dispatch(writeQuestion(e.target.value))
						}
						value={question}
					/>
				</InputContainer>

				<ButtonContainer>
					{errorMessage ? (
						<ErrorLabel>{errorMessage}</ErrorLabel>
					) : null}
					<SubmitButton
						label="Áfram"
						onClick={() =>
							dispatch(
								submitQuestion(
									gameRoundId,
									question,
									isYesNoQuestion
								)
							)
						}
						inactive={!!errorMessage}
						invertColorScheme
					/>
				</ButtonContainer>
			</TaskInfoBox>
		</GameWrapper>
	);
};
