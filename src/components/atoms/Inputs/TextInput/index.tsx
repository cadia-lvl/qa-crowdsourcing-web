import React from "react";
import { TextInputProps } from "../../../../declerations";

export const TextInput = (props: TextInputProps) => {
	return (
		<input
			{...props}
			onChange={(e) => props.onChange(e.target.value)}
			type="text"
		/>
	);
};
