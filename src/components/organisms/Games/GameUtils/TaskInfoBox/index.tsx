import React from "react";
import { Outer, TitleBox } from "./styles";
import { IProps } from "./interface";

export const TaskInfoBox = ({ children, title }: IProps) => {
	return (
		<Outer>
			<TitleBox>
				<h1 className="italic">{title ?? "title missing"}</h1>
			</TitleBox>
			{children}
		</Outer>
	);
};
