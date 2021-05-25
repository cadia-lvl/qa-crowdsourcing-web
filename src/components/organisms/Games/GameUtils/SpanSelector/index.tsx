import React, { useState, useEffect } from "react";
import { ClickableSpan, Atoms } from "../../../..";
import { IProps, SelectionStates } from "./interface";
import * as Styles from "./styles";

export const SpanSelector = ({
	paragraph,
	firstWord,
	lastWord,
	immutable,
	onFirstWordChange,
	onLastWordChange,
	onClearRange,
	onComplete,
}: IProps) => {
	let selectionState: SelectionStates;

	let action: ((v: number) => any) | undefined;
	if (firstWord === undefined) {
		action = onFirstWordChange;
		lastWord = firstWord = -1;
		selectionState = "select-first";
	} else if (lastWord === undefined) {
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

	const [areInstructionsLoading, setAreInstructionsLoading] = useState(false);

	const userInstructions = [
		["Smelltu á fyrsta stafinn sem myndar svarið."],
		["Smelltu á síðasta stafinn sem myndar svarið."],
		[
			"Smelltu á textann til þess að velja aftur.",
			"Smelltu á „Staðfesta“ til þess að staðfesta valið.",
		],
	];

	const getStage = () => {
		if (selectionState === "select-first") return 0;
		else if (selectionState === "select-last") return 1;
		return 2;
	};

	useEffect(() => {
		const LOADING_TIMEOUT = 350;
		if (areInstructionsLoading) {
			const t = setTimeout(() => setAreInstructionsLoading(false), LOADING_TIMEOUT);
			return () => {
				// cleanup
				clearTimeout(t);
			};
		}
	}, [areInstructionsLoading]);

	useEffect(() => {
		setAreInstructionsLoading(true);
	}, [selectionState]);

	useEffect(() => {
		if (getStage() === 2 && onComplete !== undefined) onComplete();
	}, [getStage()]);

	return (
		<Styles.Outer>
			<Styles.Inner>
				<p>
					{paragraph.split(" ").map((word, i) => (
						<React.Fragment>
							{i === firstWord ? <Styles.Word>„</Styles.Word> : null}
							<ClickableSpan onClick={() => action?.(i)}>
								<Styles.Word
									title={getToolTipString(word)}
									theme={{
										isSelected: i >= firstWord! && i <= lastWord!,
									}}
								>{`${
									/**
									 * This expression in the JSX returns just the
									 * word, the logic here is checking if it is the
									 * last word then we want to trim any space
									 * and remove punctuation
									 */
									i === lastWord || i === firstWord ? word.trim() : word + " "
								}`}</Styles.Word>
							</ClickableSpan>
							{
								// checks for lastword and adds quotation mark
								i === lastWord ? <Styles.Word>“ </Styles.Word> : null
							}
						</React.Fragment>
					))}
				</p>
			</Styles.Inner>
			{immutable ? null : areInstructionsLoading ? (
				<Atoms.Loaders.Flex size={40} />
			) : (
				userInstructions.map((instructions, i) =>
					i === getStage() ? (
						<Styles.InstructionWrapper>
							{instructions.map((inst) => (
								<p>
									{" "}
									<i className="fas fa-info" />
									{inst}
								</p>
							))}
						</Styles.InstructionWrapper>
					) : null
				)
			)}
		</Styles.Outer>
	);
};
