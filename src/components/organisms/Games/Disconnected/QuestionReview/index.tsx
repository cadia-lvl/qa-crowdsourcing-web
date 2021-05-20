import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Utils } from "../../";
import { StoreState } from "../../../../../reducers";
import { Atoms, Molecules } from "../../../../";
import { IProps, CheckListItem } from "./interface";
import getQuestions from "./questions";

export const QuestionReview = ({ question, onComplete }: IProps) => {
	// get the state from redux
	const state = useSelector(
		(state: StoreState) => state.questionQualityAssurance
	);

	// get game state info from redux
	const game = useSelector((state: StoreState) => state.game);

	// is the user checking boxes, or confirming selection?
	const [modalState, setModalState] = useState<
		undefined | "error" | "good"
	>();

	// question items
	const [items, setItems] = useState<CheckListItem[]>([]);

	// load question items as soon as the game round starts
	useEffect(() => {
		setItems(getQuestions(state.isYesOrNo));
	}, [game.lastLoaded]);

	// toggle true false for item at index i
	const markItem = (i: number) => {
		const copy = [...items];
		copy[i].value = !copy[i].value;
		setItems([...copy]);
	};

	const handleOpenModal = useCallback(() => {
		const allGood = items.every((item) => item.value);
		if (allGood) setModalState("good");
		else setModalState("error");
	}, [items]);

	return (
		<React.Fragment>
			<Molecules.ModalWithTitle
				open={modalState !== undefined}
				onClose={() => setModalState(undefined)}
				title="Ertu viss?"
				buttons={[
					{
						type: "danger",
						label: "Nei",
						onClick: () => setModalState(undefined),
					},
					{
						type: "highlight",
						label: "Já",
						onClick: () => onComplete(modalState === "good"),
					},
				]}
			>
				<p>
					{modalState === "good"
						? "Þú hakaðir í alla reiti sem þýðir að þú telur spurninguna vera góða."
						: "Þú slepptir sumum reitum sem þýðir að spurningin er slæm og við munum eyða henni."}
				</p>
			</Molecules.ModalWithTitle>
			<Utils.QuestionIs question={question} />
			{items.map((item, i) => (
				<Atoms.Cards.CheckListItem
					{...item}
					onClick={() => markItem(i)}
				/>
			))}
			<Atoms.BaseButton
				type="highlight"
				label="Halda áfram"
				onClick={handleOpenModal}
			/>
		</React.Fragment>
	);
};
