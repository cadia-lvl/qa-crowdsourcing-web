import React from "react";
import { TextInputProps } from "../../../../declerations";

const TextBox = (props: TextInputProps) => {
	return (
		<textarea
			{...props}
			onChange={(e) => props.onChange(e.target.value)}
		/>
	);
};
