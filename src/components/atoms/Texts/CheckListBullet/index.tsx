import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";

export const CheckListBullet = ({ children, type }: IProps) => {
	return (
		<Outer type={type}>
			<i className="fas fa-check" />
			<i className="fas fa-times" />
			<i className="fas fa-minus" />
			{children}
		</Outer>
	);
};
