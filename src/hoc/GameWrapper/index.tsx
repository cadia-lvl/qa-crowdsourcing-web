import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { GameTypes } from "../../declerations";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

export const GameWrapper = ({ type, children }: IProps) => {
	const state = useSelector((state: StoreState) => state.game);
	if (GameTypes.completed !== type) return null;
	return (
		<div style={{ position: "relative", zIndex: 0 }}>{children}</div>
	);
};
