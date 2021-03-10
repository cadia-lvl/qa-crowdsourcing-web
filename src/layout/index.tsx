import React from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import { Outer } from "./styles";

export const LayoutWrapper = ({ children }: IProps) => {
	return (
		<Outer>
			<GlobalStyle />
			<Header />
			{children}
		</Outer>
	);
};
