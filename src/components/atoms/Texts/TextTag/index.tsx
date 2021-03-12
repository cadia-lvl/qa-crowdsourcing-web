import React from "react";
import { IProps } from "./interface";
import { WordBox } from "./styles";

export const TextTag = ({ children }: IProps) => {
	return <WordBox>{children}</WordBox>;
};
