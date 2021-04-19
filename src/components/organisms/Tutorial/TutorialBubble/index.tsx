import React from "react";
import { IProps } from "./interface";
import { Outer, ArrowDown } from "./styles";

const TutorialBubble = ({ children }: IProps) => {
	return (
		<Outer>
			{children}
			<ArrowDown />
		</Outer>
	);
};

export default TutorialBubble;
