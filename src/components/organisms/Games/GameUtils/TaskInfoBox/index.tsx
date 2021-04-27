import React from "react";
import { WhiteBoxWithTitle } from "../../../../atoms";
import { IProps } from "./interface";

export const TaskInfoBox = ({ children, title }: IProps) => {
	return <WhiteBoxWithTitle title={title}>{children}</WhiteBoxWithTitle>;
};
