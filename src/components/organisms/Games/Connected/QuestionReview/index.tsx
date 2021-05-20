import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitVerifyQuestion } from "../../../../../actions";
import { StoreState } from "../../../../../reducers";
import { CheckListItem } from "../../GameUtils";
import * as Disconnected from "../../Disconnected";
import checkList, { QAquestionItems } from "./checkList";

/**
 * Connected component that connects the disconnected
 * version of the verify question round to the redux
 * store s tate
 */
export const QuestionReview = () => {
	const state = useSelector((store: StoreState) => store);
	const {
		questionQualityAssurance: { text, _id, isYesOrNo },
		game: { _id: gameRoundId },
	} = state;
	const dispatch = useDispatch();

	const handleDispatch = (isGood: boolean) => {
		dispatch(submitVerifyQuestion(gameRoundId, _id, isGood));
	};

	const getCheckListItems = (): CheckListItem<QAquestionItems>[] => {
		if (!isYesOrNo)
			return [
				{
					question: "Er þetta já eða nei spurning?",
					expectedAnswer: "no",
					key: "is-yes-or-no",
					correctAnswerPrompt:
						"Þetta er ekki já eða nei spurning",
					badAnswerPrompt: "Þetta er já eða nei spurning",
				},
				...checkList.items,
			];
		return [
			{
				question: "Er þetta já eða nei spurning?",
				expectedAnswer: "yes",
				key: "is-yes-or-no",
				correctAnswerPrompt: "Þetta er já eða nei spurning",
				badAnswerPrompt: "Þetta er EKKI já eða nei spurning",
			},
			...checkList.items,
		];
	};
	return (
		<Disconnected.QuestionReview<QAquestionItems>
			onComplete={handleDispatch}
			title={checkList.title}
			first={checkList.first}
			items={getCheckListItems()}
			question={text}
		/>
	);
};

export { default as CheckList } from "./checkList";
export type { QAquestionItems } from "./checkList";
