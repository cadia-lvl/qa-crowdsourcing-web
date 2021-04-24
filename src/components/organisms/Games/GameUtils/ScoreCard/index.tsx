import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { SmallProgressBar } from "../../../..";
import { StoreState } from "../../../../../reducers";
import { Colors } from "../../../../../styles";

export const ScoreCard = () => {
	const state = useSelector((state: StoreState) => state);
	const {
		questionVerifications,
		answerVerifications,
		answers,
		questions,
		articles,
	} = state.auth.scoreCard;

	const calculateProgressRatio = (
		count: number,
		coefficient: number
	) => {
		return (2 * Math.atan(coefficient * count)) / Math.PI;
	};

	return (
		<React.Fragment>
			<SmallProgressBar
				ratio={calculateProgressRatio(questions, 0.25)}
				label="Spurningar"
				color={Colors.HIGHLIGHT}
				amount={questions}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(answers, 0.25)}
				label="Svör"
				color={Colors.SUCCESS}
				key="answer"
				amount={answers}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(questionVerifications, 0.25)}
				label="Yfirfarnar spurningar"
				color={Colors.DANGER}
				amount={questionVerifications}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(answerVerifications, 0.25)}
				label="Yfirfarnin svör"
				color={Colors.DANGER}
				amount={answerVerifications}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(articles, 0.25)}
				label="Greinar"
				color={Colors.WARNING}
				amount={articles}
			/>
		</React.Fragment>
	);
};
