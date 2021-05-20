import React, { useEffect, KeyboardEvent, useState, useCallback } from "react";
import { AuthCodeInputProps } from "../../../../declerations";
import * as Styles from "./styles";
import { Atoms } from "../../../";

export const AuthCodeInput = ({
	length,
	value,
	onChange,
}: AuthCodeInputProps) => {
	const [currDigit, setCurrDigit] = useState(0);

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const ZERO_CODE = 48;
			const NINE_CODE = 57;
			// return if not a digit
			if (event.charCode < ZERO_CODE || event.keyCode > NINE_CODE) return;
			// append digit if it is last digit
			if (currDigit === value.length && currDigit < length) {
				const updated = value + event.key;
				onChange(updated);
			}
			// replace digit if it is not the last one
			if (currDigit < value.length) {
				const charArray = [...new Array(value.length)];
				value.split("").forEach((char, i) => {
					charArray[i] = char;
				});
				charArray[currDigit] = event.key;
				onChange(charArray.join(""));
			}
			// move forward
			setCurrDigit((d) => d + 1);
		},
		[value, currDigit, onChange]
	);

	Atoms.Clipboard.Hooks.usePasteString(onChange, [value, currDigit, onChange]);

	useEffect(() => {
		// @ts-ignore
		window.addEventListener("keypress", handleKeyPress);
		return () => {
			// @ts-ignore
			window.removeEventListener("keypress", handleKeyPress);
		};
	}, [value, currDigit, onChange]);

	useEffect(() => {}, []);

	return (
		<Styles.Outer>
			{[...new Array(length)].map((val, i) => {
				const char = i >= value.length ? " " : value.charAt(i);
				return (
					<Styles.DigitContainer
						current={currDigit === i}
						onClick={() => setCurrDigit(Math.min(i, value.length))}
						onContextMenu={() => setCurrDigit(Math.min(i, value.length))}
						key={i}
					>
						{char}
					</Styles.DigitContainer>
				);
			})}
		</Styles.Outer>
	);
};
