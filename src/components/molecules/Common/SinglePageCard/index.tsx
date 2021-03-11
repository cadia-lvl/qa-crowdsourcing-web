import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";
import { WhiteFlexCard } from "../../../";

export const SinglePageCard = ({ children }: IProps) => {
	return (
		<Outer>
			<WhiteFlexCard>{children}</WhiteFlexCard>
		</Outer>
	);
};
