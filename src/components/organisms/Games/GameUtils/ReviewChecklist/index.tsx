import React, { useReducer, useEffect } from "react";
import { IProps } from "./interface";
import {
	Outer,
	VerticalBar,
	ButtonDiv,
	Question,
	BadQuestionPrompt,
	GoodQuestionPrompt,
} from "./styles";
import { TextPrompt, BaseButton, TextTag } from "../../../../";
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

	const checkListDone =
		state.finished.length === items.length || state.questionIsBad;

	return (
		<Outer>
			<TextPrompt>{title}</TextPrompt>

			{state.questionIsBad ? (
				<BadQuestionPrompt>
					{items[
						state.currentQuestion
					].badAnswerPrompt.toLocaleUpperCase()}
				</BadQuestionPrompt>
			) : checkListDone ? (
				<GoodQuestionPrompt>
					Þetta er góð spurning!
				</GoodQuestionPrompt>
			) : (
				<React.Fragment>
					{items
						.slice(0, state.currentQuestion + 1)
						.map((item) => (
							<React.Fragment key={item.question}>
								<VerticalBar />
								{state.finished.includes(item.key) ? (
									<TextTag>
										{item.correctAnswerPrompt}
									</TextTag>
								) : (
									<Question>{item.question}</Question>
								)}
							</React.Fragment>
						))}
					<ButtonDiv>
						<BaseButton
							label="Nei"
							type="danger"
							onClick={() =>
								dispatch({
									type: "answer-question",
									payload: "no",
								})
							}
						/>
						<BaseButton
							label="Já"
							type="highlight"
							onClick={() =>
								dispatch({
									type: "answer-question",
									payload: "yes",
								})
							}
						/>
					</ButtonDiv>
				</React.Fragment>
			)}

			{checkListDone ? (
				<ButtonDiv>
					<BaseButton
						label="Úps, ég gerði mistök"
						type="danger"
						onClick={() =>
							dispatch({
								type: "reset-state",
							})
						}
					/>
					<BaseButton
						label="Ákkurat!"
						type="highlight"
						onClick={() =>
							(state.questionIsBad
								? onBadAnswer
								: onComplete)()
						}
					/>
				</ButtonDiv>
			) : null}
		</Outer>
	);
};

export * from "./interface";
