import React from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";

export const LayoutWrapper = ({ children }: IProps) => {
	return (
		<div>
			<GlobalStyle />
			{children}
		</div>
	);
};
