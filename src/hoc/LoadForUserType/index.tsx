import React from "react";
import { IProps } from "./interface";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

export const LoadForUserType = ({ render }: IProps) => {
	const state = useSelector((state: StoreState) => state.auth);
	return <React.Fragment>{render(state.type)}</React.Fragment>;
};
