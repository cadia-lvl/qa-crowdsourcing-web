import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

export const RestrictedPage = ({
	userTypes,
	children,
	fallbackUrl,
}: IProps) => {
	console.log(4);
	const state = useSelector((state: StoreState) => state.auth);
	if (userTypes.includes(state.type)) {
	}
	return <Redirect to="/innskra" />;
	return <React.Fragment>{children}</React.Fragment>;
};
