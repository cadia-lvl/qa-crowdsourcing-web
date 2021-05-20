import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitVerifyQuestion } from "../../../../../actions";
import { StoreState } from "../../../../../reducers";
import * as Disconnected from "../../Disconnected";

/**
 * Connected component that connects the disconnected
 * version of the verify question round to the redux
 * store s tate
 */
export const QuestionReview = () => {
	const state = useSelector((store: StoreState) => store);
	const {
		questionQualityAssurance: { text, _id: questionId },
		game: { _id: gameRoundId },
	} = state;

	const dispatch = useDispatch();

	const handleDispatch = (isGood: boolean) => {
		dispatch(submitVerifyQuestion(gameRoundId, questionId, isGood));
	};

	return (
		<Disconnected.QuestionReview
			onComplete={handleDispatch}
			question={text}
		/>
	);
};
