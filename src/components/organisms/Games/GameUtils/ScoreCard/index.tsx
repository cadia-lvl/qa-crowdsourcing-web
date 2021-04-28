import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { SmallProgressBar } from "../../../..";
import { StoreState } from "../../../../../reducers";
import { Colors } from "../../../../../styles";

export const ScoreCard = () => {
	const state = useSelector((state: StoreState) => state.auth.scoreCard);

	const stats = useMemo(() => ({ ...state }), [
		state.questionVerifications,
		state.answerVerifications,
		state.answers,
		state.questions,
		state.articles,
	]);

	const calculateProgressRatio = (
		count: number,
		coefficient: number
	) => {
		return (2 * Math.atan(coefficient * count)) / Math.PI;
	};

	return (
		<React.Fragment>
			<SmallProgressBar
				ratio={calculateProgressRatio(stats.questions, 0.25)}
				label="Spurningar"
				color={Colors.HIGHLIGHT}
				amount={stats.questions}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(stats.answers, 0.25)}
				label="Svör"
				color={Colors.SUCCESS}
				key="answer"
				amount={stats.answers}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(
					stats.questionVerifications,
					0.25
				)}
				label="Yfirfarnar spurningar"
				color={Colors.DANGER}
				amount={stats.questionVerifications}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(
					stats.answerVerifications,
					0.25
				)}
				label="Yfirfarnin svör"
				color={Colors.DANGER}
				amount={stats.answerVerifications}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(stats.articles, 0.25)}
				label="Greinar"
				color={Colors.WARNING}
				amount={stats.articles}
			/>
		</React.Fragment>
	);
};
