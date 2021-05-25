import React from "react";
import { SmallProgressBar } from "../../../..";
import { Colors } from "../../../../../styles";
import { IProps } from "./interface";

export const ScoreCard = (props: IProps) => {
	const stats = props;

	const calculateProgressRatio = (count: number, coefficient: number) => {
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
				ratio={calculateProgressRatio(stats.questionVerifications, 0.25)}
				label="Yfirfarnar spurningar"
				color={Colors.DANGER}
				amount={stats.questionVerifications}
			/>
			<SmallProgressBar
				ratio={calculateProgressRatio(stats.answerVerifications, 0.25)}
				label="Yfirfarin svör"
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
