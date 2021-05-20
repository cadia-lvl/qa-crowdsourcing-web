import React from "react";
import { AlertsContainer, QuestionInput } from "./styles";
import { IProps } from "./interface";
import { Atoms } from "../../../..";
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
			{!!error ? (
				<Atoms.Alerts.Ribbon label={error} type="danger" />
			) : null}
			{isYesNoQuestion ? (
				<Atoms.Alerts.Ribbon
					label="Búðu til Já/nei spurningu"
					type="success"
				/>
			) : null}
		</AlertsContainer>
		<QuestionInput
			placeholder={
				placeholder ??
				`Spurðu spurningar sem hægt er að finna svar við`
			}
			onChange={(e) => onChange?.(e.target.value)}
			value={value}
		/>
	</React.Fragment>
);
