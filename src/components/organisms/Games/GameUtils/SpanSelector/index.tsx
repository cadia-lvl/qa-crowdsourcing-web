import React from "react";
import { TextPrompt } from "../../../..";
import { IProps, SelectionStates } from "./interface";
import { Outer, Word, InstructionWrapper } from "./styles";

export const SpanSelector = ({
	paragraph,
	question,
	firstWord,
	lastWord,
	immutable,
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

	if (immutable) action = () => null;

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

	const userInstructions = [
		"Smella á fyrsta orðið sem myndar svarið",
		"Smella á síðasta orðið sem myndar svarið",
		"Staðfesta að svarið sé rétt",
	];

	const getStage = () => {
		if (selectionState === "select-first") return 0;
		else if (selectionState === "select-last") return 1;
		return 2;
	};

	return (
		<Outer>
			<TextPrompt>{question}</TextPrompt>
			<p>
				{paragraph.split(" ").map((word, i) => (
					<React.Fragment>
						{i == firstWord ? <Word>„</Word> : null}
						<Word
							title={getToolTipString(word)}
							onClick={() => action(i)}
							theme={{
								isSelected:
									i >= firstWord! && i <= lastWord!,
								openRange:
									// check if is selected here as well
									i >= firstWord! &&
									i <= lastWord! &&
									selectionState === "select-last",
							}}
						>{`${
							/**
							 * This expression in the JSX returns just the
							 * word, the logic here is checking if it is the
							 * last word then we want to trim any space
							 * and remove punctuation
							 */
							i == lastWord
								? word.trim().replace(/[,\.:;]/g, "")
								: word + " "
						}`}</Word>
						{
							// checks for lastword and adds quotation mark
							i == lastWord ? <Word>“ </Word> : null
						}
					</React.Fragment>
				))}
			</p>
			{immutable ? null : (
				<div>
					<TextPrompt>
						<i>Þú þarft að:</i>
					</TextPrompt>
					{userInstructions.map((instr, i) =>
						i <= getStage() ? (
							<InstructionWrapper
								theme={{ isDone: getStage() > i }}
							>
								<TextPrompt>
									<i>{`${i + 1}. `}</i> {instr}
								</TextPrompt>
							</InstructionWrapper>
						) : null
					)}
				</div>
			)}
		</Outer>
	);
};
