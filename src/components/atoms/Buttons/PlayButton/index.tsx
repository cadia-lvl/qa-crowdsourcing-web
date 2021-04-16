import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles";
import { IProps } from "./interface";

export const PlayButton = ({ children }: IProps) => {
	return (
		<NavLink to="/spila">
			<Button>{children}</Button>
		</NavLink>
	);
};
