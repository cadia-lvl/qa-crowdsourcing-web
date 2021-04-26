import React, { useReducer, useEffect, useState } from "react";
import { CheckListItem, IProps } from "./interface";
import {
	Outer,
	ButtonDiv,
	CheckListQuestionContainer,
	CheckListActionButton,
	CheckListContainer,
} from "./styles";
import { ReviewActions, State } from "./stateUtils";
import { CheckListBullet, FlexLoader } from "../../../../";
import { shuffle } from "./utils";

export const ReviewCheckList = <T extends {}>({
	items: itemProps,
	onBadAnswer,
	onComplete,
	_key,
	first,
}: IProps<T>) => {
	const initialState: State<T> = {
		finished: [],
		isLoading: true,
		currentQuestion: 0,
	};

	const [questions, setQuestions] = useState<CheckListItem<T>[]>([]);

	useEffect(() => {
		dispatch({ type: "reset-state" });
	}, [_key]);

	const reducer = (state: State<T>, action: ReviewActions): State<T> => {
		switch (action.type) {
			case "answer-question":
				const goodAnswer =
					action.payload ===
					questions[state.currentQuestion].expectedAnswer;
				return {
					...state,
					finished: [
						...state.finished,
						{
							key: questions[state.currentQuestion].key,
							goodAnswer,
						},
					],
					isLoading: true,
					currentQuestion: state.currentQuestion + 1,
				};
			case "reset-state":
				return { ...initialState };
			case "set-loading":
				return { ...state, isLoading: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	/**
	 * Handles setting loading to false
	 * after a fixed timer
	 * after isLoading has been set
	 * to true
	 */
	useEffect(() => {
		const LOADING_TIMER = 1000;
		if (state.isLoading) {
			const t = setTimeout(
				() =>
					dispatch({
						type: "set-loading",
						payload: false,
					}),
				LOADING_TIMER
			);
			// clean up
			return () => {
				clearTimeout(t);
			};
		}
	}, [state.isLoading]);

	/**
	 * Shuffles the question when component is loaded
	 */
	useEffect(() => {
		const items = [...itemProps];
		shuffle(items);
		setQuestions([...(first ?? []), ...items]);
	}, []);

	const question = questions[state.currentQuestion]?.question;
	const hasQuestion = question !== undefined;
	return (
		<Outer>
			{/* {} */}
			{hasQuestion ? (
				<CheckListQuestionContainer>
					{state.isLoading ? (
						<FlexLoader size={40} />
					) : (
						<React.Fragment>
							<p>{question}</p>
							<ButtonDiv>
								<CheckListActionButton
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
					)}
				</CheckListQuestionContainer>
			) : (
				<CheckListContainer>
					{questions
						.slice(0, state.currentQuestion)
						.map((item, i) => (
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
					<ButtonDiv>
						<CheckListActionButton
							onClick={() =>
								dispatch({
									type: "reset-state",
								})
							}
						>
							<span>Breyta svörum</span>
						</CheckListActionButton>
						<CheckListActionButton
							onClick={() =>
								// calls relevant callback
								// based on if all answers were
								// good or not
								state.finished.every(
									(item) => item.goodAnswer
								)
									? onComplete()
									: onBadAnswer()
							}
						>
							<span>Staðfesta svör</span>
						</CheckListActionButton>
					</ButtonDiv>
				</CheckListContainer>
			)}
		</Outer>
	);
};

export * from "./interface";
