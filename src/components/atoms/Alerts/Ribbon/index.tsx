import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";
import { FillColorMap, TextColorMap } from "./utils";

const FilledAlert = ({ label, type }: IProps) => {
	if (!label) return null;
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

export default FilledAlert;
