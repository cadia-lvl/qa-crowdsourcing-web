import React from "react";
import { ButtonWithLabelProps } from "../interface";

export const SubmitButton = ({ onClick, label }: ButtonWithLabelProps) => {
	return <button onClick={onClick}>{label}</button>;
};
