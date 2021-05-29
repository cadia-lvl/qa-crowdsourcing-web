import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestion, writeQuestion } from "../../../../../actions";
import { StoreState } from "../../../../../reducers";
import { BaseButton, Explain } from "../../../../";
import { ButtonContainer } from "./styles";
import * as Disconnected from "../../Disconnected";

export const WriteQuestion = () => {
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
			if (question.trim().slice(-1) !== "?")
				throw new Error(`Spurningin verður að enda á spurningarmerki`);
			setErrorMessage("");
			dispatch(submitQuestion(gameRoundId, question, isYesNoQuestion));
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	useEffect(() => {
		setErrorMessage("");
	}, [question]);

	const hasError = !!errorMessage;

	return (
		<React.Fragment>
			<p>
				Handhófskenndar hugmyndir til þess að spyrja um:{" "}
				<b>{ideaWords.join(", ")}</b>.
			</p>
			<p>Svo getur þú auðvitað spurt út í eitthvað allt annað.</p>
			<Disconnected.WriteQuestion
				isYesNoQuestion={isYesNoQuestion}
				error={errorMessage}
				value={question}
				onChange={(val) => dispatch(writeQuestion(val))}
			/>

			<ButtonContainer>
				<BaseButton
					label="Áfram"
					onClick={handleSubmit}
					isInactive={hasError}
					type="highlight"
				/>
			</ButtonContainer>
		</React.Fragment>
	);
};
