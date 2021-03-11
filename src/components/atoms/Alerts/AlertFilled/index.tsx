import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";
import { FillColorMap, TextColorMap } from "./utils";

export const FilledAlert = ({ label, type }: IProps) => {
	return (
		<Outer
			theme={{
				color: TextColorMap[type],
				backgroundColor: FillColorMap[type],
			}}
		>
			<span>{label}</span>
		</Outer>
	);
};
