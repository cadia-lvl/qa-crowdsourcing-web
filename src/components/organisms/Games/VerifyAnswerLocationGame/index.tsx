import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { TextPrompt, BaseButton } from "../../../";
import { Outer, Word, ButtonContainer } from "./styles";
import {
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
	submitSpan,
	archiveAnswer,
} from "../../../../actions";
import { SelectionStates } from "./interface";

export const VerifyAnswerLocationGame = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	let selectionState: SelectionStates;
	let {
		verifyAnswerLocation: {
			firstWord,
			lastWord,
			paragraph,
			text,
			_id: answerId,
		},
		game: { _id: gameRoundId },
	} = state;

	let action: (v: number) => any;
	if (firstWord === undefined) {
		action = selectFirstWordIndexInParagraph;
		lastWord = firstWord = -1;
		selectionState = "select-first";
	} else if (lastWord === undefined) {
		action = selectSecondWordIndexInParagraph;
		lastWord = firstWord;
		selectionState = "select-last";
	} else {
		action = clearIndexRangeInParagraph;
		selectionState = "clear-selection";
	}

	const getToolTipString = (word: string) => {
		switch (selectionState) {
			case "clear-selection":
				return "Smelltu á textann til að hreinsa val";
			case "select-first":
				return `Svarið byrjar á ${word}`;
			case "select-last":
				return `Svarið endar á ${word}`;
		}
	};

	const getAnswer = () => {
		if (selectionState === "select-first")
			return "Smelltu a textann fyrir ofan til ad velja svarid";
		else if (selectionState === "select-last")
			return paragraph.split(" ")[firstWord!] + "...";
		return ` „${paragraph
			.split(" ")
			.slice(firstWord, lastWord! + 1)
			.join(" ")}“`;
	};

	return (
		<GameWrapper type={GameTypes.verifyAnswerLocation}>
			<Outer>
				<TextPrompt>{text}</TextPrompt>
				<p>
					{paragraph.split(" ").map((word, i) => (
						<Word
							key={i}
							title={getToolTipString(word)}
							onClick={() => dispatch(action(i))}
							theme={{
								isSelected:
									i >= firstWord! && i <= lastWord!,
								openRange:
									// check if is selected here as well
									i >= firstWord! &&
									i <= lastWord! &&
									selectionState === "select-last",
							}}
						>{`${word} `}</Word>
					))}
				</p>
				<TextPrompt>
					<i>Svar:</i> {getAnswer()}
				</TextPrompt>
				<ButtonContainer>
					<BaseButton
						label="Svarið er ekki í þessari efnisgrein"
						type="danger"
						onClick={() =>
							dispatch(archiveAnswer(gameRoundId, answerId))
						}
					/>
					<BaseButton
						label="Staðfesta svar"
						type="highlight"
						onClick={() =>
							dispatch(
								submitSpan(
									gameRoundId,
									answerId,
									firstWord ?? -1,
									lastWord ?? -1
								)
							)
						}
						isInactive={selectionState !== "clear-selection"}
					/>
				</ButtonContainer>
			</Outer>
		</GameWrapper>
	);
};
