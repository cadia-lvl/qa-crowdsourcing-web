import React, { useEffect, useState } from "react";
import { Game, ModalWithTitle } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";
import { Outer } from "./styles";
export const SpanReview = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	const [modalText, setModalText] = useState("");

	useEffect(() => {
		onHideButton();
	}, []);

	const QUESTION = "Hvaða ár dó Díana prinsessa?";
	const TEXT =
		"Lafði Diana Spencer (fædd Diana Frances Spencer) betur þekkt sem Díana prinsessa (1. júlí 1961 - 31. ágúst 1997) var fyrsta eiginkona Karls Bretaprins og móðir prinsanna Vilhjálms og Harry. ";
	const ANSWER_IS_PRESENT =
		"Svarið er þarna í efnisgreininni, merkt í fjólubláu.";
	const ANSWER_CAN_NOT_BE_SHORTENED =
		"Það er varla hægt að svara í færri orðum en þetta.";

	const handleVerification = (canBeShorter: boolean) => {
		if (!canBeShorter) onShowButton();
		else setModalText(ANSWER_CAN_NOT_BE_SHORTENED);
	};

	return (
		<Outer>
			<ModalWithTitle
				title="Ertu viss"
				open={!!modalText}
				buttons={[
					{
						label: "Ég skil",
						type: "highlight",
						onClick: () => setModalText(""),
					},
				]}
				onClose={undefined}
			>
				{modalText}
			</ModalWithTitle>
			<Game.Disconnected.SpanReview
				question={QUESTION}
				text={TEXT}
				onArchive={() => setModalText(ANSWER_IS_PRESENT)}
				onVerification={handleVerification}
				onYesNoVerification={() => {
					throw new Error("Should not happen");
				}}
				isYesOrNo={false}
				firstWord={14}
				lastWord={14}
			/>
		</Outer>
	);
};
