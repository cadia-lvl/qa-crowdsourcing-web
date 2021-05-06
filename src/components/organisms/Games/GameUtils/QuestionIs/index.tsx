import React from "react";
import { IProps } from "./interface";
import { Paragraph } from "./styles";

export const QuestionIs = ({ question }: IProps) => {
	return (
		<Paragraph>
			Spurningin er{" "}
			<span className="query">
				„{question.charAt(0).toLocaleLowerCase()}
				{question.substring(1)}“
			</span>
		</Paragraph>
	);
};
