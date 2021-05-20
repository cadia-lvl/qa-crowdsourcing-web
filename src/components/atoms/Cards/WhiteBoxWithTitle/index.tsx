import React from "react";
import { Outer, TitleBox } from "./styles";
import { IProps } from "./interface";

export const WhiteBoxWithTitle = ({ children, title }: IProps) => {
	return (
		<Outer className="border">
			<TitleBox>
				<h1 className="italic">{title ?? "title missing"}</h1>
			</TitleBox>
			{children}
		</Outer>
	);
};
