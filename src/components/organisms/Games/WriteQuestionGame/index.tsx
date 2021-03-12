import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeQuestionInGame } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SubmitButton } from "../../../";
import {
	WordBox,
	Prompt,
	Paragraph,
	InputContainer,
	QuestionInput,
	ButtonContainer,
} from "./styles";

export const WriteQuestionGame = () => {
	const state = useSelector((state: StoreState) => state.game);
	const dispatch = useDispatch();

	const MIN_QUESTION_LENGTH = 13;

	const { question, firstWord } = state.writeQuestion;
	const validateQuestion = () => {
		if (question.split(" ")[0] !== firstWord) return false;
		if (question.length < MIN_QUESTION_LENGTH) return false;
		if (question.slice(-1) !== "?") return false;
		return true;
	};

	return (
		<GameWrapper type={GameTypes.writeQuestion}>
			<Prompt>
				Spurðu okkur spurning sem byrjar á <i>HVENÆR</i>
			</Prompt>
			<WordBox>Bill Clinton</WordBox>
			<WordBox>Heimsmet</WordBox>
			<WordBox>Guffi Grín</WordBox>
			<WordBox>Hvíta Rússland</WordBox>
			<WordBox>Efnafræði</WordBox>
			<WordBox>George Floyd</WordBox>
			<Paragraph>
				{" "}
				Án efa geta orðin hér að ofan nýst þér sem innblástur. Ef þér
				dettur í hug spurningu um tengda einstaklinga, atburði, örnefni,
				hugtök eða álíka þá er það í lagi.
			</Paragraph>
			<InputContainer>
				<QuestionInput
					type="text"
					placeholder={`${firstWord} ?`}
					onChange={(e) =>
						dispatch(writeQuestionInGame(e.target.value))
					}
					value={question}
				/>
			</InputContainer>
			<ButtonContainer>
				<SubmitButton
					label="Afram"
					onClick={() => null}
					inactive={!validateQuestion()}
					invertColorScheme
				/>
			</ButtonContainer>
		</GameWrapper>
	);
};
