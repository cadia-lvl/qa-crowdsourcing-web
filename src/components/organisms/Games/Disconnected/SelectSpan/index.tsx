import React, { useState } from "react";
import { Utils } from "../..";
import { BaseButton, Explain } from "../../../..";
import { IProps } from "./interface";
import { ButtonContainer } from "./styles";
import * as TUTORIAL from "./tutorialItems";

export const SelectSpan = (props: IProps) => {
	// if it is true then user is locating answer in span
	const [isSelectingSpan, setIsSelectingSpan] = useState(false);

	const {
		question,
		onArchive,
		onClearRange,
		onSubmitSpan,
		firstWord,
		lastWord,
	} = props;

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
			<Utils.QuestionIs question={question} />
			<Utils.SpanSelector {...props} immutable={!isSelectingSpan} />
			{!isSelectingSpan ? (
				<ButtonContainer>
					<BaseButton
						label="Ég sé ekki svarið"
						type="danger"
						onClick={onArchive}
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
							label="til baka"
							type="danger"
							onClick={handleStopSelectingSpan}
						/>
					</Explain>
					<BaseButton
						label="Áfram"
						onClick={handleSubmitSpan}
						isInactive={canProceed}
						type="highlight"
					/>
				</ButtonContainer>
			)}
		</React.Fragment>
	);
};
