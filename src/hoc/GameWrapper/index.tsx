import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

export const GameWrapper = ({ type, children }: IProps) => {
	const state = useSelector((state: StoreState) => state.game);
	if (state.current !== type) return null;
	return <Fragment>{children}</Fragment>;
};
