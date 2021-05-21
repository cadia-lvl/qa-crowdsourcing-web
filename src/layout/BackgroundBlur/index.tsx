import React from "react";
import { IProps } from "./interface";
import * as Styles from "./styles";

const BackgroundBlur = ({ children }: IProps) => {
	return (
		<Styles.Outer className="blur-out-anim">{children}</Styles.Outer>
	);
};

export default BackgroundBlur;
