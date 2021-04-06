import React from "react";
import { Outer, TitleContainer } from "./styles";
import { IProps } from "./interface";

export const TaskInfoBox = ({ children, title }: IProps) => {
	return (
		<Outer>
			<TitleContainer>{title ?? "title missing"}</TitleContainer>
			{children}
		</Outer>
	);
};
