import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitVerifyQuestion } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { ReviewCheckList } from "../GameUtils";
import checkList, { QAquestionItems } from "./checkList";

export const QuestionQualityAssuranceGame = () => {
	const state = useSelector((store: StoreState) => store);
	const {
		questionQualityAssurance: { text, _id },
		game: { _id: gameRoundId },
	} = state;
	const dispatch = useDispatch();

	const handleDispatch = (isGood: boolean) => {
		dispatch(submitVerifyQuestion(gameRoundId, _id, isGood));
	};

	return (
		<GameWrapper type={GameTypes.questionQualityAssurance}>
			<ReviewCheckList<QAquestionItems>
				{...checkList}
				_key={_id}
				title={text}
				onBadAnswer={() => handleDispatch(false)}
				onComplete={() => handleDispatch(true)}
			/>
		</GameWrapper>
	);
};
