import React from "react";
import { IProps } from "./interface";
import RoutinesChecklist from "./RoutinesChecklist";

export const IntroductionTutorialHOC = ({ children }: IProps) => {
	// TODO: replace hard coded false value with logic based on data from api
	if (false) return <React.Fragment>{children}</React.Fragment>;
	return (
		<div>
			<RoutinesChecklist />
		</div>
	);
};
