import React from "react";
import { Game } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";

export const ReviewQuestion = (props: SoubRoutineProps) => {
	// use the same type as in the connected version
	// for user familiarity
	type Keys = Game.Connected.QAquestionItems;
	return (
		<div>
			<Game.Disconnected.QuestionReview<Keys>
				onComplete={(isGood) => null}
				question="Hver er höfuðborg Aþenu?"
				// spread the same props as in the
				// connected version for user familiarity
				{...Game.Connected.CheckList}
			/>
		</div>
	);
};
