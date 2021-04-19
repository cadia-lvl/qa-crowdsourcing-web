import React from "react";
import { IProps } from "./interface";
import { Outer, ChildWrapper } from "./styles";

export const Explain = ({ children }: IProps) => {
	return (
		<Outer>
			<ChildWrapper></ChildWrapper>
			{children}
		</Outer>
	);
};
