import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { TextPrompt } from "../../../";
import { Outer, Word } from "./styles";
import {
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
} from "../../../../actions";
import { SelectionStates } from "./interface";

export const VerifyAnswerLocationGame = () => {
	const state = useSelector(
		(state: StoreState) => state.verifyAnswerLocation
	);
	const dispatch = useDispatch();

	let selectionState: SelectionStates;
	let { firstWord, lastWord, paragraph } = state;

	let action: (v: number) => any;
	if (firstWord == undefined) {
		action = selectFirstWordIndexInParagraph;
		lastWord = firstWord = -1;
		selectionState = "select-first";
	} else if (lastWord == undefined) {
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
		if (selectionState == "select-first")
			return "Smelltu a textann fyrir ofan til ad velja svarid";
		else if (selectionState == "select-last")
			return paragraph.split(" ")[firstWord!] + "...";
		return ` „${paragraph
			.split(" ")
			.slice(firstWord, lastWord! + 1)
			.join(" ")}“`;
	};

	return (
		<GameWrapper type={GameTypes.verifyAnswerLocation}>
			<Outer>
				<TextPrompt>{state.question}</TextPrompt>
				<p>
					{state.paragraph.split(" ").map((word, i) => (
						<Word
							title={getToolTipString(word)}
							onClick={() => dispatch(action(i))}
							theme={{
								isSelected: i >= firstWord! && i <= lastWord!,
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
			</Outer>
		</GameWrapper>
	);
};
