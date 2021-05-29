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
					label="Spurðu spurningu sem hægt er að svara með JÁ / NEI"
					type="success"
				/>
			) : null}
		</AlertsContainer>
		<QuestionInput
			placeholder={
				placeholder ??
				`Spurðu ${
					isYesNoQuestion ? "JÁ / NEI " : ""
				}spurningu sem hægt er að finna svar við`
			}
			onChange={(e) => onChange?.(e.target.value)}
			value={value}
		/>
	</React.Fragment>
);
