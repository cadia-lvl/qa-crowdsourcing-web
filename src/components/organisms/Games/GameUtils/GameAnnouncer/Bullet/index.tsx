import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";

const Bullet = ({ children, type }: IProps) => {
	return (
		<Outer type={type}>
			<i className="fas fa-check" />
			<i className="fas fa-times" />
			<i className="fas fa-minus" />
			{children}
		</Outer>
	);
};

export default Bullet;
