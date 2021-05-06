import React from "react";
import { AlertsContainer, QuestionInput } from "./styles";
import { IProps } from "./interface";
import { FilledAlert } from "../../../..";
/**
 * This is a stateless component that contains
 * the UI related to writing a question in the
 * writequestiongame round
 */
export const WriteQuestion = ({
	error,
	isYesNoQuestion,
	onChange,
	value,
	placeholder,
}: IProps) => (
	<React.Fragment>
		<AlertsContainer>
			{!!error ? <FilledAlert label={error} type="danger" /> : null}
			{isYesNoQuestion ? (
				<FilledAlert
					label="Búðu til Já/nei spurningu"
					type="success"
				/>
			) : null}
		</AlertsContainer>
		<QuestionInput
			type="text"
			placeholder={
				placeholder ??
				`Spurðu spurningar sem hægt er að finna svar við`
			}
			onChange={(e) => onChange?.(e.target.value)}
			value={value}
		/>
	</React.Fragment>
);