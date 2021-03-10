import React from "react";
import { HiddenInputProps } from "../../../../declerations";

export const PasswordInput = (props: HiddenInputProps) => {
	return (
		<input
			{...props}
			onChange={(e) => props.onChange(e.target.value)}
			type="password"
		/>
	);
};
