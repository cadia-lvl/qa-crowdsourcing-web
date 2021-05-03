import React from "react";
import { IProps } from "./interface";

export const IntroductionTutorialHOC = ({ children }: IProps) => {
	// TODO: replace hard coded false value with logic based on data from api
	if (false) return <React.Fragment>{children}</React.Fragment>;
	return <div>5</div>;
};
