import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

export const AllowOnlyPage = ({ userTypes, children, fallbackUrl }: IProps) => {
	const state = useSelector((state: StoreState) => state.auth);
	if (!userTypes.includes(state.type)) return <Redirect to={fallbackUrl} />;
	return <React.Fragment>{children}</React.Fragment>;
};
