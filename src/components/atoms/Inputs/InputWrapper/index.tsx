import React from "react";
import { IProps } from "./interface";
import { Outer, Asterisk } from "./styles";

export const InputWrapper = ({ children, label, required }: IProps) => {
	return (
		<Outer>
			<label>
				{label} <Asterisk>{required ? "*" : null}</Asterisk>
			</label>
			{children}
		</Outer>
	);
};
