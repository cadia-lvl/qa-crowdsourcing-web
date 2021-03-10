import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";

export const WhiteFlexCard = ({ children }: IProps) => {
	return <Outer>{children}</Outer>;
};
