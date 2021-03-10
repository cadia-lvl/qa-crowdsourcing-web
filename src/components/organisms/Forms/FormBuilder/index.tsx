import React, { useState } from "react";
import { IProps } from "../formInterface";
import { InputElementFactory, SubmitButton } from "../../..";
import { Form } from "./styles";

export const FormBuilder = <T extends {}, K = {}>({
	form,
	onSubmit,
	buttonLabel,
	url,
}: IProps<T, K>) => {
	const [formObject, setFormObject] = useState(form);
	const [isLoading, setIsLoading] = useState(false);

	const onChange = (accessor: keyof K, newValue: any) => {
		const element = formObject[accessor];
		element.value = newValue;
		const updatedForm = { ...formObject };
		updatedForm[accessor] = element;
		setFormObject(updatedForm);
	};

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			{Object.keys(formObject).map((key: any) => (
				<InputElementFactory
					inputField={{
						// @ts-ignore
						...form[key],
					}}
					onChange={(value) => onChange(key, value)}
				/>
			))}
			<SubmitButton onClick={() => null} label={buttonLabel} />
		</Form>
	);
};
