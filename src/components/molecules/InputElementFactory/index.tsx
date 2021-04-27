import React from "react";
import {
	TextInput,
	InputWrapper,
	PasswordInput,
	AuthCodeInput,
} from "../../";
import { InputElementTypes } from "../../../declerations";
import { IProps } from "./interface";

export const InputElementFactory = (props: IProps) => {
	const { onChange, inputField } = props;

	let inputElement;

	if (inputField.hidden) return null;

	switch (inputField.type) {
		case InputElementTypes.text:
			inputElement = (
				<TextInput {...inputField} onChange={onChange} />
			);
			break;
		case InputElementTypes.hidden:
			inputElement = (
				<PasswordInput {...inputField} onChange={onChange} />
			);
			break;
		case InputElementTypes.authCode:
			inputElement = (
				<AuthCodeInput {...inputField} onChange={onChange} />
			);
			break;
		default:
			inputElement = (
				<TextInput {...inputField} onChange={onChange} />
			);
	}
	return (
		<InputWrapper
			label={inputField.label}
			required={inputField.required}
		>
			{inputElement}
		</InputWrapper>
	);
};
