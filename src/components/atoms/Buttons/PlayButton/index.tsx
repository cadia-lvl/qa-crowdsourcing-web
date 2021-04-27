import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";

export const PlayButton = ({ children, onClick }: IProps) => {
	onClick = onClick == undefined ? () => null : onClick;
	return <Button onClick={onClick}>{children}</Button>;
};
