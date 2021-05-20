import React, { useEffect, useState } from "react";
import { Game, ModalWithTitle } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";

export const ReviewQuestion = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	// use the same type as in the connected version
	// for user familiarity
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		onHideButton();
	}, []);

	const handleComplete = (isGood: boolean) => {
		if (isGood) onShowButton();
		else setShowModal(true);
	};

	return (
		<div>
			<ModalWithTitle
				title="Ertu viss"
				open={showModal}
				buttons={[
					{
						label: "Ég skil",
						type: "highlight",
						onClick: () => setShowModal(false),
					},
				]}
				onClose={undefined}
			>
				Þessi spurning ætti að upfylla allar kröfur
			</ModalWithTitle>
			<Game.Disconnected.QuestionReview
				onComplete={handleComplete}
				question="Hvað heita meðlimir ClubDub?"
			/>
		</div>
	);
};
