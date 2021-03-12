import React from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

export const SubmitButton = ({
	onClick,
	label,
	inactive,
	invertColorScheme,
}: IProps) => {
	return (
		<Button onClick={onClick} theme={{ inactive, invertColorScheme }}>
			{label}
		</Button>
	);
};
