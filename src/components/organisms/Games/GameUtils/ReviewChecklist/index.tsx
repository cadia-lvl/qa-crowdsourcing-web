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
import { CheckListBullet, Atoms, PageDots } from "../../../../";
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
					action.payload.answer ===
					questions[action.payload.questionNumber]
						.expectedAnswer;
				const { finished } = state;
				finished[action.payload.questionNumber] = {
					key: questions[action.payload.questionNumber].key,
					goodAnswer,
				};
				return {
					...state,
					finished: [...finished],
					isLoading: true,
					currentQuestion: finished.length,
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
		const LOADING_TIMER = 650;
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
						<Atoms.Loaders.Flex size={40} />
					) : (
						<React.Fragment>
							<span>{question}</span>
							<ButtonDiv>
								<CheckListActionButton
									onClick={() =>
										dispatch({
											type: "answer-question",
											payload: {
												answer: "no",
												questionNumber:
													state.currentQuestion,
											},
										})
									}
								>
									<span>Nei</span>
								</CheckListActionButton>
								<CheckListActionButton
									onClick={() =>
										dispatch({
											type: "answer-question",
											payload: {
												answer: "yes",
												questionNumber:
													state.currentQuestion,
											},
										})
									}
								>
									<span>Já</span>
								</CheckListActionButton>
							</ButtonDiv>
						</React.Fragment>
					)}
					<PageDots
						current={state.currentQuestion + 1}
						total={questions.length}
					/>
				</CheckListQuestionContainer>
			) : (
				<CheckListContainer>
					{questions
						.slice(0, state.currentQuestion)
						.map((item, i) =>
							state.finished[i].goodAnswer ? (
								<CheckListBullet type="good">
									{item.correctAnswerPrompt}
								</CheckListBullet>
							) : (
								<CheckListBullet type="bad">
									{item.badAnswerPrompt}
								</CheckListBullet>
							)
						)}
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
export * as Types from "./interface";
