import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../declerations";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

export const GameWrapper = ({ type, children }: IProps) => {
	const state = useSelector((state: StoreState) => state.game);

	const dispatch = useDispatch();

	if (state.current !== type) return null;
	return (
		<div style={{ position: "relative", zIndex: 0 }}>{children}</div>
	);
};
