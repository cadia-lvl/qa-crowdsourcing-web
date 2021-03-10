import React from "react";
import { ButtonWithLabelProps } from "../interface";
import { Button } from "./styles";

export const SubmitButton = ({ onClick, label }: ButtonWithLabelProps) => {
	return <Button onClick={onClick}>{label}</Button>;
};
