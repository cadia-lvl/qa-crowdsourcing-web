import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameTypes } from "../../declerations";
import { StoreState } from "../../reducers";
import { IProps } from "./interface";

export const GameWrapper = ({ type, children }: IProps) => {
	const state = useSelector((state: StoreState) => state.game);

	const dispatch = useDispatch();

	if (type !== state.current) return null;
	return <div style={{ position: "relative" }}>{children}</div>;
};
