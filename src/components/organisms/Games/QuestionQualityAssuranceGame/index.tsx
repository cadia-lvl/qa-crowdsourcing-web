import React from "react";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { ReviewCheckList } from "../GameUtils";
import checkList, { QAquestionItems } from "./checkList";

export const QuestionQualityAssuranceGame = () => {
	return (
		<GameWrapper type={GameTypes.questionQualityAssurance}>
			<ReviewCheckList<QAquestionItems>
				{...checkList}
				onBadAnswer={(key) => null}
				onComplete={() => null}
			/>
		</GameWrapper>
	);
};
