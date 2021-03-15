import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";
import { FillColorMap, TextColorMap } from "./utils";

export const BaseButton = ({ label, onClick, type, isInactive }: IProps) => {
	onClick = isInactive ? () => null : onClick;
	return (
		<Button
			onClick={onClick}
			theme={{
				backgroundColor: TextColorMap[type],
				color: FillColorMap[type],
				isInactive,
			}}
		>
			{label}
		</Button>
	);
};
