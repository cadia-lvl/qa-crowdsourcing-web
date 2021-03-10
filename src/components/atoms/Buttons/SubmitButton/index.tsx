import React from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

export const SubmitButton = ({ onClick, label, inactive }: IProps) => {
	return (
		<Button onClick={onClick} theme={{ inactive }}>
			{label}
		</Button>
	);
};
