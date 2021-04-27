import React from "react";
import { AuthCodeInputProps } from "../../../../declerations";
import { Outer, DigitContainer } from "./styles";

export const AuthCodeInput = ({}: AuthCodeInputProps) => {
	return (
		<Outer>
			<DigitContainer>1</DigitContainer>
			<DigitContainer>2</DigitContainer>
			<DigitContainer>3</DigitContainer>
			<DigitContainer>4</DigitContainer>
			<DigitContainer>5</DigitContainer>
			<DigitContainer>6</DigitContainer>
		</Outer>
	);
};
