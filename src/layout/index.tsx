import React from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";

export const LayoutWrapper = ({ children }: IProps) => {
	return (
		<div>
			<GlobalStyle />
			<Header />
			{children}
		</div>
	);
};
