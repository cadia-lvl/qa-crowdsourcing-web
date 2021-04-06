import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitVerifyQuestion } from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { CheckListItem, ReviewCheckList, TaskInfoBox } from "../GameUtils";
import checkList, { QAquestionItems } from "./checkList";

export const QuestionQualityAssuranceGame = () => {
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
		if (!isYesOrNo) return [...checkList.items];
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
		<GameWrapper type={GameTypes.questionQualityAssurance}>
			<TaskInfoBox title="Yfirferð á spurningu frá öðrum notanda">
				<ReviewCheckList<QAquestionItems>
					items={getCheckListItems()}
					_key={_id}
					title={text}
					onBadAnswer={() => handleDispatch(false)}
					onComplete={() => handleDispatch(true)}
				/>
			</TaskInfoBox>
		</GameWrapper>
	);
};
