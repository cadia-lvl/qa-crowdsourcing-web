import React from "react";
import {
	Outer,
	TextBoxContainer,
	LogInBoxContainer,
	TextBoxTitle,
} from "./styles";

export const FrontPage = () => {
	return (
		<Outer>
			<TextBoxContainer>
				<TextBoxTitle>Lorem ipsum!</TextBoxTitle>
			</TextBoxContainer>
			<LogInBoxContainer></LogInBoxContainer>
		</Outer>
	);
};
