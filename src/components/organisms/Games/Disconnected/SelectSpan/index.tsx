import React, { useState } from "react";
import { Utils } from "../..";
import { BaseButton, Explain, ModalWithTitle } from "../../../..";
import { IProps } from "./interface";
import { ButtonContainer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const SelectSpan = (props: IProps) => {
	// if it is true then user is locating answer in span
	const [isSelectingSpan, setIsSelectingSpan] = useState(false);
	const [showArchiveModal, setShowArchiveModal] = useState(false);

	const { question, onArchive, onClearRange, onSubmitSpan, firstWord, lastWord } =
		props;

	// goes back from selecting span to verification step
	const handleStopSelectingSpan = () => {
		setIsSelectingSpan(false);
		onClearRange();
	};

	// fires event indicating that span should be submitted
	const handleSubmitSpan = () => {
		onSubmitSpan(firstWord, lastWord);
	};

	// boolean value dictating if user can proceed to next step
	const canProceed = firstWord === undefined || lastWord === undefined;

	return (
		<React.Fragment>
			{/* START OF MODAL to verify archive */}
			<ModalWithTitle
				title="Ertu viss?"
				buttons={[
					{
						label: "Nei",
						type: "danger",
						onClick: () => setShowArchiveModal(false),
					},
					{
						label: "Já",
						type: "highlight",
						onClick: onArchive,
					},
				]}
				open={showArchiveModal}
				onClose={() => setShowArchiveModal(false)}
			>
				Ef þú sérð ekki svarið þá eyðum við þessari efnisgrein.
			</ModalWithTitle>
			{/* END OF MODAL to verify archive */}

			{/* START OF span select */}
			<Utils.QuestionIs question={question} />
			{/* END OF span select */}
			<Utils.SpanSelector {...props} immutable={!isSelectingSpan} />

			{/* START OF buttons */}
			{!isSelectingSpan ? (
				<ButtonContainer>
					<BaseButton
						label="Ég sé ekki svarið"
						type="danger"
						onClick={() => setShowArchiveModal(true)}
					/>
					<BaseButton
						label="Ég sé svarið"
						onClick={() => setIsSelectingSpan(true)}
						type="highlight"
					/>
				</ButtonContainer>
			) : (
				<ButtonContainer>
					<Explain items={TUTORIAL.tooLongExample}>
						<BaseButton
							label="Til baka"
							type="danger"
							onClick={handleStopSelectingSpan}
						/>
					</Explain>
					<BaseButton
						label="Staðfesta"
						onClick={handleSubmitSpan}
						isInactive={canProceed}
						type="highlight"
					/>
				</ButtonContainer>
			)}
			{/* END OF buttons */}
		</React.Fragment>
	);
};
