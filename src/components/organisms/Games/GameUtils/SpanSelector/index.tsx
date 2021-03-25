import React from "react";
import { TextPrompt } from "../../../..";
import { IProps, SelectionStates } from "./interface";
import { Outer, Word } from "./styles";

export const SpanSelector = ({
	paragraph,
	question,
	firstWord,
	lastWord,
	onFirstWordChange,
	onLastWordChange,
	onClearRange,
}: IProps) => {
	let selectionState: SelectionStates;

	let action: (v: number) => any;
	if (firstWord == undefined) {
		action = onFirstWordChange;
		lastWord = firstWord = -1;
		selectionState = "select-first";
	} else if (lastWord == undefined) {
		action = onLastWordChange;
		lastWord = firstWord;
		selectionState = "select-last";
	} else {
		action = onClearRange;
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
		<Outer>
			<TextPrompt>{question}</TextPrompt>
			<p>
				{paragraph.split(" ").map((word, i) => (
					<Word
						title={getToolTipString(word)}
						onClick={() => action(i)}
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
	);
};
