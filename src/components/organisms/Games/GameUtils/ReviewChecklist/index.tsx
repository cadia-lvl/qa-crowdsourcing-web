import React, { useReducer, useEffect } from "react";
import { IProps } from "./interface";
import {
	Outer,
	ButtonDiv,
	Question,
	CheckListActionButton,
} from "./styles";
import { TextTag } from "../../../../";
import { ReviewActions, State } from "./stateUtils";

export const ReviewCheckList = <T extends {}>({
	title,
	items,
	onBadAnswer,
	onComplete,
	_key,
}: IProps<T>) => {
	const initialState: State<T> = {
		finished: [],
		currentQuestion: 0,
		questionIsBad: false,
	};

	useEffect(() => {
		dispatch({ type: "reset-state" });
	}, [_key]);

	const reducer = (state: State<T>, action: ReviewActions): State<T> => {
		switch (action.type) {
			case "answer-question":
				const badAnswer =
					action.payload !==
					items[state.currentQuestion].expectedAnswer;
				return {
					...state,
					finished: [
						...state.finished,
						items[state.currentQuestion].key,
					],
					questionIsBad: badAnswer,
					currentQuestion:
						state.currentQuestion + (!badAnswer ? 1 : 0),
				};
			case "reset-state":
				return { ...initialState };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Outer>
			{items.slice(0, state.currentQuestion + 1).map((item) => (
				<React.Fragment key={item.question}>
					{state.finished.includes(item.key) ? (
						<TextTag>{item.correctAnswerPrompt}</TextTag>
					) : (
						<Question>{item.question}</Question>
					)}
				</React.Fragment>
			))}
			<ButtonDiv>
				<CheckListActionButton
					type="no"
					onClick={() =>
						dispatch({
							type: "answer-question",
							payload: "no",
						})
					}
				>
					<i className="fas fa-times" />
					<span>Nei</span>
				</CheckListActionButton>
				<CheckListActionButton
					type="yes"
					onClick={() =>
						dispatch({
							type: "answer-question",
							payload: "yes",
						})
					}
				>
					<i className="fas fa-check" />
					<span>Já</span>
				</CheckListActionButton>
			</ButtonDiv>
		</Outer>
	);
};

export * from "./interface";
