import React from "react";
import {
	Outer,
	TextBoxContainer,
	LogInBoxContainer,
	TextBoxTitle,
} from "./styles";
import { form } from "./form";
import { FormGenerator } from "../../components";

export const FrontPage = () => {
	return (
		<Outer>
			<TextBoxContainer>
				<TextBoxTitle>Lorem ipsum!</TextBoxTitle>
			</TextBoxContainer>
			<LogInBoxContainer>
				<FormGenerator
					form={form}
					url=""
					buttonLabel="Búa til aðgang"
					onSubmit={() => null}
				/>
			</LogInBoxContainer>
		</Outer>
	);
};
