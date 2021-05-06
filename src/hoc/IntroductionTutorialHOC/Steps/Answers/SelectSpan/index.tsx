import React, { useState, useEffect } from "react";
import {
	Game,
	ModalWithTitle,
	FilledAlert,
} from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";

export const SelectSpan = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	const [firstWord, setFirstWord] = useState(undefined);
	const [lastWord, setLastWord] = useState(undefined);
	const [showModal, setShowModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const QUESTION = "Hvað búa margir í New York borg?";
	const ANSWER =
		"New York eða Nýja-Jórvík (enska: New York City, gjarnan skammstafað NYC) er fjölmennasta borg New York-fylkis, og jafnframt Bandaríkjanna, með ríflega 8,6 milljónir íbúa (2017) af ýmsum þjóðernum";

	const handleClearRange = () => {
		setFirstWord(undefined);
		setLastWord(undefined);
	};

	const handleComplete = () => {
		try {
			if (firstWord !== 21) throw new Error("Svarið byrjar á 8,6");
			if (lastWord !== 22)
				throw new Error("Svarið endar á milljónir");
			setErrorMessage("");
			onShowButton();
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	useEffect(() => {
		onHideButton();
	}, []);

	useEffect(() => {
		if (lastWord === undefined || firstWord === undefined)
			setErrorMessage("");
	}, [firstWord, lastWord]);

	return (
		<React.Fragment>
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
				Svarið er þarna í efnisgreininni.
			</ModalWithTitle>
			{errorMessage ? (
				<FilledAlert type="danger" label={errorMessage} />
			) : null}
			<Game.Disconnected.SelectSpan
				question={QUESTION}
				paragraph={ANSWER}
				onFirstWordChange={
					(setFirstWord as unknown) as (i: number) => void
				}
				onLastWordChange={
					(setLastWord as unknown) as (i: number) => void
				}
				onClearRange={handleClearRange}
				onArchive={() => setShowModal(true)}
				onSubmitSpan={handleComplete}
				firstWord={firstWord}
				lastWord={lastWord}
			/>
		</React.Fragment>
	);
};
