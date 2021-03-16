import React from "react";
import { useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { ReviewCheckList } from "../GameUtils";
import checkList, { QAquestionItems } from "./checkList";

export const QuestionQualityAssuranceGame = () => {
	const state = useSelector(
		(store: StoreState) => store.questionQualityAssurance
	);
	return (
		<GameWrapper type={GameTypes.questionQualityAssurance}>
			<ReviewCheckList<QAquestionItems>
				{...checkList}
				title={state.text}
				onBadAnswer={(key) => null}
				onComplete={() => null}
			/>
		</GameWrapper>
	);
};
