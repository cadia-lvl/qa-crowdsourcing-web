import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";

export const PlayButton = ({ children, onClick }: IProps) => (
	<Button onClick={onClick} className="shine-wrap">
		{children}
	</Button>
);
