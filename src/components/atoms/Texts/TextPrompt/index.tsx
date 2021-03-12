import React from "react";
import { IProps } from "./interface";
import { Prompt } from "./styles";

export const TextPrompt = ({ children }: IProps) => {
	return <Prompt>{children}</Prompt>;
};
