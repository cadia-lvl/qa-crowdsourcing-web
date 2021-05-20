import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Utils } from "../../";
import { StoreState } from "../../../../../reducers";
import { Atoms } from "../../../../";
import { IProps, CheckListItem } from "./interface";
import getQuestions from "./questions";

export const QuestionReview = ({ question, onComplete }: IProps) => {
	const state = useSelector(
		(state: StoreState) => state.questionQualityAssurance
	);
	const game = useSelector((state: StoreState) => state.game);
	const [items, setItems] = useState<CheckListItem[]>([]);

	useEffect(() => {
		setItems(getQuestions(state.isYesOrNo));
	}, [game.lastLoaded]);

	return (
		<React.Fragment>
			<Utils.QuestionIs question={question} />
			{items.map((item) => (
				<Atoms.Cards.CheckListItem {...item} />
			))}
		</React.Fragment>
	);
};
