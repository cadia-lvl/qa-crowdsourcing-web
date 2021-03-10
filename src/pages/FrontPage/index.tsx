import React from "react";
import {
	Outer,
	TextBoxContainer,
	LogInBoxContainer,
	TextBoxTitle,
	TextBoxPara,
} from "./styles";
import { form } from "./form";
import { FormGenerator } from "../../components";

export const FrontPage = () => {
	return (
		<Outer>
			<TextBoxContainer>
				<TextBoxTitle>Spurðu mig spurninga!</TextBoxTitle>
				<TextBoxPara>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source.
				</TextBoxPara>
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
