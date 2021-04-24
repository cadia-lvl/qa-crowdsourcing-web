import React, { useReducer, useEffect } from "react";
import { IProps } from "./interface";
import {
	Outer,
	ButtonDiv,
	Question,
	CheckListActionButton,
} from "./styles";
import { ReviewActions, State } from "./stateUtils";
import { CheckListBullet } from "../../../../";

export const ReviewCheckList = <T extends {}>({
	items,
	onBadAnswer,
	onComplete,
	_key,
}: IProps<T>) => {
	const initialState: State<T> = {
		finished: [],
		currentQuestion: 0,
	};

	useEffect(() => {
		dispatch({ type: "reset-state" });
	}, [_key]);

	const reducer = (state: State<T>, action: ReviewActions): State<T> => {
		switch (action.type) {
			case "answer-question":
				const goodAnswer =
					action.payload ===
					items[state.currentQuestion].expectedAnswer;
				return {
					...state,
					finished: [
						...state.finished,
						{
							key: items[state.currentQuestion].key,
							goodAnswer,
						},
					],
					currentQuestion: state.currentQuestion + 1,
				};
			case "reset-state":
				return { ...initialState };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const question = items[state.currentQuestion]?.question;
	const hasQuestion = question !== undefined;
	const isFinished = !hasQuestion;
	return (
		<Outer>
			{items.slice(0, state.currentQuestion).map((item, i) => (
				<React.Fragment key={item.question}>
					{state.finished[i].goodAnswer ? (
						<CheckListBullet type="good">
							{item.correctAnswerPrompt}
						</CheckListBullet>
					) : (
						<CheckListBullet type="bad">
							{item.badAnswerPrompt}
						</CheckListBullet>
					)}
				</React.Fragment>
			))}
			{hasQuestion ? (
				<React.Fragment>
					<p>{question}</p>
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
							<span>Já</span>
						</CheckListActionButton>
					</ButtonDiv>
				</React.Fragment>
			) : null}
		</Outer>
	);
};

export * from "./interface";
